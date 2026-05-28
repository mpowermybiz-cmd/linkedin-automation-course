export const slide = {
  render() {
    const el = document.createElement('div');
    const steps = [
      'Open Google Sheets and create a new spreadsheet named <strong>LinkedIn Content Calendar</strong>',
      'Set up columns: A=date, B=title, C=caption, D=hashtags, E=image_url, F=source, G=source_url, H=quote, I=status',
      'Go to <strong>Extensions then Apps Script</strong>',
      'Paste the doPost(e) webhook script (shown on the next slide)',
      'Click <strong>Deploy then New Deployment then Web App</strong>',
      'Set <strong>Execute as: Me</strong> and <strong>Who has access: Anyone</strong>',
      'Copy the deployment URL — this is your webhook endpoint',
      'Test it: send a POST request and confirm a row appears in the sheet',
    ];
    const rows = steps.map((s, idx) => {
      const num = idx + 1;
      return `<div style="display:flex;gap:14px;align-items:flex-start;padding:13px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <div style="width:26px;height:26px;border-radius:50%;background:#00D4AA;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.85rem;">${num}</div>
        <span style="color:#333;line-height:1.6;">${s}</span>
      </div>`;
    }).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">Creating Your Content Calendar Webhook</h2>
        <p style="color:#555;margin:0 0 20px;">This one-time setup takes about 5 minutes. You only do it once.</p>
        <div style="display:flex;flex-direction:column;gap:10px;">${rows}</div>
        <div style="margin-top:20px;background:#e8f8f4;border-radius:8px;padding:14px 18px;color:#00907a;font-weight:600;">
          Save this URL. Claude Code will POST to it every time a graphic is generated.
        </div>
      </div>`;
    return el;
  }
};
