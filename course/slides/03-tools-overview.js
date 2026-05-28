export const slide = {
  render() {
    const el = document.createElement('div');
    const tools = [
      ['Claude Code', 'The AI that writes and runs the automation code', 'Free'],
      ['Python 3.x', 'Runs the graphic generation script locally', 'Free'],
      ['Pillow (Python library)', 'Draws the LinkedIn graphic image', 'Free'],
      ['Google Account', 'Hosts your content calendar spreadsheet', 'Free'],
      ['Google Apps Script', 'The webhook that receives data and writes rows', 'Free'],
      ['Zapier', 'Watches the sheet and triggers Buffer', 'Free tier works'],
      ['Buffer', 'Schedules and posts to LinkedIn', 'Free tier works'],
    ];
    const rows = tools.map(([name, desc, cost]) => `<div style="display:flex;align-items:center;gap:16px;padding:14px 18px;background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
      <div style="width:10px;height:10px;border-radius:50%;background:#00D4AA;flex-shrink:0;"></div>
      <div style="flex:1;"><strong style="color:#222;">${name}</strong> <span style="color:#666;font-size:0.9rem;">${desc}</span></div>
      <span style="background:#e8f8f4;color:#00907a;font-size:0.8rem;font-weight:600;padding:3px 10px;border-radius:20px;">${cost}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">Your Stack</h2>
        <p style="color:#555;margin:0 0 24px;">Everything you need — and most of it is completely free.</p>
        <div style="display:flex;flex-direction:column;gap:10px;">${rows}</div>
      </div>`;
    return el;
  }
};
