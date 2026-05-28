export const slide = {
  render() {
    const el = document.createElement('div');
    const steps = [
      ['1', 'You', 'Give Claude Code a topic idea', '#1A1A1A'],
      ['2', 'Claude Code', 'Writes and runs the Python graphic script', '#CC0000'],
      ['3', 'Python Script', 'Generates your branded PNG graphic', '#CC0000'],
      ['4', 'Webhook POST', 'Sends metadata to Google Apps Script', '#888'],
      ['5', 'Google Sheet', 'New row added to your Social Media content calendar', '#888'],
      ['6', 'Zapier', 'Detects new row and posts to LinkedIn automatically', '#CC0000'],
    ];
    const rows = steps.map(([num, label, action, color]) => `<div style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
      <div style="width:34px;height:34px;border-radius:50%;background:${color};color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.9rem;">${num}</div>
      <strong style="color:#1A1A1A;min-width:120px;">${label}</strong>
      <span style="color:#555;font-size:0.95rem;">${action}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 8px;">How the Pieces Connect</h2>
        <p style="color:#555;margin:0 0 24px;">6 steps. <strong style="color:#CC0000;">You only do step 1.</strong></p>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">${rows}</div>
        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:16px 24px;text-align:center;font-weight:700;font-size:1rem;">
          One idea triggers the entire 6-step pipeline. This is what automation looks like.
        </div>
      </div>`;
    return el;
  }
};
