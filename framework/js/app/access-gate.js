/**
 * Access Gate — email verification screen shown before course content loads.
 * Checks the buyer's email against Supabase via a Netlify function.
 *
 * Flow:
 *  1. On load: if email is cached in localStorage → silently re-verify in bg → let course load
 *  2. If no cache: show gate overlay, pause course init until verified
 *  3. On success: cache email, fade out gate, course loads
 */

const GATE_KEY        = 'mpbiz-course-access';
const VERIFY_ENDPOINT = '/.netlify/functions/verify-email';

/**
 * Call this at the top of initializeCourseApplication().
 * Returns a Promise that:
 *  - Resolves immediately if email is already cached (course loads right away)
 *  - Otherwise shows the gate and resolves only after the user verifies their email
 */
export function initAccessGate() {
    const cached = localStorage.getItem(GATE_KEY);
    if (cached) {
        // Valid cached access — let course load, quietly re-check in background
        silentReVerify(cached);
        return Promise.resolve();
    }

    // No cache — show gate, pause course init until access is confirmed
    return new Promise((resolve) => {
        showGate(resolve);
    });
}

// ── Background re-verification ─────────────────────────────────────────────────
function silentReVerify(email) {
    fetch(VERIFY_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
    })
        .then(r => r.json())
        .then(({ access }) => {
            if (!access) {
                // Email was revoked (e.g. refund) — clear cache, gate shows next visit
                localStorage.removeItem(GATE_KEY);
            }
        })
        .catch(() => {
            // Network error → fail open so valid users aren't blocked
        });
}

// ── Gate overlay ───────────────────────────────────────────────────────────────
function showGate(onSuccess) {
    document.body.style.overflow = 'hidden';

    const gate = document.createElement('div');
    gate.id = 'access-gate';
    gate.style.cssText = [
        'position:fixed',
        'inset:0',
        'z-index:99999',
        'background:#F5F5F5',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif',
    ].join(';');

    gate.innerHTML = `
        <div id="ag-card" style="
            background:#FFFFFF;border-radius:24px;padding:44px 42px 38px;
            max-width:460px;width:90%;text-align:center;
            box-shadow:0 24px 80px rgba(0,0,0,0.12);border:1px solid #EEEEEE;
        ">
            <div style="font-size:2.6rem;margin-bottom:6px;">🎓</div>
            <div style="font-size:0.62rem;font-weight:800;letter-spacing:2.5px;
                color:#B50000;text-transform:uppercase;margin-bottom:10px;">
                MPowerMyBiz Academy
            </div>
            <div style="font-size:1.38rem;font-weight:900;color:#1A1A1A;
                line-height:1.3;margin-bottom:10px;letter-spacing:-0.02em;">
                Welcome back! 👋
            </div>
            <div style="font-size:0.9rem;color:#666;line-height:1.65;margin-bottom:26px;">
                Enter the email you used to purchase the course<br>to unlock your access.
            </div>
            <input id="ag-email" type="email" placeholder="you@example.com"
                autocomplete="email" style="
                width:100%;box-sizing:border-box;padding:14px 18px;
                border:2px solid #E8E8E8;border-radius:12px;
                font-size:1rem;color:#1A1A1A;outline:none;
                transition:border-color 0.2s;margin-bottom:10px;
                font-family:inherit;
            " />
            <div id="ag-error" style="
                font-size:0.82rem;color:#B50000;margin-bottom:10px;
                min-height:20px;display:none;line-height:1.5;
            "></div>
            <button id="ag-submit" type="button" style="
                width:100%;background:#B50000;color:#fff;border:none;
                border-radius:50px;padding:14px 36px;
                font-size:0.97rem;font-weight:800;cursor:pointer;
                letter-spacing:0.4px;transition:background 0.2s,transform 0.15s;
                font-family:inherit;
            ">Access My Course →</button>
            <div style="margin-top:18px;font-size:0.75rem;color:#AAA;line-height:1.6;">
                Don't have a copy yet?&nbsp;
                <a href="https://payhip.com/b/BrEjz" target="_blank" rel="noopener"
                    style="color:#B50000;font-weight:700;text-decoration:none;">
                    Get it here →
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(gate);

    const emailInput = gate.querySelector('#ag-email');
    const submitBtn  = gate.querySelector('#ag-submit');
    const errorDiv   = gate.querySelector('#ag-error');

    // Focus the input on show
    setTimeout(() => emailInput.focus(), 80);

    // Button hover
    submitBtn.addEventListener('mouseover', () => {
        submitBtn.style.background  = '#CC0000';
        submitBtn.style.transform   = 'scale(1.02)';
    });
    submitBtn.addEventListener('mouseout', () => {
        submitBtn.style.background  = '#B50000';
        submitBtn.style.transform   = 'scale(1)';
    });

    // Input focus ring
    emailInput.addEventListener('focus', () => { emailInput.style.borderColor = '#B50000'; });
    emailInput.addEventListener('blur',  () => { emailInput.style.borderColor = '#E8E8E8'; });

    // Enter key submits
    emailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitBtn.click();
    });

    // Clear error on new input
    emailInput.addEventListener('input', () => { errorDiv.style.display = 'none'; });

    // Submit handler
    submitBtn.addEventListener('click', async () => {
        const email = emailInput.value.trim().toLowerCase();

        if (!email || !email.includes('@') || !email.includes('.')) {
            showError(errorDiv, 'Please enter a valid email address.');
            return;
        }

        setLoading(submitBtn, true);
        errorDiv.style.display = 'none';

        try {
            const res  = await fetch(VERIFY_ENDPOINT, {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify({ email }),
            });
            const { access } = await res.json();

            if (access) {
                localStorage.setItem(GATE_KEY, email);
                grantAccess(gate, onSuccess);
            } else {
                showError(errorDiv,
                    'We couldn\'t find a purchase for that email. ' +
                    'Check your Payhip confirmation and try again.'
                );
                setLoading(submitBtn, false);
            }
        } catch {
            showError(errorDiv, 'Connection error — please try again.');
            setLoading(submitBtn, false);
        }
    });
}

function showError(div, msg) {
    div.textContent   = msg;
    div.style.display = 'block';
}

function setLoading(btn, loading) {
    btn.disabled     = loading;
    btn.textContent  = loading ? 'Checking...' : 'Access My Course →';
    btn.style.opacity = loading ? '0.7' : '1';
}

function grantAccess(gate, onSuccess) {
    document.body.style.overflow = '';
    gate.style.transition        = 'opacity 0.4s ease';
    gate.style.opacity           = '0';
    setTimeout(() => {
        gate.remove();
        onSuccess();
    }, 400);
}
