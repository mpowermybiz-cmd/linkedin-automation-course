export const slide = {
  render() {
    const el = document.createElement('div');

    const cc = '<a href="https://claude.ai/code" target="_blank" rel="noopener" style="color:#1A1A1A;font-weight:700;text-decoration:none;border-bottom:1px solid #ccc;">Claude Code</a>';
    const imgur = '<a href="https://imgur.com" target="_blank" rel="noopener" style="color:#1A1A1A;font-weight:600;text-decoration:none;border-bottom:1px solid #ccc;">Imgur</a>';
    const sheets = '<a href="https://sheets.google.com" target="_blank" rel="noopener" style="color:#1A1A1A;font-weight:600;text-decoration:none;border-bottom:1px solid #ccc;">Google Sheets</a>';
    const zapier = '<a href="https://zapier.com" target="_blank" rel="noopener" style="color:#1A1A1A;font-weight:600;text-decoration:none;border-bottom:1px solid #ccc;">Zapier</a>';
    const linkedin = '<a href="https://linkedin.com" target="_blank" rel="noopener" style="color:#1A1A1A;font-weight:600;text-decoration:none;border-bottom:1px solid #ccc;">LinkedIn</a>';

    const steps = [
      {
        num: '1',
        accentColor: '#1A1A1A',
        icon: '<div style="width:38px;height:38px;background:#1A1A1A;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<span style="color:#D97757;font-size:0.72rem;font-weight:800;font-family:monospace;">&lt;/&gt;</span>'
          + '</div>',
        labelHref: 'https://claude.ai/code',
        label: 'Claude Code',
        sub: 'Create your scheduled task',
        detail: cc + ' writes and runs the Python graphic script automatically, based on the scheduled task instructions you set up.',
      },
      {
        num: '2',
        accentColor: '#CC0000',
        icon: '<div style="width:38px;height:38px;background:#CC0000;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<svg width="20" height="17" viewBox="0 0 20 17" fill="none"><rect x="1" y="1" width="18" height="15" rx="2" stroke="white" stroke-width="1.4"/><circle cx="5.5" cy="5.5" r="1.8" fill="white" opacity="0.75"/><path d="M1 12 L5.5 8 L9 11 L13 7.5 L19 12" stroke="white" stroke-width="1.4" stroke-linejoin="round" fill="none"/></svg>'
          + '</div>',
        labelHref: null,
        label: 'Auto Graphic',
        sub: 'PNG auto-generated',
        detail: 'Avatar, pill badge, headline &amp; sub-headline are rendered into a PNG, then uploaded to ' + imgur + ' which returns a public image URL used in the next step.',
      },
      {
        num: '3',
        accentColor: '#0F9D58',
        icon: '<div style="width:38px;height:38px;background:#0F9D58;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill="white" fill-opacity="0.15"/><line x1="3" y1="8" x2="21" y2="8" stroke="white" stroke-width="1.5"/><line x1="3" y1="13" x2="21" y2="13" stroke="white" stroke-width="1.5"/><line x1="3" y1="18" x2="21" y2="18" stroke="white" stroke-width="1.5"/><line x1="9" y1="3" x2="9" y2="21" stroke="white" stroke-width="1.5"/><line x1="15" y1="3" x2="15" y2="21" stroke="white" stroke-width="1.5"/></svg>'
          + '</div>',
        labelHref: 'https://sheets.google.com',
        label: 'Google Sheets',
        sub: 'Auto-logged to Google Sheet',
        detail: 'The PNG image URL, post caption, hashtags, category, and all content details are automatically written into your ' + sheets + ' content calendar &mdash; status set to <strong>Ready to Post</strong>.',
      },
      {
        num: '4',
        accentColor: '#FF4A00',
        icon: '<div style="width:38px;height:38px;background:#FF4A00;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<span style="color:#fff;font-size:1.1rem;font-weight:900;font-style:italic;font-family:Georgia,serif;line-height:1;">Z</span>'
          + '</div>',
        labelHref: 'https://zapier.com',
        label: 'Zapier',
        sub: 'Syncs from Google Sheet',
        detail: zapier + ' monitors your Google Sheet in real time. The moment it detects a new row with status = <strong>Ready to Post</strong>, it fires the action to publish to your social media platform.',
      },
      {
        num: '5',
        accentColor: '#0A66C2',
        icon: '<div style="width:38px;height:38px;background:#0A66C2;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<span style="color:#fff;font-size:0.78rem;font-weight:900;font-style:italic;font-family:Arial,sans-serif;">in</span>'
          + '</div>',
        labelHref: 'https://linkedin.com',
        label: 'LinkedIn',
        sub: 'Post goes live',
        detail: linkedin + ' receives the graphic + caption and publishes the post. Zero clicks. Zero manual steps. Fully automated.',
      },
    ];

    const stepsHtml = steps.map((s, i) => {
      const isLast = i === steps.length - 1;
      const labelEl = s.labelHref
        ? '<a href="' + s.labelHref + '" target="_blank" rel="noopener" style="color:#1A1A1A;font-weight:800;font-size:0.95rem;text-decoration:none;border-bottom:2px solid ' + s.accentColor + ';">' + s.label + '</a>'
        : '<span style="font-weight:800;font-size:0.95rem;color:#1A1A1A;">' + s.label + '</span>';

      return ''
        + '<div style="display:flex;gap:0;align-items:stretch;' + (isLast ? '' : 'margin-bottom:0;') + '">'

        // ── left: number + vertical connector
        + '<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:28px;margin-right:14px;">'
        + '<div style="width:26px;height:26px;border-radius:50%;background:#3a3a3a;color:#fff;font-size:0.7rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;">' + s.num + '</div>'
        + (isLast ? '' : '<div style="flex:1;width:2px;background:#efefef;margin-top:4px;margin-bottom:0;min-height:20px;"></div>')
        + '</div>'

        // ── right: icon + name + detail (side by side)
        + '<div style="flex:1;display:flex;gap:16px;align-items:flex-start;padding-bottom:' + (isLast ? '0' : '22px') + ';">'

        // icon
        + s.icon

        // name + sub on left, detail on right
        + '<div style="flex:1;display:flex;gap:0;align-items:flex-start;flex-wrap:wrap;">'

        // name column (fixed ~180px on desktop)
        + '<div style="flex:0 0 170px;min-width:130px;padding-right:12px;">'
        + labelEl
        + '<div style="font-size:0.72rem;color:' + s.accentColor + ';font-weight:600;margin-top:3px;">' + s.sub + '</div>'
        + '</div>'

        // detail column
        + '<div style="flex:1;min-width:180px;color:#555;font-size:0.83rem;line-height:1.65;padding-top:2px;">' + s.detail + '</div>'

        + '</div>'
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <div style="max-width:820px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#FF4A00 50%,#0A66C2 100%);border-radius:2px;margin-bottom:24px;"></div>

        <div style="margin-bottom:10px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">YOUR PIPELINE</span>
        </div>

        <h2 style="font-size:clamp(1.4rem,5vw,2rem);font-weight:800;color:#1A1A1A;margin:0 0 8px;line-height:1.2;">What You&rsquo;re Building</h2>
        <p style="color:#666;font-size:0.93rem;line-height:1.7;margin:0 0 22px;">Create a scheduled task in <a href="https://claude.ai/code" target="_blank" rel="noopener" style="color:#1A1A1A;font-weight:700;text-decoration:none;border-bottom:1.5px solid #CC0000;">Claude Code</a> with exactly what you want your automation to do &mdash; here&rsquo;s what happens automatically, every single time.</p>

        <div style="margin-bottom:22px;">
          <div style="font-size:0.68rem;font-weight:800;letter-spacing:1.5px;color:#aaa;text-transform:uppercase;margin-bottom:4px;">Welcome to the Stack</div>
          <div style="font-size:1rem;font-weight:700;color:#1A1A1A;margin-bottom:20px;">Here&rsquo;s What Powers This Automation</div>
          <div style="background:#fafafa;border:1px solid #efefef;border-radius:12px;padding:22px 20px 18px;">
            ${stepsHtml}
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:#1A1A1A;border-radius:10px;">
          <div style="width:3px;height:38px;background:#CC0000;border-radius:2px;flex-shrink:0;"></div>
          <p style="margin:0;font-size:0.95rem;font-weight:700;color:#fff;line-height:1.6;">You set up the scheduled task once in <a href="https://claude.ai/code" target="_blank" rel="noopener" style="color:#CC0000;text-decoration:none;border-bottom:1px solid #CC0000;">Claude Code</a> &mdash; the pipeline writes the code, creates the graphic, logs it, and posts it, without you touching anything else. Everything is connected.</p>
        </div>

      </div>`;
    return el;
  }
};
