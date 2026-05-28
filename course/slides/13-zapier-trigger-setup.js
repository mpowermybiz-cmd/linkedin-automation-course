export const slide = {
  render() {
    const el = document.createElement('div');
    const steps = [
      ['Log into Zapier at zapier.com and click <strong>+ Create &rsaquo; Zaps</strong>', '&#128279; Action required in Zapier'],
      ['Under <strong>Trigger</strong>, search for and select <strong>Google Sheets</strong>', '&#9888; You must connect your Google account when prompted'],
      ['Select event: <strong>New Spreadsheet Row</strong>, then choose your <em>Social Media Content Calendar</em> sheet', '&#9998; Pick Sheet1 (or whatever tab your data is on)'],
      ['Click <strong>Test Trigger</strong> — Zapier will pull the most recent row. Confirm it shows your columns correctly', '&#10003; If no rows yet, add a test row in your sheet first'],
      ['Under <strong>Action</strong>, search for and select <strong>LinkedIn</strong>', '&#128279; Connect your LinkedIn account when prompted'],
      ['Select event: <strong>Create Share Update</strong> (for personal profile) or <strong>Create Company Update</strong> (for a company page)', '&#9998; Map fields: Text = caption column, Link = source_url, Image = image_url'],
      ['Add an optional <strong>Filter</strong> step between Trigger and Action: only continue if <em>status</em> column equals <strong>pending</strong>', '&#9888; This prevents re-posting rows already handled'],
      ['Click <strong>Publish Zap</strong> and toggle it ON', '&#9989; Your automation is now live'],
    ];
    const rows = steps.map(([action, tip], idx) => {
      const num = idx + 1;
      return `<div style="padding:14px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.82rem;">${num}</div>
          <div style="flex:1;">
            <div style="color:#1A1A1A;line-height:1.6;">${action}</div>
            <div style="color:#888;font-size:0.82rem;margin-top:4px;">${tip}</div>
          </div>
        </div>
      </div>`;
    }).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 6px;">Setting Up Zapier to Post to LinkedIn</h2>
        <p style="color:#555;margin:0 0 20px;">Zapier watches your Google Sheet and fires a LinkedIn post the moment a new row appears.</p>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">${rows}</div>
        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:14px 20px;text-align:center;font-weight:700;">
          Once this Zap is on, every new row in your sheet becomes a live LinkedIn post — automatically.
        </div>
        <div style="margin-top:12px;padding:14px 18px;background:#f9f9f9;border-radius:8px;color:#555;font-size:0.88rem;line-height:1.7;">
          <strong style="color:#1A1A1A;">&#128161; Tip:</strong> Test with a real row before relying on it. Add one row manually, trigger the Zap, and confirm the post appears on LinkedIn exactly as expected.
        </div>
      </div>`;
    return el;
  }
};
