export const slide = {
  render() {
    const el = document.createElement('div');

    const actions = [
      ['Claude Code', 'Writes the Python graphic script using your saved layout rules and topic'],
      ['Python / Pillow', 'Runs locally on your Mac — branded PNG generated and saved to your output folder'],
      ['Webhook POST', 'Claude automatically sends the metadata payload to your Google Apps Script URL'],
      ['Google Sheet', 'A new row appears in your content calendar with all 9 columns and status: pending'],
      ['Zapier', 'Detects the new pending row and fires the LinkedIn post action automatically'],
      ['LinkedIn', 'Your graphic and caption go live at the scheduled time — zero manual steps'],
    ];

    const actionRows = actions.map((item, i) => {
      const isLast = i === actions.length - 1;
      const actor = item[0];
      const desc = item[1];
      return '<div style="display:flex;gap:0;">'
        + '<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:46px;">'
        + '<div style="width:26px;height:26px;border-radius:50%;background:#CC0000;color:#fff;font-weight:800;'
        + 'font-size:0.72rem;display:flex;align-items:center;justify-content:center;z-index:1;">'
        + (i + 1)
        + '</div>'
        + (isLast ? '' : '<div style="width:2px;flex:1;background:#ebebeb;margin:4px 0;min-height:14px;"></div>')
        + '</div>'
        + '<div style="flex:1;padding:0 0 ' + (isLast ? '0' : '18px') + ' 12px;">'
        + '<div style="font-size:0.62rem;font-weight:800;letter-spacing:1px;color:#aaa;margin-bottom:2px;text-transform:uppercase;">'
        + actor
        + '</div>'
        + '<div style="color:#444;font-size:0.85rem;line-height:1.6;">' + desc + '</div>'
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:32px 24px;font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:28px;"></div>

        <div style="margin-bottom:12px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">AUTOMATION WORKFLOW</span>
        </div>

        <h2 style="font-size:2rem;font-weight:800;color:#1A1A1A;margin:0 0 10px;line-height:1.2;">Scheduled Task Automation Workflow</h2>
        <p style="color:#666;font-size:0.95rem;line-height:1.7;margin:0 0 24px;">Set it up once inside Claude Code. The full pipeline runs on your chosen schedule &mdash; no manual prompts needed after that.</p>

        <div style="font-size:0.68rem;font-weight:800;letter-spacing:1.5px;color:#aaa;margin-bottom:10px;text-transform:uppercase;">Creating a Scheduled Task in Claude Code</div>

        <div style="background:#0D0D0D;border-radius:12px;overflow:hidden;margin-bottom:28px;box-shadow:0 4px 20px rgba(0,0,0,0.18);">
          <div style="background:#1e1e1e;padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #2a2a2a;">
            <div style="width:12px;height:12px;border-radius:50%;background:#FF5F57;flex-shrink:0;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#FFBD2E;flex-shrink:0;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#28C840;flex-shrink:0;"></div>
            <span style="color:#666;font-size:0.72rem;font-family:monospace;margin-left:8px;">Terminal &mdash; zsh</span>
          </div>
          <div style="padding:18px 20px;font-family:monospace;font-size:0.79rem;line-height:1.85;">
            <div><span style="color:#28C840;">user@mac</span><span style="color:#888;"> ~ </span><span style="color:#fff;">$ claude</span></div>
            <div style="color:#555;margin:2px 0 10px;">&nbsp;</div>
            <div style="color:#aaa;margin-bottom:10px;">Claude Code &nbsp;&mdash;&nbsp; run <span style="color:#00D4AA;">/help</span> to see available commands</div>
            <div style="color:#fff;margin-bottom:10px;"><span style="color:#888;">&gt; </span>/schedule</div>
            <div style="color:#00D4AA;margin-bottom:10px;">&#10022; Creating new scheduled task&hellip;</div>
            <div style="background:#1a1a1a;border:1px solid #2e2e2e;border-radius:8px;padding:14px 16px;margin-bottom:12px;">
              <div style="margin-bottom:6px;"><span style="color:#888;">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#fff;">Daily LinkedIn Graphic</span></div>
              <div style="margin-bottom:6px;"><span style="color:#888;">Schedule &nbsp;&nbsp;</span><span style="color:#FFBD2E;">weekdays at 8:00 AM</span></div>
              <div style="margin-bottom:6px;"><span style="color:#888;">Instructions</span></div>
              <div style="padding-left:14px;color:#00D4AA;line-height:1.8;">
                Generate a social media graphic for small business owners.<br>
                Topic: [auto-generate a relevant AI or business tip]<br>
                Run the Python graphic script, save PNG to ~/output/graphics/<br>
                POST to: [YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL]<br>
                Caption: 2 sentences about the topic<br>
                Hashtags: #MPowerMyBiz #AITools #SmallBusiness #Automation
              </div>
            </div>
            <div style="color:#28C840;">&#10003; Task saved &mdash; Next run: Mon 8:00 AM &nbsp;<span style="color:#555;font-size:0.72rem;">(running on your Mac while it&rsquo;s on)</span></div>
          </div>
        </div>

        <div style="font-size:0.68rem;font-weight:800;letter-spacing:1.5px;color:#aaa;margin-bottom:14px;text-transform:uppercase;">What Happens Automatically After Each Run</div>
        <div style="border-top:1px solid #f5f5f5;padding-top:8px;margin-bottom:28px;">${actionRows}</div>

        <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:#1A1A1A;border-radius:10px;">
          <div style="width:3px;height:36px;background:#CC0000;border-radius:2px;flex-shrink:0;"></div>
          <p style="margin:0;font-size:0.95rem;font-weight:700;color:#fff;line-height:1.6;">You set the schedule once. The entire pipeline runs itself from there &mdash; graphic, sheet, post, done.</p>
        </div>

      </div>`;
    return el;
  }
};
