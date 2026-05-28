export const slide = {
  render() {
    const el = document.createElement('div');

    const pipelineSteps = [
      {
        actor: 'You',
        title: 'Set up a scheduled task in Claude Code',
        detail: 'Open the <strong style="color:#1A1A1A;">Claude Code desktop app</strong> on your Mac &rarr; go to Scheduled Tasks &rarr; create a new task. Set your topic, category, and schedule (e.g. weekdays at 8am). Paste your automation instructions and save. <span style="display:inline-block;margin-top:7px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 5px 5px 0;padding:5px 10px;font-size:0.78rem;color:#7a5900;line-height:1.5;">&#9888;&#65039; Must use the <strong>desktop app</strong> &mdash; scheduled tasks and local automation do not work from the Claude browser app.</span>',
        tag: 'ONE-TIME SETUP',
        tagColor: '#CC0000',
        code: null,
      },
      {
        actor: 'Claude Code',
        title: 'Writes and runs the Python graphic script',
        detail: 'Runs <strong style="color:#CC0000;">locally on your Mac</strong> &mdash; not in the cloud. Your Mac must be on when the scheduled task fires. Claude writes a fresh Python script each run.',
        tag: 'LOCAL',
        tagColor: '#1A1A1A',
        code: null,
      },
      {
        actor: 'Python Script',
        title: 'Generates your branded PNG graphic',
        detail: 'Uses Pillow to draw all 6 graphic zones: avatar, name, handle, pill badge, headline, sub-headline. PNG saved locally and named by date + topic.',
        tag: null,
        code: null,
      },
      {
        actor: 'Webhook POST',
        title: 'Sends metadata to your Google Sheet',
        detail: 'Claude Code automatically sends this payload to your Apps Script URL:',
        tag: null,
        code: '{ date, title, caption, hashtags, image_url,\n  source: "Claude Code", status: "pending" }',
      },
      {
        actor: 'Google Sheet',
        title: 'New row added to your content calendar',
        detail: 'Row appears instantly with all 9 columns filled. Status = <strong style="color:#CC0000;">pending</strong> &mdash; Zapier watches for this value. You can review or edit any row before it posts.',
        tag: null,
        code: null,
      },
      {
        actor: 'Zapier',
        title: 'Detects new row and posts to LinkedIn',
        detail: 'Zap fires when it sees status = pending. Maps caption + image_url to your LinkedIn post fields. Post goes live &mdash; zero manual steps from you.',
        tag: 'FULLY AUTOMATED',
        tagColor: '#28a745',
        code: null,
      },
    ];

    const steps = pipelineSteps.map((s, i) => {
      const isLast = i === pipelineSteps.length - 1;
      const tagHtml = s.tag
        ? ' <span style="background:' + s.tagColor + ';color:#fff;font-size:0.6rem;font-weight:800;padding:2px 8px;border-radius:10px;letter-spacing:0.5px;vertical-align:middle;">' + s.tag + '</span>'
        : '';
      const codeHtml = s.code
        ? '<div style="background:#0D0D0D;border-radius:5px;padding:8px 12px;font-family:monospace;font-size:0.72rem;color:#00D4AA;line-height:1.65;margin-top:8px;white-space:pre;">' + s.code + '</div>'
        : '';
      return '<div style="display:flex;gap:0;">'
        + '<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:48px;">'
        + '<div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:800;font-size:0.85rem;display:flex;align-items:center;justify-content:center;z-index:1;">' + (i + 1) + '</div>'
        + (!isLast ? '<div style="width:2px;flex:1;background:#ebebeb;margin:6px 0;min-height:16px;"></div>' : '')
        + '</div>'
        + '<div style="flex:1;padding:2px 0 ' + (isLast ? '0' : '22px') + ' 14px;">'
        + '<div style="font-size:0.65rem;font-weight:800;letter-spacing:1px;color:#aaa;margin-bottom:3px;text-transform:uppercase;">' + s.actor + tagHtml + '</div>'
        + '<div style="font-weight:700;color:#1A1A1A;font-size:0.92rem;margin-bottom:5px;">' + s.title + '</div>'
        + '<div style="color:#666;font-size:0.83rem;line-height:1.65;">' + s.detail + '</div>'
        + codeHtml
        + '</div>'
        + '</div>';
    }).join('');

    const templateBlock = '<div style="background:#0D0D0D;border-radius:10px;padding:16px 20px;margin-bottom:14px;">'
      + '<div style="color:#888;font-size:0.67rem;font-weight:800;letter-spacing:1.2px;margin-bottom:10px;">SCHEDULED TASK INSTRUCTIONS TEMPLATE &mdash; paste this into Claude Code:</div>'
      + '<pre style="color:#00D4AA;font-family:monospace;font-size:0.75rem;line-height:1.7;margin:0;white-space:pre-wrap;overflow-x:auto;">'
      + '"Generate a new social media graphic for small business owners.\n'
      + 'Topic: [auto-generate a relevant AI or business tip]\n'
      + 'Category: AI Tools\n'
      + 'Run the Python graphic script, save PNG to ~/output/graphics/\n'
      + 'POST results to: [YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL]\n'
      + 'Caption: 2 sentences about the topic\n'
      + 'Hashtags: #MPowerMyBiz #AITools #SmallBusiness #Automation\n'
      + 'Confirm the new row appears in the Google Sheet with status: pending"'
      + '</pre></div>';

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:28px;"></div>

        <div style="margin-bottom:12px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">HOW IT WORKS</span>
        </div>

        <h2 style="font-size:clamp(1.4rem,5vw,2rem);font-weight:800;color:#1A1A1A;margin:0 0 10px;line-height:1.2;">How the Pieces Connect</h2>
        <p style="color:#666;font-size:0.95rem;line-height:1.7;margin:0 0 28px;">6 steps. <strong style="color:#CC0000;">You only set up step 1 once.</strong> Everything after that runs automatically on your schedule.</p>

        <div style="margin-bottom:28px;">${steps}</div>

        ${templateBlock}

        <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:#1A1A1A;border-radius:10px;">
          <div style="width:3px;height:36px;background:#CC0000;border-radius:2px;flex-shrink:0;"></div>
          <p style="margin:0;font-size:0.95rem;font-weight:700;color:#fff;line-height:1.6;">One setup. Six steps run automatically every time.</p>
        </div>

      </div>`;
    return el;
  }
};
