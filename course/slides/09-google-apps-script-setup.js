export const slide = {
  render() {
    const el = document.createElement('div');
    const cols = [
      ['A', 'date', 'Date the graphic was generated (YYYY-MM-DD)'],
      ['B', 'title', 'The headline topic of the post'],
      ['C', 'caption', 'The written caption for the social post'],
      ['D', 'hashtags', 'Comma-separated hashtags'],
      ['E', 'image_url', 'Path or URL to the generated PNG file'],
      ['F', 'source', 'Where the content came from (default: Claude Code)'],
      ['G', 'source_url', 'Optional link to source article'],
      ['H', 'quote', 'Optional pull quote for the graphic'],
      ['I', 'status', 'Workflow status — always starts as "pending"'],
    ];
    const colRows = cols.map(([col, name, desc]) => `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff;border-radius:6px;border-left:3px solid #CC0000;">
      <span style="font-weight:700;color:#CC0000;min-width:20px;flex-shrink:0;">${col}</span>
      <span style="font-weight:600;color:#1A1A1A;min-width:90px;flex-shrink:0;">${name}</span>
      <span style="color:#555;font-size:0.88rem;">${desc}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 6px;">Content Calendar &amp; Webhook Setup</h2>
        <p style="color:#555;margin:0 0 24px;">This one-time setup takes about 5 minutes. You only do it once — ever.</p>

        <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:28px;">
          <div style="padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);display:flex;gap:12px;align-items:flex-start;">
            <div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.82rem;">1</div>
            <span style="color:#1A1A1A;line-height:1.6;">Open <strong>Google Sheets</strong> and create a new spreadsheet named <strong>Social Media Content Calendar</strong></span>
          </div>
          <div style="padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);display:flex;gap:12px;align-items:flex-start;">
            <div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.82rem;">2</div>
            <div style="flex:1;">
              <div style="color:#1A1A1A;font-weight:600;margin-bottom:10px;">Add these columns exactly (Row 1 = headers):</div>
              <div style="display:flex;flex-direction:column;gap:6px;">${colRows}</div>
            </div>
          </div>
          <div style="padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);display:flex;gap:12px;align-items:flex-start;">
            <div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.82rem;">3</div>
            <span style="color:#1A1A1A;line-height:1.6;">Click <strong>Extensions</strong> in the top menu, then select <strong>Apps Script</strong> — a new editor tab will open</span>
          </div>
          <div style="padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);display:flex;gap:12px;align-items:flex-start;">
            <div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.82rem;">4</div>
            <div style="flex:1;">
              <div style="color:#1A1A1A;font-weight:600;margin-bottom:10px;">Delete any existing code and paste this script:</div>
              <div style="background:#0D0D0D;border-radius:8px;padding:16px;overflow-x:auto;">
                <pre style="color:#00D4AA;font-family:monospace;font-size:0.78rem;line-height:1.7;margin:0;">function doPost(e) {
  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.date       || new Date().toISOString().split('T')[0],
    data.title      || '',
    data.caption    || '',
    data.hashtags   || '',
    data.image_url  || '',
    data.source     || 'Claude Code',
    data.source_url || '',
    data.quote      || '',
    'pending'
  ]);
  return ContentService
    .createTextOutput(
      JSON.stringify({ status: 'success' })
    )
    .setMimeType(ContentService.MimeType.JSON);
}</pre>
              </div>
            </div>
          </div>
          <div style="padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);display:flex;gap:12px;align-items:flex-start;">
            <div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.82rem;">5</div>
            <span style="color:#1A1A1A;line-height:1.6;">Click <strong>Deploy &rsaquo; New Deployment &rsaquo; Web App</strong>. Set <strong>Execute as: Me</strong> and <strong>Who has access: Anyone</strong>. Click Deploy.</span>
          </div>
          <div style="padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);display:flex;gap:12px;align-items:flex-start;">
            <div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.82rem;">6</div>
            <span style="color:#1A1A1A;line-height:1.6;"><strong>Copy the Web App URL</strong> — this is your webhook endpoint. Save it somewhere safe. You will give this URL to Claude Code.</span>
          </div>
        </div>

        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:14px 20px;font-weight:700;text-align:center;">
          Save that URL. Claude Code will POST to it every time a new graphic is generated.
        </div>
        <div style="margin-top:12px;padding:14px 18px;background:#f9f9f9;border-radius:8px;color:#555;font-size:0.88rem;line-height:1.7;">
          <strong style="color:#1A1A1A;">&#128161; Tip:</strong> If you see "Authorization required" when testing, click Review Permissions and allow access with your Google account. This is a one-time step.
        </div>
      </div>`;
    return el;
  }
};
