export const slide = {
  render() {
    const el = document.createElement('div');
    const zones = [
      ['Avatar Circle', 'Your profile photo, cropped to a circle, top-left of the profile card', '&#128247;'],
      ['Display Name', 'Your name in bold, right of the avatar', '&#128100;'],
      ['@handle', 'Your social handle in muted text below the name', '@'],
      ['Category Pill Badge', 'Colored pill that shows the content category (e.g. AI Tools, Business Growth)', '&#127991;'],
      ['Headline Text', 'The main topic — large, bold, auto-wrapping', '&#128226;'],
      ['Sub-headline', 'A supporting line that adds context or intrigue', '&#128172;'],
    ];
    const cards = zones.map(([label, desc, icon]) => `<div style="padding:16px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border-top:3px solid #CC0000;">
      <div style="font-size:1.3rem;margin-bottom:6px;">${icon}</div>
      <strong style="color:#1A1A1A;display:block;margin-bottom:4px;">${label}</strong>
      <span style="color:#666;font-size:0.88rem;line-height:1.5;">${desc}</span>
    </div>`).join('');

    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 6px;">What Goes Into Every Graphic</h2>
        <p style="color:#555;margin:0 0 24px;">Every graphic has the same 6 zones — they stay consistent no matter the topic.</p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:32px;">${cards}</div>

        <h3 style="color:#1A1A1A;margin:0 0 12px;font-size:1.05rem;">&#127775; Real MPowerMyBiz Example</h3>
        <div style="background:#1A1A1A;border-radius:12px;padding:24px;color:#fff;position:relative;overflow:hidden;margin-bottom:24px;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:#CC0000;"></div>
          <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:18px;">
            <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#CC0000,#ff6b6b);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;border:2px solid rgba(255,255,255,0.2);">M</div>
            <div>
              <div style="font-weight:700;font-size:1rem;">MPowerMyBiz</div>
              <div style="color:rgba(255,255,255,0.5);font-size:0.8rem;">@mpowermybiz</div>
              <div style="display:inline-block;background:#CC0000;color:#fff;font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:20px;margin-top:5px;">AI Tools</div>
            </div>
          </div>
          <div style="font-size:1.3rem;font-weight:700;line-height:1.35;margin-bottom:10px;">3 Ways AI Saves Small Business Owners 10 Hours a Week</div>
          <div style="color:rgba(255,255,255,0.6);font-size:0.9rem;">Work smarter, not harder — the tools are already here.</div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div style="padding:18px;background:#f9f9f9;border-radius:10px;border-left:3px solid #1A1A1A;">
            <div style="font-weight:700;color:#1A1A1A;margin-bottom:10px;">&#127775; Consistent Brand Style</div>
            <ul style="margin:0;padding-left:16px;color:#555;font-size:0.88rem;line-height:1.9;">
              <li>Same background color every post</li>
              <li>Same avatar, name, handle placement</li>
              <li>Accent color stays constant</li>
              <li>Instantly recognizable as your brand</li>
            </ul>
          </div>
          <div style="padding:18px;background:#fff5f5;border-radius:10px;border-left:3px solid #CC0000;">
            <div style="font-weight:700;color:#1A1A1A;margin-bottom:10px;">&#127774; Flexible / Rotating Style</div>
            <ul style="margin:0;padding-left:16px;color:#555;font-size:0.88rem;line-height:1.9;">
              <li>Different background scene per post</li>
              <li>Seasonal or topic-matched visuals</li>
              <li>Layout stays consistent — only visuals swap</li>
              <li>More variety, still on-brand</li>
            </ul>
          </div>
        </div>
        <div style="margin-top:12px;padding:14px 18px;background:#1A1A1A;border-radius:8px;color:rgba(255,255,255,0.85);font-size:0.9rem;">
          <strong style="color:#fff;">&#128161; Pro tip:</strong> You choose the style once in your Claude Code instructions — every graphic after that follows it automatically.
        </div>
      </div>`;
    return el;
  }
};
