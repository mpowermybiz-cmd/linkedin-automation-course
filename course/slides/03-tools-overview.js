export const slide = {
  render() {
    const el = document.createElement('div');

    const cmd = (label, code) => '<div style="margin-top:8px;">'
      + '<div style="color:#777;font-size:0.79rem;margin-bottom:3px;">' + label + '</div>'
      + '<div style="background:#0D0D0D;border-radius:6px;padding:8px 12px;font-family:monospace;font-size:0.78rem;color:#00D4AA;overflow-x:auto;line-height:1.6;">' + code + '</div>'
      + '</div>';

    const tip = (text) => '<div style="margin-top:8px;background:#fffbf0;border-left:3px solid #f5a623;border-radius:0 6px 6px 0;padding:7px 12px;font-size:0.79rem;color:#7a5900;line-height:1.5;">&#128161; ' + text + '</div>';

    const tools = [
      {
        num: 1,
        name: 'Homebrew',
        desc: 'Mac package manager &mdash; must be installed first because Steps 2 and 3 (Node.js &amp; Python) both depend on it',
        badge: 'Free',
        badgeColor: '#555',
        badgeBg: '#f0f0f0',
        body: tip('Why first? Homebrew lets your Mac install developer tools from the Terminal. Node.js (for Claude Code) and Python (for the graphic script) are both installed via Homebrew — so this has to come before everything else. You only do it once.')
          + cmd('Open Terminal &mdash; Applications &rarr; Utilities &rarr; Terminal &mdash; then paste:', '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')
          + cmd('Verify it installed:', 'brew --version   # should print a version number'),
      },
      {
        num: 2,
        name: 'Claude Code',
        desc: 'The AI that writes and runs your entire automation &mdash; runs locally on your Mac',
        badge: '$20/month',
        badgeColor: '#CC0000',
        badgeBg: '#fff0f0',
        body: '<div style="color:#444;font-size:0.82rem;line-height:1.7;margin-bottom:2px;">'
          + '<strong style="color:#1A1A1A;">Step 1 &mdash; Subscribe to Claude Pro:</strong> Go to '
          + '<a href="https://claude.ai" target="_blank" style="color:#CC0000;font-weight:600;text-decoration:none;">claude.ai</a>'
          + ' &rarr; click your profile &rarr; Settings &rarr; Upgrade to Pro</div>'
          + cmd('Step 2 &mdash; Install Node.js (required by Claude Code):', 'brew install node')
          + cmd('Step 3 &mdash; Install Claude Code:', 'npm install -g @anthropic-ai/claude-code')
          + cmd('Step 4 &mdash; Verify Claude Code installed:', 'claude --version   # should print a version number')
          + '<div style="margin-top:14px;padding-top:12px;border-top:1px solid #f0f0f0;">'
          + '<div style="font-size:0.78rem;font-weight:800;color:#1A1A1A;margin-bottom:5px;letter-spacing:0.3px;">Step 5 &mdash; Connect Google Drive <span style="background:#e8f5e9;color:#2e7d32;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:10px;margin-left:4px;">RECOMMENDED</span></div>'
          + '<div style="color:#555;font-size:0.82rem;line-height:1.75;margin-bottom:6px;">Install <a href="https://www.google.com/drive/download/" target="_blank" style="color:#0F9D58;font-weight:600;text-decoration:none;">Google Drive for Desktop</a> and sign in with your Google account. This mounts your Drive as a local folder on your Mac so Claude Code can read your avatar image, branding assets, and output graphics directly by file path &mdash; no manual uploads needed.</div>'
          + tip('Once installed, your Drive files live at a local path on your Mac. Claude Code treats them like any other file &mdash; this is how it grabs your avatar photo automatically on every run.')
          + '</div>',
      },
      {
        num: 3,
        name: 'Python 3.x',
        desc: 'Runs the graphic generation script that creates your branded PNG',
        badge: 'Free',
        badgeColor: '#555',
        badgeBg: '#f0f0f0',
        body: cmd('Open Terminal and run:', 'brew install python3')
          + cmd('Verify it installed:', 'python3 --version   # should show 3.x'),
      },
      {
        num: 4,
        name: 'Pillow',
        desc: 'Python library that draws and exports your branded graphic',
        badge: 'Free',
        badgeColor: '#555',
        badgeBg: '#f0f0f0',
        body: tip('Pillow requires Python to be installed first. Complete Step 3 before running these.')
          + cmd('Open Terminal and run:', 'pip3 install Pillow')
          + cmd('Verify it installed:', 'python3 -c "import PIL; print(PIL.__version__)"'),
      },
      {
        num: 5,
        name: 'Google Account + Apps Script',
        desc: 'Hosts your content calendar and the webhook Claude Code posts to',
        badge: 'Free',
        badgeColor: '#555',
        badgeBg: '#f0f0f0',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'No Terminal needed for this one. Go to '
          + '<a href="https://sheets.google.com/create" target="_blank" style="color:#0F9D58;font-weight:600;text-decoration:none;">sheets.google.com</a>'
          + ' &rarr; create a new spreadsheet &rarr; click <strong style="color:#1A1A1A;">Extensions</strong> &rarr; <strong style="color:#1A1A1A;">Apps Script</strong>. '
          + 'The full setup walkthrough is in Module 3 of this course.</div>',
      },
      {
        num: 6,
        name: 'Zapier',
        desc: 'Watches your Google Sheet and posts to LinkedIn automatically',
        badge: 'Free tier works',
        badgeColor: '#CC0000',
        badgeBg: '#fff5f5',
        body: '<div style="color:#555;font-size:0.82rem;line-height:1.7;">'
          + 'No Terminal needed. Sign up at '
          + '<a href="https://zapier.com" target="_blank" style="color:#FF4A00;font-weight:600;text-decoration:none;">zapier.com</a>'
          + ' &mdash; the free account is enough to get started. Full Zap setup walkthrough is in Module 4 of this course.</div>',
      },
    ];

    const cards = tools.map((t) => {
      return '<div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.07);overflow:hidden;margin-bottom:14px;">'
        + '<div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f0f0f0;">'
        + '<div style="width:36px;height:36px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;font-size:0.9rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + t.num + '</div>'
        + '<div style="flex:1;"><strong style="color:#1A1A1A;">' + t.name + '</strong><span style="color:#666;font-size:0.88rem;"> &mdash; ' + t.desc + '</span></div>'
        + '<span style="background:' + t.badgeBg + ';color:' + t.badgeColor + ';font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:20px;white-space:nowrap;">' + t.badge + '</span>'
        + '</div>'
        + '<div style="padding:12px 18px 14px;">' + t.body + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 4px;">Let&#39;s Set Up Your Stack</h2>
        <p style="color:#555;margin:0 0 22px;">Follow all 6 steps in order &mdash; each one builds on the last. <strong style="color:#1A1A1A;">You only do this once.</strong></p>
        ${cards}
        <div style="background:#1A1A1A;color:#fff;border-radius:10px;padding:14px 20px;display:flex;align-items:center;gap:12px;">
          <div style="width:28px;height:28px;background:#CC0000;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="color:#fff;font-size:0.75rem;font-weight:800;">!</span>
          </div>
          <span style="font-size:0.9rem;line-height:1.6;color:#fff;">You do <strong style="color:#fff;">not</strong> need to be a developer. Claude Code writes all the code &mdash; you just give it the idea.</span>
        </div>
      </div>`;
    return el;
  }
};
