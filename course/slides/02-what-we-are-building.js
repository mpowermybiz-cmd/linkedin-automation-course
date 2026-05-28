export const slide = {
  render() {
    const el = document.createElement('div');
    const items = [
      ['Claude Code generates a branded LinkedIn graphic (avatar, name, handle, category pill, headline, sub-headline)', '🎨'],
      ['The graphic metadata is logged automatically to your Google Sheet content calendar', '📊'],
      ['Zapier detects the new row and sends it to Buffer', '⚡'],
      ['Buffer schedules the post to go live on LinkedIn at your chosen time', '📅'],
    ];
    const rows = items.map(([text, icon]) => `<div style="display:flex;align-items:flex-start;gap:16px;padding:16px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
      <span style="font-size:1.5rem;flex-shrink:0;">${icon}</span>
      <span style="color:#333;line-height:1.6;">${text}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">The Full Pipeline</h2>
        <p style="color:#555;margin:0 0 28px;">By the end of this course you will have a live automation that does all of this from a single prompt:</p>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">${rows}</div>
        <div style="background:#7B2FBE;color:#fff;border-radius:10px;padding:20px 24px;text-align:center;font-size:1.1rem;font-weight:600;">
          You only have to say the topic. Everything else runs itself.
        </div>
      </div>`;
    return el;
  }
};
