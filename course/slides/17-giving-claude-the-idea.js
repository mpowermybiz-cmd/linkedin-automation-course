export const slide = {
  render() {
    const el = document.createElement('div');
    const actions = [
      'Claude writes the Python graphic script with your saved layout rules',
      'Script runs automatically — branded PNG is generated and saved to your output folder',
      'Claude sends a POST request to your Google Sheet webhook',
      'A new row appears in your content calendar with status: pending',
      'Zapier detects the new row and posts directly to LinkedIn',
      'Your post goes live at the scheduled time — zero manual steps',
    ];
    const rows = actions.map((s, i) => {
      const num = i + 1;
      return `<div style="display:flex;gap:12px;align-items:center;padding:12px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <div style="width:24px;height:24px;border-radius:50%;background:#CC0000;color:#fff;font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${num}</div>
        <span style="color:#1A1A1A;font-size:0.95rem;">${s}</span>
      </div>`;
    }).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 6px;">Scheduled Task Automation Workflow</h2>
        <p style="color:#555;margin:0 0 20px;">Set it up once. Then let Claude Code run the full pipeline on a schedule — no manual prompts needed.</p>

        <div style="background:#0D0D0D;border-radius:12px;padding:22px 24px;margin-bottom:24px;">
          <div style="color:#888;font-size:0.75rem;margin-bottom:10px;letter-spacing:1px;">SCHEDULED TASK EXAMPLE</div>
          <p style="color:#00D4AA;font-family:monospace;font-size:0.95rem;line-height:1.7;margin:0;">"Every weekday at 8am: generate a social media graphic for a new AI Tools tip, post it to the content calendar, confirm the row was added."</p>
        </div>

        <h3 style="color:#1A1A1A;margin:0 0 12px;font-size:1rem;">What happens automatically after each run:</h3>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">${rows}</div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
          <div style="padding:16px;background:#f9f9f9;border-radius:10px;border-top:3px solid #1A1A1A;">
            <div style="font-weight:700;color:#1A1A1A;margin-bottom:8px;">&#128197; Set a Schedule</div>
            <div style="color:#555;font-size:0.88rem;line-height:1.7;">Use Claude Code&rsquo;s scheduled task feature to run the full pipeline daily, weekly, or on any cadence you choose.</div>
          </div>
          <div style="padding:16px;background:#fff5f5;border-radius:10px;border-top:3px solid #CC0000;">
            <div style="font-weight:700;color:#1A1A1A;margin-bottom:8px;">&#128203; Track in Your Sheet</div>
            <div style="color:#555;font-size:0.88rem;line-height:1.7;">Every run adds a row. Your content calendar builds itself. You can review, edit, or approve posts at any time.</div>
          </div>
        </div>

        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:16px 24px;text-align:center;font-weight:700;font-size:1.05rem;">
          You set the schedule once. The entire pipeline runs itself from there.
        </div>
      </div>`;
    return el;
  }
};
