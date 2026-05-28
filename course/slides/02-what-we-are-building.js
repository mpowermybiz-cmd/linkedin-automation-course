export const slide = {
  render() {
    const el = document.createElement('div');

    // ── roadmap nodes ────────────────────────────────────────────────────────

    const nodes = [
      {
        num: '1',
        color: '#1A1A1A',
        icon: '<div style="width:36px;height:36px;background:#1A1A1A;border-radius:8px;display:flex;align-items:center;justify-content:center;">'
          + '<span style="color:#D97757;font-size:0.72rem;font-weight:800;font-family:monospace;">&lt;/&gt;</span>'
          + '</div>',
        label: 'Claude Code',
        sub: 'You type a topic',
        detail: 'Claude writes &amp; runs the Python graphic script automatically',
      },
      {
        num: '2',
        color: '#CC0000',
        icon: '<div style="width:36px;height:36px;background:#CC0000;border-radius:8px;display:flex;align-items:center;justify-content:center;">'
          + '<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">'
          + '<rect x="1" y="1" width="18" height="15" rx="2" stroke="white" stroke-width="1.4"/>'
          + '<circle cx="5.5" cy="5.5" r="1.8" fill="white" opacity="0.75"/>'
          + '<path d="M1 12 L5.5 8 L9 11 L13 7.5 L19 12" stroke="white" stroke-width="1.4" stroke-linejoin="round" fill="none"/>'
          + '</svg>'
          + '</div>',
        label: 'Branded Graphic',
        sub: 'PNG generated instantly',
        detail: 'Avatar, pill badge, headline &amp; sub-headline — all in your brand',
      },
      {
        num: '3',
        color: '#0F9D58',
        icon: '<div style="width:36px;height:36px;background:#0F9D58;border-radius:8px;display:flex;align-items:center;justify-content:center;">'
          + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
          + '<rect x="3" y="3" width="18" height="18" rx="2" fill="white" fill-opacity="0.15"/>'
          + '<line x1="3" y1="8" x2="21" y2="8" stroke="white" stroke-width="1.5"/>'
          + '<line x1="3" y1="13" x2="21" y2="13" stroke="white" stroke-width="1.5"/>'
          + '<line x1="3" y1="18" x2="21" y2="18" stroke="white" stroke-width="1.5"/>'
          + '<line x1="9" y1="3" x2="9" y2="21" stroke="white" stroke-width="1.5"/>'
          + '<line x1="15" y1="3" x2="15" y2="21" stroke="white" stroke-width="1.5"/>'
          + '</svg>'
          + '</div>',
        label: 'Google Sheets',
        sub: 'Auto-logged to calendar',
        detail: 'All 9 columns filled via webhook — status set to pending',
      },
      {
        num: '4',
        color: '#FF4A00',
        icon: '<div style="width:36px;height:36px;background:#FF4A00;border-radius:8px;display:flex;align-items:center;justify-content:center;">'
          + '<span style="color:#fff;font-size:1.1rem;font-weight:900;font-style:italic;font-family:Georgia,serif;line-height:1;">Z</span>'
          + '</div>',
        label: 'Zapier',
        sub: 'Detects the new row',
        detail: 'Watches for status = pending and fires the LinkedIn action',
      },
      {
        num: '5',
        color: '#0A66C2',
        icon: '<div style="width:36px;height:36px;background:#0A66C2;border-radius:8px;display:flex;align-items:center;justify-content:center;">'
          + '<span style="color:#fff;font-size:0.78rem;font-weight:900;font-style:italic;font-family:Arial,sans-serif;">in</span>'
          + '</div>',
        label: 'LinkedIn',
        sub: 'Post goes live',
        detail: 'Graphic + caption published. Zero clicks. Zero manual steps.',
      },
    ];

    // ── build roadmap HTML ───────────────────────────────────────────────────

    const roadmapNodes = nodes.map((n, i) => {
      const isLast = i === nodes.length - 1;
      const node = '<div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;min-width:0;">'
        + '<div style="width:44px;height:44px;border-radius:50%;background:' + n.color + ';color:#fff;font-weight:800;font-size:0.88rem;display:flex;align-items:center;justify-content:center;position:relative;z-index:1;box-shadow:0 0 0 4px #fff,0 0 0 5px ' + n.color + '22;">'
        + n.num
        + '</div>'
        + '<div style="margin-top:10px;">' + n.icon + '</div>'
        + '<div style="font-size:0.8rem;font-weight:700;color:#1A1A1A;margin-top:8px;line-height:1.3;">' + n.label + '</div>'
        + '<div style="font-size:0.7rem;color:#CC0000;font-weight:600;margin-top:3px;">' + n.sub + '</div>'
        + '</div>';
      const arrow = isLast ? '' : '<div style="color:#ddd;font-size:1rem;flex-shrink:0;padding:0 2px;margin-top:12px;">&#8594;</div>';
      return node + arrow;
    }).join('');

    // ── detail rows (below roadmap) ──────────────────────────────────────────

    const detailRows = nodes.map((n) => {
      return '<div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid #f5f5f5;">'
        + '<div style="width:22px;height:22px;border-radius:50%;background:' + n.color + ';color:#fff;font-size:0.68rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">' + n.num + '</div>'
        + '<div>'
        + '<span style="font-weight:700;color:#1A1A1A;font-size:0.85rem;">' + n.label + '</span>'
        + '<span style="color:#888;font-size:0.82rem;"> &mdash; ' + n.detail + '</span>'
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:32px 24px;font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#FF4A00 50%,#0A66C2 100%);border-radius:2px;margin-bottom:28px;"></div>

        <div style="margin-bottom:12px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">YOUR PIPELINE</span>
        </div>

        <h2 style="font-size:2rem;font-weight:800;color:#1A1A1A;margin:0 0 10px;line-height:1.2;">What You&rsquo;re Building</h2>
        <p style="color:#666;font-size:0.95rem;line-height:1.7;margin:0 0 32px;">Give Claude Code a topic once. Here&rsquo;s exactly what happens next &mdash; automatically, every single time.</p>

        <div style="position:relative;margin-bottom:32px;">
          <div style="position:absolute;top:22px;left:5%;right:5%;height:2px;background:linear-gradient(90deg,#1A1A1A,#CC0000,#0F9D58,#FF4A00,#0A66C2);opacity:0.15;z-index:0;border-radius:1px;"></div>
          <div style="display:flex;align-items:flex-start;">${roadmapNodes}</div>
        </div>

        <div style="border-top:1px solid #ebebeb;padding-top:20px;margin-bottom:28px;">
          <div style="font-size:0.68rem;font-weight:800;letter-spacing:1.5px;color:#aaa;margin-bottom:12px;">WHAT EACH STEP DOES</div>
          ${detailRows}
        </div>

        <div style="display:flex;align-items:center;gap:16px;padding:18px 22px;background:#1A1A1A;border-radius:10px;">
          <div style="width:3px;height:40px;background:#CC0000;border-radius:2px;flex-shrink:0;"></div>
          <p style="margin:0;font-size:1rem;font-weight:700;color:#fff;line-height:1.6;">You say the topic. The pipeline writes the code, creates the graphic, logs it, and posts it &mdash; all without you touching anything else.</p>
        </div>

      </div>`;
    return el;
  }
};
