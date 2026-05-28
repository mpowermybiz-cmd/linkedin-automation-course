export const slide = {
  render() {
    const el = document.createElement('div');
    const steps = [
      'Log into Zapier and click <strong>Create Zap</strong>',
      'Trigger: <strong>Google Sheets - New Spreadsheet Row</strong>',
      'Connect your Google account and select your LinkedIn Content Calendar sheet',
      'Select the worksheet tab (usually Sheet1)',
      'Test the trigger — Zapier pulls the most recent row to confirm it works',
      'Action: <strong>Buffer - Add to Queue</strong>',
      'Map fields: Post text = caption column, Image = image_url column, Profile = your LinkedIn page',
      'Turn on the Zap',
    ];
    const rows = steps.map((s, idx) => {
      const num = idx + 1;
      return `<div style="display:flex;gap:14px;align-items:flex-start;padding:12px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <div style="width:26px;height:26px;border-radius:50%;background:#FF6B35;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.85rem;">${num}</div>
        <span style="color:#333;line-height:1.6;">${s}</span>
      </div>`;
    }).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">Setting Up the Zapier Trigger</h2>
        <p style="color:#555;margin:0 0 20px;">Zapier watches your Google Sheet and fires Buffer automatically when a new row appears.</p>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">${rows}</div>
        <div style="background:#fff3cd;border-left:4px solid #F5A623;border-radius:8px;padding:14px 18px;">
          <strong>Pro tip:</strong> Add a Filter step — only continue if status column equals "pending". This prevents re-posting rows already handled.
        </div>
      </div>`;
    return el;
  }
};
