export const slide = {
  render() {
    const el = document.createElement('div');

    const checks = [
      {
        actor: 'Step 1 — Verify',
        title: 'PNG file was created',
        detail: 'Open <code style="background:#f0f0f0;padding:1px 5px;border-radius:3px;font-size:0.78rem;">~/output/graphics/</code> on your Mac. A new PNG file should be there named by today\'s date + topic.',
        fix: 'Not there? Paste the error output from Claude Code back to it &mdash; it will rewrite and re-run the Python script automatically.',
      },
      {
        actor: 'Step 2 — Verify',
        title: 'Imgur link is in the webhook payload',
        detail: 'Claude Code should report an <strong>i.imgur.com</strong> URL in its output after the upload step. That URL is the <code style="background:#f0f0f0;padding:1px 5px;border-radius:3px;font-size:0.78rem;">image_url</code> sent to your Google Sheet.',
        fix: 'No Imgur link? Confirm your Claude Code instructions include the Imgur upload step &mdash; paste your instructions back to Claude Code and ask it to add it.',
      },
      {
        actor: 'Step 3 — Verify',
        title: 'Webhook was sent to Google Apps Script',
        detail: 'Claude Code should print a confirmation that the POST was sent and received. If you see a 200 response, the webhook hit your Apps Script URL successfully.',
        fix: 'Got an error? Open your Apps Script URL in a browser &mdash; if it 404s, re-deploy the Apps Script as a web app and update the URL in your Claude Code instructions.',
      },
      {
        actor: 'Step 4 — Verify',
        title: 'New row appeared in Google Sheet',
        detail: 'Open your content calendar Google Sheet. A new row should be at the bottom with all 9 columns filled and <strong style="color:#CC0000;">status: pending</strong>.',
        fix: 'No row? Check the Apps Script execution log (Extensions &rarr; Apps Script &rarr; Executions) for errors in the doPost function.',
      },
      {
        actor: 'Step 5 — Verify',
        title: 'Zapier detected the new row',
        detail: 'Open Zapier &rarr; your Zap &rarr; Task History. It should show a successful trigger for the new row within a few minutes of it being added.',
        fix: 'Zapier didn\'t fire? Confirm the trigger is set to <em>New Spreadsheet Row</em> and the filter checks that status = pending. Try clicking "Run Zap" manually to test.',
      },
      {
        actor: 'Step 6 — Verify',
        title: 'LinkedIn post is live',
        detail: 'Visit your LinkedIn profile. The graphic + caption should be posted and visible within 1&ndash;5 minutes of Zapier firing.',
        fix: 'Post missing? Check that Zapier\'s LinkedIn action is connected to the correct account and that the image_url field is mapped to the <em>Media URL</em> field in the LinkedIn action.',
      },
    ];

    const checkRows = checks.map((c, i) => {
      const isLast = i === checks.length - 1;
      const fixHtml = c.fix
        ? '<div style="display:flex;gap:7px;align-items:flex-start;margin-top:7px;background:#fff5f5;border-left:2px solid #CC0000;border-radius:0 5px 5px 0;padding:6px 10px;">'
          + '<span style="color:#CC0000;font-size:0.72rem;font-weight:800;flex-shrink:0;margin-top:1px;">FIX</span>'
          + '<span style="color:#7a1a1a;font-size:0.79rem;line-height:1.6;">' + c.fix + '</span>'
          + '</div>'
        : '';
      return '<div style="display:flex;gap:0;">'
        + '<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:46px;">'
        + '<div style="width:28px;height:28px;border-radius:50%;background:#CC0000;color:#fff;font-weight:800;'
        + 'font-size:0.72rem;display:flex;align-items:center;justify-content:center;z-index:1;">'
        + (i + 1)
        + '</div>'
        + (isLast ? '' : '<div style="width:2px;flex:1;background:#ebebeb;margin:5px 0;min-height:16px;"></div>')
        + '</div>'
        + '<div style="flex:1;padding:0 0 ' + (isLast ? '0' : '22px') + ' 13px;">'
        + '<div style="font-size:0.62rem;font-weight:800;letter-spacing:1px;color:#aaa;margin-bottom:2px;text-transform:uppercase;">' + c.actor + '</div>'
        + '<div style="font-weight:700;color:#1A1A1A;font-size:0.9rem;margin-bottom:4px;">' + c.title + '</div>'
        + '<div style="color:#555;font-size:0.83rem;line-height:1.65;">' + c.detail + '</div>'
        + fixHtml
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:32px 24px;font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:28px;"></div>

        <div style="margin-bottom:12px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">FIRST RUN &amp; TEST</span>
        </div>

        <h2 style="font-size:2rem;font-weight:800;color:#1A1A1A;margin:0 0 10px;line-height:1.2;">Let&rsquo;s Run the Automation Together</h2>
        <p style="color:#666;font-size:0.95rem;line-height:1.7;margin:0 0 24px;">Your stack is set up. Now let&rsquo;s fire the pipeline for the first time, confirm every step worked, and troubleshoot anything that doesn&rsquo;t look right.</p>

        <div style="font-size:0.68rem;font-weight:800;letter-spacing:1.5px;color:#aaa;margin-bottom:10px;text-transform:uppercase;">Trigger Your First Run in Claude Code</div>

        <div style="background:#0D0D0D;border-radius:12px;overflow:hidden;margin-bottom:28px;box-shadow:0 4px 20px rgba(0,0,0,0.18);">
          <div style="background:#1e1e1e;padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #2a2a2a;">
            <div style="width:12px;height:12px;border-radius:50%;background:#FF5F57;flex-shrink:0;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#FFBD2E;flex-shrink:0;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#28C840;flex-shrink:0;"></div>
            <span style="color:#666;font-size:0.72rem;font-family:monospace;margin-left:8px;">Terminal &mdash; zsh</span>
          </div>
          <div style="padding:18px 20px;font-family:monospace;font-size:0.79rem;line-height:1.9;">
            <div><span style="color:#28C840;">user@mac</span><span style="color:#888;"> ~ </span><span style="color:#fff;">$ claude</span></div>
            <div style="color:#aaa;margin:4px 0 10px;">Claude Code &nbsp;&mdash;&nbsp; type <span style="color:#00D4AA;">/help</span> for commands</div>
            <div style="color:#fff;margin-bottom:10px;"><span style="color:#888;">&gt; </span>Run my LinkedIn content automation now</div>
            <div style="color:#00D4AA;margin-bottom:8px;">&#10022; Daily LinkedIn Graphic &mdash; starting run&hellip;</div>
            <div style="padding-left:4px;line-height:2;">
              <div><span style="color:#28C840;">&#10003;</span><span style="color:#888;"> Python script written &amp; executed</span></div>
              <div><span style="color:#28C840;">&#10003;</span><span style="color:#888;"> PNG saved &rarr; </span><span style="color:#fff;">~/output/graphics/2025-05-28_ai-tools.png</span></div>
              <div><span style="color:#28C840;">&#10003;</span><span style="color:#888;"> Uploaded to Imgur &rarr; </span><span style="color:#00D4AA;">https://i.imgur.com/xK9mP2a.png</span></div>
              <div><span style="color:#28C840;">&#10003;</span><span style="color:#888;"> Webhook sent to Google Apps Script</span></div>
              <div><span style="color:#28C840;">&#10003;</span><span style="color:#888;"> New row added to Google Sheet &mdash; </span><span style="color:#FFBD2E;">status: pending</span></div>
            </div>
            <div style="color:#28C840;margin-top:8px;">&#10003; Run complete &mdash; Zapier will detect the pending row and post to LinkedIn</div>
          </div>
        </div>

        <div style="font-size:0.68rem;font-weight:800;letter-spacing:1.5px;color:#aaa;margin-bottom:14px;text-transform:uppercase;">Verify Each Step &mdash; Use the FIX if Something&rsquo;s Off</div>
        <div style="border-top:1px solid #f5f5f5;padding-top:8px;margin-bottom:28px;">${checkRows}</div>

        <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:#1A1A1A;border-radius:10px;">
          <div style="width:3px;height:36px;background:#CC0000;border-radius:2px;flex-shrink:0;"></div>
          <p style="margin:0;font-size:0.95rem;font-weight:700;color:#fff;line-height:1.6;">Something breaks &mdash; screenshot it and paste it to Claude Code. It will diagnose, fix, and re-run. That&rsquo;s what it&rsquo;s there for.</p>
        </div>

      </div>`;
    return el;
  }
};
