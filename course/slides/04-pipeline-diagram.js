export const slide = {
  render() {
    const el = document.createElement('div');
    const steps = [
      ['1', 'You', 'Give Claude Code a topic idea', '#7B2FBE'],
      ['2', 'Claude Code', 'Writes + runs the Python graphic script', '#5B1F9E'],
      ['3', 'Python Script', 'Generates the branded PNG graphic', '#9B3FDE'],
      ['4', 'Webhook POST', 'Sends metadata to Google Apps Script', '#F5A623'],
      ['5', 'Google Sheet', 'New row added to content calendar', '#00D4AA'],
      ['6', 'Zapier', 'Detects new row, triggers Buffer action', '#FF6B35'],
      ['7', 'Buffer', 'Schedules LinkedIn post with image', '#0077B5'],
      ['8', 'LinkedIn', 'Post goes live automatically', '#0077B5'],
    ];
    const rows = steps.map(([num, label, action, color]) => `<div style="display:flex;align-items:center;gap:14px;padding:12px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
      <div style="width:32px;height:32px;border-radius:50%;background:${color};color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${num}</div>
      <strong style="color:#222;min-width:130px;">${label}</strong>
      <span style="color:#555;font-size:0.95rem;">then ${action}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">How the Pieces Connect</h2>
        <p style="color:#555;margin:0 0 24px;">8 steps. You only do step 1.</p>
        <div style="display:flex;flex-direction:column;gap:8px;">${rows}</div>
      </div>`;
    return el;
  }
};
