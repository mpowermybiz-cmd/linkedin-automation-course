export const slide = {
  render() {
    const el = document.createElement('div');

    // ── helpers ──────────────────────────────────────────────────────────────

    const tip = (text) =>
      '<div style="margin-top:10px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 6px 6px 0;padding:8px 12px;font-size:0.8rem;color:#7a5900;line-height:1.5;">&#128161; ' + text + '</div>';

    const zapRow = (label, value, highlight) =>
      '<div style="display:flex;align-items:center;padding:9px 14px;border-bottom:1px solid #f0f0f0;gap:10px;">'
      + '<div style="font-size:0.78rem;color:#888;min-width:120px;flex-shrink:0;">' + label + '</div>'
      + '<div style="font-size:0.82rem;font-weight:600;color:' + (highlight || '#1A1A1A') + ';">' + value + '</div>'
      + '</div>';

    const zapOk = (text) =>
      '<div style="display:flex;align-items:center;gap:8px;background:#f0fff4;border:1px solid #c3e6cb;border-radius:8px;padding:10px 14px;margin-top:10px;">'
      + '<span style="color:#28a745;font-size:1rem;flex-shrink:0;">&#10003;</span>'
      + '<span style="font-size:0.82rem;font-weight:700;color:#1a5c38;">' + text + '</span>'
      + '</div>';

    // ── brand icon SVGs (white on solid bg, or self-contained for gradient) ──
    const icoSheets = '<svg width="16" height="16" viewBox="0 0 38 38" fill="none"><rect x="5" y="2" width="21" height="27" rx="2" fill="white" fill-opacity="0.9"/><polygon points="26,2 32,8 26,8" fill="white" fill-opacity="0.55"/><rect x="26" y="8" width="6" height="21" fill="white" fill-opacity="0.9"/><line x1="9" y1="13" x2="27" y2="13" stroke="#0F9D58" stroke-width="1.8"/><line x1="9" y1="17" x2="27" y2="17" stroke="#0F9D58" stroke-width="1.8"/><line x1="9" y1="21" x2="27" y2="21" stroke="#0F9D58" stroke-width="1.8"/><line x1="15" y1="9" x2="15" y2="27" stroke="#0F9D58" stroke-width="1.4"/><line x1="21" y1="9" x2="21" y2="27" stroke="#0F9D58" stroke-width="1.4"/></svg>';
    const icoFilter = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><line x1="3" y1="6" x2="21" y2="6" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="6" y1="12" x2="18" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="18" x2="15" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>';
    const icoLinkedIn = '<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><rect x="2" y="8" width="4" height="13" rx="0.5"/><circle cx="4" cy="4.5" r="2.2"/><path d="M10 8 h3.5 v2.2 c0.8-1.6 2.5-2.4 4-2.4 3 0 4.5 2 4.5 5.5 V21 h-3.5 V14 c0-2-0.7-3-2.2-3 -1.6 0-2.8 1.1-2.8 3.2 V21 H10 Z"/></svg>';
    const icoInstagram = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="white" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.4" fill="white"/></svg>';
    const icoFacebook = '<svg width="14" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>';

    const zapMockup = (title, icon, iconBg, rows, successMsg) =>
      '<div style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;margin-top:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">'
      + '<div style="background:#f8f8f8;border-bottom:1px solid #e0e0e0;padding:10px 16px;display:flex;align-items:center;gap:10px;">'
      + '<div style="width:28px;height:28px;border-radius:6px;background:' + iconBg + ';display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
      + icon
      + '</div>'
      + '<span style="font-size:0.85rem;font-weight:700;color:#1A1A1A;">' + title + '</span>'
      + '<div style="margin-left:auto;display:flex;gap:6px;">'
      + '<span style="font-size:0.72rem;color:#aaa;border-bottom:2px solid #aaa;padding-bottom:2px;">Setup &#10003;</span>'
      + '<span style="font-size:0.72rem;color:#CC0000;font-weight:700;border-bottom:2px solid #CC0000;padding-bottom:2px;">Configure &#10003;</span>'
      + '<span style="font-size:0.72rem;color:#aaa;border-bottom:2px solid #aaa;padding-bottom:2px;">Test &#10003;</span>'
      + '</div>'
      + '</div>'
      + rows
      + (successMsg ? zapOk(successMsg) : '')
      + '</div>';

    // ── pipeline overview ─────────────────────────────────────────────────────

    // pipeline icons — larger 40px versions
    const icoSheets40 = '<svg width="22" height="22" viewBox="0 0 38 38" fill="none"><rect x="5" y="2" width="21" height="27" rx="2" fill="white" fill-opacity="0.9"/><polygon points="26,2 32,8 26,8" fill="white" fill-opacity="0.55"/><rect x="26" y="8" width="6" height="21" fill="white" fill-opacity="0.9"/><line x1="9" y1="13" x2="27" y2="13" stroke="#0F9D58" stroke-width="2"/><line x1="9" y1="17" x2="27" y2="17" stroke="#0F9D58" stroke-width="2"/><line x1="9" y1="21" x2="27" y2="21" stroke="#0F9D58" stroke-width="2"/><line x1="15" y1="9" x2="15" y2="27" stroke="#0F9D58" stroke-width="1.5"/><line x1="21" y1="9" x2="21" y2="27" stroke="#0F9D58" stroke-width="1.5"/></svg>';
    const icoFilter40 = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><line x1="3" y1="6" x2="21" y2="6" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="6" y1="12" x2="18" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="18" x2="15" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>';
    const icoLinkedIn40 = '<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><rect x="2" y="8" width="4" height="13" rx="0.5"/><circle cx="4" cy="4.5" r="2.2"/><path d="M10 8 h3.5 v2.2 c0.8-1.6 2.5-2.4 4-2.4 3 0 4.5 2 4.5 5.5 V21 h-3.5 V14 c0-2-0.7-3-2.2-3 -1.6 0-2.8 1.1-2.8 3.2 V21 H10 Z"/></svg>';
    const icoInstagram40 = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="white" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="white"/></svg>';
    const icoFacebook40 = '<svg width="20" height="22" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>';

    const pipeline = [
      { icon: icoSheets40,    bg: '#0F9D58', label: 'Google Sheets',           sub: 'New Spreadsheet Row',   badge: 'TRIGGER', badgeBg: '#e8f5e9', badgeColor: '#0F9D58' },
      { icon: icoFilter40,    bg: '#FF4A00', label: 'Filter by Zapier',        sub: 'Filter conditions',     badge: 'FILTER',  badgeBg: '#fff3ee', badgeColor: '#FF4A00' },
      { icon: icoLinkedIn40,  bg: '#0A66C2', label: 'LinkedIn',                sub: 'Create Company Update', badge: 'ACTION',  badgeBg: '#e8f0fe', badgeColor: '#0A66C2' },
      { icon: icoInstagram40, bg: '#E1306C', label: 'Instagram for Business',  sub: 'Publish Photo(s)',      badge: 'ACTION',  badgeBg: '#fce4ec', badgeColor: '#C2185B' },
      { icon: icoFacebook40,  bg: '#1877F2', label: 'Facebook Pages',          sub: 'Create Page Post',      badge: 'ACTION',  badgeBg: '#e3f2fd', badgeColor: '#1565C0' },
    ];

    const pipelineHtml = pipeline.map((s, i) =>
      '<div style="display:flex;align-items:center;gap:12px;padding:10px 0;">'
      + (i > 0 ? '' : '')
      + '<div style="position:relative;display:flex;flex-direction:column;align-items:center;">'
      + (i > 0 ? '<div style="width:2px;height:12px;background:#ddd;margin-bottom:4px;"></div>' : '<div style="height:16px;"></div>')
      + '<div style="width:40px;height:40px;border-radius:10px;background:' + s.bg + ';color:#fff;font-weight:900;font-size:0.8rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s.icon + '</div>'
      + '</div>'
      + '<div style="flex:1;">'
      + '<div style="font-size:0.88rem;font-weight:700;color:#1A1A1A;">' + s.label + '</div>'
      + '<div style="font-size:0.72rem;color:#888;">' + s.sub + '</div>'
      + '</div>'
      + '<span style="background:' + s.badgeBg + ';color:' + s.badgeColor + ';font-size:0.62rem;font-weight:800;padding:3px 9px;border-radius:10px;white-space:nowrap;">' + s.badge + '</span>'
      + '</div>'
    ).join('');

    // ── steps ─────────────────────────────────────────────────────────────────

    const steps = [
      {
        num: 1, title: 'Log in to Zapier &amp; create a new Zap',
        platform: null,
        body: '<p style="color:#555;font-size:0.85rem;line-height:1.7;margin:0 0 8px;">Go to <a href="https://zapier.com" target="_blank" style="color:#CC0000;font-weight:700;text-decoration:none;">zapier.com</a> and sign in. Click <strong>+ Create</strong> &rarr; <strong>Zaps</strong>. Name your Zap something like <em>MPowerMyBiz Content Pipeline</em>.</p>'
          + tip('No Zapier account yet? Sign up free — no credit card needed.'),
        mockup: '',
      },
      {
        num: 2, title: 'Trigger: Google Sheets &mdash; New Spreadsheet Row',
        platform: { label: 'TRIGGER', color: '#0F9D58' },
        body: '<p style="color:#555;font-size:0.85rem;line-height:1.7;margin:0 0 8px;">Set your trigger app to <strong>Google Sheets</strong>, event to <strong>New Spreadsheet Row</strong>. Connect your Google account, select your content calendar spreadsheet, and choose <strong>Sheet1</strong>. Run the test to confirm your rows appear.</p>'
          + tip('Connect the same Google account that owns your Social Media Content Calendar.'),
        mockup: zapMockup('1. New Spreadsheet Row', icoSheets, '#0F9D58',
          zapRow('App', 'Google Sheets', '#0F9D58')
          + zapRow('Trigger event', 'New Spreadsheet Row')
          + zapRow('Spreadsheet', 'MPowerMyBiz LinkedIn Content Calendar')
          + zapRow('Worksheet', 'Sheet1'),
          'Test passed — rows found in your sheet'
        ),
      },
      {
        num: 3, title: 'Filter: Only continue if status = &ldquo;Ready to Post&rdquo;',
        platform: { label: 'FILTER', color: '#FF4A00' },
        body: '<p style="color:#555;font-size:0.85rem;line-height:1.7;margin:0 0 8px;">Add <strong>Filter by Zapier</strong>. Set the condition: <strong>1. Status</strong> &rarr; <strong>(Text) Exactly matches</strong> &rarr; <strong>Ready to Post</strong>. This makes sure only fresh, unposted rows trigger the actions below.</p>'
          + tip('This filter is critical — without it, Zapier would re-fire on rows that already posted.'),
        mockup: zapMockup('2. Filter conditions', icoFilter, '#FF4A00',
          zapRow('Only continue if', '')
          + zapRow('Field', '1. Status')
          + zapRow('Condition', '(Text) Exactly matches')
          + zapRow('Value', 'Ready to Post', '#FF4A00'),
          'Your Zap would have continued'
        ),
      },
      {
        num: 4, title: 'Action: LinkedIn &mdash; Create Company Update',
        platform: { label: 'ACTION', color: '#0A66C2' },
        body: '<p style="color:#555;font-size:0.85rem;line-height:1.7;margin:0 0 8px;">Add <strong>LinkedIn</strong>, event <strong>Create Company Update</strong>. Connect your LinkedIn account, then map the fields: Company Page &rarr; MPowerMyBiz, Update Content &rarr; Caption, Image Type &rarr; post_media, Image &rarr; Image URL.</p>'
          + tip('Set Allow Mentions to True so tagged accounts show in your posts.'),
        mockup: zapMockup('3. Create Company Update', icoLinkedIn, '#0A66C2',
          zapRow('Company Page', 'MPowerMyBiz')
          + zapRow('Update Content', '1. Caption (from Sheet)')
          + zapRow('Image Type', 'post_media')
          + zapRow('Image', '1. Image URL (imgur link)'),
          'Update sent to LinkedIn — Lifecycle: PUBLISHED'
        ),
      },
      {
        num: 5, title: 'Action: Instagram for Business &mdash; Publish Photo(s)',
        platform: { label: 'ACTION', color: '#E1306C' },
        body: '<p style="color:#555;font-size:0.85rem;line-height:1.7;margin:0 0 8px;">Add <strong>Instagram for Business</strong>, event <strong>Publish Photo(s)</strong>. Connect your account, then map: Instagram Account &rarr; MPowerMyBiz, Media &rarr; Image URL, Caption &rarr; Caption column.</p>'
          + tip('Your Instagram must be a Business or Creator account connected to a Facebook Page for this to work.'),
        mockup: zapMockup('4. Publish Photo(s)', icoInstagram, '#E1306C',
          zapRow('Instagram Account', 'MPowerMyBiz')
          + zapRow('Media', '1. Image URL (imgur link)')
          + zapRow('Caption', '1. Caption (from Sheet)'),
          'Media sent to Instagram for Business'
        ),
      },
      {
        num: 6, title: 'Action: Facebook Pages &mdash; Create Page Post',
        platform: { label: 'ACTION', color: '#1877F2' },
        body: '<p style="color:#555;font-size:0.85rem;line-height:1.7;margin:0 0 8px;">Add <strong>Facebook Pages</strong>, event <strong>Create Page Post</strong>. Connect your account, then map: Page &rarr; your Facebook Page, Message &rarr; Caption, Photo &rarr; Image URL, Link URL &rarr; Source URL.</p>'
          + tip('Page ID is found in your Facebook Page Settings under About.'),
        mockup: zapMockup('5. Create Page Post', icoFacebook, '#1877F2',
          zapRow('Page', 'Your Facebook Page')
          + zapRow('Message', '1. Caption (from Sheet)')
          + zapRow('Photo', '1. Image URL (imgur link)')
          + zapRow('Link URL', '1. Source URL'),
          'page_stream sent to Facebook Pages'
        ),
      },
      {
        num: 7, title: 'Publish your Zap &amp; turn it ON',
        platform: null,
        body: '<p style="color:#555;font-size:0.85rem;line-height:1.7;margin:0 0 8px;">Click <strong>Publish</strong> in the top right corner and toggle the Zap to <strong style="color:#28a745;">ON</strong>. From this point, every new row with status <em>Ready to Post</em> automatically posts to LinkedIn, Instagram, and Facebook.</p>'
          + tip('Run a full end-to-end test: trigger your Claude Code scheduled task, watch the row appear, and confirm all 3 platforms post.'),
        mockup: '',
      },
    ];

    const cardsHtml = steps.map((s) => {
      const badge = s.platform
        ? '<span style="background:' + s.platform.color + ';color:#fff;font-size:0.65rem;font-weight:800;padding:3px 10px;border-radius:10px;margin-left:8px;white-space:nowrap;">' + s.platform.label + '</span>'
        : '';
      return '<div style="background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);overflow:hidden;margin-bottom:18px;">'
        + '<div style="display:flex;align-items:center;gap:12px;padding:14px 20px;border-bottom:2px solid #f5f5f5;flex-wrap:wrap;">'
        + '<div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;font-size:0.9rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s.num + '</div>'
        + '<strong style="color:#1A1A1A;font-size:0.95rem;">' + s.title + '</strong>'
        + badge
        + '</div>'
        + '<div style="padding:16px 20px;">' + s.body + s.mockup + '</div>'
        + '</div>';
    }).join('');

    // ── build HTML ────────────────────────────────────────────────────────────

    const overviewHtml = '<div style="background:#f9f9f9;border:1px solid #e8e8e8;border-radius:12px;padding:20px 24px;margin-bottom:28px;">'
      + '<div style="font-size:0.68rem;font-weight:800;color:#CC0000;letter-spacing:1.2px;margin-bottom:4px;">YOUR COMPLETE ZAP — THIS IS WHAT YOU\'RE BUILDING</div>'
      + '<div style="font-size:0.82rem;color:#666;margin-bottom:16px;">Follow the 7 steps below to set up each part. You\'ll build it top to bottom, exactly as shown here.</div>'
      + '<div style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:8px 16px;">'
      + pipelineHtml
      + '</div>'
      + '</div>';

    el.innerHTML = '<style>'
      + '@media(max-width:600px){.zap-badges{flex-direction:column!important;}}'
      + '</style>'
      + '<div style="max-width:860px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">'
      + '<div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:24px;"></div>'
      + '<div style="margin-bottom:10px;"><span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">ZAPIER SETUP</span></div>'
      + '<h2 style="font-size:clamp(1.3rem,4.5vw,1.8rem);color:#1A1A1A;margin:0 0 8px;font-weight:800;">Connect Zapier to Post to LinkedIn, Instagram &amp; Facebook</h2>'
      + '<p style="color:#555;margin:0 0 16px;line-height:1.7;">7 steps &mdash; set it up once and every <strong>Ready to Post</strong> row auto-publishes to all 3 platforms.</p>'
      + '<div class="zap-badges" style="display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;">'
      + '<span style="background:#fff0f0;border:1px solid #CC0000;color:#CC0000;font-size:0.75rem;font-weight:700;padding:4px 12px;border-radius:20px;">Free Tier Works</span>'
      + '<span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:4px 12px;border-radius:20px;">~20 min setup</span>'
      + '<span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:4px 12px;border-radius:20px;">Done Once</span>'
      + '<span style="background:#e8f5e9;border:1px solid #0F9D58;color:#0F9D58;font-size:0.75rem;font-weight:700;padding:4px 12px;border-radius:20px;">Posts to 3 Platforms</span>'
      + '</div>'
      + overviewHtml
      + cardsHtml
      + '<div style="background:#1A1A1A;color:#fff;border-radius:10px;padding:16px 20px;text-align:center;font-weight:700;font-size:0.95rem;margin-bottom:16px;">'
      + 'One row in your sheet &rarr; LinkedIn + Instagram + Facebook &mdash; all posted automatically.'
      + '</div>'
      + '<div style="display:flex;flex-direction:column;gap:10px;">'
      + '<div style="background:#fff;border-radius:10px;border-left:4px solid #CC0000;box-shadow:0 2px 6px rgba(0,0,0,0.06);padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">'
      + '<span style="font-size:1.2rem;flex-shrink:0;">&#128187;</span>'
      + '<div><div style="font-weight:700;color:#1A1A1A;font-size:0.88rem;margin-bottom:3px;">Getting a Zapier error? Ask Claude Code &mdash; send it a screenshot</div>'
      + '<div style="color:#555;font-size:0.82rem;line-height:1.6;">If anything breaks or looks different, open Claude Code and paste a screenshot. It will walk you through the fix step by step.</div></div>'
      + '</div>'
      + '<div style="background:#fff;border-radius:10px;border-left:4px solid #f5a623;box-shadow:0 2px 6px rgba(0,0,0,0.06);padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">'
      + '<span style="font-size:1.2rem;flex-shrink:0;">&#9888;&#65039;</span>'
      + '<div><div style="font-weight:700;color:#1A1A1A;font-size:0.88rem;margin-bottom:3px;">Getting a &ldquo;Zap failed&rdquo; email? Check your profiles first</div>'
      + '<div style="color:#555;font-size:0.82rem;line-height:1.6;">Zapier sometimes sends false alarm emails even when posts went live. Check LinkedIn, Instagram, and Facebook before troubleshooting.</div></div>'
      + '</div>'
      + '</div>'
      + '</div>';

    return el;
  }
};
