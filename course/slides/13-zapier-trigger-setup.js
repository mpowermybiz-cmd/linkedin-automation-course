export const slide = {
  render() {
    const el = document.createElement('div');

    // ── helpers ──────────────────────────────────────────────────────────────

    const tip = (text) =>
      '<div style="margin-top:8px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 6px 6px 0;padding:7px 12px;font-size:0.78rem;color:#7a5900;line-height:1.5;">&#128161; ' + text + '</div>';

    // 3-panel side-by-side mockup (Setup | Configure | Test)
    const triPanel = (p1, p2, p3) =>
      '<div class="zap-tri" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:12px;">'
      + [p1, p2, p3].map((p) =>
        '<div style="background:#fff;border:1px solid #ddd;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.07);">'
        + '<div style="background:#f5f4ff;border-bottom:1px solid #e4e0fb;padding:6px 10px;display:flex;align-items:center;gap:5px;">'
        + '<span style="font-size:0.62rem;font-weight:800;color:#7c3aed;letter-spacing:0.5px;">' + p.tab + '</span>'
        + (p.active ? '<span style="margin-left:auto;width:6px;height:2px;background:#7c3aed;border-radius:2px;display:block;"></span>' : '')
        + '</div>'
        + '<div style="padding:9px 10px;font-size:0.65rem;color:#333;line-height:1.7;">' + p.content + '</div>'
        + '</div>'
      ).join('')
      + '</div>';

    // 2-panel for Filter (Setup | Configure & test)
    const duoPanel = (p1, p2) =>
      '<div class="zap-duo" style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:12px;">'
      + [p1, p2].map((p) =>
        '<div style="background:#fff;border:1px solid #ddd;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.07);">'
        + '<div style="background:#f5f4ff;border-bottom:1px solid #e4e0fb;padding:6px 10px;">'
        + '<span style="font-size:0.62rem;font-weight:800;color:#7c3aed;letter-spacing:0.5px;">' + p.tab + '</span>'
        + '</div>'
        + '<div style="padding:9px 10px;font-size:0.65rem;color:#333;line-height:1.7;">' + p.content + '</div>'
        + '</div>'
      ).join('')
      + '</div>';

    const field = (label, value, color) =>
      '<div style="margin-bottom:5px;">'
      + '<div style="color:#999;font-size:0.6rem;margin-bottom:1px;">' + label + '</div>'
      + '<div style="background:#f8f8f8;border:1px solid #e8e8e8;border-radius:4px;padding:3px 7px;font-size:0.65rem;color:' + (color || '#1A1A1A') + ';font-weight:600;">' + value + '</div>'
      + '</div>';

    const chip = (text, color) =>
      '<span style="display:inline-block;background:' + (color || '#e8f0fe') + ';color:' + (color ? '#fff' : '#0A66C2') + ';font-size:0.6rem;font-weight:700;padding:2px 7px;border-radius:10px;margin-right:3px;">' + text + '</span>';

    const ok = (text) =>
      '<div style="background:#f0fff4;border:1px solid #c3e6cb;border-radius:5px;padding:5px 8px;font-size:0.63rem;color:#1a5c38;font-weight:700;">&#10003; ' + text + '</div>';

    // ── step data ─────────────────────────────────────────────────────────────

    const steps = [
      {
        num: 1,
        title: 'Log in to Zapier &amp; create a new Zap',
        platform: null,
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Go to <a href="https://zapier.com" target="_blank" style="color:#7c3aed;font-weight:600;text-decoration:none;">zapier.com</a> and sign in. '
          + 'In the top nav, click the <strong style="color:#1A1A1A;">+ Create</strong> button &rarr; select <strong style="color:#1A1A1A;">Zaps</strong>. '
          + 'Give your Zap a name like <em>MPowerMyBiz Content Pipeline</em>.'
          + '</div>'
          + tip('No Zapier account yet? Sign up free at zapier.com — no credit card needed to get started.'),
        mockup: null,
      },
      {
        num: 2,
        title: 'Trigger: Google Sheets &mdash; New Spreadsheet Row',
        platform: { label: 'TRIGGER', color: '#0F9D58' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Set your Trigger app to <strong>Google Sheets</strong>. Select event <strong>New Spreadsheet Row</strong>, connect your Google account, '
          + 'then pick <strong>MPowerMyBiz LinkedIn Content Calendar</strong> as the spreadsheet and <strong>Sheet1</strong> as the worksheet. '
          + 'Run the test — you should see your most recent rows appear.'
          + '</div>'
          + tip('Connect the same Google account that owns your content calendar spreadsheet.'),
        mockup: triPanel(
          {
            tab: 'SETUP ✓', active: false,
            content: field('App', '&#9989; Google Sheets', '#0F9D58')
              + field('Trigger event', 'New Spreadsheet Row')
              + field('Account', 'mpowermybiz@gmail.com #2'),
          },
          {
            tab: 'CONFIGURE ✓', active: true,
            content: field('Spreadsheet', 'MPowerMyBiz LinkedIn Content Calendar')
              + field('Worksheet', 'Sheet1'),
          },
          {
            tab: 'TEST ✓', active: false,
            content: ok('We found records!')
              + '<div style="margin-top:5px;font-size:0.62rem;color:#555;">'
              + '<div style="padding:3px 0;border-bottom:1px solid #f0f0f0;">Spreadsheet Row C &mdash; Jun 06, 2026</div>'
              + '<div style="padding:3px 0;border-bottom:1px solid #f0f0f0;">Spreadsheet Row B &mdash; Jun 06, 2026</div>'
              + '<div style="padding:3px 0;">Spreadsheet Row A &mdash; Jun 06, 2026</div>'
              + '</div>',
          }
        ),
      },
      {
        num: 3,
        title: 'Filter: Only continue if status = &ldquo;Ready to Post&rdquo;',
        platform: { label: 'FILTER', color: '#FF4A00' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>Filter by Zapier</strong> as the next step. Set the condition: '
          + '<em>1. Status</em> &rarr; <strong>(Text) Exactly matches</strong> &rarr; <code style="background:#f0f0f0;padding:1px 5px;border-radius:3px;">Ready to Post</code>. '
          + 'This ensures only fresh rows trigger the social posts below.'
          + '</div>'
          + tip('This filter is critical — without it Zapier would re-post rows that already went live.'),
        mockup: duoPanel(
          {
            tab: 'SETUP ✓',
            content: field('App', '&#9989; Filter by Zapier', '#FF4A00'),
          },
          {
            tab: 'CONFIGURE & TEST ✓',
            content: '<div style="font-size:0.62rem;color:#888;font-weight:700;margin-bottom:4px;">ONLY CONTINUE IF</div>'
              + '<div style="background:#f8f8f8;border:1px solid #e8e8e8;border-radius:4px;padding:4px 7px;margin-bottom:3px;font-size:0.63rem;color:#333;">1. Status</div>'
              + '<div style="background:#f8f8f8;border:1px solid #e8e8e8;border-radius:4px;padding:4px 7px;margin-bottom:3px;font-size:0.63rem;color:#333;">(Text) Exactly matches</div>'
              + '<div style="background:#fff3ee;border:1px solid #FF4A00;border-radius:4px;padding:4px 7px;margin-bottom:6px;font-size:0.63rem;color:#FF4A00;font-weight:700;">1. Status: Ready to Post</div>'
              + ok('Your Zap would have continued'),
          }
        ),
      },
      {
        num: 4,
        title: 'Action: LinkedIn &mdash; Create Company Update',
        platform: { label: 'ACTION', color: '#0A66C2' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>LinkedIn</strong> as an action. Select <strong>Create Company Update</strong>, connect your LinkedIn account, '
          + 'then map: Company Page &rarr; MPowerMyBiz, Update Content &rarr; Caption column, Image Type &rarr; post_media, Image &rarr; Image URL column.'
          + '</div>'
          + tip('Allow Mentions should be set to True so tagged accounts are recognized in your posts.'),
        mockup: triPanel(
          {
            tab: 'SETUP ✓', active: false,
            content: field('App', '&#9989; LinkedIn', '#0A66C2')
              + field('Action event', 'Create Company Update')
              + field('Account', 'LinkedIn MPowerMyBiz'),
          },
          {
            tab: 'CONFIGURE ✓', active: true,
            content: field('Company Page', 'MPowerMyBiz')
              + field('Update Content', '1. Caption ↗')
              + field('Image Type', 'post_media')
              + field('Image', '1. Image URL (imgur)'),
          },
          {
            tab: 'TEST ✓', active: false,
            content: ok('Update sent to LinkedIn')
              + '<div style="margin-top:5px;font-size:0.62rem;color:#555;line-height:1.7;">'
              + chip('Lifecycle State') + 'PUBLISHED<br>'
              + chip('Visibility') + 'PUBLIC'
              + '</div>',
          }
        ),
      },
      {
        num: 5,
        title: 'Action: Instagram for Business &mdash; Publish Photo(s)',
        platform: { label: 'ACTION', color: '#E1306C' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>Instagram for Business</strong> as the next action. Select <strong>Publish Photo(s)</strong>, connect your account, '
          + 'then map: Instagram Account &rarr; MPowerMyBiz, Media &rarr; Image URL column, Caption &rarr; Caption column.'
          + '</div>'
          + tip('Your Instagram account must be a Business or Creator account connected to a Facebook Page for this to work.'),
        mockup: triPanel(
          {
            tab: 'SETUP ✓', active: false,
            content: field('App', '&#9989; Instagram for Business', '#E1306C')
              + field('Action event', 'Publish Photo(s)')
              + field('Account', 'diannecalix@yahoo.com #2'),
          },
          {
            tab: 'CONFIGURE ✓', active: true,
            content: field('Instagram Account', 'MPowerMyBiz')
              + field('Media', '1. Image URL (imgur)')
              + field('Caption', '1. Caption ↗'),
          },
          {
            tab: 'TEST ✓', active: false,
            content: ok('Media sent to Instagram')
              + '<div style="margin-top:5px;font-size:0.62rem;color:#555;line-height:1.7;">'
              + 'A Media was sent to Instagram for Business about 2 days ago'
              + '</div>',
          }
        ),
      },
      {
        num: 6,
        title: 'Action: Facebook Pages &mdash; Create Page Photo',
        platform: { label: 'ACTION', color: '#1877F2' },
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Add <strong>Facebook Pages</strong> as the final action. Select <strong>Create Page Post</strong>, connect your account, '
          + 'then map: Page &rarr; your Facebook Page, Message &rarr; Caption column, Photo &rarr; Image URL column, Link URL &rarr; Source URL column.'
          + '</div>'
          + tip('Make sure your Facebook Page is connected via the same account that manages it. Page ID is found in your Facebook Page settings.'),
        mockup: triPanel(
          {
            tab: 'SETUP ✓', active: false,
            content: field('App', '&#9989; Facebook Pages', '#1877F2')
              + field('Action event', 'Create Page Post')
              + field('Account', 'diannecalix@yahoo.com'),
          },
          {
            tab: 'CONFIGURE ✓', active: true,
            content: field('Page', 'Your Facebook Page ID')
              + field('Message', '1. Caption ↗')
              + field('Photo', '1. Image URL (imgur)')
              + field('Link URL', '1. Source URL'),
          },
          {
            tab: 'TEST ✓', active: false,
            content: ok('page_stream sent to Facebook')
              + '<div style="margin-top:5px;font-size:0.62rem;color:#555;line-height:1.7;">'
              + 'A page_stream was sent to Facebook Pages about 16 minutes ago'
              + '</div>',
          }
        ),
      },
      {
        num: 7,
        title: 'Publish your Zap &amp; turn it ON',
        platform: null,
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'Click <strong>Publish</strong> in the top right corner and toggle the Zap to <strong style="color:#28a745;">ON</strong>. '
          + 'From this point, every new row with status <em>Ready to Post</em> automatically posts to <strong>LinkedIn</strong>, <strong>Instagram</strong>, and <strong>Facebook</strong> in one run.'
          + '</div>'
          + tip('Run a full end-to-end test: trigger your Claude Code scheduled task, watch the row appear in your sheet, and confirm posts go live on all three platforms.'),
        mockup: null,
      },
    ];

    // ── render ────────────────────────────────────────────────────────────────

    const cards = steps.map((s) => {
      const platformBadge = s.platform
        ? '<span style="background:' + s.platform.color + ';color:#fff;font-size:0.62rem;font-weight:800;padding:2px 9px;border-radius:10px;margin-left:8px;letter-spacing:0.5px;">' + s.platform.label + '</span>'
        : '';
      return '<div style="background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);overflow:hidden;margin-bottom:16px;">'
        + '<div style="display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:2px solid #f5f5f5;">'
        + '<div style="width:32px;height:32px;border-radius:50%;background:#7c3aed;color:#fff;font-weight:700;font-size:0.88rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s.num + '</div>'
        + '<strong style="color:#1A1A1A;font-size:0.93rem;">' + s.title + '</strong>'
        + platformBadge
        + '</div>'
        + '<div style="padding:14px 18px;">'
        + s.body
        + (s.mockup ? s.mockup : '')
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <style>
        @media(max-width:640px){
          .zap-tri{grid-template-columns:1fr!important;}
          .zap-duo{grid-template-columns:1fr!important;}
        }
      </style>
      <div style="max-width:860px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#7c3aed 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:24px;"></div>

        <div style="margin-bottom:10px;">
          <span style="background:#f5f3ff;color:#7c3aed;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">ZAPIER SETUP</span>
        </div>

        <h2 style="font-size:clamp(1.3rem,4.5vw,1.8rem);color:#1A1A1A;margin:0 0 8px;font-weight:800;">Connect Zapier to Post to LinkedIn, Instagram &amp; Facebook</h2>
        <p style="color:#555;margin:0 0 14px;line-height:1.7;">7 steps. Set it up once &mdash; then it fires automatically every time a new row hits your sheet with status <strong>Ready to Post</strong>.</p>

        <div style="display:flex;gap:8px;margin-bottom:22px;flex-wrap:wrap;">
          <span style="background:#f5f3ff;border:1px solid #7c3aed;color:#7c3aed;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">Free Tier Works</span>
          <span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">~20 min setup</span>
          <span style="background:#f9f9f9;border:1px solid #ddd;color:#555;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">Done Once</span>
          <span style="background:#e8f5e9;border:1px solid #0F9D58;color:#0F9D58;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">Posts to 3 Platforms</span>
        </div>

        ${cards}

        <div style="background:#1A1A1A;color:#fff;border-radius:10px;padding:16px 20px;text-align:center;font-weight:700;font-size:0.95rem;margin-bottom:16px;">
          One new row in your sheet &rarr; LinkedIn + Instagram + Facebook &mdash; all posted automatically.
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="background:#fff;border-radius:10px;border-left:4px solid #7c3aed;box-shadow:0 2px 6px rgba(0,0,0,0.06);padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:1.2rem;flex-shrink:0;">&#128187;</span>
            <div>
              <div style="font-weight:700;color:#1A1A1A;font-size:0.88rem;margin-bottom:3px;">Getting a Zapier error or feeling lost? Ask Claude Code &mdash; with screenshots</div>
              <div style="color:#555;font-size:0.82rem;line-height:1.6;">If anything in this setup breaks or looks different on your screen, open Claude Code and send it a screenshot of exactly what you are seeing. It will walk you through the fix step by step.</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;border-left:4px solid #f5a623;box-shadow:0 2px 6px rgba(0,0,0,0.06);padding:14px 18px;display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:1.2rem;flex-shrink:0;">&#9888;&#65039;</span>
            <div>
              <div style="font-weight:700;color:#1A1A1A;font-size:0.88rem;margin-bottom:3px;">Getting a &ldquo;Zap failed&rdquo; email? The post may have still gone through</div>
              <div style="color:#555;font-size:0.82rem;line-height:1.6;">Check your social profiles first before troubleshooting. Zapier sometimes sends false alarm failure emails even when posts published successfully.</div>
            </div>
          </div>
        </div>

      </div>`;
    return el;
  }
};
