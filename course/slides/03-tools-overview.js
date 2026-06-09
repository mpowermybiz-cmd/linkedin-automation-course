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
        name: 'Claude Code',
        desc: 'The AI that writes and runs your entire automation &mdash; runs locally on your Mac',
        badge: '$20/month',
        badgeColor: '#CC0000',
        badgeBg: '#fff0f0',
        body: '<div style="color:#444;font-size:0.82rem;line-height:1.7;margin-bottom:2px;">'
          + '<strong style="color:#1A1A1A;">Step 1 &mdash; Subscribe to Claude Pro:</strong> Go to '
          + '<a href="https://claude.ai" target="_blank" style="color:#CC0000;font-weight:600;text-decoration:none;">claude.ai</a>'
          + ' &rarr; click your profile &rarr; Settings &rarr; Upgrade to Pro</div>'
          + cmd('Step 2 &mdash; Install Node.js (requires Homebrew — install Step 3 first if needed):', 'brew install node')
          + cmd('Step 3 &mdash; Install Claude Code:', 'npm install -g @anthropic-ai/claude-code')
          + cmd('Step 4 &mdash; Verify Claude Code is ready:', 'claude --version   # should print a version number')
          + tip('No coding knowledge needed. Claude Code writes all the code &mdash; you just give it the idea and it runs everything automatically.'),
      },
      {
        num: 2,
        name: 'Connect Your Services Inside Claude Code',
        desc: 'Give Claude Code access to Google Drive, Gmail &amp; Zapier &mdash; done once inside the app',
        badge: 'Required',
        badgeColor: '#CC0000',
        badgeBg: '#fff0f0',
        body: '<div style="color:#444;font-size:0.82rem;line-height:1.7;margin-bottom:10px;">'
          + 'Once Claude Code is installed, open it and connect the three services this automation uses. '
          + 'Go to the <strong style="color:#1A1A1A;">menu icon (top-left) &rarr; Customize &rarr; Connectors</strong>. '
          + 'Under the <strong style="color:#1A1A1A;">Web</strong> section you\'ll see the full list &mdash; connect these three:'
          + '</div>'
          // connector list mockup
          + '<div style="background:#1A1A1A;border-radius:10px;overflow:hidden;margin-bottom:10px;">'
          + '<div style="background:#111;padding:7px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #2a2a2a;">'
          + '<span style="color:#aaa;font-size:0.65rem;font-weight:800;letter-spacing:1px;">CLAUDE CODE &mdash; CUSTOMIZE &rarr; CONNECTORS &rarr; WEB</span>'
          + '</div>'
          + '<div style="display:flex;gap:10px;padding:12px 14px;flex-wrap:wrap;">'
          // Gmail
          + '<div style="flex:1;min-width:160px;background:#2a2a2a;border-radius:8px;padding:10px 12px;display:flex;align-items:center;gap:10px;">'
          + '<div style="width:32px;height:32px;background:#EA4335;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<svg width="18" height="14" viewBox="0 0 24 18" fill="none"><rect x="1" y="1" width="22" height="16" rx="2" stroke="white" stroke-width="1.6" fill="none"/><path d="M1 3 L12 11 L23 3" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          + '</div>'
          + '<div style="flex:1;"><div style="color:#fff;font-size:0.82rem;font-weight:700;">Gmail</div><div style="color:#aaa;font-size:0.68rem;margin-top:1px;">Email access</div></div>'
          + '<div style="background:#28a745;color:#fff;font-size:0.62rem;font-weight:700;padding:3px 8px;border-radius:8px;white-space:nowrap;">&#10003; Connect</div>'
          + '</div>'
          // Google Drive
          + '<div style="flex:1;min-width:160px;background:#2a2a2a;border-radius:8px;padding:10px 12px;display:flex;align-items:center;gap:10px;">'
          + '<div style="width:32px;height:32px;background:#fff;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<svg width="20" height="18" viewBox="0 0 30 26" fill="none"><path d="M15 2 L3 24 L12 24 Z" fill="#0066DA"/><path d="M15 2 L12 24 L18 24 Z" fill="#34A853"/><path d="M15 2 L18 24 L27 24 Z" fill="#EA4335"/></svg>'
          + '</div>'
          + '<div style="flex:1;"><div style="color:#fff;font-size:0.82rem;font-weight:700;">Google Drive</div><div style="color:#aaa;font-size:0.68rem;margin-top:1px;">Files &amp; assets</div></div>'
          + '<div style="background:#28a745;color:#fff;font-size:0.62rem;font-weight:700;padding:3px 8px;border-radius:8px;white-space:nowrap;">&#10003; Connect</div>'
          + '</div>'
          // Zapier
          + '<div style="flex:1;min-width:160px;background:#2a2a2a;border-radius:8px;padding:10px 12px;display:flex;align-items:center;gap:10px;">'
          + '<div style="width:32px;height:32px;background:#FF4A00;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
          + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 6 L19 6 L9 18 L19 18" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          + '</div>'
          + '<div style="flex:1;"><div style="color:#fff;font-size:0.82rem;font-weight:700;">Zapier</div><div style="color:#aaa;font-size:0.68rem;margin-top:1px;">Automation bridge</div></div>'
          + '<div style="background:#28a745;color:#fff;font-size:0.62rem;font-weight:700;padding:3px 8px;border-radius:8px;white-space:nowrap;">&#10003; Connect</div>'
          + '</div>'
          + '</div></div>'
          + '<div style="font-size:0.8rem;color:#444;line-height:1.7;margin-bottom:4px;">'
          + '<strong style="color:#1A1A1A;">For each one:</strong> click it &rarr; click <strong>Connect</strong> &rarr; sign in with your Google account &rarr; click <strong>Allow</strong>. Zapier will ask for your Zapier account credentials instead.'
          + '</div>'
          + tip('All three need to be connected before your automation can run end-to-end. If you skip one, Claude Code won\'t be able to send data to that part of the pipeline.'),
      },
      {
        num: 3,
        name: 'Homebrew',
        desc: 'Mac package manager &mdash; required to install Node.js and Python from the Terminal',
        badge: 'Free',
        badgeColor: '#555',
        badgeBg: '#f0f0f0',
        body: tip('Homebrew lets your Mac install developer tools from the Terminal. Required before running the commands in Steps 1, 4, and 5. You only ever do this once.')
          + cmd('Open Terminal and paste:', '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')
          + cmd('Verify it installed:', 'brew --version   # should print a version number like Homebrew 4.x.x')
          + '<div style="margin-top:10px;background:#f0f7ff;border-left:3px solid #4285F4;border-radius:0 6px 6px 0;padding:7px 12px;font-size:0.79rem;color:#1a4a8a;line-height:1.5;">'
          + '&#128187; <strong>M1/M2/M3 Mac (Apple Silicon)?</strong> After installing, the Terminal will print a few extra commands to run. Copy and run those exactly &mdash; they add Homebrew to your PATH so the <code>brew</code> command works. Intel Macs skip this automatically.'
          + '</div>',
      },
      {
        num: 4,
        name: 'Python 3.x',
        desc: 'Runs the graphic generation script that creates your branded PNG',
        badge: 'Free',
        badgeColor: '#555',
        badgeBg: '#f0f0f0',
        body: cmd('Open Terminal and paste:', 'brew install python3')
          + cmd('Verify it installed:', 'python3 --version   # should show 3.x'),
      },
      {
        num: 5,
        name: 'Pillow',
        desc: 'Python image library that draws and exports your branded graphic as a PNG',
        badge: 'Free',
        badgeColor: '#555',
        badgeBg: '#f0f0f0',
        body: tip('Pillow requires Python to be installed first &mdash; complete Step 4 before running this.')
          + cmd('Open Terminal and paste:', 'pip3 install Pillow')
          + cmd('Verify it installed:', 'python3 -c "import PIL; print(PIL.__version__)"'),
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
      <div style="max-width:800px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">
        <h2 style="font-size:clamp(1.3rem,4.5vw,1.8rem);color:#1A1A1A;margin:0 0 8px;">Connect &amp; Set Up Claude Code</h2>
        <p style="color:#555;margin:0 0 10px;line-height:1.7;">Follow all 5 steps in order &mdash; each one builds on the last. <strong style="color:#1A1A1A;">You only do this once.</strong></p>
        <div style="background:#f0faf4;border:1px solid #b2dfcc;border-radius:8px;padding:12px 16px;margin-bottom:20px;font-size:0.84rem;color:#1a5c38;line-height:1.7;">
          <strong>Already set up?</strong> If you've already installed Claude Code, Homebrew, Python, and Pillow &mdash; you're good to skip ahead. <strong>However, make sure you review Step 2</strong> to confirm your Connectors (Google Drive, Gmail &amp; Zapier) are properly connected inside Claude Code before moving on &mdash; the automation won't run without them.
        </div>
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
