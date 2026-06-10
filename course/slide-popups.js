/**
 * Slide-entry pop-ups for MPowerMyBiz Course
 * ─────────────────────────────────────────────────────────────────────────────
 * Listens for navigation:changed events and shows custom pop-ups per slide.
 *
 * Registered triggers:
 *   03-tools-overview    → 🐱 Ginger cat "Let's get you set up!" hype card
 *   05-graphic-anatomy   → ✅ Quiz checkpoint — confirm Claude setup complete
 */

import { eventBus }  from '../framework/js/core/event-bus.js';
import { goToSlide } from '../framework/js/navigation/NavigationActions.js';

// Track which popups have already fired this session (show only once)
const _shown = new Set();

// ── Shared overlay helpers ────────────────────────────────────────────────────
function createOverlay(id) {
    // Remove any old instance
    document.getElementById(id)?.remove();

    const overlay = document.createElement('div');
    overlay.id = id;
    overlay.style.cssText = `
        position:fixed;inset:0;z-index:10500;
        display:flex;align-items:center;justify-content:center;
        background:rgba(0,0,0,0.6);backdrop-filter:blur(5px);
        animation:sp-overlay-in 0.25s ease-out;
    `;
    injectKeyframes();
    document.body.appendChild(overlay);
    return overlay;
}

function dismissOverlay(overlay) {
    overlay.style.animation = 'sp-overlay-out 0.2s ease-in forwards';
    setTimeout(() => overlay.remove(), 220);
}

function injectKeyframes() {
    if (document.getElementById('sp-keyframes')) return;
    const s = document.createElement('style');
    s.id = 'sp-keyframes';
    s.textContent = `
        @keyframes sp-overlay-in  { from{opacity:0} to{opacity:1} }
        @keyframes sp-overlay-out { from{opacity:1} to{opacity:0} }
        @keyframes sp-card-pop    { from{transform:scale(0.55) translateY(30px);opacity:0}
                                    to  {transform:scale(1)    translateY(0);   opacity:1} }
        @keyframes sp-cat-wobble  { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
        @keyframes sp-cat-blink   { 0%,90%,100%{transform:scaleY(1)} 95%{transform:scaleY(0.1)} }
        @keyframes sp-bounce      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
    `;
    document.head.appendChild(s);
}

// ── CSS Ginger Cat illustration ───────────────────────────────────────────────
function gingerCatHTML() {
    return `
    <div style="position:relative;width:130px;height:130px;margin:0 auto 8px;animation:sp-cat-wobble 2.4s ease-in-out infinite;">

      <!-- Ears -->
      <div style="position:absolute;top:8px;left:14px;width:0;height:0;
           border-left:16px solid transparent;border-right:16px solid transparent;
           border-bottom:26px solid #E07828;"></div>
      <div style="position:absolute;top:8px;right:14px;width:0;height:0;
           border-left:16px solid transparent;border-right:16px solid transparent;
           border-bottom:26px solid #E07828;"></div>
      <!-- Ear inner -->
      <div style="position:absolute;top:16px;left:22px;width:0;height:0;
           border-left:8px solid transparent;border-right:8px solid transparent;
           border-bottom:14px solid #F5A458;"></div>
      <div style="position:absolute;top:16px;right:22px;width:0;height:0;
           border-left:8px solid transparent;border-right:8px solid transparent;
           border-bottom:14px solid #F5A458;"></div>

      <!-- Head -->
      <div style="position:absolute;top:22px;left:10px;right:10px;bottom:18px;
           background:#E07828;border-radius:50%;"></div>

      <!-- Forehead stripes -->
      <div style="position:absolute;top:32px;left:48px;width:4px;height:14px;
           background:#C06010;border-radius:2px;transform:rotate(-8deg);"></div>
      <div style="position:absolute;top:30px;left:57px;width:4px;height:16px;
           background:#C06010;border-radius:2px;"></div>
      <div style="position:absolute;top:32px;left:66px;width:4px;height:14px;
           background:#C06010;border-radius:2px;transform:rotate(8deg);"></div>

      <!-- Glasses frame -->
      <div style="position:absolute;top:58px;left:22px;right:22px;height:2px;background:#222;border-radius:1px;"></div>
      <!-- Left lens -->
      <div style="position:absolute;top:52px;left:16px;width:34px;height:26px;
           border:3px solid #222;border-radius:8px;background:rgba(180,220,255,0.25);
           animation:sp-cat-blink 4s ease-in-out infinite;"></div>
      <!-- Right lens -->
      <div style="position:absolute;top:52px;right:16px;width:34px;height:26px;
           border:3px solid #222;border-radius:8px;background:rgba(180,220,255,0.25);
           animation:sp-cat-blink 4s ease-in-out 0.15s infinite;"></div>
      <!-- Eye pupils -->
      <div style="position:absolute;top:60px;left:28px;width:10px;height:12px;
           background:#1A1A1A;border-radius:50%;"></div>
      <div style="position:absolute;top:60px;right:28px;width:10px;height:12px;
           background:#1A1A1A;border-radius:50%;"></div>
      <!-- Eye shine -->
      <div style="position:absolute;top:61px;left:31px;width:4px;height:4px;background:#fff;border-radius:50%;"></div>
      <div style="position:absolute;top:61px;right:31px;width:4px;height:4px;background:#fff;border-radius:50%;"></div>

      <!-- Nose -->
      <div style="position:absolute;top:80px;left:58px;width:14px;height:10px;
           background:#D05050;border-radius:50%;"></div>

      <!-- Mouth -->
      <div style="position:absolute;top:90px;left:48px;width:12px;height:6px;
           border-bottom:3px solid #C06010;border-left:3px solid #C06010;border-radius:0 0 0 6px;"></div>
      <div style="position:absolute;top:90px;left:70px;width:12px;height:6px;
           border-bottom:3px solid #C06010;border-right:3px solid #C06010;border-radius:0 0 6px 0;"></div>

      <!-- Whiskers left -->
      <div style="position:absolute;top:84px;left:0;width:38px;height:2px;background:#C06010;border-radius:1px;transform:rotate(-8deg);"></div>
      <div style="position:absolute;top:90px;left:0;width:36px;height:2px;background:#C06010;border-radius:1px;"></div>
      <!-- Whiskers right -->
      <div style="position:absolute;top:84px;right:0;width:38px;height:2px;background:#C06010;border-radius:1px;transform:rotate(8deg);"></div>
      <div style="position:absolute;top:90px;right:0;width:36px;height:2px;background:#C06010;border-radius:1px;"></div>

      <!-- Laptop -->
      <div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);
           font-size:2rem;animation:sp-bounce 1.8s ease-in-out infinite;">💻</div>
    </div>`;
}

// ── POP-UP 1 — Ginger Cat Hype Card (Slide 3: tools-overview) ────────────────
function showCatPopup() {
    const overlay = createOverlay('sp-cat-overlay');

    overlay.innerHTML = `
        <div style="
            background:#1A1A1A;border-radius:24px;padding:36px 40px 32px;
            max-width:420px;width:90%;text-align:center;
            box-shadow:0 32px 80px rgba(0,0,0,0.5);
            border:1px solid #2A2A2A;
            animation:sp-card-pop 0.4s cubic-bezier(0.34,1.56,0.64,1);
        ">
            ${gingerCatHTML()}

            <div style="font-size:0.68rem;font-weight:800;letter-spacing:2px;color:#B50000;
                        text-transform:uppercase;margin-bottom:10px;">
                MODULE 2 — TOOLS SETUP
            </div>

            <div style="font-size:1.55rem;font-weight:900;color:#FFFFFF;
                        line-height:1.25;margin-bottom:10px;letter-spacing:-0.02em;">
                Time to get you set up! 🎉
            </div>

            <div style="font-size:0.95rem;color:#888888;line-height:1.7;margin-bottom:24px;">
                We're about to connect Claude Code, Google Drive, and Zapier.<br>
                Follow each step in order — <strong style="color:#CCCCCC;">you only do this once!</strong>
            </div>

            <button id="sp-cat-go" style="
                background:#B50000;color:#fff;border:none;border-radius:50px;
                padding:14px 40px;font-size:1rem;font-weight:800;cursor:pointer;
                width:100%;letter-spacing:0.5px;
                transition:background 0.2s,transform 0.15s;
            " onmouseover="this.style.background='#CC0000';this.style.transform='scale(1.03)'"
               onmouseout="this.style.background='#B50000';this.style.transform='scale(1)'">
                Let's do this! 🐾
            </button>

            <div style="margin-top:12px;font-size:0.75rem;color:#444;">
                Click anywhere outside to dismiss
            </div>
        </div>
    `;

    const dismiss = () => dismissOverlay(overlay);
    document.getElementById('sp-cat-go').addEventListener('click', dismiss);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
}

// ── POP-UP 2 — Setup Checkpoint Quiz (Slide 4: graphic-anatomy) ──────────────
function showSetupCheckpoint() {
    const overlay = createOverlay('sp-quiz-overlay');

    overlay.innerHTML = `
        <div style="
            background:#1A1A1A;border-radius:24px;padding:36px 40px 32px;
            max-width:460px;width:90%;text-align:center;
            box-shadow:0 32px 80px rgba(0,0,0,0.5);
            border:1px solid #2A2A2A;
            animation:sp-card-pop 0.4s cubic-bezier(0.34,1.56,0.64,1);
        ">
            <!-- Icon -->
            <div style="font-size:3rem;margin-bottom:12px;animation:sp-bounce 2s ease-in-out infinite;">✅</div>

            <div style="font-size:0.68rem;font-weight:800;letter-spacing:2px;color:#B50000;
                        text-transform:uppercase;margin-bottom:10px;">
                Quick Checkpoint
            </div>

            <div style="font-size:1.45rem;font-weight:900;color:#FFFFFF;
                        line-height:1.3;margin-bottom:14px;letter-spacing:-0.02em;">
                Before we move on — let's make sure you're set up!
            </div>

            <div style="background:#111;border-radius:14px;padding:18px 20px;margin-bottom:22px;
                        border:1px solid #252525;text-align:left;">
                <div style="font-size:0.75rem;font-weight:800;color:#B50000;letter-spacing:1px;
                            text-transform:uppercase;margin-bottom:10px;">Did you complete all of these?</div>
                ${[
                    '✓ Subscribed to Claude Pro',
                    '✓ Installed Claude Code via Terminal',
                    '✓ Connected Gmail connector',
                    '✓ Connected Google Drive connector',
                    '✓ Connected Zapier connector',
                ].map(item => `
                    <div style="display:flex;align-items:center;gap:10px;padding:6px 0;
                                border-bottom:1px solid #1E1E1E;font-size:0.88rem;color:#AAAAAA;">
                        ${item}
                    </div>`).join('')}
            </div>

            <div style="font-size:0.98rem;font-weight:700;color:#CCCCCC;margin-bottom:18px;">
                Are you fully set up and ready to go? 👇
            </div>

            <div style="display:flex;gap:12px;">
                <button id="sp-quiz-no" style="
                    flex:1;background:#1E1E1E;color:#AAAAAA;border:1px solid #333;
                    border-radius:12px;padding:14px;font-size:0.95rem;font-weight:700;
                    cursor:pointer;transition:all 0.2s;
                " onmouseover="this.style.background='#2A2A2A';this.style.color='#FFF'"
                   onmouseout="this.style.background='#1E1E1E';this.style.color='#AAAAAA'">
                    😅 Not yet — go back
                </button>
                <button id="sp-quiz-yes" style="
                    flex:1;background:#B50000;color:#fff;border:none;
                    border-radius:12px;padding:14px;font-size:0.95rem;font-weight:800;
                    cursor:pointer;transition:all 0.2s;
                " onmouseover="this.style.background='#CC0000';this.style.transform='scale(1.03)'"
                   onmouseout="this.style.background='#B50000';this.style.transform='scale(1)'">
                    🚀 Yes! I'm ready
                </button>
            </div>

            <div style="margin-top:14px;font-size:0.75rem;color:#383838;line-height:1.6;">
                Not set up yet? No worries — go back to Step 2 and finish.<br>
                This module builds directly on top of your setup.
            </div>
        </div>
    `;

    // Yes → just dismiss
    document.getElementById('sp-quiz-yes').addEventListener('click', () => {
        dismissOverlay(overlay);
    });

    // No → send back to tools-overview slide
    document.getElementById('sp-quiz-no').addEventListener('click', () => {
        dismissOverlay(overlay);
        // Remove from shown so quiz re-appears next time they come to graphic-anatomy
        _shown.delete('05-graphic-anatomy');
        setTimeout(() => goToSlide('03-tools-overview'), 220);
    });
}

// ── Trigger map ───────────────────────────────────────────────────────────────
const TRIGGERS = {
    '03-tools-overview':  showCatPopup,
    '05-graphic-anatomy': showSetupCheckpoint,
};

// ── Init ──────────────────────────────────────────────────────────────────────
export function initSlidePopups() {
    eventBus.on('navigation:changed', ({ toSlideId }) => {
        if (!toSlideId || _shown.has(toSlideId)) return;
        const trigger = TRIGGERS[toSlideId];
        if (!trigger) return;
        _shown.add(toSlideId);
        // Slight delay so the slide content renders first
        setTimeout(trigger, 600);
    });
}
