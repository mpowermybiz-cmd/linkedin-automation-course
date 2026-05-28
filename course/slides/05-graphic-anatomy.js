export const slide = {
  render() {
    const el = document.createElement('div');
    const zones = [
      ['Avatar Circle', 'Your profile photo, cropped to a circle, top-left of the profile card', '🖼️'],
      ['Display Name', 'Your name in bold, right of the avatar', '👤'],
      ['@handle', 'Your LinkedIn handle in muted text below the name', '@'],
      ['Category Pill Badge', 'Colored pill below the handle — shows the content category (e.g. AI Tools, Business Growth)', '🏷️'],
      ['Headline Text', 'The main topic of the post — large, bold, auto-wrapping', '📢'],
      ['Sub-headline', 'A supporting line that adds context or intrigue', '💬'],
    ];
    const cards = zones.map(([label, desc, icon]) => `<div style="padding:18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border-top:3px solid #7B2FBE;">
      <div style="font-size:1.4rem;margin-bottom:8px;">${icon}</div>
      <strong style="color:#222;display:block;margin-bottom:4px;">${label}</strong>
      <span style="color:#666;font-size:0.9rem;line-height:1.5;">${desc}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">What's in Every Graphic</h2>
        <p style="color:#555;margin:0 0 24px;">Every LinkedIn graphic has the same 6 zones — they never move relative to each other.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">${cards}</div>
      </div>`;
    return el;
  }
};
