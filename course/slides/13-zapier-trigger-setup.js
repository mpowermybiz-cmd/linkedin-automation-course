export default {
  id: "13-zapier-trigger-setup",
  title: "Zapier: Watch the Sheet for New Rows",
  type: "step-by-step",
  content: {
    heading: "Setting Up the Zapier Trigger",
    steps: [
      { step: 1, action: "Log into Zapier and click 'Create Zap'" },
      { step: 2, action: "Trigger: Google Sheets → 'New Spreadsheet Row'" },
      { step: 3, action: "Connect your Google account and select your LinkedIn Content Calendar sheet" },
      { step: 4, action: "Select the correct worksheet tab (usually Sheet1)" },
      { step: 5, action: "Test the trigger — Zapier will pull the most recent row to confirm it works" },
      { step: 6, action: "Action: Buffer → 'Add to Queue'" },
      { step: 7, action: "Map fields: Post text = caption column, Image = image_url column, Profile = your LinkedIn page" },
      { step: 8, action: "Turn on the Zap" },
    ],
    tip: "Set a filter step between trigger and action: only continue if the 'status' column equals 'pending'. This prevents re-posting rows you've already handled.",
  },
};
