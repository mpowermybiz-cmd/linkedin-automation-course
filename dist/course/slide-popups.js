/**
 * Slide-entry pop-ups for MPowerMyBiz Course
 * ─────────────────────────────────────────────────────────────────────────────
 * Each popup fires ONCE per session when a student first lands on that slide.
 * The "No / Go Back" buttons on quiz popups reset so students re-see the
 * checkpoint when they return after completing the missing step.
 *
 * Trigger map:
 *   02-what-we-are-building  → 🚀 Hype intro — see what you're building
 *   03-tools-overview        → 🐱 Ginger cat — get set up!
 *   05-graphic-anatomy       → ✅ Quiz — did you finish Claude setup?
 *   09-google-apps-script    → 📊 Hype — Google Sheets time
 *   13-zapier-trigger-setup  → ✅ Quiz — did you deploy your Apps Script?
 *   04-pipeline-diagram      → ✅ Quiz — is your Zapier Zap ready?
 *   17-giving-claude-the-idea→ 🎯 Hype — final stretch, let's run it!
 *   20-next-steps            → 🏆 Graduation card — you built it!
 */

import { eventBus }  from '../framework/js/core/event-bus.js';
import { goToSlide } from '../framework/js/navigation/NavigationActions.js';

const _shown = new Set();

// ── Shared overlay engine ─────────────────────────────────────────────────────
function createOverlay(id) {
    document.getElementById(id)?.remove();
    const overlay = document.createElement('div');
    overlay.id = id;
    overlay.style.cssText = `
        position:fixed;inset:0;z-index:10500;
        display:flex;align-items:center;justify-content:center;
        background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);
        animation:sp-fade-in 0.25s ease-out;
    `;
    injectStyles();
    document.body.appendChild(overlay);
    return overlay;
}

function dismissOverlay(overlay) {
    overlay.style.animation = 'sp-fade-out 0.2s ease-in forwards';
    setTimeout(() => overlay.remove(), 220);
}

function card(content, maxWidth = 460, light = false) {
    const bg      = light ? '#FFFFFF' : '#141414';
    const border  = light ? '#E8E8E8' : '#242424';
    const shadow  = light ? '0 32px 80px rgba(0,0,0,0.18)' : '0 32px 80px rgba(0,0,0,0.55)';
    return `<div style="
        background:${bg};border-radius:22px;padding:36px 38px 30px;
        max-width:${maxWidth}px;width:90%;text-align:center;
        box-shadow:${shadow};border:1px solid ${border};
        animation:sp-pop 0.4s cubic-bezier(0.34,1.56,0.64,1);
    ">${content}</div>`;
}

function badge(text, color = '#B50000') {
    return `<div style="font-size:0.65rem;font-weight:800;letter-spacing:2px;color:${color};
        text-transform:uppercase;margin-bottom:10px;">${text}</div>`;
}

function title(text, light = false) {
    const col = light ? '#1A1A1A' : '#FFF';
    return `<div style="font-size:1.45rem;font-weight:900;color:${col};line-height:1.3;
        margin-bottom:12px;letter-spacing:-0.02em;">${text}</div>`;
}

function sub(text, light = false) {
    const col = light ? '#555' : '#888';
    return `<div style="font-size:0.92rem;color:${col};line-height:1.7;margin-bottom:22px;">${text}</div>`;
}

function btnPrimary(id, label) {
    return `<button id="${id}" style="
        background:#B50000;color:#fff;border:none;border-radius:50px;
        padding:13px 36px;font-size:0.97rem;font-weight:800;cursor:pointer;
        width:100%;letter-spacing:0.4px;transition:background 0.2s,transform 0.15s;
    " onmouseover="this.style.background='#CC0000';this.style.transform='scale(1.03)'"
       onmouseout="this.style.background='#B50000';this.style.transform='scale(1)'">${label}</button>`;
}

function btnPair(yesId, yesLabel, noId, noLabel) {
    return `<div style="display:flex;gap:12px;margin-top:4px;">
        <button id="${noId}" style="
            flex:1;background:#1E1E1E;color:#AAA;border:1px solid #333;
            border-radius:12px;padding:13px;font-size:0.9rem;font-weight:700;cursor:pointer;
            transition:all 0.2s;"
            onmouseover="this.style.background='#2A2A2A';this.style.color='#FFF'"
            onmouseout="this.style.background='#1E1E1E';this.style.color='#AAA'">${noLabel}
        </button>
        <button id="${yesId}" style="
            flex:1;background:#B50000;color:#fff;border:none;
            border-radius:12px;padding:13px;font-size:0.9rem;font-weight:800;cursor:pointer;
            transition:all 0.2s;"
            onmouseover="this.style.background='#CC0000';this.style.transform='scale(1.03)'"
            onmouseout="this.style.background='#B50000';this.style.transform='scale(1)'">${yesLabel}
        </button>
    </div>`;
}

function checkList(items, light = false) {
    const bg     = light ? '#F7F7F7' : '#0E0E0E';
    const border = light ? '#E8E8E8' : '#1E1E1E';
    const divider= light ? '#EEEEEE' : '#181818';
    const textCol= light ? '#333333' : '#AAAAAA';
    return `<div style="background:${bg};border-radius:12px;padding:16px 18px;
        margin-bottom:20px;border:1px solid ${border};text-align:left;">
        ${items.map(i => `<div style="display:flex;align-items:center;gap:10px;padding:6px 0;
            border-bottom:1px solid ${divider};font-size:0.86rem;color:${textCol};">
            <span style="color:#B50000;font-size:1rem;flex-shrink:0;font-weight:800;">✓</span> ${i}
        </div>`).join('')}
    </div>`;
}

function injectStyles() {
    if (document.getElementById('sp-styles')) return;
    const s = document.createElement('style');
    s.id = 'sp-styles';
    s.textContent = `
        @keyframes sp-fade-in  { from{opacity:0} to{opacity:1} }
        @keyframes sp-fade-out { from{opacity:1} to{opacity:0} }
        @keyframes sp-pop      { from{transform:scale(0.55) translateY(24px);opacity:0}
                                   to{transform:scale(1) translateY(0);opacity:1} }
        @keyframes sp-wobble   { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
        @keyframes sp-blink    { 0%,90%,100%{transform:scaleY(1)} 95%{transform:scaleY(0.1)} }
        @keyframes sp-bounce   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes sp-spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes sp-pulse    { 0%,100%{transform:scale(1)} 50%{transform:scale(1.12)} }
    `;
    document.head.appendChild(s);
}

// ── Ginger cat CSS art (reused from before) ───────────────────────────────────
function gingerCat() {
    return `<div style="position:relative;width:120px;height:120px;margin:0 auto 6px;
        animation:sp-wobble 2.4s ease-in-out infinite;">
      <div style="position:absolute;top:8px;left:14px;width:0;height:0;
           border-left:16px solid transparent;border-right:16px solid transparent;
           border-bottom:26px solid #E07828;"></div>
      <div style="position:absolute;top:8px;right:14px;width:0;height:0;
           border-left:16px solid transparent;border-right:16px solid transparent;
           border-bottom:26px solid #E07828;"></div>
      <div style="position:absolute;top:16px;left:22px;width:0;height:0;
           border-left:8px solid transparent;border-right:8px solid transparent;
           border-bottom:14px solid #F5A458;"></div>
      <div style="position:absolute;top:16px;right:22px;width:0;height:0;
           border-left:8px solid transparent;border-right:8px solid transparent;
           border-bottom:14px solid #F5A458;"></div>
      <div style="position:absolute;top:22px;left:10px;right:10px;bottom:18px;
           background:#E07828;border-radius:50%;"></div>
      <div style="position:absolute;top:32px;left:48px;width:4px;height:14px;
           background:#C06010;border-radius:2px;transform:rotate(-8deg);"></div>
      <div style="position:absolute;top:30px;left:57px;width:4px;height:16px;
           background:#C06010;border-radius:2px;"></div>
      <div style="position:absolute;top:32px;left:66px;width:4px;height:14px;
           background:#C06010;border-radius:2px;transform:rotate(8deg);"></div>
      <div style="position:absolute;top:58px;left:22px;right:22px;height:2px;background:#222;border-radius:1px;"></div>
      <div style="position:absolute;top:52px;left:16px;width:34px;height:26px;
           border:3px solid #222;border-radius:8px;background:rgba(180,220,255,0.25);
           animation:sp-blink 4s ease-in-out infinite;"></div>
      <div style="position:absolute;top:52px;right:16px;width:34px;height:26px;
           border:3px solid #222;border-radius:8px;background:rgba(180,220,255,0.25);
           animation:sp-blink 4s ease-in-out 0.15s infinite;"></div>
      <div style="position:absolute;top:60px;left:28px;width:10px;height:12px;
           background:#1A1A1A;border-radius:50%;"></div>
      <div style="position:absolute;top:60px;right:28px;width:10px;height:12px;
           background:#1A1A1A;border-radius:50%;"></div>
      <div style="position:absolute;top:61px;left:31px;width:4px;height:4px;background:#fff;border-radius:50%;"></div>
      <div style="position:absolute;top:61px;right:31px;width:4px;height:4px;background:#fff;border-radius:50%;"></div>
      <div style="position:absolute;top:80px;left:58px;width:14px;height:10px;
           background:#D05050;border-radius:50%;"></div>
      <div style="position:absolute;top:90px;left:48px;width:12px;height:6px;
           border-bottom:3px solid #C06010;border-left:3px solid #C06010;border-radius:0 0 0 6px;"></div>
      <div style="position:absolute;top:90px;left:70px;width:12px;height:6px;
           border-bottom:3px solid #C06010;border-right:3px solid #C06010;border-radius:0 0 6px 0;"></div>
      <div style="position:absolute;top:84px;left:0;width:38px;height:2px;background:#C06010;border-radius:1px;transform:rotate(-8deg);"></div>
      <div style="position:absolute;top:90px;left:0;width:36px;height:2px;background:#C06010;border-radius:1px;"></div>
      <div style="position:absolute;top:84px;right:0;width:38px;height:2px;background:#C06010;border-radius:1px;transform:rotate(8deg);"></div>
      <div style="position:absolute;top:90px;right:0;width:36px;height:2px;background:#C06010;border-radius:1px;"></div>
      <div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);
           font-size:1.8rem;animation:sp-bounce 1.8s ease-in-out infinite;">💻</div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// POPUP DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

// 1. Slide 2 — What You're Building: Rocket hype card
function popWhatBuilding() {
    const overlay = createOverlay('sp-what-building');
    overlay.innerHTML = card(`
        <div style="font-size:3.5rem;animation:sp-bounce 1.6s ease-in-out infinite;margin-bottom:8px;">🚀</div>
        ${badge('MODULE 1 — THE BIG PICTURE')}
        ${title("You're about to build something that runs itself.")}
        ${sub('By the end of this course you\'ll have a <strong style="color:#FFF;">fully automated pipeline</strong> — Claude Code creates your branded graphic, logs it to a Google Sheet, and Zapier posts it to your social media. <strong style="color:#FFF;">Every. Single. Day. Automatically.</strong>')}
        <div style="display:flex;gap:10px;margin-bottom:22px;justify-content:center;flex-wrap:wrap;">
            ${['🖼 Auto-graphic','📊 Auto-logged','⚡ Auto-posted','🔁 Runs forever'].map(t =>
                `<div style="background:#1E1E1E;border:1px solid #2A2A2A;border-radius:20px;
                    padding:6px 14px;font-size:0.78rem;font-weight:700;color:#AAA;">${t}</div>`
            ).join('')}
        </div>
        ${btnPrimary('sp-what-go', "Let's see it! 👀")}
    `);
    bind(overlay, 'sp-what-go');
}

// 2. Slide 3 — Tools Overview: Ginger cat
function popToolsSetup() {
    const overlay = createOverlay('sp-cat');
    overlay.innerHTML = card(`
        ${gingerCat()}
        ${badge('MODULE 2 — TOOLS SETUP')}
        ${title('Time to get you set up! 🎉')}
        ${sub('We\'re about to connect Claude Code, Google Drive, and Zapier.<br>Follow each step in order — <strong style="color:#CCC;">you only do this once!</strong>')}
        ${btnPrimary('sp-cat-go', "Let's do this! 🐾")}
        <div style="margin-top:10px;font-size:0.72rem;color:#3A3A3A;">Click anywhere outside to dismiss</div>
    `);
    bind(overlay, 'sp-cat-go');
}

// 3. Slide 4 — Graphic Anatomy: Claude setup quiz (light card, updated checklist)
function popClaudeSetupCheck() {
    const overlay = createOverlay('sp-claude-check');
    overlay.innerHTML = card(`
        <div style="font-size:3rem;margin-bottom:10px;animation:sp-pulse 2s ease-in-out infinite;">✅</div>
        ${badge('QUICK CHECKPOINT')}
        ${title('Before we move on — are you fully set up?', true)}
        ${checkList([
            'Subscribed to Claude Pro at <strong>claude.ai</strong>',
            'Installed Claude Code on your computer via Terminal',
            'Installed all additional tools via Terminal<br><span style="font-size:0.78rem;color:#999;">(Homebrew, Node.js, Python 3, Pillow)</span>',
            'Added your connectors inside Claude Code<br><span style="font-size:0.78rem;color:#999;">(Gmail, Google Drive &amp; Zapier)</span>',
        ], true)}
        <div style="font-size:0.92rem;font-weight:700;color:#333;margin-bottom:16px;">
            Did you complete all the steps? 👇
        </div>
        ${btnPair('sp-claude-yes','🚀 Yes! I\'m ready','sp-claude-no','😅 Not yet — go back')}
        <div style="margin-top:12px;font-size:0.72rem;color:#AAA;line-height:1.6;">
            This module builds directly on your setup — finish it first!
        </div>
    `, 460, true);
    document.getElementById('sp-claude-yes').addEventListener('click', () => dismissOverlay(overlay));
    document.getElementById('sp-claude-no').addEventListener('click', () => {
        dismissOverlay(overlay);
        _shown.delete('05-graphic-anatomy');
        _shown.add('03-tools-overview');       // don't re-fire cat popup on go-back
        setTimeout(() => goToSlide('03-tools-overview'), 220);
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) dismissOverlay(overlay); });
}

// 4. Slide 5 — Google Apps Script: Hype card
function popGoogleSheets() {
    const overlay = createOverlay('sp-sheets');
    overlay.innerHTML = card(`
        <div style="font-size:3.2rem;margin-bottom:8px;animation:sp-bounce 2s ease-in-out infinite;">📊</div>
        ${badge('MODULE 3 — CONTENT CALENDAR')}
        ${title('Your Google Sheet is about to become your command center.')}
        ${sub('Every post Claude creates gets <strong style="color:#FFF;">automatically logged</strong> here — topic, caption, image URL, status. It\'s your content calendar running itself.')}
        <div style="background:#0E0E0E;border-radius:12px;padding:14px 16px;margin-bottom:20px;
            border:1px solid #1E1E1E;text-align:left;">
            <div style="font-size:0.7rem;font-weight:800;color:#B50000;letter-spacing:1px;
                text-transform:uppercase;margin-bottom:8px;">What you'll have after this module</div>
            ${['A live Google Sheet with your content calendar',
               'Apps Script deployed as a web app',
               'A webhook URL ready for Claude Code',
               'Every post auto-logged with status tracking'].map(i =>
                `<div style="font-size:0.84rem;color:#AAA;padding:4px 0;border-bottom:1px solid #181818;">
                    <span style="color:#B50000;">▸ </span>${i}</div>`).join('')}
        </div>
        ${btnPrimary('sp-sheets-go', "Let's wire it up! ⚡")}
    `);
    bind(overlay, 'sp-sheets-go');
}

// 5. Slide 6 — Zapier Setup: Apps Script deployment quiz
function popZapierCheck() {
    const overlay = createOverlay('sp-zapier-check');
    overlay.innerHTML = card(`
        <div style="font-size:3rem;margin-bottom:10px;animation:sp-spin 3s linear infinite;
            display:inline-block;">⚡</div>
        ${badge('CHECKPOINT — BEFORE ZAPIER')}
        ${title("One sec — let's make sure your Google Sheet is ready.", true)}
        ${checkList([
            'Created your Google Sheet with the right columns',
            'Added the Apps Script code <span style="font-size:0.78rem;color:#999;">(doPost function)</span>',
            'Deployed Apps Script as a Web App',
            'Copied &amp; saved your Web App URL <span style="font-size:0.78rem;color:#999;">(you\'ll provide this to Claude Code in the next steps)</span>',
            'Tested your webhook — ran it and got a successful response ✅',
        ], true)}
        <div style="font-size:0.92rem;font-weight:700;color:#333;margin-bottom:16px;">
            Is your Apps Script deployed and webhook working? 👇
        </div>
        ${btnPair('sp-zap-yes','⚡ Yes — Zapier time!','sp-zap-no','😬 Not yet — go back')}
        <div style="margin-top:12px;font-size:0.72rem;color:#AAA;line-height:1.6;">
            Zapier needs your Web App URL to trigger — finish this step first!
        </div>
    `, 460, true);
    document.getElementById('sp-zap-yes').addEventListener('click', () => dismissOverlay(overlay));
    document.getElementById('sp-zap-no').addEventListener('click', () => {
        dismissOverlay(overlay);
        _shown.delete('13-zapier-trigger-setup');
        _shown.add('09-google-apps-script-setup'); // don't re-fire sheets popup on go-back
        setTimeout(() => goToSlide('09-google-apps-script-setup'), 220);
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) dismissOverlay(overlay); });
}

// 6. Slide 7 — Scheduled Task: Zapier Zap quiz
function popScheduledTaskCheck() {
    const overlay = createOverlay('sp-schedule-check');
    overlay.innerHTML = card(`
        <div style="font-size:3rem;margin-bottom:10px;animation:sp-bounce 1.8s ease-in-out infinite;">⏰</div>
        ${badge('CHECKPOINT — LAST PIECE')}
        ${title('Almost there! Is your Zapier Zap ready to fire?')}
        ${checkList([
            'Created a Zap with Google Sheets trigger',
            'Set trigger to "New Spreadsheet Row"',
            'Added status filter: Ready to Post',
            'Connected LinkedIn / Instagram / Facebook action',
            'Mapped image_url to the media field',
            'Turned the Zap ON',
        ])}
        <div style="font-size:0.92rem;font-weight:700;color:#CCC;margin-bottom:16px;">
            Is your Zap live and ready? 👇
        </div>
        ${btnPair('sp-sched-yes','🎉 Yes — let\'s schedule it!','sp-sched-no','😬 Not yet — go back')}
        <div style="margin-top:12px;font-size:0.72rem;color:#333;line-height:1.6;">
            The scheduled task fires Claude Code daily — Zapier needs to be on first!
        </div>
    `);
    document.getElementById('sp-sched-yes').addEventListener('click', () => dismissOverlay(overlay));
    document.getElementById('sp-sched-no').addEventListener('click', () => {
        dismissOverlay(overlay);
        _shown.delete('04-pipeline-diagram');
        _shown.add('13-zapier-trigger-setup'); // don't re-fire Zapier popup on go-back
        setTimeout(() => goToSlide('13-zapier-trigger-setup'), 220);
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) dismissOverlay(overlay); });
}

// 7. Slide 8 — Run It: Final stretch hype
function popFinalStretch() {
    const overlay = createOverlay('sp-final');
    overlay.innerHTML = card(`
        <div style="font-size:3.5rem;margin-bottom:8px;animation:sp-pulse 1.5s ease-in-out infinite;">🎯</div>
        ${badge('MODULE 6 — THE MOMENT OF TRUTH')}
        ${title("This is it. Let's run your automation for the first time.")}
        ${sub('Everything you\'ve built leads to <strong style="color:#FFF;">this moment</strong>. You\'re about to watch Claude Code create a graphic, upload it, fill your Google Sheet, and trigger Zapier to post — all in one run. 🤯')}
        <div style="display:flex;gap:8px;margin-bottom:22px;flex-wrap:wrap;justify-content:center;">
            ${['🖼→','📊→','⚡→','✅ Posted!'].map((s,i) =>
                `<div style="background:${i===3?'#B50000':'#1A1A1A'};border:1px solid ${i===3?'#B50000':'#252525'};
                    border-radius:20px;padding:6px 14px;font-size:0.82rem;font-weight:800;
                    color:${i===3?'#FFF':'#888'};">${s}</div>`
            ).join('')}
        </div>
        ${btnPrimary('sp-final-go', "Run it! Let's gooo 🚀")}
    `);
    bind(overlay, 'sp-final-go');
}

// 8. Slide 9 — Next Steps: Graduation card
function popGraduation() {
    const overlay = createOverlay('sp-grad');
    overlay.innerHTML = card(`
        <div style="font-size:3.5rem;margin-bottom:6px;">🏆</div>
        <div style="display:flex;justify-content:center;gap:6px;margin-bottom:14px;font-size:1.6rem;">
            🎉 🎊 🥳
        </div>
        ${badge('YOU DID IT — COURSE COMPLETE', '#C89A00')}
        ${title('You built an automated content machine.')}
        ${sub('You just went from <strong style="color:#FFF;">manually posting</strong> to having a pipeline that creates, logs, schedules, and posts your content — forever. That\'s real automation, Amanda. Be proud! 💪')}
        <div style="background:#0E0E0E;border-radius:12px;padding:14px 18px;margin-bottom:22px;
            border:1px solid #1E1E1E;text-align:left;">
            ${['Branded graphic generated daily ✓',
               'Google Sheet content calendar ✓',
               'Zapier posting to all 3 platforms ✓',
               'Scheduled task running on autopilot ✓',
               'You never have to think about this again ✓',
            ].map(i => `<div style="font-size:0.86rem;color:#AAA;padding:5px 0;
                border-bottom:1px solid #181818;"><span style="color:#C89A00;">★ </span>${i}</div>`).join('')}
        </div>
        ${btnPrimary('sp-grad-go', 'Share my win 🎉')}
    `);
    document.getElementById('sp-grad-go').addEventListener('click', () => {
        dismissOverlay(overlay);
        // Open LinkedIn share pre-filled
        const msg = encodeURIComponent('Just completed Content Automation with Claude Code for Social Media by @MPowerMyBiz! My social media now posts itself 🤖🔥 #ContentAutomation #ClaudeCode #MPowerMyBiz');
        window.open(`https://www.linkedin.com/sharing/share-offsite/?text=${msg}`, '_blank');
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) dismissOverlay(overlay); });
}

// ── Helper: simple dismiss bind ───────────────────────────────────────────────
function bind(overlay, btnId) {
    const btn = document.getElementById(btnId);
    const dismiss = () => dismissOverlay(overlay);
    btn?.addEventListener('click', dismiss);
    overlay.addEventListener('click', e => { if (e.target === overlay) dismiss(); });
}

// ── Trigger map ───────────────────────────────────────────────────────────────
const TRIGGERS = {
    '02-what-we-are-building':   popWhatBuilding,
    '03-tools-overview':         popToolsSetup,
    '05-graphic-anatomy':        popClaudeSetupCheck,
    '09-google-apps-script-setup': popGoogleSheets,
    '13-zapier-trigger-setup':   popZapierCheck,
    '04-pipeline-diagram':       popScheduledTaskCheck,
    '17-giving-claude-the-idea': popFinalStretch,
    '20-next-steps':             popGraduation,
};

// ── Init ──────────────────────────────────────────────────────────────────────
export function initSlidePopups() {
    eventBus.on('navigation:changed', ({ toSlideId }) => {
        if (!toSlideId || _shown.has(toSlideId)) return;
        const trigger = TRIGGERS[toSlideId];
        if (!trigger) return;
        _shown.add(toSlideId);
        setTimeout(trigger, 600);
    });
}
