export const slide = {
  render() {
    const el = document.createElement('div');
    const steps = [
      'Open Claude Code in your terminal',
      'Tell Claude: "Generate a social media graphic for the topic: 5 AI Tools That Save You 10 Hours a Week, category: AI Tools"',
      'Claude writes and runs the Python script automatically',
      'A PNG file is saved to your output folder',
      'Open the file — review avatar, pill badge, headline, and sub-headline placement',
    ];
    const errors = [
      ['Badge overlaps avatar', 'BADGE_Y = AV_BOTTOM + 20, not a hardcoded number'],
      ['Pill is centered', 'Pill x must start at NAME_X, not canvas center'],
      ['Text gets cut off', 'Enable text wrapping with a max-width constraint in the script'],
    ];
    const stepRows = steps.map((s, i) => {
      const num = i + 1;
      return `<div style="display:flex;gap:14px;align-items:flex-start;padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <div style="width:28px;height:28px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.85rem;">${num}</div>
        <span style="color:#1A1A1A;line-height:1.6;">${s}</span>
      </div>`;
    }).join('');
    const errorRows = errors.map(([err, fix]) => `<div style="display:flex;gap:12px;padding:12px 16px;background:#fff5f5;border-radius:8px;border-left:3px solid #CC0000;">
      <span style="color:#CC0000;font-weight:700;flex-shrink:0;">&#10007; ${err}:</span>
      <span style="color:#555;">${fix}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 8px;">Generate Your First Graphic</h2>
        <p style="color:#555;margin:0 0 20px;">Follow these 5 steps the first time. After that, Claude handles it all automatically.</p>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:28px;">${stepRows}</div>
        <h3 style="color:#1A1A1A;margin:0 0 12px;font-size:1rem;">Common Issues &amp; Fixes</h3>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">${errorRows}</div>
        <div style="background:#1A1A1A;color:#fff;border-radius:10px;padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:1.4rem;">&#9989;</span>
          <span style="font-size:0.95rem;line-height:1.6;">Once the first graphic looks right, save your Claude Code instructions — every future graphic uses the same rules.</span>
        </div>
      </div>`;
    return el;
  }
};
