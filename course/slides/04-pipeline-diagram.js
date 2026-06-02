export const slide = {
  render() {
    const el = document.createElement('div');

    // ── mockup helpers ───────────────────────────────────────────────────────

    const mockupStep1 = ''
      + '<div style="background:#1A1A1A;border-radius:10px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.2);">'
      // title bar
      + '<div style="background:#111;padding:8px 14px;display:flex;align-items:center;gap:7px;border-bottom:1px solid #2a2a2a;">'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FF5F57;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FEBC2E;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#28C840;"></div>'
      + '<span style="color:#555;font-size:0.68rem;margin-left:8px;font-family:monospace;">Claude Code</span>'
      + '</div>'
      // body: sidebar + main
      + '<div style="display:flex;min-height:110px;">'
      // sidebar
      + '<div style="width:160px;background:#141414;border-right:1px solid #2a2a2a;padding:12px 0;flex-shrink:0;">'
      + '<div style="padding:5px 14px;font-size:0.68rem;color:#555;font-weight:700;letter-spacing:0.8px;margin-bottom:4px;">WORKSPACE</div>'
      + '<div style="padding:6px 14px;font-size:0.75rem;color:#888;display:flex;align-items:center;gap:7px;">&#128196; Projects</div>'
      + '<div style="padding:6px 14px;font-size:0.75rem;color:#888;display:flex;align-items:center;gap:7px;">&#128172; Chats</div>'
      + '<div style="padding:6px 14px;font-size:0.75rem;background:#CC0000;color:#fff;border-radius:5px;margin:3px 8px;font-weight:700;display:flex;align-items:center;gap:7px;">&#9201; Scheduled Tasks <span style="margin-left:auto;background:rgba(255,255,255,0.2);font-size:0.6rem;padding:1px 6px;border-radius:8px;">&#8592;</span></div>'
      + '<div style="padding:6px 14px;font-size:0.75rem;color:#888;display:flex;align-items:center;gap:7px;">&#9881; Settings</div>'
      + '</div>'
      // main
      + '<div style="flex:1;padding:16px;">'
      + '<div style="font-size:0.75rem;color:#aaa;margin-bottom:10px;font-weight:700;">Scheduled Tasks</div>'
      + '<div style="background:#222;border:1px dashed #444;border-radius:7px;padding:12px;text-align:center;cursor:pointer;">'
      + '<span style="color:#CC0000;font-size:1rem;font-weight:800;">+</span>'
      + '<span style="color:#aaa;font-size:0.75rem;margin-left:6px;">New Scheduled Task</span>'
      + '</div>'
      + '</div>'
      + '</div>'
      + '</div>';

    const mockupStep2 = ''
      + '<div style="background:#1A1A1A;border-radius:10px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.2);">'
      + '<div style="background:#111;padding:8px 14px;display:flex;align-items:center;gap:7px;border-bottom:1px solid #2a2a2a;">'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FF5F57;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FEBC2E;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#28C840;"></div>'
      + '<span style="color:#555;font-size:0.68rem;margin-left:8px;font-family:monospace;">New Scheduled Task</span>'
      + '</div>'
      + '<div style="padding:14px 16px;">'
      + '<div style="margin-bottom:10px;">'
      + '<div style="font-size:0.65rem;color:#666;margin-bottom:3px;font-weight:700;">TASK NAME</div>'
      + '<div style="background:#222;border:1px solid #333;border-radius:5px;padding:6px 10px;font-size:0.73rem;color:#ccc;font-family:monospace;">Daily LinkedIn Graphic Post</div>'
      + '</div>'
      + '<div style="display:flex;gap:10px;margin-bottom:10px;">'
      + '<div style="flex:1;">'
      + '<div style="font-size:0.65rem;color:#666;margin-bottom:3px;font-weight:700;">FREQUENCY</div>'
      + '<div style="background:#222;border:1px solid #333;border-radius:5px;padding:6px 10px;font-size:0.73rem;color:#ccc;">Weekdays</div>'
      + '</div>'
      + '<div style="flex:1;">'
      + '<div style="font-size:0.65rem;color:#666;margin-bottom:3px;font-weight:700;">TIME</div>'
      + '<div style="background:#222;border:1px solid #333;border-radius:5px;padding:6px 10px;font-size:0.73rem;color:#ccc;">8:00 AM</div>'
      + '</div>'
      + '</div>'
      + '<div>'
      + '<div style="font-size:0.65rem;color:#666;margin-bottom:3px;font-weight:700;">INSTRUCTIONS <span style="color:#CC0000;">← paste your template here</span></div>'
      + '<div style="background:#0D0D0D;border:1px solid #333;border-radius:5px;padding:8px 10px;font-size:0.68rem;color:#00D4AA;font-family:monospace;line-height:1.5;">Generate a new social media graphic...<span style="color:#555;"> [your full instructions]</span></div>'
      + '</div>'
      + '</div>'
      + '</div>';

    const templateBlock = ''
      + '<div style="background:#0D0D0D;border-radius:10px;padding:16px 20px;">'
      + '<div style="color:#888;font-size:0.65rem;font-weight:800;letter-spacing:1.2px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;">'
      + '<span>INSTRUCTIONS TEMPLATE &mdash; copy &amp; paste into the task</span>'
      + '<span style="background:#CC0000;color:#fff;font-size:0.6rem;padding:2px 8px;border-radius:8px;">CUSTOMIZE THESE FIELDS</span>'
      + '</div>'
      + '<pre style="color:#00D4AA;font-family:monospace;font-size:0.73rem;line-height:1.75;margin:0;white-space:pre-wrap;overflow-x:auto;">'
      + 'Generate a new social media graphic for small business owners.\n'
      + 'Topic: [auto-generate a relevant AI or business tip]\n'
      + 'Category: [AI Tools / Real Talk / Business Growth / Mindset]\n\n'
      + 'Run the Python graphic script, save PNG to ~/output/graphics/\n'
      + '<span style="color:#f5a623;">Upload the PNG to Imgur and use the returned public URL.</span>\n\n'
      + 'POST results to: <span style="color:#aaa;">[YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL]</span>\n'
      + 'Caption: 2–3 sentences about the topic\n'
      + 'Hashtags: #MPowerMyBiz #AITools #SmallBusiness #Automation\n'
      + 'Status: Ready to Post\n\n'
      + 'Confirm the new row appears in the Google Sheet."'
      + '</pre>'
      + '</div>';

    const setupSteps = [
      {
        num: '1',
        title: 'Open Claude Code — Desktop App only',
        desc: 'Scheduled tasks only run in the <strong>Claude Code desktop app</strong>. They do not work from the browser version. Download it at <a href="https://claude.ai/code" target="_blank" rel="noopener" style="color:#CC0000;font-weight:700;text-decoration:none;">claude.ai/code</a> if you haven\'t already.',
        warning: 'Your Mac must be on and Claude Code must be running when the task fires.',
        mockup: null,
      },
      {
        num: '2',
        title: 'Go to Scheduled Tasks → New Task',
        desc: 'In the left sidebar, click <strong>Scheduled Tasks</strong>, then click <strong>+ New Scheduled Task</strong>. Before the task form opens, Claude Code will ask you to choose a task type:',
        warning: null,
        mockup: mockupStep1,
        tip: '<div style="margin-top:12px;background:#f4f9ff;border:1px solid #d0e6ff;border-radius:8px;padding:12px 14px;">'
          + '<div style="font-size:0.65rem;font-weight:800;letter-spacing:1px;color:#0A66C2;margin-bottom:8px;text-transform:uppercase;">Local vs. Remote &mdash; Choose Local</div>'
          + '<div style="display:flex;gap:10px;">'
          // Local card
          + '<div style="flex:1;background:#fff;border:2px solid #CC0000;border-radius:7px;padding:10px 12px;">'
          + '<div style="font-size:0.75rem;font-weight:800;color:#CC0000;margin-bottom:3px;">&#10003; Local <span style="background:#CC0000;color:#fff;font-size:0.58rem;padding:1px 6px;border-radius:8px;margin-left:4px;">SELECT THIS</span></div>'
          + '<div style="font-size:0.75rem;color:#444;line-height:1.55;">Runs directly on your Mac. The Python script executes in your local environment &mdash; this is what powers our automation.</div>'
          + '</div>'
          // Remote card
          + '<div style="flex:1;background:#fff;border:1px solid #e0e0e0;border-radius:7px;padding:10px 12px;opacity:0.6;">'
          + '<div style="font-size:0.75rem;font-weight:800;color:#999;margin-bottom:3px;">&#10005; Remote</div>'
          + '<div style="font-size:0.75rem;color:#888;line-height:1.55;">Runs in the cloud. Does not have access to your local files, Python environment, or output folder. Skip this one.</div>'
          + '</div>'
          + '</div>'
          + '</div>',
      },
      {
        num: '3',
        title: 'Name it, set the schedule',
        desc: 'Give your task a clear name (e.g. <em>Daily LinkedIn Graphic Post</em>), choose your frequency (<strong>Weekdays</strong>), and set the time you want it to run each day.',
        warning: null,
        mockup: mockupStep2,
      },
      {
        num: '4',
        title: 'Paste your instructions',
        desc: 'This is the brain of the automation. Copy the template below, customize the fields highlighted in yellow, and paste it into the Instructions field. Save the task.',
        warning: null,
        mockup: null,
      },
    ];

    const stepsHtml = setupSteps.map((s, i) => {
      const isLast = i === setupSteps.length - 1;
      const warningHtml = s.warning
        ? '<div style="display:inline-flex;align-items:flex-start;gap:7px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 5px 5px 0;padding:6px 10px;margin-top:8px;font-size:0.78rem;color:#7a5900;line-height:1.5;">&#9888;&#65039; ' + s.warning + '</div>'
        : '';
      const mockupHtml = s.mockup
        ? '<div style="margin-top:12px;">' + s.mockup + '</div>'
        : '';
      const tipHtml = s.tip || '';
      return '<div style="display:flex;gap:0;">'
        + '<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:36px;">'
        + '<div style="width:28px;height:28px;border-radius:50%;background:#CC0000;color:#fff;font-size:0.75rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;">' + s.num + '</div>'
        + (!isLast ? '<div style="width:2px;flex:1;background:#ebebeb;margin:5px 0;min-height:16px;"></div>' : '')
        + '</div>'
        + '<div style="flex:1;padding:2px 0 ' + (isLast ? '4px' : '24px') + ' 14px;">'
        + '<div style="font-weight:700;color:#1A1A1A;font-size:0.92rem;margin-bottom:4px;">' + s.title + '</div>'
        + '<div style="color:#666;font-size:0.83rem;line-height:1.65;">' + s.desc + '</div>'
        + warningHtml
        + mockupHtml
        + tipHtml
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:24px;"></div>

        <div style="margin-bottom:10px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">SCHEDULED TASK SETUP</span>
        </div>

        <h2 style="font-size:clamp(1.4rem,5vw,2rem);font-weight:800;color:#1A1A1A;margin:0 0 8px;line-height:1.2;">Creating Your Scheduled Task in Claude Code</h2>
        <p style="color:#666;font-size:0.93rem;line-height:1.7;margin:0 0 26px;">This is the <strong style="color:#1A1A1A;">one step you do manually</strong>. Set it up once and your entire content pipeline runs automatically on your schedule &mdash; no clicks, no reminders, no manual posts.</p>

        <div style="margin-bottom:28px;">${stepsHtml}</div>

        ${templateBlock}

        <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:#1A1A1A;border-radius:10px;margin-top:20px;">
          <div style="width:3px;height:36px;background:#CC0000;border-radius:2px;flex-shrink:0;"></div>
          <p style="margin:0;font-size:0.93rem;font-weight:700;color:#fff;line-height:1.6;">Set it up once. Wake up to a published post, a logged row in your sheet, and zero work on your end.</p>
        </div>

      </div>`;
    return el;
  }
};
