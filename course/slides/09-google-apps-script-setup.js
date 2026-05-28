export default {
  id: "09-google-apps-script-setup",
  title: "Google Apps Script Webhook Setup",
  type: "step-by-step",
  content: {
    heading: "Creating Your Content Calendar Webhook",
    steps: [
      { step: 1, action: "Open Google Sheets and create a new spreadsheet named 'LinkedIn Content Calendar'" },
      { step: 2, action: "Set up columns: A=date, B=title, C=caption, D=hashtags, E=image_url, F=source, G=source_url, H=quote, I=status" },
      { step: 3, action: "Go to Extensions → Apps Script" },
      { step: 4, action: "Paste the doPost(e) webhook script (provided in the next slide)" },
      { step: 5, action: "Click Deploy → New Deployment → Web App" },
      { step: 6, action: "Set 'Execute as: Me' and 'Who has access: Anyone'" },
      { step: 7, action: "Copy the deployment URL — this is your webhook endpoint" },
      { step: 8, action: "Test it: send a POST request and confirm a row appears in the sheet" },
    ],
    note: "Save this URL. Claude Code will POST to it every time a graphic is generated.",
  },
};
