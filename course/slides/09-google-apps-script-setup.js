export const slide = {
  render() {
    const el = document.createElement('div');

    // ── helpers ─────────────────────────────────────────────────────────────

    const browser = (url, body) =>
      '<div style="border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.15);border:1px solid #ddd;margin-top:14px;">'
      + '<div style="background:#f1f3f4;padding:7px 10px;display:flex;align-items:center;gap:8px;">'
      + '<div style="display:flex;gap:4px;flex-shrink:0;">'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#ff5f57;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#ffbd2e;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#28c840;"></div>'
      + '</div>'
      + '<div style="background:#fff;border-radius:20px;padding:4px 14px;font-size:0.72rem;color:#555;flex:1;border:1px solid #e0e0e0;">' + url + '</div>'
      + '</div>'
      + body
      + '</div>';

    const scriptEditor = (menuHighlight, bodyContent) =>
      '<div style="border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.2);border:1px solid #333;margin-top:14px;">'
      + '<div style="background:#1f1f1f;padding:6px 12px;display:flex;align-items:center;gap:2px;border-bottom:1px solid #333;">'
      + ['File','Edit','View','Run','Deploy','Help'].map((m) => {
        const active = m === menuHighlight;
        return '<div style="font-size:0.68rem;padding:4px 9px;border-radius:4px;'
          + (active ? 'background:#CC0000;color:#fff;font-weight:700;' : 'color:#aaa;')
          + '">' + m + (active ? ' &#9660;' : '') + '</div>';
      }).join('')
      + '<div style="margin-left:auto;display:flex;gap:6px;">'
      + '<div style="background:#1a73e8;color:#fff;font-size:0.65rem;padding:3px 10px;border-radius:3px;font-weight:700;">Deploy</div>'
      + '</div></div>'
      + bodyContent
      + '</div>';

    const tip = (text) =>
      '<div style="margin-top:10px;background:#fff9c4;border-left:3px solid #f5c200;border-radius:4px;padding:8px 12px;font-size:0.8rem;color:#555;line-height:1.5;">'
      + '<strong style="color:#1A1A1A;">&#128161; Pro tip:</strong> ' + text + '</div>';

    const subStep = (n, text) =>
      '<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">'
      + '<div style="width:20px;height:20px;border-radius:50%;background:#3a3a3a;color:#fff;font-size:0.68rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">' + n + '</div>'
      + '<span style="color:#444;font-size:0.85rem;line-height:1.5;">' + text + '</span></div>';

    // ── mockups ──────────────────────────────────────────────────────────────

    const shot1 = browser('sheets.google.com',
      '<div style="background:#fff;">'
      + '<div style="background:#0F9D58;padding:10px 16px;display:flex;align-items:center;gap:10px;">'
      + '<div style="width:28px;height:28px;background:rgba(255,255,255,0.2);border-radius:5px;display:flex;align-items:center;justify-content:center;">'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;width:14px;height:14px;">'
      + '<div style="background:#fff;border-radius:1px;"></div><div style="background:#fff;border-radius:1px;"></div>'
      + '<div style="background:rgba(255,255,255,0.6);border-radius:1px;"></div><div style="background:rgba(255,255,255,0.6);border-radius:1px;"></div>'
      + '</div></div>'
      + '<span style="color:#fff;font-size:0.9rem;font-weight:600;">Social Media Content Calendar</span>'
      + '<div style="margin-left:auto;background:rgba(255,255,255,0.15);border-radius:4px;padding:4px 12px;color:#fff;font-size:0.72rem;">&#9998; Rename</div>'
      + '</div>'
      + '<div style="padding:16px;background:#f8f9fa;display:flex;gap:12px;align-items:center;">'
      + '<div style="background:#CC0000;color:#fff;padding:8px 18px;border-radius:6px;font-size:0.8rem;font-weight:700;">+ New spreadsheet</div>'
      + '<span style="font-size:0.78rem;color:#888;">&#8594; then rename it "Social Media Content Calendar"</span>'
      + '</div>'
      + '<div style="height:120px;background:#fff;display:grid;grid-template-columns:36px repeat(5,1fr);border-top:1px solid #e0e0e0;">'
      + '<div style="background:#f8f9fa;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;"></div>'
      + ['A','B','C','D','E'].map((l) => '<div style="background:#f8f9fa;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;text-align:center;font-size:0.7rem;color:#666;padding:4px;">' + l + '</div>').join('')
      + ['1','2','3'].map(() =>
        '<div style="background:#f8f9fa;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;text-align:center;font-size:0.7rem;color:#999;padding:4px;"></div>'
        + Array(5).fill('<div style="background:#fff;border-right:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;padding:4px;"></div>').join('')
      ).join('')
      + '</div>'
      + '</div>');

    const colHeaders = ['date','title','caption','hashtags','image_url','source','src_url','quote','status'];
    const shot2 = browser('Social Media Content Calendar — Sheet1',
      '<div style="background:#fff;">'
      + '<div style="background:#0F9D58;padding:7px 12px;font-size:0.75rem;color:#fff;font-weight:700;">&#9998; Row 1 — Type these headers exactly (A1 through I1)</div>'
      + '<div style="overflow-x:auto;background:#fff;padding-bottom:8px;">'
      + '<div style="min-width:600px;">'
      + '<div style="display:grid;grid-template-columns:32px repeat(9,1fr);border-bottom:2px solid #e0e0e0;">'
      + '<div style="background:#f8f9fa;padding:5px;border-right:1px solid #e0e0e0;"></div>'
      + ['A','B','C','D','E','F','G','H','I'].map((l) => '<div style="background:#f8f9fa;padding:5px 4px;text-align:center;font-size:0.65rem;color:#666;font-weight:700;border-right:1px solid #e0e0e0;">' + l + '</div>').join('')
      + '</div>'
      + '<div style="display:grid;grid-template-columns:32px repeat(9,1fr);border-bottom:1px solid #e0e0e0;background:#e8f5e9;">'
      + '<div style="background:#f8f9fa;padding:6px;text-align:center;font-size:0.65rem;color:#999;border-right:1px solid #e0e0e0;">1</div>'
      + colHeaders.map((h) => '<div style="padding:6px 4px;font-size:0.65rem;font-weight:700;color:#0F9D58;border-right:1px solid #c8e6c9;">' + h + '</div>').join('')
      + '</div>'
      + ['2','3'].map((n) =>
        '<div style="display:grid;grid-template-columns:32px repeat(9,1fr);border-bottom:1px solid #f0f0f0;">'
        + '<div style="background:#f8f9fa;padding:6px;text-align:center;font-size:0.65rem;color:#999;border-right:1px solid #e0e0e0;">' + n + '</div>'
        + Array(9).fill('<div style="padding:6px 4px;border-right:1px solid #f0f0f0;"></div>').join('')
        + '</div>'
      ).join('')
      + '</div></div></div>');

    // ── Step 3: compact 4-panel numbered grid ────────────────────────────────

    const miniPanel = (num, label, bgColor, content) =>
      '<div style="border-radius:8px;overflow:hidden;border:1px solid #e0e0e0;box-shadow:0 2px 8px rgba(0,0,0,0.1);">'
      + '<div style="background:#1A1A1A;padding:5px 10px;display:flex;align-items:center;gap:6px;">'
      + '<div style="width:18px;height:18px;border-radius:50%;background:' + bgColor + ';color:#fff;font-size:0.62rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + num + '</div>'
      + '<span style="color:#fff;font-size:0.63rem;font-weight:700;">' + label + '</span>'
      + '</div>'
      + content
      + '</div>';

    const shot3 =
      '<div class="gas-4grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:14px;">'

      + miniPanel('1', 'Click Extensions',  '#CC0000',
          '<div style="background:#f1f3f4;padding:8px;">'
        + '<div style="background:#fff;border-radius:4px;padding:4px 6px;border:1px solid #e0e0e0;display:flex;gap:2px;flex-wrap:wrap;">'
        + '<span style="padding:3px 5px;font-size:0.6rem;color:#444;">File</span>'
        + '<span style="padding:3px 5px;font-size:0.6rem;color:#444;">Edit</span>'
        + '<span style="padding:3px 5px;font-size:0.6rem;color:#444;">View</span>'
        + '<span style="padding:3px 5px;font-size:0.6rem;color:#1a73e8;font-weight:800;background:#e8f0fe;border-radius:3px;border:1px solid #1a73e8;">Extensions &#9660;</span>'
        + '</div></div>')

      + miniPanel('2', 'Select Apps Script', '#CC0000',
          '<div style="background:#f1f3f4;padding:8px;">'
        + '<div style="background:#fff;border-radius:4px;border:1px solid #dadce0;overflow:hidden;">'
        + '<div style="padding:6px 12px;font-size:0.68rem;color:#1a73e8;font-weight:800;background:#e8f0fe;display:flex;align-items:center;gap:4px;border-bottom:1px solid #e0e0e0;"><span>&#128196;</span> Apps Script</div>'
        + '<div style="padding:6px 12px;font-size:0.67rem;color:#555;border-bottom:1px solid #f0f0f0;">Add-ons &#9654;</div>'
        + '<div style="padding:6px 12px;font-size:0.67rem;color:#555;">Macros &#9654;</div>'
        + '</div></div>')

      + miniPanel('3', 'Editor opens in new tab', '#CC0000',
          '<div style="background:#1f1f1f;padding:8px;">'
        + '<div style="background:#111;border-radius:4px;padding:6px 8px;">'
        + '<div style="font-size:0.6rem;color:#666;margin-bottom:4px;font-family:monospace;">Untitled project</div>'
        + '<div style="font-family:monospace;font-size:0.62rem;line-height:1.7;">'
        + '<span style="color:#c586c0;">function</span> <span style="color:#dcdcaa;">myFunction</span><span style="color:#d4d4d4;">() {</span><br>'
        + '<span style="color:#555;">&nbsp;&nbsp;// replace this</span><br>'
        + '<span style="color:#d4d4d4;">}</span>'
        + '</div></div></div>')

      + miniPanel('&#10003;', "You're in!", '#28a745',
          '<div style="background:#0a2a0a;padding:8px;">'
        + '<div style="border:1px solid #28a745;border-radius:4px;padding:8px 10px;">'
        + '<div style="font-size:0.63rem;color:#28a745;font-weight:700;margin-bottom:3px;">&#10003; Apps Script is open</div>'
        + '<div style="font-size:0.61rem;color:#888;line-height:1.5;">You&rsquo;ll replace the default code with our script in the next step.</div>'
        + '</div></div>')

      + '</div>';

    // ── Step 4 mockup ────────────────────────────────────────────────────────

    const shot4 = scriptEditor('Run',
      '<div style="display:flex;">'
      // left sidebar
      + '<div style="width:44px;background:#1f1f1f;border-right:1px solid #333;padding:8px 0;display:flex;flex-direction:column;align-items:center;gap:10px;">'
      + '<div style="font-size:0.85rem;color:#aaa;" title="Files">&#128196;</div>'
      + '<div style="font-size:0.85rem;color:#aaa;" title="Triggers">&#9201;</div>'
      + '<div style="font-size:0.85rem;color:#aaa;" title="Executions">&#128295;</div>'
      + '</div>'
      // main area
      + '<div style="flex:1;">'
      // run dropdown
      + '<div style="background:#2a2a2a;border-bottom:1px solid #444;padding:4px 0;min-width:160px;">'
      + '<div style="padding:6px 16px;font-size:0.72rem;color:#ccc;display:flex;justify-content:space-between;">Run function <span>&#9654;</span></div>'
      + '<div style="padding:6px 16px 6px 28px;font-size:0.72rem;color:#00D4AA;font-weight:700;background:rgba(0,212,170,0.12);border-left:3px solid #00D4AA;">&#9654; doPost</div>'
      + '<div style="height:1px;background:#444;margin:3px 0;"></div>'
      + '<div style="padding:6px 16px;font-size:0.72rem;color:#888;">Run without debugging</div>'
      + '<div style="padding:6px 16px;font-size:0.72rem;color:#888;">Manage triggers</div>'
      + '</div>'
      // code preview
      + '<div style="background:#0D0D0D;padding:10px 14px;border-bottom:1px solid #222;">'
      + '<pre style="margin:0;font-family:monospace;font-size:0.68rem;line-height:1.65;color:#555;white-space:pre;">'
      + '<span style="color:#888;">1  </span><span style="color:#c586c0;">function</span> <span style="color:#dcdcaa;">doPost</span><span style="color:#d4d4d4;">(e) {</span>\n'
      + '<span style="color:#888;">2  </span>  <span style="color:#9cdcfe;">var</span> <span style="color:#d4d4d4;">sheet</span> <span style="color:#d4d4d4;">=</span> <span style="color:#4ec9b0;">SpreadsheetApp</span>\n'
      + '<span style="color:#888;">3  </span>    <span style="color:#d4d4d4;">.</span><span style="color:#dcdcaa;">getActiveSpreadsheet</span><span style="color:#d4d4d4;">()...</span>\n'
      + '<span style="color:#888;">4  </span>  <span style="color:#9cdcfe;">var</span> <span style="color:#d4d4d4;">data</span> <span style="color:#d4d4d4;">=</span> <span style="color:#4ec9b0;">JSON</span><span style="color:#d4d4d4;">.</span><span style="color:#dcdcaa;">parse</span><span style="color:#d4d4d4;">(...);</span>'
      + '</pre></div>'
      // execution log
      + '<div style="background:#111;padding:10px 14px;">'
      + '<div style="font-size:0.65rem;color:#666;font-weight:700;letter-spacing:1px;margin-bottom:8px;display:flex;align-items:center;gap:6px;">'
      + '<span>EXECUTION LOG</span>'
      + '<div style="width:7px;height:7px;border-radius:50%;background:#28a745;"></div>'
      + '</div>'
      + '<div style="font-family:monospace;font-size:0.67rem;line-height:1.9;">'
      + '<div><span style="color:#666;">11:05:32</span> &nbsp;<span style="color:#79C0FF;font-weight:600;">Notice</span>&nbsp;&nbsp; Execution started</div>'
      + '<div><span style="color:#666;">11:05:32</span> &nbsp;<span style="color:#00D4AA;font-weight:600;">Info</span>&nbsp;&nbsp;&nbsp;&nbsp; Script running&hellip; row appended to sheet</div>'
      + '<div><span style="color:#666;">11:05:33</span> &nbsp;<span style="color:#28a745;font-weight:600;">Notice</span>&nbsp;&nbsp; Execution completed</div>'
      + '<div style="margin-top:6px;padding:5px 10px;background:rgba(40,167,69,0.12);border:1px solid rgba(40,167,69,0.3);border-radius:4px;display:flex;align-items:center;gap:6px;">'
      + '<span style="color:#28a745;font-size:0.9rem;">&#10003;</span>'
      + '<span style="color:#28a745;font-weight:700;font-size:0.7rem;">No errors &mdash; your webhook script is working correctly</span>'
      + '</div>'
      + '<div style="margin-top:6px;padding:5px 10px;background:rgba(204,0,0,0.1);border:1px solid rgba(204,0,0,0.25);border-radius:4px;">'
      + '<span style="color:#CC0000;font-size:0.68rem;font-weight:700;">If you see red errors instead</span>'
      + '<span style="color:#888;font-size:0.68rem;"> &rarr; copy the message &rarr; paste into Claude Code &rarr; it will fix it</span>'
      + '</div>'
      + '</div></div>'
      + '</div></div>');

    const shot5 = '<div style="border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.15);border:1px solid #ddd;margin-top:14px;">'
      + '<div style="background:#1a73e8;padding:10px 16px;color:#fff;font-size:0.85rem;font-weight:700;display:flex;align-items:center;gap:8px;">'
      + '<span style="font-size:1rem;">&#128640;</span> New Deployment'
      + '</div>'
      + '<div style="background:#fff;padding:18px 20px;display:grid;grid-template-columns:1fr 1fr;gap:16px;">'
      + '<div>'
      + '<div style="font-size:0.72rem;color:#555;font-weight:700;margin-bottom:6px;">&#9312; Deployment Type</div>'
      + '<div style="border:2px solid #1a73e8;border-radius:6px;padding:8px 12px;font-size:0.78rem;color:#1a73e8;font-weight:700;background:#e8f0fe;display:flex;align-items:center;gap:6px;">'
      + '<span>&#127760;</span> Web App'
      + '</div>'
      + '</div>'
      + '<div>'
      + '<div style="font-size:0.72rem;color:#555;font-weight:700;margin-bottom:6px;">&#9313; Execute as</div>'
      + '<div style="border:1px solid #dadce0;border-radius:6px;padding:8px 12px;font-size:0.78rem;color:#333;display:flex;justify-content:space-between;">'
      + '<span>Me (your-email@gmail.com)</span><span style="color:#aaa;">&#9660;</span>'
      + '</div>'
      + '</div>'
      + '<div>'
      + '<div style="font-size:0.72rem;color:#555;font-weight:700;margin-bottom:6px;">&#9314; Who has access</div>'
      + '<div style="border:2px solid #34a853;border-radius:6px;padding:8px 12px;font-size:0.78rem;color:#34a853;font-weight:700;background:#e8f5e9;display:flex;justify-content:space-between;">'
      + '<span>&#127760; Anyone</span><span>&#9660;</span>'
      + '</div>'
      + '</div>'
      + '<div style="display:flex;align-items:flex-end;">'
      + '<div style="width:100%;background:#1a73e8;color:#fff;text-align:center;padding:10px;border-radius:6px;font-size:0.82rem;font-weight:700;cursor:pointer;">Deploy &#9654;</div>'
      + '</div>'
      + '</div>'
      + '<div style="background:#fff3cd;padding:8px 16px;font-size:0.75rem;color:#856404;border-top:1px solid #ffe082;">'
      + '&#9888;&#65039; If an &ldquo;Authorize&rdquo; popup appears &rarr; click Review Permissions &rarr; choose your Google account &rarr; Allow'
      + '</div></div>';

    const shot6 = '<div style="border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.15);border:1px solid #ddd;margin-top:14px;">'
      + '<div style="background:#34a853;padding:10px 16px;color:#fff;font-size:0.85rem;font-weight:700;display:flex;align-items:center;gap:8px;">'
      + '<span style="font-size:1.1rem;">&#10003;</span> Deployment Complete!'
      + '</div>'
      + '<div style="background:#fff;padding:18px 20px;">'
      + '<div style="font-size:0.75rem;color:#555;font-weight:700;margin-bottom:8px;">Your Web App URL &mdash; <span style="color:#CC0000;">copy this immediately</span></div>'
      + '<div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">'
      + '<div style="flex:1;background:#f8f9fa;border:1px solid #dadce0;border-radius:6px;padding:9px 12px;font-size:0.72rem;color:#1a73e8;font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">https://script.google.com/macros/s/AKfycby.../exec</div>'
      + '<div style="background:#CC0000;color:#fff;padding:9px 16px;border-radius:6px;font-size:0.75rem;font-weight:700;white-space:nowrap;cursor:pointer;">&#128203; Copy</div>'
      + '</div>'
      + '<div class="gas-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">'
      + '<div style="background:#e8f5e9;border-radius:6px;padding:10px 12px;font-size:0.75rem;color:#2e7d32;line-height:1.6;">'
      + '<strong>&#10003; Save it to:</strong><br>Notes app, Notion, Google Doc &mdash; anywhere you can find it fast'
      + '</div>'
      + '<div style="background:#fff3e0;border-radius:6px;padding:10px 12px;font-size:0.75rem;color:#e65100;line-height:1.6;">'
      + '<strong>&#9888; This URL goes to Claude Code</strong><br>Paste it when setting up your scheduled task instructions'
      + '</div>'
      + '</div>'
      + '</div></div>';

    // ── script block — collapsible, shown inline inside Step 4 ─────────────

    const scriptBlock =
      '<details style="margin-top:14px;" id="gas-script-toggle">'
      + '<summary style="list-style:none;cursor:pointer;background:#0D0D0D;border-radius:10px;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;user-select:none;">'
      + '<span style="display:flex;align-items:center;gap:9px;">'
      + '<span style="font-size:1rem;">&#128196;</span>'
      + '<span style="color:#00D4AA;font-size:0.8rem;font-weight:800;">View the doPost Script &mdash; click to expand &amp; copy</span>'
      + '</span>'
      + '<span style="color:#555;font-size:0.75rem;font-weight:700;">&#9660; expand</span>'
      + '</summary>'
      + '<div style="background:#0D0D0D;border-radius:0 0 10px 10px;border-top:1px solid #1f1f1f;padding:14px 20px;">'
      + '<div style="color:#666;font-size:0.65rem;font-weight:800;letter-spacing:1px;margin-bottom:10px;">PASTE THIS SCRIPT — replace everything currently in the editor</div>'
      + '<pre style="color:#00D4AA;font-family:monospace;font-size:0.73rem;line-height:1.7;margin:0;white-space:pre-wrap;">'
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
      + '    \'Ready to Post\'\n'
      + '  ]);\n'
      + '  return ContentService\n'
      + '    .createTextOutput(JSON.stringify({ status: \'success\' }))\n'
      + '    .setMimeType(ContentService.MimeType.JSON);\n'
      + '}'
      + '</pre></div>'
      + '</details>';

    // ── step data ────────────────────────────────────────────────────────────

    const steps = [
      {
        num: 1, title: 'Create Your Spreadsheet', time: '30 sec',
        intro: 'Head to <a href="https://sheets.google.com" target="_blank" style="color:#0F9D58;font-weight:700;text-decoration:none;">sheets.google.com</a> and create a fresh blank spreadsheet.',
        subs: [
          'Go to <strong>sheets.google.com</strong> &rarr; click the big <strong>+ Blank</strong> to create a new sheet',
          'Click the title at the top where it says <em>"Untitled spreadsheet"</em>',
          'Rename it: <strong>Social Media Content Calendar</strong> &rarr; press Enter',
        ],
        tipText: 'Keep this tab open the whole time &mdash; you\'ll be coming back to it.',
        inlineContent: null,
        shot: shot1,
      },
      {
        num: 2, title: 'Add Your 9 Column Headers', time: '1 min',
        intro: 'Click cell <strong>A1</strong> and type these 9 headers across Row 1. Use all lowercase, no spaces.',
        subs: [
          '<strong>A1:</strong> date &nbsp;&nbsp; <strong>B1:</strong> title &nbsp;&nbsp; <strong>C1:</strong> caption &nbsp;&nbsp; <strong>D1:</strong> hashtags',
          '<strong>E1:</strong> image_url &nbsp;&nbsp; <strong>F1:</strong> source &nbsp;&nbsp; <strong>G1:</strong> source_url',
          '<strong>H1:</strong> quote &nbsp;&nbsp; <strong>I1:</strong> status',
        ],
        tipText: 'These names must match the webhook script exactly. Copy-paste them if possible to avoid typos.',
        inlineContent: null,
        shot: shot2,
      },
      {
        num: 3, title: 'Open Apps Script', time: '10 sec',
        intro: 'Still inside your spreadsheet &mdash; open the <strong>Extensions</strong> menu and launch Apps Script. Follow the 4 steps below:',
        subs: [
          'Click <strong>Extensions</strong> in the top menu bar of your spreadsheet',
          'Select <strong>Apps Script</strong> from the dropdown',
          'A new tab opens with a code editor &mdash; you\'re in the right place',
          'You\'ll see a default empty <code>myFunction()</code> &mdash; that\'s normal, we\'re replacing it in the next step',
        ],
        tipText: 'Apps Script is built into every Google account &mdash; no installs, no sign-ups needed.',
        inlineContent: null,
        shot: shot3,
      },
      {
        num: 4, title: 'Paste the Script, Save &amp; Run to Test', time: '2 min',
        intro: 'Replace all default code with the <strong>doPost script below</strong>, save it, then use the <strong>Run menu</strong> to confirm it works.',
        subs: [
          'Select all existing code in the editor: <strong>Cmd + A</strong> (Mac) or <strong>Ctrl + A</strong> (Windows) &rarr; delete it',
          'Copy the full doPost script below &rarr; paste it into the editor',
          'Save: click the <strong>floppy disk icon</strong> or press <strong>Cmd + S</strong> &rarr; name the project anything you like',
          'Click <strong>Run</strong> in the top menu &rarr; <strong>Run function</strong> &rarr; click <strong>doPost</strong>',
          'Watch the <strong>Execution Log</strong> panel at the bottom &mdash; look for "Execution completed" with no red errors',
          'Red error? Copy the full message &rarr; paste it into Claude Code &rarr; it will fix it step by step',
        ],
        tipText: 'Always test with Run before deploying. The Execution Log tells you exactly what went wrong and on which line.',
        inlineContent: scriptBlock,
        shot: shot4,
      },
      {
        num: 5, title: 'Deploy as a Web App', time: '1 min',
        intro: 'Click <strong>Deploy</strong> in the top-right &rarr; <strong>New deployment</strong> &rarr; configure these 3 settings.',
        subs: [
          'Click <strong>Deploy</strong> &rarr; <strong>New deployment</strong> &rarr; click the &#9881; gear icon &rarr; select <strong>Web app</strong>',
          'Set <strong>Execute as:</strong> Me',
          'Set <strong>Who has access:</strong> Anyone (required for the webhook to receive data)',
          'Click <strong>Deploy</strong> &rarr; if an Authorize popup appears, click Review Permissions &rarr; Allow',
        ],
        tipText: 'The "Anyone" access setting is what lets Claude Code send data to your sheet. It doesn\'t expose your data publicly.',
        inlineContent: null,
        shot: shot5,
      },
      {
        num: 6, title: 'Copy Your Webhook URL', time: '10 sec',
        intro: 'After deploying, a URL appears. <strong>Copy it immediately</strong> &mdash; this is the endpoint Claude Code will POST to.',
        subs: [
          'A popup appears showing your <strong>Web App URL</strong> starting with https://script.google.com/macros/s/...',
          'Click <strong>Copy</strong> &rarr; paste it into your Notes, Notion, or any doc you can find again',
          'Click <strong>Done</strong> to close the dialog',
          'Paste this URL into your Claude Code scheduled task instructions where it says <em>[YOUR_WEBHOOK_URL]</em>',
        ],
        tipText: 'Misplaced it? Find it again via Deploy &rarr; Manage deployments &rarr; copy from the list there.',
        inlineContent: null,
        shot: shot6,
      },
    ];

    // ── render ───────────────────────────────────────────────────────────────

    const stepCards = steps.map((s) => {
      const subList = s.subs.map((sub, i) => subStep(i + 1, sub)).join('');
      return '<div style="margin-bottom:20px;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.09);">'
        // header
        + '<div style="background:#1A1A1A;padding:13px 20px;display:flex;align-items:center;gap:10px;">'
        + '<div style="width:30px;height:30px;border-radius:50%;background:#CC0000;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:0.85rem;flex-shrink:0;">' + s.num + '</div>'
        + '<span style="color:#fff;font-weight:700;font-size:0.98rem;">' + s.title + '</span>'
        + '<span style="color:rgba(255,255,255,0.4);font-size:0.72rem;margin-left:auto;">' + s.time + '</span>'
        + '</div>'
        // body — instructions + optional inline content (script)
        + '<div style="background:#fff;padding:16px 20px;">'
        + '<p style="color:#555;font-size:0.86rem;margin:0 0 12px;line-height:1.55;">' + s.intro + '</p>'
        + subList
        + (s.inlineContent || '')
        + tip(s.tipText)
        + '</div>'
        // screenshot below
        + '<div style="background:#f4f4f4;padding:14px 20px 18px;border-top:2px dashed #e0e0e0;">'
        + '<div style="font-size:0.68rem;font-weight:800;letter-spacing:1.2px;color:#aaa;margin-bottom:0;">WHAT IT LOOKS LIKE</div>'
        + s.shot
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <style>
        @media(max-width:600px){
          .gas-2col{grid-template-columns:1fr!important;}
          .gas-4grid{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:400px){
          .gas-4grid{grid-template-columns:1fr!important;}
        }
      </style>
      <div style="max-width:900px;margin:0 auto;padding:28px clamp(12px,4vw,20px);font-family:sans-serif;position:relative;">

        <div style="position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,#0F9D58 0%,#1A1A1A 60%);border-radius:3px 3px 0 0;"></div>

        <div style="padding-top:16px;margin-bottom:10px;">
          <span style="background:#e8f5e9;color:#0F9D58;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">CONTENT CALENDAR SETUP</span>
        </div>

        <div style="margin-bottom:28px;display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <div>
            <h2 style="font-size:clamp(1.3rem,4.5vw,1.75rem);color:#1A1A1A;margin:0 0 6px;font-weight:800;">Google Spreadsheet: Set Up Your Content Calendar</h2>
            <p style="color:#666;margin:0;font-size:0.93rem;line-height:1.65;">One-time setup. Your sheet becomes the central log that Zapier reads &mdash; every generated graphic lands here automatically.</p>
          </div>
          <div style="display:flex;gap:8px;flex-shrink:0;">
            <div style="background:#CC0000;color:#fff;font-size:0.72rem;font-weight:700;padding:6px 14px;border-radius:20px;">5 MIN SETUP</div>
            <div style="background:#1A1A1A;color:#fff;font-size:0.72rem;font-weight:700;padding:6px 14px;border-radius:20px;">DONE ONCE</div>
          </div>
        </div>

        <!-- ── Getting help from Claude ── -->
        <div style="background:#f4f9ff;border:1px solid #d0e6ff;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
          <div style="font-size:0.68rem;font-weight:800;letter-spacing:1.2px;color:#0A66C2;margin-bottom:12px;text-transform:uppercase;">Getting Help From Claude While You Set This Up</div>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            <!-- Option 1 -->
            <div style="flex:1;min-width:200px;background:#fff;border-radius:8px;padding:12px 14px;border:1px solid #dce8f5;">
              <div style="font-size:0.8rem;font-weight:800;color:#1A1A1A;margin-bottom:5px;display:flex;align-items:center;gap:6px;">&#128247; Option 1 &mdash; Screenshot</div>
              <div style="font-size:0.78rem;color:#555;line-height:1.65;">Take a screenshot of your Apps Script editor, error message, or Google Sheet at any point &mdash; then paste it directly into <strong>Claude Code</strong>. Claude will read it and tell you exactly what to fix.</div>
            </div>
            <!-- Option 2 -->
            <div style="flex:1;min-width:200px;background:#fff;border-radius:8px;padding:12px 14px;border:2px solid #0A66C2;">
              <div style="font-size:0.8rem;font-weight:800;color:#0A66C2;margin-bottom:5px;display:flex;align-items:center;gap:6px;">&#128187; Option 2 &mdash; Let Claude See Your Screen <span style="background:#0A66C2;color:#fff;font-size:0.58rem;padding:1px 7px;border-radius:8px;margin-left:4px;">RECOMMENDED</span></div>
              <div style="font-size:0.78rem;color:#555;line-height:1.65;">Install the <a href="https://chromewebstore.google.com/detail/claude/pnldjbmpkfcjfhmpjfkgpibjplhcopkl" target="_blank" rel="noopener" style="color:#0A66C2;font-weight:700;text-decoration:none;">Claude extension for Chrome &#8599;</a> and give it permission to view your screen. Claude can then look directly at your browser window &mdash; no screenshots needed. Just say <em>"look at my screen"</em> and it will see exactly what you see.</div>
            </div>
          </div>
        </div>

        ${stepCards}

        <div style="background:#CC0000;color:#fff;border-radius:12px;padding:18px 24px;text-align:center;">
          <div style="font-size:1.05rem;font-weight:800;margin-bottom:4px;color:#fff;">That URL = your automation&rsquo;s home base.</div>
          <div style="font-size:0.88rem;opacity:0.9;color:#fff;">Save it. Claude Code will POST to it every single time a graphic is generated.</div>
        </div>

      </div>`;
    return el;
  }
};
