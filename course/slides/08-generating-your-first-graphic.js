export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 20px;">Demo: Generate Your First Graphic</h2>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
          ${['Open Claude Code in your terminal',
             'Tell Claude: "Generate a LinkedIn graphic for the topic: 5 AI Tools That Save You 10 Hours a Week, category: AI Tools"',
             'Claude writes and runs the Python script',
             'A PNG file is saved to your output folder',
             'Open the file — review avatar, pill, headline, sub-headline placement'].map((s, i) => `
            <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
              <div style="width:28px;height:28px;border-radius:50%;background:#7B2FBE;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.85rem;">${i+1}</div>
              <span style="color:#333;line-height:1.6;">${s}</span>
            </div>`).join('')}
        </div>
        <h3 style="color:#333;margin:0 0 12px;">Common Errors &amp; Fixes</h3>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${[['Badge overlaps avatar','BADGE_Y = AV_BOTTOM + 20, not a hardcoded number'],
             ['Pill is centered','Pill x must start at NAME_X, not canvas center'],
             ['Text gets cut off','Enable text wrapping with a max-width constraint']].map(([err, fix]) => `
            <div style="display:flex;gap:12px;padding:12px 16px;background:#fff0f0;border-radius:8px;border-left:3px solid #e55;">
              <span style="color:#c00;font-weight:600;">✗ ${err}:</span>
              <span style="color:#333;">${fix}</span>
            </div>`).join('')}
        </div>
      </div>`;
    return el;
  }
};
