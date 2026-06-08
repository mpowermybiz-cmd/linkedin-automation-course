export const slide = {
  render() {
    const el = document.createElement('div');

    // ── panel store for expand modal (avoids HTML escaping hell) ─────────────
    const panelStore = [];

    // ── helpers ──────────────────────────────────────────────────────────────

    const tip = (text) =>
      '<div style="margin-top:8px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 6px 6px 0;padding:7px 12px;font-size:0.78rem;color:#7a5900;line-height:1.5;">&#128161; ' + text + '</div>';

    const field = (label, value, color) =>
      '<div style="margin-bottom:5px;">'
      + '<div style="color:#999;font-size:0.6rem;margin-bottom:1px;">' + label + '</div>'
      + '<div style="background:#f8f8f8;border:1px solid #e8e8e8;border-radius:4px;padding:3px 7px;font-size:0.65rem;color:' + (color || '#1A1A1A') + ';font-weight:600;">' + value + '</div>'
      + '</div>';

    const ok = (text) =>
      '<div style="background:#f0fff4;border:1px solid #c3e6cb;border-radius:5px;padding:5px 8px;font-size:0.63rem;color:#1a5c38;font-weight:700;">&#10003; ' + text + '</div>';

    // build a single panel div and store content for expand modal
    const makePanel = (p) => {
      const idx = panelStore.length;
      panelStore.push({ tab: p.tab, content: p.content });
      return '<div style="background:#fff;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06);">'
        + '<div style="background:#fff0f0;border-bottom:1px solid #f5c6c6;padding:6px 10px;display:flex;align-items:center;justify-content:space-between;">'
        + '<span style="font-size:0.62rem;font-weight:800;color:#CC0000;letter-spacing:0.5px;">' + p.tab + '</span>'
        + '<span data-panel-idx="' + idx + '" style="font-size:0.7rem;color:#CC0000;cursor:pointer;font-weight:800;opacity:0.7;padding:0 2px;" title="Expand">&#8599;</span>'
        + '</div>'
        + '<div style="padding:9px 10px;font-size:0.65rem;color:#333;line-height:1.7;">' + p.content + '</div>'
        + '</div>';
    };

    // 3-panel grid
    const triPanel = (p1, p2, p3) =>
      '<div class="zap-tri" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:12px;">'
      + [p1, p2, p3].map(makePanel).join('')
      + '</div>';

    // 2-panel grid for Filter
    const duoPanel = (p1, p2) =>
      '<div class="zap-duo" style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:12px;">'
      + [p1, p2].map(makePanel).join('')
      + '</div>';

    // ── pipeline overview ─────────────────────────────────────────────────────

    const pipelineSteps = [
      { icon: 'GS', bg: '#0F9D58', label: 'Google Sheets',          sub: '1. New Spreadsheet Row',   type: 'TRIGGER', typeBg: '#e8f5e9', typeColor: '#0F9D58' },
      { icon: '&#9663;', bg: '#FF4A00', label: 'Filter by Zapier',  sub: '2. Filter conditions',     type: 'FILTER',  typeBg: '#fff3ee', typeColor: '#FF4A00' },
      { icon: 'in', bg: '#0A66C2', label: 'LinkedIn',               sub: '3. Create Company Update', type: 'ACTION',  typeBg: '#e8f0fe', typeColor: '#0A66C2' },
      { icon: '&#128247;', bg: '#E1306C', label: 'Instagram for Business', sub: '4. Publish Photo(s)', type: 'ACTION', typeBg: '#fce4ec', typeColor: '#E1306C' },
      { icon: 'f', bg: '#1877F2', label: 'Facebook Pages',          sub: '5. Create Page Photo',     type: 'ACTION',  typeBg: '#e3f2fd', typeColor: '#1877F2' },
    ];

    const pipelineHtml = pipelineSteps.map((s, i) =>
      '<div style="display:flex;flex-direction:column;">'
      + '<div style="display:flex;align-items:center;gap:10px;">'
      + '<div style="width:36px;height:36px;border-radius:8px;background:' + s.bg + ';color:#fff;font-weight:900;font-size:0.75rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s.icon + '</div>'
      + '<div style="flex:1;">'
      + '<div style="font-size:0.78rem;font-weight:700;color:#1A1A1A;">' + s.label + '</div>'
      + '<div style="font-size:0.63rem;color:#888;">' + s.sub + '</div>'
      + '</div>'
      + '<span style="background:' + s.typeBg + ';color:' + s.typeColor + ';font-size:0.58rem;font-weight:800;padding:2px 7px;border-radius:8px;white-space:nowrap;">' + s.type + '</span>'
      + '</div>'
      + (i < pipelineSteps.length - 1 ? '<div style="width:2px;height:16px;background:#ddd;margin-left:17px;margin-top:3px;margin-bottom:3px;border-radius:2px;"></div>' : '')
      + '</div>'
    ).join('');

    const howItWorks = [
      '<strong style="color:#1A1A1A;">Google Sheets</strong> detects a new row with status <em>Ready to Post</em>',
      '<strong style="color:#1A1A1A;">Filter</strong> checks the status matches before continuing',
      '<strong style="color:#1A1A1A;">LinkedIn</strong> publishes the graphic + caption to your company page',
      '<strong style="color:#1A1A1A;">Instagram</strong> posts the photo + caption to your business account',
      '<strong style="color:#1A1A1A;">Facebook</strong> creates a page photo post automatically',
    ].map((t, i) =>
      '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:7px;">'
      + '<span style="background:#CC0000;color:#fff;font-size:0.6rem;font-weight:800;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">' + (i + 1) + '</span>'
      + '<span style="font-size:0.82rem;color:#444;line-height:1.6;">' + t + '</span>'
      + '</div>'
    ).join('');

    // ── step data ─────────────────────────────────────────────────────────────

    const steps = [
      {
        num: 1,
        title: 'Log in to Zapier &amp; create a new Zap',
        platform: null,
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Go to <a href="https://zapier.com" target="_blank" style="color:#CC0000;font-weight:600;text-decoration:none;">zapier.com</a> and sign in. '
          + 'Click <strong>+ Create</strong> &rarr; select <strong>Zaps</strong>. Give your Zap a name like <em>MPowerMyBiz Content Pipeline</em>.'
          + '</div>'
          + tip('No Zapier account yet? Sign up free at zapier.com — no credit card needed to get started.'),
        mockup: null,
      },
      {
        num: 2,
        title: 'Trigger: Google Sheets &mdash; New Spreadsheet Row',
        platform: { label: 'TRIGGER', color: '#0F9D58' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Set trigger app to <strong>Google Sheets</strong>, event to <strong>New Spreadsheet Row</strong>, connect your Google account, '
          + 'pick <strong>MPowerMyBiz LinkedIn Content Calendar</strong> as the spreadsheet and <strong>Sheet1</strong>. Run the test to confirm your rows appear.'
          + '</div>'
          + tip('Connect the same Google account that owns your content calendar.'),
        mockup: triPanel(
          { tab: 'SETUP ✓',
            content: field('App', '&#9989; Google Sheets', '#0F9D58') + field('Trigger event', 'New Spreadsheet Row') + field('Account', 'mpowermybiz@gmail.com #2') },
          { tab: 'CONFIGURE ✓',
            content: field('Spreadsheet', 'MPowerMyBiz LinkedIn Content Calendar') + field('Worksheet', 'Sheet1') },
          { tab: 'TEST ✓',
            content: ok('We found records!') + '<div style="margin-top:5px;font-size:0.62rem;color:#555;line-height:1.8;"><div>Spreadsheet Row C &mdash; Jun 06</div><div>Spreadsheet Row B &mdash; Jun 06</div><div>Spreadsheet Row A &mdash; Jun 06</div></div>' }
        ),
      },
      {
        num: 3,
        title: 'Filter: Only continue if status = &ldquo;Ready to Post&rdquo;',
        platform: { label: 'FILTER', color: '#FF4A00' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>Filter by Zapier</strong>. Set condition: <em>1. Status</em> &rarr; <strong>(Text) Exactly matches</strong> &rarr; <code style="background:#f0f0f0;padding:1px 5px;border-radius:3px;">Ready to Post</code>.'
          + '</div>'
          + tip('This filter is critical — without it Zapier would re-post rows that already went live.'),
        mockup: duoPanel(
          { tab: 'SETUP ✓',
            content: field('App', '&#9989; Filter by Zapier', '#FF4A00') },
          { tab: 'CONFIGURE & TEST ✓',
            content: '<div style="font-size:0.6rem;color:#888;font-weight:700;margin-bottom:4px;">ONLY CONTINUE IF</div>'
              + '<div style="background:#f8f8f8;border:1px solid #eee;border-radius:3px;padding:3px 6px;margin-bottom:2px;font-size:0.63rem;">1. Status</div>'
              + '<div style="background:#f8f8f8;border:1px solid #eee;border-radius:3px;padding:3px 6px;margin-bottom:2px;font-size:0.63rem;">(Text) Exactly matches</div>'
              + '<div style="background:#fff3ee;border:1px solid #FF4A00;border-radius:3px;padding:3px 6px;margin-bottom:6px;font-size:0.63rem;color:#FF4A00;font-weight:700;">Ready to Post</div>'
              + ok('Your Zap would have continued') }
        ),
      },
      {
        num: 4,
        title: 'Action: LinkedIn &mdash; Create Company Update',
        platform: { label: 'ACTION', color: '#0A66C2' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>LinkedIn</strong> action, event <strong>Create Company Update</strong>. Map: Company Page &rarr; MPowerMyBiz, Update Content &rarr; Caption, Image Type &rarr; post_media, Image &rarr; Image URL.'
          + '</div>'
          + tip('Set Allow Mentions to True so tagged accounts are recognized.'),
        mockup: triPanel(
          { tab: 'SETUP ✓',
            content: field('App', '&#9989; LinkedIn', '#0A66C2') + field('Action event', 'Create Company Update') + field('Account', 'LinkedIn MPowerMyBiz') },
          { tab: 'CONFIGURE ✓',
            content: field('Company Page', 'MPowerMyBiz') + field('Update Content', '1. Caption ↗') + field('Image Type', 'post_media') + field('Image', '1. Image URL (imgur)') },
          { tab: 'TEST ✓',
            content: ok('Update sent to LinkedIn') + '<div style="margin-top:5px;font-size:0.62rem;color:#555;line-height:1.8;"><div>Lifecycle State: <strong>PUBLISHED</strong></div><div>Visibility: <strong>PUBLIC</strong></div></div>' }
        ),
      },
      {
        num: 5,
        title: 'Action: Instagram for Business &mdash; Publish Photo(s)',
        platform: { label: 'ACTION', color: '#E1306C' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>Instagram for Business</strong>, event <strong>Publish Photo(s)</strong>. Map: Instagram Account &rarr; MPowerMyBiz, Media &rarr; Image URL, Caption &rarr; Caption column.'
          + '</div>'
          + tip('Your Instagram must be a Business or Creator account connected to a Facebook Page.'),
        mockup: triPanel(
          { tab: 'SETUP ✓',
            content: field('App', '&#9989; Instagram for Business', '#E1306C') + field('Action event', 'Publish Photo(s)') + field('Account', 'diannecalix@yahoo.com #2') },
          { tab: 'CONFIGURE ✓',
            content: field('Instagram Account', 'MPowerMyBiz') + field('Media', '1. Image URL (imgur)') + field('Caption', '1. Caption ↗') },
          { tab: 'TEST ✓',
            content: ok('Media sent to Instagram') + '<div style="margin-top:5px;font-size:0.62rem;color:#555;line-height:1.8;">A Media was sent to Instagram for Business about 2 days ago</div>' }
        ),
      },
      {
        num: 6,
        title: 'Action: Facebook Pages &mdash; Create Page Photo',
        platform: { label: 'ACTION', color: '#1877F2' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>Facebook Pages</strong>, event <strong>Create Page Post</strong>. Map: Page &rarr; your Facebook Page, Message &rarr; Caption, Photo &rarr; Image URL, Link URL &rarr; Source URL.'
          + '</div>'
          + tip('Make sure your Facebook Page is connected via the account that manages it.'),
        mockup: triPanel(
          { tab: 'SETUP ✓',
            content: field('App', '&#9989; Facebook Pages', '#1877F2') + field('Action event', 'Create Page Post') + field('Account', 'diannecalix@yahoo.com') },
          { tab: 'CONFIGURE ✓',
            content: field('Page', 'Your Facebook Page ID') + field('Message', '1. Caption ↗') + field('Photo', '1. Image URL (imgur)') + field('Link URL', '1. Source URL') },
          { tab: 'TEST ✓',
            content: ok('page_stream sent to Facebook') + '<div style="margin-top:5px;font-size:0.62rem;color:#555;line-height:1.8;">A page_stream was sent to Facebook Pages about 16 minutes ago</div>' }
        ),
      },
      {
        num: 7,
        title: 'Publish your Zap &amp; turn it ON',
        platform: null,
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Click <strong>Publish</strong> in the top right and toggle the Zap to <strong style="color:#28a745;">ON</strong>. '
          + 'Every new row with status <em>Ready to Post</em> now auto-posts to LinkedIn, Instagram, and Facebook.'
          + '</div>'
          + tip('Run a full end-to-end test: trigger your Claude Code task, watch the row appear, and confirm all 3 platforms post.'),
        mockup: null,
      },
    ];

    // ── render cards ──────────────────────────────────────────────────────────

    const cards = steps.map((s) => {
      const badge = s.platform
        ? '<span style="background:' + s.platform.color + ';color:#fff;font-size:0.62rem;font-weight:800;padding:2px 9px;border-radius:10px;margin-left:8px;">' + s.platform.label + '</span>'
        : '';
      return '<div style="background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);overflow:hidden;margin-bottom:16px;">'
        + '<div style="display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:2px solid #f5f5f5;">'
        + '<div style="width:32px;height:32px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;font-size:0.88rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s.num + '</div>'
        + '<strong style="color:#1A1A1A;font-size:0.93rem;">' + s.title + '</strong>'
        + badge
        + '</div>'
        + '<div style="padding:14px 18px;">' + s.body + (s.mockup || '') + '</div>'
        + '</div>';
    }).join('');

    // ── HTML ──────────────────────────────────────────────────────────────────

    el.innerHTML = `
      <style>
        @media(max-width:640px){
          .zap-tri{grid-template-columns:1fr!important;}
          .zap-duo{grid-template-columns:1fr!important;}
          .zap-overview{flex-direction:column!important;}
          .zap-how{border-left:none!important;border-top:2px solid #e8e8e8!important;padding-left:0!important;padding-top:16px!important;}
        }
      </style>
      <div style="max-width:860px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:24px;"></div>

        <div style="margin-bottom:10px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">ZAPIER SETUP</span>
        </div>

        <h2 style="font-size:clamp(1.3rem,4.5vw,1.8rem);color:#1A1A1A;margin:0 0 8px;font-weight:800;">Connect Zapier to Post to LinkedIn, Instagram &amp; Facebook</h2>
        <p style="color:#555;margin:0 0 14px;line-height:1.7;">7 steps &mdash; set it up once and every <strong>Ready to Post</strong> row auto-publishes to all 3 platforms.</p>

        <div style="display:flex;gap:8px;margin-bottom:22px;flex-wrap:wrap;">
          <span style="background:#fff0f0;border:1px solid #CC0000;color:#CC0000;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">Free Tier Works</span>
          <span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">~20 min setup</span>
          <span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">Done Once</span>
          <span style="background:#e8f5e9;border:1px solid #0F9D58;color:#0F9D58;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">3 Platforms</span>
        </div>

        <!-- Pipeline overview -->
        <div style="background:#f9f9f9;border:1px solid #e8e8e8;border-radius:12px;padding:20px 24px;margin-bottom:26px;">
          <div style="font-size:0.68rem;font-weight:800;color:#CC0000;letter-spacing:1.2px;margin-bottom:14px;">YOUR COMPLETE ZAP &mdash; THIS IS WHAT YOU&rsquo;RE BUILDING</div>
          <div class="zap-overview" style="display:flex;gap:24px;align-items:flex-start;">
            <div style="flex:0 0 auto;">
              <div style="font-size:0.62rem;font-weight:800;color:#aaa;letter-spacing:1px;margin-bottom:10px;">ZAP FLOW</div>
              ${pipelineHtml}
            </div>
            <div class="zap-how" style="flex:1;border-left:2px solid #e8e8e8;padding-left:20px;">
              <div style="font-size:0.62rem;font-weight:800;color:#aaa;letter-spacing:1px;margin-bottom:10px;">HOW IT WORKS</div>
              ${howItWorks}
              <div style="margin-top:12px;background:#fff0f0;border-radius:8px;padding:10px 14px;font-size:0.78rem;color:#CC0000;font-weight:700;line-height:1.6;">
                &#128161; Follow the step-by-step below to build each part of this pipeline exactly as shown.
              </div>
            </div>
          </div>
        </div>

        ${cards}

        <div style="background:#1A1A1A;color:#fff;border-radius:10px;padding:16px 20px;text-align:center;font-weight:700;font-size:0.95rem;margin-bottom:16px;">
          One new row in your sheet &rarr; LinkedIn + Instagram + Facebook &mdash; all posted automatically.
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="background:#fff;border-radius:10px;border-left:4px solid #CC0000;box-shadow:0 2px 6px rgba(0,0,0,0.06);padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:1.2rem;flex-shrink:0;">&#128187;</span>
            <div>
              <div style="font-weight:700;color:#1A1A1A;font-size:0.88rem;margin-bottom:3px;">Getting a Zapier error? Ask Claude Code — send it a screenshot</div>
              <div style="color:#555;font-size:0.82rem;line-height:1.6;">If anything breaks or looks different, open Claude Code and paste a screenshot. It will walk you through the fix step by step.</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;border-left:4px solid #f5a623;box-shadow:0 2px 6px rgba(0,0,0,0.06);padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:1.2rem;flex-shrink:0;">&#9888;&#65039;</span>
            <div>
              <div style="font-weight:700;color:#1A1A1A;font-size:0.88rem;margin-bottom:3px;">Getting a &ldquo;Zap failed&rdquo; email? Check your profiles first</div>
              <div style="color:#555;font-size:0.82rem;line-height:1.6;">Zapier sometimes sends false alarm failure emails even when posts published successfully. Check LinkedIn, Instagram, and Facebook before troubleshooting.</div>
            </div>
          </div>
        </div>

      </div>`;

    // ── expand modal — clean event delegation, no inline escaping ─────────────
    el.addEventListener('click', function(e) {
      const btn = e.target.closest('[data-panel-idx]');
      if (!btn) return;
      const panel = panelStore[parseInt(btn.getAttribute('data-panel-idx'), 10)];
      if (!panel) return;
      const existing = document.getElementById('zap-expand-modal');
      if (existing) existing.remove();
      const overlay = document.createElement('div');
      overlay.id = 'zap-expand-modal';
      overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;';
      const modal = document.createElement('div');
      modal.style.cssText = 'background:#fff;border-radius:14px;max-width:460px;width:100%;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.3);';
      const header = document.createElement('div');
      header.style.cssText = 'background:#fff0f0;border-bottom:1px solid #f5c6c6;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;';
      header.innerHTML = '<span style="font-size:0.75rem;font-weight:800;color:#CC0000;letter-spacing:0.5px;">' + panel.tab + '</span>'
        + '<span style="cursor:pointer;font-size:1.4rem;color:#999;line-height:1;" id="zap-modal-close">&times;</span>';
      const body = document.createElement('div');
      body.style.cssText = 'padding:20px;font-size:0.82rem;color:#333;line-height:1.9;';
      body.innerHTML = panel.content;
      modal.appendChild(header);
      modal.appendChild(body);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', function(ev) { if (ev.target === overlay) overlay.remove(); });
      document.getElementById('zap-modal-close').addEventListener('click', function() { overlay.remove(); });
    });

    return el;
  }
};
