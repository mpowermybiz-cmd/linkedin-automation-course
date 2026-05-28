export const slide = {
  render() {
    const el = document.createElement('div');

    // ── ui helpers ──────────────────────────────────────────────────────────

    const zapBar = (body) =>
      '<div style="background:#fff;border:1px solid #ddd;border-radius:8px;overflow:hidden;font-size:0.77rem;">'
      + '<div style="background:#1D1D1D;padding:6px 10px;display:flex;align-items:center;gap:6px;">'
      + '<div style="display:flex;gap:3px;">'
      + '<div style="width:7px;height:7px;border-radius:50%;background:#ff5f57;"></div>'
      + '<div style="width:7px;height:7px;border-radius:50%;background:#ffbd2e;"></div>'
      + '<div style="width:7px;height:7px;border-radius:50%;background:#28c840;"></div>'
      + '</div>'
      + '<div style="background:rgba(255,255,255,0.12);border-radius:3px;padding:2px 8px;color:rgba(255,255,255,0.7);font-size:0.7rem;flex:1;">zapier.com</div>'
      + '</div>'
      + '<div style="padding:10px 12px;">' + body + '</div>'
      + '</div>';

    const btn = (text, bg, color) =>
      '<div style="display:inline-block;background:' + bg + ';color:' + color + ';font-size:0.75rem;font-weight:700;padding:5px 12px;border-radius:5px;">' + text + '</div>';

    const dropdown = (label, value) =>
      '<div style="margin-bottom:6px;">'
      + '<div style="color:#666;font-size:0.7rem;margin-bottom:2px;">' + label + '</div>'
      + '<div style="border:1px solid #ccc;border-radius:4px;padding:4px 8px;background:#fff;display:flex;justify-content:space-between;align-items:center;">'
      + '<span style="font-size:0.75rem;color:#1A1A1A;">' + value + '</span>'
      + '<span style="color:#aaa;font-size:0.68rem;">&#9660;</span>'
      + '</div>'
      + '</div>';

    const fieldRow = (label, mapped, color) =>
      '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">'
      + '<div style="color:#666;font-size:0.7rem;min-width:90px;flex-shrink:0;">' + label + '</div>'
      + '<div style="background:' + color + ';color:#fff;font-size:0.7rem;font-weight:600;padding:2px 9px;border-radius:12px;">' + mapped + '</div>'
      + '</div>';

    const tip = (text) =>
      '<div style="margin-top:8px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 6px 6px 0;padding:7px 12px;font-size:0.79rem;color:#7a5900;line-height:1.5;">&#128161; ' + text + '</div>';

    // ── step data ────────────────────────────────────────────────────────────

    const steps = [
      {
        num: 1,
        title: 'Log in to Zapier &amp; create a new Zap',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Go to <a href="https://zapier.com" target="_blank" style="color:#FF4A00;font-weight:600;text-decoration:none;">zapier.com</a> and sign in. '
          + 'In the top nav, click the orange <strong style="color:#1A1A1A;">+ Create</strong> button, then select <strong style="color:#1A1A1A;">Zaps</strong> from the dropdown.'
          + '</div>'
          + tip('No Zapier account yet? Sign up free at zapier.com — no credit card needed to get started.'),
        mockup: zapBar(
          '<div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #f0f0f0;margin-bottom:8px;">'
          + '<div style="font-weight:700;color:#1A1A1A;font-size:0.8rem;">My Zaps</div>'
          + btn('+ Create &#9660;', '#FF4A00', '#fff')
          + '</div>'
          + '<div style="background:#fff8f5;border:1px solid #FF4A00;border-radius:6px;padding:6px 10px;">'
          + '<div style="font-size:0.7rem;font-weight:700;color:#FF4A00;margin-bottom:4px;">Create new...</div>'
          + '<div style="font-size:0.75rem;color:#1A1A1A;padding:4px 6px;background:#fff3ee;border-radius:4px;margin-bottom:3px;font-weight:700;">&#9889; Zaps</div>'
          + '<div style="font-size:0.75rem;color:#aaa;padding:4px 6px;">Tables</div>'
          + '<div style="font-size:0.75rem;color:#aaa;padding:4px 6px;">Interfaces</div>'
          + '</div>'
        ),
      },
      {
        num: 2,
        title: 'Set your Trigger app to Google Sheets',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'In the Trigger step, click <strong style="color:#1A1A1A;">Choose App</strong>. '
          + 'Type <strong style="color:#1A1A1A;">Google Sheets</strong> in the search box and select it. '
          + 'When prompted, connect your Google account &mdash; this gives Zapier read access to your spreadsheets.'
          + '</div>'
          + tip('Connect the same Google account that owns your Social Media Content Calendar spreadsheet.'),
        mockup: zapBar(
          '<div style="font-size:0.7rem;font-weight:700;color:#888;margin-bottom:6px;letter-spacing:0.5px;">TRIGGER &mdash; Step 1</div>'
          + '<div style="border:1px solid #ddd;border-radius:5px;padding:5px 8px;display:flex;align-items:center;gap:5px;margin-bottom:8px;background:#fafafa;">'
          + '<span style="color:#aaa;font-size:0.72rem;">&#128269;</span>'
          + '<span style="color:#aaa;font-size:0.75rem;">Google Sheets</span>'
          + '</div>'
          + '<div style="display:flex;align-items:center;gap:8px;padding:7px 9px;background:#e8f5e9;border:2px solid #0F9D58;border-radius:6px;">'
          + '<div style="width:24px;height:24px;background:#0F9D58;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<span style="color:#fff;font-size:0.55rem;font-weight:800;">GS</span>'
          + '</div>'
          + '<div><div style="font-size:0.75rem;font-weight:700;color:#1A1A1A;">Google Sheets</div>'
          + '<div style="font-size:0.68rem;color:#555;">Spreadsheets &amp; data</div></div>'
          + '<span style="margin-left:auto;color:#0F9D58;font-weight:700;">&#10003;</span>'
          + '</div>'
        ),
      },
      {
        num: 3,
        title: 'Set event to &ldquo;New Spreadsheet Row&rdquo; &amp; pick your sheet',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'For <strong style="color:#1A1A1A;">Event</strong> select <strong style="color:#1A1A1A;">New Spreadsheet Row</strong>. '
          + 'Then pick your <strong style="color:#1A1A1A;">Spreadsheet</strong> (Social Media Content Calendar) and set <strong style="color:#1A1A1A;">Worksheet</strong> to <em>Sheet1</em>.'
          + '</div>'
          + tip('Make sure your sheet already has at least one data row — Zapier needs a sample to detect your column names.'),
        mockup: zapBar(
          dropdown('Event', 'New Spreadsheet Row')
          + dropdown('Drive', 'My Google Drive')
          + dropdown('Spreadsheet', 'Social Media Content Calendar')
          + dropdown('Worksheet', 'Sheet1')
        ),
      },
      {
        num: 4,
        title: 'Test the Trigger &mdash; confirm your columns appear',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Click <strong style="color:#1A1A1A;">Test trigger</strong>. Zapier will pull the most recent row from your sheet. '
          + 'You should see all your columns &mdash; <em>date, title, caption, hashtags, image_url, status</em> &mdash; filled in with real values.'
          + '</div>'
          + tip('If the test returns empty, add one row of sample data to your Google Sheet first, then re-run the test.'),
        mockup: zapBar(
          btn('Test trigger', '#FF4A00', '#fff')
          + '<div style="margin-top:8px;background:#f0fff4;border:1px solid #28a745;border-radius:5px;padding:8px 10px;">'
          + '<div style="font-size:0.72rem;font-weight:700;color:#28a745;margin-bottom:6px;">&#10003; We found a record!</div>'
          + '<div style="font-size:0.7rem;color:#555;line-height:1.9;">'
          + '<div><span style="color:#aaa;">date</span> &nbsp; 2026-05-27</div>'
          + '<div><span style="color:#aaa;">title</span> &nbsp; AI Tip of the Day</div>'
          + '<div><span style="color:#aaa;">caption</span> &nbsp; Here is how AI saves time...</div>'
          + '<div><span style="color:#aaa;">status</span> &nbsp;<span style="background:#fff3cd;color:#856404;padding:1px 6px;border-radius:3px;font-size:0.68rem;font-weight:700;">pending</span></div>'
          + '</div>'
          + '</div>'
        ),
      },
      {
        num: 5,
        title: 'Add a Filter: only continue if status = &ldquo;pending&rdquo;',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add an Action step, search for <strong style="color:#1A1A1A;">Filter by Zapier</strong>, and set the condition: '
          + '<em>status</em> &rarr; <strong style="color:#1A1A1A;">Text exactly matches</strong> &rarr; <code style="background:#f0f0f0;padding:1px 5px;border-radius:3px;font-size:0.8rem;">pending</code>. '
          + 'This ensures only fresh, unposted rows trigger the LinkedIn action.'
          + '</div>'
          + tip('This filter step is critical. Without it, Zapier could re-fire on rows that were already posted.'),
        mockup: zapBar(
          '<div style="font-size:0.7rem;font-weight:700;color:#888;margin-bottom:6px;letter-spacing:0.5px;">FILTER &mdash; Only continue if...</div>'
          + '<div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;margin-bottom:8px;">'
          + '<div style="border:1px solid #ccc;border-radius:4px;padding:3px 8px;font-size:0.72rem;color:#1A1A1A;background:#fff;">status</div>'
          + '<div style="border:1px solid #ccc;border-radius:4px;padding:3px 8px;font-size:0.72rem;color:#1A1A1A;background:#fff;">Text exactly matches</div>'
          + '<div style="border:2px solid #FF4A00;border-radius:4px;padding:3px 8px;font-size:0.72rem;color:#FF4A00;font-weight:700;background:#fff8f5;">pending</div>'
          + '</div>'
          + '<div style="background:#f0fff4;border-radius:4px;padding:5px 8px;font-size:0.7rem;color:#28a745;font-weight:600;">&#10003; Zap continues only when status = &ldquo;pending&rdquo;</div>'
        ),
      },
      {
        num: 6,
        title: 'Add the LinkedIn Action &amp; connect your account',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add another Action step. Search for <strong style="color:#1A1A1A;">LinkedIn</strong> and connect your account. '
          + 'Select event: <strong style="color:#1A1A1A;">Create Share Update</strong> for your personal profile, or <strong style="color:#1A1A1A;">Create Company Update</strong> for a business page.'
          + '</div>'
          + tip('Connect with the LinkedIn profile you want posts to appear on. Zapier will post directly on your behalf.'),
        mockup: zapBar(
          '<div style="font-size:0.7rem;font-weight:700;color:#888;margin-bottom:6px;letter-spacing:0.5px;">ACTION &mdash; Step 3</div>'
          + '<div style="display:flex;align-items:center;gap:8px;padding:7px 9px;background:#e8f0fc;border:2px solid #0A66C2;border-radius:6px;margin-bottom:8px;">'
          + '<div style="width:24px;height:24px;background:#0A66C2;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<span style="color:#fff;font-size:0.65rem;font-weight:900;font-style:italic;">in</span>'
          + '</div>'
          + '<div><div style="font-size:0.75rem;font-weight:700;color:#1A1A1A;">LinkedIn</div>'
          + '<div style="font-size:0.68rem;color:#555;">Professional network</div></div>'
          + '<span style="margin-left:auto;color:#0A66C2;font-weight:700;">&#10003;</span>'
          + '</div>'
          + dropdown('Event', 'Create Share Update')
        ),
      },
      {
        num: 7,
        title: 'Map your sheet columns to the LinkedIn post fields',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;margin-bottom:6px;">'
          + 'In the LinkedIn action, connect your sheet columns to each post field:'
          + '</div>'
          + '<div style="font-size:0.82rem;color:#555;line-height:1.9;">'
          + '&bull; <strong style="color:#1A1A1A;">Text (Caption)</strong> &rarr; your <em>caption</em> column<br>'
          + '&bull; <strong style="color:#1A1A1A;">Share URL</strong> &rarr; your <em>source_url</em> column<br>'
          + '&bull; <strong style="color:#1A1A1A;">Image URL</strong> &rarr; your <em>image_url</em> column'
          + '</div>'
          + tip('The image_url is the direct link to your PNG graphic — Zapier will attach it to the post automatically.'),
        mockup: zapBar(
          '<div style="font-size:0.7rem;font-weight:700;color:#888;margin-bottom:8px;letter-spacing:0.5px;">FIELD MAPPING</div>'
          + fieldRow('Text / Caption', 'caption', '#0A66C2')
          + fieldRow('Share URL', 'source_url', '#0A66C2')
          + fieldRow('Image URL', 'image_url', '#0A66C2')
          + fieldRow('Visibility', 'PUBLIC', '#28a745')
        ),
      },
      {
        num: 8,
        title: 'Publish your Zap &amp; turn it ON',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Click <strong style="color:#1A1A1A;">Publish Zap</strong> in the top right corner. '
          + 'Once published, toggle the Zap to <strong style="color:#28a745;">ON</strong>. '
          + 'From this point forward, every new row with status <em>pending</em> becomes a live LinkedIn post automatically.'
          + '</div>'
          + tip('Run a full end-to-end test: trigger your Claude Code scheduled task, watch the row appear in your sheet, and confirm the post goes live on LinkedIn.'),
        mockup: zapBar(
          '<div style="text-align:center;padding:4px 0 10px;">'
          + btn('&#9654;&nbsp; Publish Zap', '#FF4A00', '#fff')
          + '</div>'
          + '<div style="border-top:1px solid #f0f0f0;padding-top:8px;display:flex;align-items:center;justify-content:space-between;">'
          + '<div><div style="font-size:0.75rem;font-weight:700;color:#1A1A1A;">Your Zap is live</div>'
          + '<div style="font-size:0.7rem;color:#888;">Watching for new rows...</div></div>'
          + '<div style="background:#28a745;border-radius:20px;padding:4px 12px;display:flex;align-items:center;gap:5px;">'
          + '<div style="width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,0.9);"></div>'
          + '<span style="color:#fff;font-size:0.72rem;font-weight:700;">ON</span>'
          + '</div>'
          + '</div>'
        ),
      },
    ];

    // ── render cards ─────────────────────────────────────────────────────────

    const cards = steps.map((s) => {
      return '<div style="background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);overflow:hidden;margin-bottom:16px;">'
        + '<div style="display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:2px solid #f5f5f5;">'
        + '<div style="width:32px;height:32px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;font-size:0.88rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s.num + '</div>'
        + '<strong style="color:#1A1A1A;font-size:0.93rem;">' + s.title + '</strong>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">'
        + '<div style="padding:14px 18px;border-right:1px solid #f5f5f5;">' + s.body + '</div>'
        + '<div style="padding:14px 18px;background:#f9f9f9;">' + s.mockup + '</div>'
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <div style="max-width:860px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 4px;">Setting Up Zapier to Post to LinkedIn</h2>
        <p style="color:#555;margin:0 0 14px;">8 steps. Set it up once &mdash; then it fires every time a new row hits your sheet. <strong style="color:#1A1A1A;">Zero manual steps after this.</strong></p>
        <div style="display:flex;gap:8px;margin-bottom:22px;flex-wrap:wrap;">
          <span style="background:#fff8f5;border:1px solid #FF4A00;color:#FF4A00;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">Free Tier Works</span>
          <span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">~15 min setup</span>
          <span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">Done Once</span>
        </div>
        ${cards}
        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:14px 20px;text-align:center;font-weight:700;font-size:0.95rem;">
          Once this Zap is ON, every new row in your sheet becomes a live LinkedIn post &mdash; automatically.
        </div>
      </div>`;
    return el;
  }
};
