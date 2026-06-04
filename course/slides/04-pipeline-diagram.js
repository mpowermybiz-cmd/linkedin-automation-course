export const slide = {
  render() {
    const el = document.createElement('div');

    // ── shared helpers ───────────────────────────────────────────────────────

    const tip = (text) =>
      '<div style="margin-top:10px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 6px 6px 0;padding:8px 12px;font-size:0.79rem;color:#7a5900;line-height:1.5;">&#128161; ' + text + '</div>';

    // ── Option 1: Chat method mockup ─────────────────────────────────────────

    const chatMockup =
      '<div style="background:#1A1A1A;border-radius:10px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.2);margin-top:14px;">'
      + '<div style="background:#111;padding:8px 14px;display:flex;align-items:center;gap:7px;border-bottom:1px solid #2a2a2a;">'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FF5F57;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FEBC2E;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#28C840;"></div>'
      + '<span style="color:#555;font-size:0.68rem;margin-left:8px;font-family:monospace;">Claude Code &mdash; New Chat</span>'
      + '</div>'
      + '<div style="padding:14px 16px;">'
      // tab bar
      + '<div style="display:flex;gap:6px;margin-bottom:14px;">'
      + '<div style="padding:5px 14px;border-radius:20px;font-size:0.72rem;color:#aaa;background:#222;">Projects</div>'
      + '<div style="padding:5px 14px;border-radius:20px;font-size:0.72rem;color:#fff;font-weight:700;background:#CC0000;">Code &#8592; click here</div>'
      + '<div style="padding:5px 14px;border-radius:20px;font-size:0.72rem;color:#aaa;background:#222;">Scheduled Tasks</div>'
      + '</div>'
      // chat bubble
      + '<div style="background:#2a2a2a;border-radius:8px;padding:12px 14px;margin-bottom:10px;">'
      + '<div style="font-size:0.65rem;color:#666;font-weight:800;letter-spacing:1px;margin-bottom:6px;">YOU &mdash; paste your prompt here</div>'
      + '<div style="font-size:0.78rem;color:#ccc;line-height:1.65;">I want to set up a daily scheduled task that runs every weekday at 8 AM. Here are the full instructions&hellip;</div>'
      + '</div>'
      // claude response bubble
      + '<div style="background:#0D0D0D;border-radius:8px;padding:12px 14px;border-left:3px solid #CC0000;">'
      + '<div style="font-size:0.65rem;color:#CC0000;font-weight:800;letter-spacing:1px;margin-bottom:6px;">CLAUDE</div>'
      + '<div style="font-size:0.78rem;color:#00D4AA;line-height:1.65;">Got it &mdash; I\'ll create the scheduled task now with those instructions. Setting frequency to weekdays at 8:00 AM&hellip; &#10003; Task created.</div>'
      + '</div>'
      + '</div></div>';

    // ── Option 1: prompt template ────────────────────────────────────────────

    const promptTemplate =
      '<div style="background:#0D0D0D;border-radius:10px;padding:16px 20px;margin-top:14px;">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;">'
      + '<div style="color:#888;font-size:0.65rem;font-weight:800;letter-spacing:1.2px;">COPY &amp; PASTE THIS PROMPT INTO CLAUDE CODE CHAT</div>'
      + '<span style="background:#CC0000;color:#fff;font-size:0.6rem;font-weight:800;padding:3px 10px;border-radius:8px;">CUSTOMIZE THE FIELDS IN [ ]</span>'
      + '</div>'
      + '<pre style="color:#00D4AA;font-family:monospace;font-size:0.72rem;line-height:1.8;margin:0;white-space:pre-wrap;overflow-x:auto;">'
      + 'I want you to create a scheduled task that runs every weekday at [YOUR PREFERRED TIME, e.g. 8:00 AM].\n\n'
      + 'Here are the full instructions for the task:\n\n'
      + '---\n'
      + 'You are an automated social media content assistant for MPowerMyBiz.\n\n'
      + 'Each time this task runs:\n\n'
      + '1. Generate a topic idea for a LinkedIn post aimed at small business owners\n'
      + '   (rotate between: AI Tools, Real Talk, Business Growth, Mindset)\n\n'
      + '2. Run the Python graphic script to create a branded PNG:\n'
      + '   python3 [PATH TO YOUR SCRIPT]/generate_graphic.py\n\n'
      + '3. Save the PNG to [YOUR OUTPUT FOLDER, e.g. ~/Desktop/graphics/]\n\n'
      + '4. Upload the PNG and get a public image URL\n\n'
      + '5. POST the following JSON to this webhook URL:\n'
      + '   [YOUR GOOGLE APPS SCRIPT WEBHOOK URL]\n\n'
      + '   {\n'
      + '     "date": "[today\'s date]",\n'
      + '     "post_title": "[generated topic]",\n'
      + '     "caption": "[2-3 sentence caption about the topic]",\n'
      + '     "image_url": "[public PNG url]",\n'
      + '     "hashtags": "#MPowerMyBiz #AITools #SmallBusiness #Automation",\n'
      + '     "source": "Claude Code",\n'
      + '     "source_url": "",\n'
      + '     "status": "Ready to Post"\n'
      + '   }\n\n'
      + '6. Confirm the new row appears in the Google Sheet.\n'
      + '---\n\n'
      + 'Please create this as a local scheduled task in Claude Code and confirm when it\'s set up.'
      + '</pre></div>';

    // ── Option 2: Scheduled Tasks UI mockup ─────────────────────────────────

    const uiMockup =
      '<div style="background:#1A1A1A;border-radius:10px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.2);margin-top:14px;">'
      + '<div style="background:#111;padding:8px 14px;display:flex;align-items:center;gap:7px;border-bottom:1px solid #2a2a2a;">'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FF5F57;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#FEBC2E;"></div>'
      + '<div style="width:10px;height:10px;border-radius:50%;background:#28C840;"></div>'
      + '<span style="color:#555;font-size:0.68rem;margin-left:8px;font-family:monospace;">Claude Code &mdash; Routines</span>'
      + '</div>'
      + '<div style="display:flex;min-height:120px;">'
      + '<div style="width:160px;background:#141414;border-right:1px solid #2a2a2a;padding:12px 0;flex-shrink:0;">'
      + '<div style="padding:6px 14px;font-size:0.75rem;color:#888;">&#128196; Projects</div>'
      + '<div style="padding:6px 14px;font-size:0.75rem;color:#888;">&#128172; Code</div>'
      + '<div style="padding:6px 14px;font-size:0.75rem;background:#CC0000;color:#fff;border-radius:5px;margin:3px 8px;font-weight:700;">&#9201; Routines</div>'
      + '<div style="padding:6px 14px;font-size:0.75rem;color:#888;">&#9881; Settings</div>'
      + '</div>'
      + '<div style="flex:1;padding:14px 16px;">'
      + '<div style="font-size:0.72rem;color:#aaa;margin-bottom:10px;font-weight:700;">Scheduled Tasks</div>'
      + '<div style="background:#222;border:1px dashed #444;border-radius:7px;padding:10px;text-align:center;">'
      + '<span style="color:#CC0000;font-size:1rem;font-weight:800;">+</span>'
      + '<span style="color:#aaa;font-size:0.75rem;margin-left:6px;">New Scheduled Task</span>'
      + '</div>'
      + '<div style="margin-top:10px;background:#1f1f1f;border-radius:6px;padding:10px 12px;">'
      + '<div style="font-size:0.65rem;color:#555;margin-bottom:5px;font-weight:700;">NAME YOUR TASK</div>'
      + '<div style="background:#2a2a2a;border-radius:4px;padding:5px 8px;font-size:0.72rem;color:#ccc;font-family:monospace;">Daily LinkedIn Graphic Post</div>'
      + '</div>'
      + '</div>'
      + '</div></div>';

    // ── render ───────────────────────────────────────────────────────────────

    el.innerHTML = `
      <style>
        @media(max-width:600px){
          .st-options{flex-direction:column!important;}
        }
      </style>
      <div style="max-width:820px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:24px;"></div>

        <div style="margin-bottom:10px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">SCHEDULED TASK SETUP</span>
        </div>

        <h2 style="font-size:clamp(1.4rem,5vw,2rem);font-weight:800;color:#1A1A1A;margin:0 0 8px;line-height:1.2;">Creating Your Scheduled Task in Claude Code</h2>
        <p style="color:#666;font-size:0.93rem;line-height:1.7;margin:0 0 24px;">Set this up once and your entire content pipeline runs automatically on your schedule &mdash; no clicks, no reminders, no manual posts. <strong style="color:#1A1A1A;">Choose the method that works best for you.</strong></p>

        <!-- ── Two options side-by-side ── -->
        <div class="st-options" style="display:flex;gap:14px;margin-bottom:28px;">

          <!-- Option 1: Recommended -->
          <div style="flex:1;border-radius:12px;overflow:hidden;border:2px solid #CC0000;box-shadow:0 2px 12px rgba(204,0,0,0.12);">
            <div style="background:#CC0000;padding:12px 18px;display:flex;align-items:center;gap:10px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;color:#fff;flex-shrink:0;">1</div>
              <div>
                <div style="color:#fff;font-weight:800;font-size:0.9rem;">Chat with Claude <span style="background:rgba(255,255,255,0.25);font-size:0.62rem;padding:2px 8px;border-radius:10px;margin-left:6px;font-weight:700;">RECOMMENDED</span></div>
                <div style="color:rgba(255,255,255,0.75);font-size:0.72rem;margin-top:1px;">This is the method I used &mdash; easiest way</div>
              </div>
            </div>
            <div style="background:#fff;padding:14px 18px;">
              <p style="color:#444;font-size:0.84rem;line-height:1.65;margin:0 0 10px;">Open Claude Code, click the <strong>Code tab</strong>, start a <strong>new chat</strong>, and paste the prompt below. Claude reads your instructions and creates the scheduled task for you &mdash; no form-filling, no guessing what fields to use.</p>
              <div style="display:flex;flex-direction:column;gap:7px;">
                ${['Open Claude Code desktop app', 'Click the <strong>Code</strong> tab in the top menu', 'Start a new chat session', 'Paste the prompt template below &rarr; Claude sets up the task automatically', 'To find your task after it\'s created, click the <strong>Routines</strong> tab &mdash; all your scheduled tasks live there'].map((t, i) =>
                  '<div style="display:flex;gap:10px;align-items:flex-start;">'
                  + '<div style="width:20px;height:20px;border-radius:50%;background:#CC0000;color:#fff;font-size:0.65rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">' + (i+1) + '</div>'
                  + '<span style="color:#444;font-size:0.82rem;line-height:1.5;">' + t + '</span></div>'
                ).join('')}
              </div>
              ${tip('This is the easiest method. You describe what you want in plain English and Claude handles all the task configuration for you.')}
            </div>
          </div>

          <!-- Option 2 -->
          <div style="flex:1;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
            <div style="background:#1A1A1A;padding:12px 18px;display:flex;align-items:center;gap:10px;">
              <div style="background:rgba(255,255,255,0.1);border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;color:#fff;flex-shrink:0;">2</div>
              <div>
                <div style="color:#fff;font-weight:800;font-size:0.9rem;">Use the Routines Tab</div>
                <div style="color:rgba(255,255,255,0.5);font-size:0.72rem;margin-top:1px;">Manual form &mdash; alternative method</div>
              </div>
            </div>
            <div style="background:#fff;padding:14px 18px;">
              <p style="color:#444;font-size:0.84rem;line-height:1.65;margin:0 0 10px;">Prefer to fill in a form manually? Use the built-in Scheduled Tasks interface directly.</p>
              <div style="display:flex;flex-direction:column;gap:7px;">
                ${['Open Claude Code desktop app', 'Click the <strong>Routines</strong> tab in Claude Code', 'Click <strong>+ New Scheduled Task</strong> &rarr; choose <strong>Local</strong>', 'Fill in: name, frequency (Weekdays), time, and paste your instructions'].map((t, i) =>
                  '<div style="display:flex;gap:10px;align-items:flex-start;">'
                  + '<div style="width:20px;height:20px;border-radius:50%;background:#1A1A1A;color:#fff;font-size:0.65rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">' + (i+1) + '</div>'
                  + '<span style="color:#444;font-size:0.82rem;line-height:1.5;">' + t + '</span></div>'
                ).join('')}
              </div>
              ${tip('When prompted to choose Local vs. Remote &mdash; always choose <strong>Local</strong>. Remote does not have access to your Python script or local files.')}
            </div>
          </div>

        </div>

        <!-- ── Chat mockup ── -->
        <div style="margin-bottom:6px;">
          <div style="font-size:0.7rem;font-weight:800;letter-spacing:1.2px;color:#CC0000;margin-bottom:4px;">OPTION 1 &mdash; WHAT IT LOOKS LIKE</div>
          ${chatMockup}
        </div>

        <!-- ── Prompt template ── -->
        <div style="margin-top:20px;margin-bottom:20px;">
          <div style="font-size:0.7rem;font-weight:800;letter-spacing:1.2px;color:#CC0000;margin-bottom:4px;">YOUR READY-TO-USE PROMPT &mdash; COPY THIS INTO CLAUDE CODE CHAT</div>
          ${promptTemplate}
        </div>

        <!-- ── UI mockup ── -->
        <div style="margin-bottom:24px;">
          <div style="font-size:0.7rem;font-weight:800;letter-spacing:1.2px;color:#666;margin-bottom:4px;">OPTION 2 &mdash; ROUTINES TAB</div>
          ${uiMockup}
        </div>

        <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:#1A1A1A;border-radius:10px;">
          <div style="width:3px;height:36px;background:#CC0000;border-radius:2px;flex-shrink:0;"></div>
          <p style="margin:0;font-size:0.93rem;font-weight:700;color:#fff;line-height:1.6;">Set it up once. Wake up to a published post, a logged row in your sheet, and zero work on your end.</p>
        </div>

      </div>`;
    return el;
  }
};
