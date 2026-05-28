export const slide = {
  render() {
    const el = document.createElement('div');

    const browserShell = (url, body) => '<div style="border-radius:8px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.18);border:1px solid #ddd;">'
      + '<div style="background:#f1f3f4;padding:5px 8px;display:flex;align-items:center;gap:6px;">'
      + '<div style="display:flex;gap:3px;"><div style="width:8px;height:8px;border-radius:50%;background:#ff5f57;"></div><div style="width:8px;height:8px;border-radius:50%;background:#ffbd2e;"></div><div style="width:8px;height:8px;border-radius:50%;background:#28c840;"></div></div>'
      + '<div style="background:#fff;border-radius:3px;padding:2px 8px;font-size:0.62rem;color:#666;flex:1;">' + url + '</div>'
      + '</div>' + body + '</div>';

    const tip = (text) => '<div style="margin-top:10px;background:#fff9c4;border-left:3px solid #f5c200;border-radius:4px;padding:8px 12px;font-size:0.8rem;color:#555;line-height:1.5;">'
      + '<strong style="color:#1A1A1A;">Pro tip:</strong> ' + text + '</div>';

    const subStep = (text) => '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px;">'
      + '<div style="width:18px;height:18px;border-radius:50%;background:#f5f5f5;border:2px solid #CC0000;flex-shrink:0;margin-top:1px;"></div>'
      + '<span style="color:#444;font-size:0.85rem;line-height:1.5;">' + text + '</span></div>';

    const mockup1 = browserShell('sheets.google.com/new',
      '<div style="background:#fff;padding:8px 10px;border-bottom:1px solid #e8e8e8;display:flex;align-items:center;gap:8px;">'
      + '<div style="width:18px;height:18px;background:#0F9D58;border-radius:3px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">'
      + '<div style="width:10px;height:8px;display:grid;grid-template-columns:1fr 1fr;gap:1px;">'
      + '<div style="background:#fff;border-radius:0.5px;"></div><div style="background:#fff;border-radius:0.5px;"></div>'
      + '<div style="background:rgba(255,255,255,0.6);border-radius:0.5px;"></div><div style="background:rgba(255,255,255,0.6);border-radius:0.5px;"></div>'
      + '</div></div>'
      + '<div style="font-size:0.78rem;font-weight:600;color:#1A1A1A;">Social Media Content Calendar</div>'
      + '</div>'
      + '<div style="background:#fff;padding:10px;display:grid;grid-template-columns:24px repeat(4,1fr);gap:1px;background:#e0e0e0;">'
      + '<div style="background:#f8f9fa;padding:3px;"></div>'
      + '<div style="background:#f8f9fa;padding:3px 5px;font-size:0.58rem;color:#666;font-weight:600;text-align:center;">A</div>'
      + '<div style="background:#f8f9fa;padding:3px 5px;font-size:0.58rem;color:#666;font-weight:600;text-align:center;">B</div>'
      + '<div style="background:#f8f9fa;padding:3px 5px;font-size:0.58rem;color:#666;font-weight:600;text-align:center;">C</div>'
      + '<div style="background:#f8f9fa;padding:3px 5px;font-size:0.58rem;color:#CC0000;font-weight:600;text-align:center;">...</div>'
      + '<div style="background:#f8f9fa;padding:3px;font-size:0.58rem;color:#999;text-align:center;">1</div>'
      + '<div style="background:#fff;padding:5px;"></div><div style="background:#fff;padding:5px;"></div>'
      + '<div style="background:#fff;padding:5px;"></div><div style="background:#fff;padding:5px;"></div>'
      + '<div style="background:#f8f9fa;padding:3px;font-size:0.58rem;color:#999;text-align:center;">2</div>'
      + '<div style="background:#fff;padding:5px;"></div><div style="background:#fff;padding:5px;"></div>'
      + '<div style="background:#fff;padding:5px;"></div><div style="background:#fff;padding:5px;"></div>'
      + '</div>');

    const colHeaders = ['date','title','caption','hashtags','image_url','source','src_url','quote','status'];
    const colCells = colHeaders.map((c) => '<div style="background:#e8f4e8;padding:3px 4px;font-size:0.55rem;font-weight:700;color:#0F9D58;text-align:center;border-right:1px solid #e0e0e0;">' + c + '</div>').join('');
    const colLetters = ['A','B','C','D','E','F','G','H','I'].map((c) => '<div style="background:#f8f9fa;padding:3px 4px;font-size:0.58rem;color:#666;font-weight:600;text-align:center;border-right:1px solid #e0e0e0;">' + c + '</div>').join('');
    const mockup2 = browserShell('Social Media Content Calendar',
      '<div style="background:#0F9D58;padding:5px 10px;font-size:0.7rem;color:#fff;font-weight:600;">Row 1 = Your Column Headers</div>'
      + '<div style="overflow-x:auto;background:#fff;">'
      + '<div style="display:grid;grid-template-columns:repeat(9,minmax(52px,1fr));border-bottom:1px solid #e0e0e0;min-width:380px;">'
      + colLetters + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(9,minmax(52px,1fr));min-width:380px;">'
      + colCells + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(9,minmax(52px,1fr));min-width:380px;">'
      + Array(9).fill('<div style="background:#fff;padding:6px 4px;border-right:1px solid #f0f0f0;border-top:1px solid #f0f0f0;"></div>').join('')
      + '</div></div>');

    const mockup3 = browserShell('sheets.google.com',
      '<div style="background:#fff;border-bottom:1px solid #e8e8e8;padding:0;">'
      + '<div style="display:flex;align-items:center;padding:4px 8px;gap:2px;">'
      + '<div style="padding:4px 8px;font-size:0.7rem;color:#666;border-radius:3px;">File</div>'
      + '<div style="padding:4px 8px;font-size:0.7rem;color:#666;border-radius:3px;">Edit</div>'
      + '<div style="padding:4px 8px;font-size:0.7rem;color:#666;border-radius:3px;">View</div>'
      + '<div style="padding:4px 8px;font-size:0.7rem;color:#1a73e8;font-weight:700;border-radius:3px;background:#e8f0fe;">Extensions &#9660;</div>'
      + '</div>'
      + '<div style="margin-left:108px;background:#fff;border:1px solid #e0e0e0;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,0.12);display:inline-block;min-width:160px;">'
      + '<div style="padding:8px 14px;font-size:0.72rem;background:#e8f0fe;color:#1a73e8;font-weight:700;border-bottom:1px solid #e0e0e0;">&#9654; Apps Script</div>'
      + '<div style="padding:7px 14px;font-size:0.72rem;color:#999;">Add-ons</div>'
      + '<div style="padding:7px 14px;font-size:0.72rem;color:#999;">Macros</div>'
      + '</div></div>');

    const mockup4 = '<div style="border-radius:8px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.18);border:1px solid #333;">'
      // top chrome bar
      + '<div style="background:#1f1f1f;padding:5px 10px;display:flex;align-items:center;gap:4px;border-bottom:1px solid #333;">'
      + '<div style="font-size:0.62rem;color:#888;padding:3px 7px;border-radius:3px;">File</div>'
      + '<div style="font-size:0.62rem;color:#888;padding:3px 7px;border-radius:3px;">Edit</div>'
      + '<div style="font-size:0.62rem;color:#888;padding:3px 7px;border-radius:3px;">View</div>'
      + '<div style="font-size:0.62rem;color:#fff;padding:3px 7px;border-radius:3px;background:#CC0000;font-weight:700;position:relative;">Run &#9660;</div>'
      + '<div style="font-size:0.62rem;color:#888;padding:3px 7px;border-radius:3px;">Deploy</div>'
      + '</div>'
      // Run dropdown open
      + '<div style="background:#2d2d2d;border-bottom:1px solid #444;padding:4px 0;">'
      + '<div style="padding:5px 14px;font-size:0.68rem;color:#ccc;display:flex;align-items:center;justify-content:space-between;">'
      + '<span>Run function</span><span style="color:#666;">&#9654;</span>'
      + '</div>'
      + '<div style="padding:4px 14px 4px 24px;font-size:0.68rem;color:#00D4AA;font-weight:700;background:rgba(0,212,170,0.1);">doPost</div>'
      + '<div style="height:1px;background:#444;margin:3px 0;"></div>'
      + '<div style="padding:5px 14px;font-size:0.68rem;color:#888;">Manage triggers</div>'
      + '</div>'
      // execution log panel
      + '<div style="background:#0D0D0D;padding:10px 12px;">'
      + '<div style="font-size:0.65rem;color:#666;font-weight:700;letter-spacing:0.8px;margin-bottom:7px;border-bottom:1px solid #222;padding-bottom:5px;">EXECUTION LOG</div>'
      + '<div style="font-family:monospace;font-size:0.66rem;line-height:1.8;">'
      + '<div style="color:#888;">11:05:32 AM &nbsp; <span style="color:#79C0FF;">Notice</span> &nbsp; Execution started</div>'
      + '<div style="color:#888;">11:05:32 AM &nbsp; <span style="color:#00D4AA;">Info</span> &nbsp;&nbsp;&nbsp; Row appended to sheet</div>'
      + '<div style="color:#888;">11:05:33 AM &nbsp; <span style="color:#28a745;">Notice</span> &nbsp; Execution completed</div>'
      + '<div style="margin-top:6px;display:flex;align-items:center;gap:6px;">'
      + '<div style="width:7px;height:7px;border-radius:50%;background:#28a745;flex-shrink:0;"></div>'
      + '<span style="color:#28a745;font-weight:700;font-size:0.68rem;">No errors &mdash; your webhook is working!</span>'
      + '</div>'
      + '</div></div></div>';

    const mockup5 = '<div style="border-radius:8px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.18);border:1px solid #e0e0e0;">'
      + '<div style="background:#1a73e8;padding:8px 14px;color:#fff;font-size:0.78rem;font-weight:700;">New Deployment</div>'
      + '<div style="background:#fff;padding:14px;">'
      + '<div style="margin-bottom:10px;">'
      + '<div style="font-size:0.68rem;color:#555;margin-bottom:4px;font-weight:600;">Type</div>'
      + '<div style="border:1px solid #1a73e8;border-radius:4px;padding:5px 10px;font-size:0.7rem;color:#1a73e8;background:#e8f0fe;font-weight:600;">Web App</div>'
      + '</div>'
      + '<div style="margin-bottom:10px;">'
      + '<div style="font-size:0.68rem;color:#555;margin-bottom:4px;font-weight:600;">Execute as</div>'
      + '<div style="border:1px solid #e0e0e0;border-radius:4px;padding:5px 10px;font-size:0.7rem;color:#333;">Me (your-email@gmail.com)</div>'
      + '</div>'
      + '<div style="margin-bottom:14px;">'
      + '<div style="font-size:0.68rem;color:#555;margin-bottom:4px;font-weight:600;">Who has access</div>'
      + '<div style="border:1px solid #e0e0e0;border-radius:4px;padding:5px 10px;font-size:0.7rem;color:#333;">Anyone</div>'
      + '</div>'
      + '<div style="background:#1a73e8;color:#fff;text-align:center;padding:7px;border-radius:4px;font-size:0.75rem;font-weight:700;">Deploy</div>'
      + '</div></div>';

    const mockup6 = '<div style="border-radius:8px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,0.18);border:1px solid #e0e0e0;">'
      + '<div style="background:#34a853;padding:6px 12px;color:#fff;font-size:0.72rem;font-weight:700;">Deployment Complete!</div>'
      + '<div style="background:#fff;padding:14px;">'
      + '<div style="font-size:0.68rem;color:#555;margin-bottom:6px;font-weight:600;">Web App URL (copy this NOW)</div>'
      + '<div style="display:flex;gap:6px;align-items:center;margin-bottom:10px;">'
      + '<div style="flex:1;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:4px;padding:5px 8px;font-size:0.62rem;color:#1a73e8;font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">https://script.google.com/macros/s/ABC.../exec</div>'
      + '<div style="background:#CC0000;color:#fff;padding:5px 10px;border-radius:4px;font-size:0.68rem;font-weight:700;white-space:nowrap;">Copy</div>'
      + '</div>'
      + '<div style="background:#fff3cd;border-radius:4px;padding:7px 10px;font-size:0.68rem;color:#856404;">'
      + 'This URL only shows once. Paste it somewhere safe before closing!</div>'
      + '</div></div>';

    const steps = [
      {
        num: '1', title: 'Create Your Spreadsheet', time: '30 seconds',
        intro: 'Head to <strong>sheets.google.com</strong> and start a fresh spreadsheet.',
        subs: [
          'Go to <strong>sheets.google.com</strong> &rarr; click the big <strong>+</strong> to create a blank sheet',
          'Click the title at the top (it says "Untitled spreadsheet")',
          'Rename it: <strong>Social Media Content Calendar</strong>',
          'Hit Enter to save the name',
        ],
        mockup: mockup1,
        tipText: 'Keep this tab open the whole time &mdash; you&rsquo;ll be coming back to it.',
      },
      {
        num: '2', title: 'Add Your 9 Column Headers', time: '1 minute',
        intro: 'Click cell <strong>A1</strong> and type these headers exactly. Order matters!',
        subs: [
          '<strong>A1:</strong> date &nbsp; <strong>B1:</strong> title &nbsp; <strong>C1:</strong> caption',
          '<strong>D1:</strong> hashtags &nbsp; <strong>E1:</strong> image_url',
          '<strong>F1:</strong> source &nbsp; <strong>G1:</strong> source_url',
          '<strong>H1:</strong> quote &nbsp; <strong>I1:</strong> status',
        ],
        mockup: mockup2,
        tipText: 'Use all lowercase, no spaces. The webhook script uses these exact names to match data.',
      },
      {
        num: '3', title: 'Open Apps Script', time: '10 seconds',
        intro: 'Still in your spreadsheet &mdash; click <strong>Extensions</strong> in the top menu.',
        subs: [
          'In your spreadsheet, click <strong>Extensions</strong> in the top menu bar',
          'Select <strong>Apps Script</strong> from the dropdown',
          'A new browser tab opens with a code editor &mdash; that&rsquo;s the one',
          'You&rsquo;ll see a default empty function &mdash; that&rsquo;s normal',
        ],
        mockup: mockup3,
        tipText: 'Apps Script is Google&rsquo;s built-in coding tool. No installs, no sign-ups &mdash; it&rsquo;s already in your Google account.',
      },
      {
        num: '4', title: 'Paste the Script, Save &amp; Run to Test', time: '2 minutes',
        intro: 'Replace the default code, save it, then use the <strong>Run tab</strong> to confirm it works before deploying.',
        subs: [
          'Select all existing code: <strong>Cmd + A</strong> (Mac) or Ctrl + A &rarr; delete it',
          'Paste the full doPost script from the reference block below',
          'Save: click the <strong>floppy disk icon</strong> or press <strong>Cmd + S</strong>',
          'Click <strong>Run</strong> in the top menu &rarr; <strong>Run function</strong> &rarr; select <strong>doPost</strong>',
          'Check the <strong>Execution Log</strong> at the bottom &mdash; you should see "Execution completed" with no errors',
          'If you see a red error, copy the message and paste it into Claude Code &mdash; it will fix it for you',
        ],
        mockup: mockup4,
        tipText: 'Always test with Run before deploying. The Execution Log is your best troubleshooting tool &mdash; it tells you exactly what went wrong and on which line.',
      },
      {
        num: '5', title: 'Deploy as a Web App', time: '1 minute',
        intro: 'Click <strong>Deploy</strong> in the top-right &rarr; <strong>New deployment</strong> &rarr; set these 3 things:',
        subs: [
          'Click <strong>Deploy</strong> &rarr; <strong>New deployment</strong> &rarr; click the gear icon &rarr; select <strong>Web app</strong>',
          'Set <strong>Execute as:</strong> Me',
          'Set <strong>Who has access:</strong> Anyone',
          'Click <strong>Deploy</strong> &rarr; authorize with your Google account if prompted',
        ],
        mockup: mockup5,
        tipText: 'The "Authorize" popup is normal &mdash; click "Review Permissions" &rarr; choose your account &rarr; click "Allow". One-time only.',
      },
      {
        num: '6', title: 'Copy Your Webhook URL', time: '10 seconds',
        intro: 'A URL appears after deploying &mdash; <strong>copy it immediately</strong>. This is your webhook endpoint.',
        subs: [
          'After deploying, a popup shows your <strong>Web App URL</strong>',
          'Click <strong>Copy</strong> &mdash; paste it into your Notes, Notion, or wherever you keep things',
          'Click <strong>Done</strong> to close the dialog',
          'Give this URL to Claude Code when setting up your scheduled task',
        ],
        mockup: mockup6,
        tipText: 'You can always get this URL again: Deploy &rarr; Manage deployments &rarr; copy from there.',
      },
    ];

    const stepCards = steps.map((s) => {
      const subList = s.subs.map((sub) => subStep(sub)).join('');
      return '<div style="margin-bottom:16px;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">'
        + '<div style="background:#1A1A1A;padding:12px 20px;display:flex;align-items:center;gap:10px;">'
        + '<div style="width:28px;height:28px;border-radius:50%;background:#CC0000;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:0.82rem;flex-shrink:0;">' + s.num + '</div>'
        + '<span style="color:#fff;font-weight:700;font-size:1rem;">' + s.title + '</span>'
        + '<span style="color:rgba(255,255,255,0.45);font-size:0.75rem;margin-left:auto;">' + s.time + '</span>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;background:#fff;">'
        + '<div style="padding:16px 18px;border-right:1px solid #f0f0f0;">'
        + '<p style="color:#555;font-size:0.85rem;margin:0 0 12px;line-height:1.5;">' + s.intro + '</p>'
        + subList
        + tip(s.tipText)
        + '</div>'
        + '<div style="padding:16px 18px;background:#f9f9f9;display:flex;align-items:flex-start;">'
        + '<div style="width:100%;">' + s.mockup + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
    }).join('');

    const scriptBlock = '<div style="background:#0D0D0D;border-radius:10px;padding:16px 18px;margin-bottom:16px;">'
      + '<div style="color:#888;font-size:0.72rem;letter-spacing:1px;margin-bottom:10px;font-weight:600;">FULL SCRIPT &mdash; paste this into Apps Script (Step 4):</div>'
      + '<pre style="color:#00D4AA;font-family:monospace;font-size:0.75rem;line-height:1.7;margin:0;white-space:pre-wrap;">'
      + 'function doPost(e) {\n'
      + '  var sheet = SpreadsheetApp\n'
      + '    .getActiveSpreadsheet().getActiveSheet();\n'
      + '  var data = JSON.parse(e.postData.contents);\n'
      + '  sheet.appendRow([\n'
      + '    data.date       || new Date().toISOString().split(\'T\')[0],\n'
      + '    data.title      || \'\',\n'
      + '    data.caption    || \'\',\n'
      + '    data.hashtags   || \'\',\n'
      + '    data.image_url  || \'\',\n'
      + '    data.source     || \'Claude Code\',\n'
      + '    data.source_url || \'\',\n'
      + '    data.quote      || \'\',\n'
      + '    \'pending\'\n'
      + '  ]);\n'
      + '  return ContentService\n'
      + '    .createTextOutput(JSON.stringify({ status: \'success\' }))\n'
      + '    .setMimeType(ContentService.MimeType.JSON);\n'
      + '}'
      + '</pre></div>';

    el.innerHTML = `
      <div style="max-width:900px;margin:0 auto;padding:32px 20px;font-family:sans-serif;position:relative;">

        <div style="position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 60%);border-radius:3px 3px 0 0;"></div>

        <div style="padding-top:16px;margin-bottom:28px;display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <div>
            <h2 style="font-size:1.7rem;color:#1A1A1A;margin:0 0 6px;font-weight:800;">Set Up Your Content Calendar</h2>
            <p style="color:#666;margin:0;font-size:0.95rem;">One time. Then it runs itself forever. You got this.</p>
          </div>
          <div style="display:flex;gap:8px;flex-shrink:0;">
            <div style="background:#CC0000;color:#fff;font-size:0.72rem;font-weight:700;padding:6px 14px;border-radius:20px;">5 MIN SETUP</div>
            <div style="background:#1A1A1A;color:#fff;font-size:0.72rem;font-weight:700;padding:6px 14px;border-radius:20px;">DONE ONCE</div>
          </div>
        </div>

        ${stepCards}

        ${scriptBlock}

        <div style="background:#CC0000;color:#fff;border-radius:12px;padding:18px 24px;text-align:center;">
          <div style="font-size:1.1rem;font-weight:800;margin-bottom:4px;">That URL = your automation's home base.</div>
          <div style="font-size:0.9rem;opacity:0.9;">Save it. Claude Code will POST to it every single time a graphic is generated.</div>
        </div>

      </div>`;
    return el;
  }
};
