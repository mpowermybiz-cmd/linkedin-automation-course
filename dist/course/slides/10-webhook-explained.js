export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">Apps Script: doPost Handler</h2>
        <p style="color:#555;margin:0 0 20px;">This script runs every time something POSTs to your URL. It reads the JSON payload and writes one row to your sheet.</p>
        <div style="background:#0D0D0D;border-radius:12px;padding:24px;margin-bottom:20px;overflow-x:auto;">
          <pre style="color:#00D4AA;font-family:monospace;font-size:0.85rem;line-height:1.8;margin:0;">function doPost(e) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.date, data.title, data.caption,
    data.hashtags, data.image_url,
    data.source, data.source_url,
    data.quote, data.status || "pending"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}</pre>
        </div>
        <div style="background:#fff3cd;border-left:4px solid #F5A623;border-radius:8px;padding:16px 20px;">
          <strong>⚠️ Important:</strong> Google Apps Script redirects POST requests. Your Python code must follow the redirect: POST to capture the Location header, then GET that URL. Skip this step and your POST silently fails.
        </div>
      </div>`;
    return el;
  }
};
