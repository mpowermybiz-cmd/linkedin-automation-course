export default {
  id: '10-webhook-explained',
  title: 'The Webhook Script',
  type: 'code-explainer',
  content: {
    heading: 'Apps Script: doPost Handler',
    explanation: 'This script runs every time something POSTs to your URL. It reads the JSON payload and writes one row to your sheet.',
    code: `function doPost(e) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.date,
    data.title,
    data.caption,
    data.hashtags,
    data.image_url,
    data.source,
    data.source_url,
    data.quote,
    data.status || "pending"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}`,
    importantNote: 'Google Apps Script redirects POST requests. Your Python code must follow the redirect: POST to capture the Location header, then GET that URL.',
  },
};
