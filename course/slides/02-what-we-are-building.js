export const slide = {
  render() {
    const el = document.createElement('div');
    const items = [
      ['Claude Code generates your branded social media graphic (avatar, name, handle, category pill, headline, sub-headline)', '🎨'],
      ['The graphic and its metadata are automatically logged to your Google Sheet content calendar', '📊'],
      ['Zapier detects the new row and posts it to LinkedIn — no manual steps', '⚡'],
    ];
    const rows = items.map(([text, icon]) => `<div style="display:flex;align-items:flex-start;gap:16px;padding:18px 20px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border-left:3px solid #CC0000;">
      <span style="font-size:1.5rem;flex-shrink:0;">${icon}</span>
      <span style="color:#1A1A1A;line-height:1.7;font-size:0.97rem;">${text}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 8px;">The Full Pipeline</h2>
        <p style="color:#555;margin:0 0 28px;font-size:1rem;">By the end of this course you will have a live automation that does all of this from a single idea:</p>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">${rows}</div>
        <div style="background:#1A1A1A;color:#fff;border-radius:10px;padding:20px 24px;text-align:center;font-size:1.1rem;font-weight:700;border-left:4px solid #CC0000;">
          You only say the topic. Everything else runs itself.
        </div>
        <div style="margin-top:16px;display:flex;gap:10px;align-items:center;justify-content:center;">
          <div style="padding:8px 18px;background:#f9f9f9;border-radius:20px;font-size:0.85rem;color:#555;font-weight:600;">Claude Code</div>
          <span style="color:#CC0000;font-weight:700;font-size:1.1rem;">&#8594;</span>
          <div style="padding:8px 18px;background:#f9f9f9;border-radius:20px;font-size:0.85rem;color:#555;font-weight:600;">Google Sheets</div>
          <span style="color:#CC0000;font-weight:700;font-size:1.1rem;">&#8594;</span>
          <div style="padding:8px 18px;background:#f9f9f9;border-radius:20px;font-size:0.85rem;color:#555;font-weight:600;">Zapier</div>
          <span style="color:#CC0000;font-weight:700;font-size:1.1rem;">&#8594;</span>
          <div style="padding:8px 18px;background:#CC0000;border-radius:20px;font-size:0.85rem;color:#fff;font-weight:700;">LinkedIn Live</div>
        </div>
      </div>`;
    return el;
  }
};
