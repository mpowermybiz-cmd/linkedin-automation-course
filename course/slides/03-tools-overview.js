export const slide = {
  render() {
    const el = document.createElement('div');
    const tools = [
      ['Claude Code', 'The AI that writes and runs your entire automation', 'Free'],
      ['Python 3.x', 'Runs the graphic generation script on your computer', 'Free'],
      ['Pillow (Python library)', 'Draws and exports the branded PNG graphic', 'Free'],
      ['Google Account', 'Hosts your Social Media content calendar spreadsheet', 'Free'],
      ['Google Apps Script', 'The webhook that receives data and writes rows automatically', 'Free'],
      ['Zapier', 'Watches your sheet and posts to LinkedIn when a new row appears', 'Free tier works'],
    ];
    const rows = tools.map(([name, desc, cost]) => {
      const badgeBg = cost === 'Free' ? '#f9f9f9' : '#fff5f5';
      const badgeColor = cost === 'Free' ? '#555' : '#CC0000';
      return `<div style="display:flex;align-items:center;gap:16px;padding:14px 18px;background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <div style="width:10px;height:10px;border-radius:50%;background:#CC0000;flex-shrink:0;"></div>
        <div style="flex:1;"><strong style="color:#1A1A1A;">${name}</strong> <span style="color:#666;font-size:0.9rem;">&mdash; ${desc}</span></div>
        <span style="background:${badgeBg};color:${badgeColor};font-size:0.8rem;font-weight:700;padding:4px 12px;border-radius:20px;white-space:nowrap;">${cost}</span>
      </div>`;
    }).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 8px;">Your Stack</h2>
        <p style="color:#555;margin:0 0 24px;">Everything you need — and almost all of it is completely free.</p>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">${rows}</div>
        <div style="background:#1A1A1A;color:#fff;border-radius:10px;padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:1.4rem;">💡</span>
          <span style="font-size:0.95rem;line-height:1.6;">You do <strong>not</strong> need to be a developer. Claude Code handles all the code — you just provide the idea.</span>
        </div>
      </div>`;
    return el;
  }
};
