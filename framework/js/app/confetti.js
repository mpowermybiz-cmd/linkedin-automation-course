/**
 * Course completion celebration — confetti + modal overlay.
 * Fires exactly once, ever — persisted in localStorage so refresh
 * never re-triggers it after the student has already seen it.
 */

const LS_KEY = 'mpbiz-course-completion-shown';
let fired = false;

// ── Confetti canvas ───────────────────────────────────────────────────────────
function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:10000;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    // MPowerMyBiz palette + gold/white bursts
    const COLORS = ['#CC0000', '#FF4444', '#FFE500', '#FFFFFF', '#FF8C00', '#FF1493', '#1A1A1A', '#FF69B4'];
    const PARTICLE_COUNT = 180;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * -0.5 - 20,
            w: 6 + Math.random() * 8,
            h: 4 + Math.random() * 6,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.15,
            vx: (Math.random() - 0.5) * 4,
            vy: 2.5 + Math.random() * 4,
            opacity: 1,
            shape: Math.random() > 0.5 ? 'rect' : 'circle',
        });
    }

    let frame = 0;
    const MAX_FRAMES = 220;

    function tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        frame++;

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.08; // gravity
            p.rotation += p.rotSpeed;
            if (frame > MAX_FRAMES * 0.6) {
                p.opacity = Math.max(0, p.opacity - 0.018);
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;

            if (p.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            }
            ctx.restore();
        }

        if (frame < MAX_FRAMES) {
            requestAnimationFrame(tick);
        } else {
            canvas.remove();
        }
    }

    requestAnimationFrame(tick);
}

// ── Overlay modal ─────────────────────────────────────────────────────────────
function showOverlay() {
    const overlay = document.getElementById('completion-overlay');
    const closeBtn = document.getElementById('completion-close-btn');
    if (!overlay) return;

    overlay.hidden = false;

    const dismiss = () => {
        overlay.hidden = true;
        closeBtn?.removeEventListener('click', dismiss);
        overlay.removeEventListener('click', outsideClick);
    };

    const outsideClick = (e) => {
        if (e.target === overlay) dismiss();
    };

    closeBtn?.addEventListener('click', dismiss);
    overlay.addEventListener('click', outsideClick);
}

// ── Init ──────────────────────────────────────────────────────────────────────
export function initConfetti() {
    // If already celebrated in a previous session, never fire again
    if (localStorage.getItem(LS_KEY)) {
        fired = true;
    }

    document.addEventListener('course-complete', () => {
        if (fired) return;
        fired = true;
        localStorage.setItem(LS_KEY, '1');

        // Small delay so the progress bar finishes animating first
        setTimeout(() => {
            launchConfetti();
            showOverlay();
        }, 400);
    });
}
