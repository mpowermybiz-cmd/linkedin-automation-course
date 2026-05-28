export const slide = {
  render() {
    const el = document.createElement('div');

    const cmd = (code) => `<div style="background:#0D0D0D;border-radius:6px;padding:8px 12px;margin-top:6px;font-family:monospace;font-size:0.78rem;color:#00D4AA;overflow-x:auto;">${code}</div>`;

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 6px;">Your Stack</h2>
        <p style="color:#555;margin:0 0 24px;">Here is everything you need and how to install each one.</p>

        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:20px;">

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.07);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f0f0f0;">
              <div style="width:10px;height:10px;border-radius:50%;background:#CC0000;flex-shrink:0;"></div>
              <div style="flex:1;"><strong style="color:#1A1A1A;">Claude Code</strong> <span style="color:#666;font-size:0.9rem;">&mdash; The AI that writes and runs your entire automation</span></div>
              <span style="background:#fff0f0;color:#CC0000;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:20px;white-space:nowrap;">$20/month</span>
            </div>
            <div style="padding:12px 18px;background:#fafafa;">
              <div style="color:#444;font-size:0.85rem;font-weight:600;margin-bottom:4px;">How to install:</div>
              <div style="color:#555;font-size:0.82rem;margin-bottom:2px;">1. Subscribe to Claude Pro at <strong style="color:#1A1A1A;">claude.ai</strong> &rarr; Settings &rarr; Upgrade</div>
              <div style="color:#555;font-size:0.82rem;margin-bottom:4px;">2. Install Node.js (required), then install Claude Code:</div>
              ${cmd('brew install node')}
              ${cmd('npm install -g @anthropic-ai/claude-code')}
              ${cmd('claude --version   # verify it installed')}
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.07);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f0f0f0;">
              <div style="width:10px;height:10px;border-radius:50%;background:#CC0000;flex-shrink:0;"></div>
              <div style="flex:1;"><strong style="color:#1A1A1A;">Homebrew</strong> <span style="color:#666;font-size:0.9rem;">&mdash; Mac package manager (install this first)</span></div>
              <span style="background:#f9f9f9;color:#555;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:20px;">Free</span>
            </div>
            <div style="padding:12px 18px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;margin-bottom:4px;">Open Terminal and paste this command:</div>
              ${cmd('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')}
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.07);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f0f0f0;">
              <div style="width:10px;height:10px;border-radius:50%;background:#CC0000;flex-shrink:0;"></div>
              <div style="flex:1;"><strong style="color:#1A1A1A;">Python 3.x</strong> <span style="color:#666;font-size:0.9rem;">&mdash; Runs the graphic generation script</span></div>
              <span style="background:#f9f9f9;color:#555;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:20px;">Free</span>
            </div>
            <div style="padding:12px 18px;background:#fafafa;">
              ${cmd('brew install python3')}
              ${cmd('python3 --version   # should show 3.x')}
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.07);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f0f0f0;">
              <div style="width:10px;height:10px;border-radius:50%;background:#CC0000;flex-shrink:0;"></div>
              <div style="flex:1;"><strong style="color:#1A1A1A;">Pillow</strong> <span style="color:#666;font-size:0.9rem;">&mdash; Python library that draws and exports the PNG graphic</span></div>
              <span style="background:#f9f9f9;color:#555;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:20px;">Free</span>
            </div>
            <div style="padding:12px 18px;background:#fafafa;">
              ${cmd('pip3 install Pillow')}
              ${cmd('python3 -c "import PIL; print(PIL.__version__)"   # verify')}
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.07);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f0f0f0;">
              <div style="width:10px;height:10px;border-radius:50%;background:#CC0000;flex-shrink:0;"></div>
              <div style="flex:1;"><strong style="color:#1A1A1A;">Google Account + Apps Script</strong> <span style="color:#666;font-size:0.9rem;">&mdash; Hosts your content calendar &amp; webhook</span></div>
              <span style="background:#f9f9f9;color:#555;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:20px;">Free</span>
            </div>
            <div style="padding:12px 18px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;">No install needed. Go to <strong style="color:#1A1A1A;">sheets.google.com</strong> &rarr; create your spreadsheet &rarr; Extensions &rarr; Apps Script.</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.07);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f0f0f0;">
              <div style="width:10px;height:10px;border-radius:50%;background:#CC0000;flex-shrink:0;"></div>
              <div style="flex:1;"><strong style="color:#1A1A1A;">Zapier</strong> <span style="color:#666;font-size:0.9rem;">&mdash; Watches your sheet and posts to LinkedIn automatically</span></div>
              <span style="background:#fff5f5;color:#CC0000;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:20px;">Free tier works</span>
            </div>
            <div style="padding:12px 18px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;">No install needed. Sign up at <strong style="color:#1A1A1A;">zapier.com</strong> &rarr; free account is enough to get started.</div>
            </div>
          </div>

        </div>

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
