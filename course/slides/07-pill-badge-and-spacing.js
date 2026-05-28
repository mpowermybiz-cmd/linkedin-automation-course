export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 20px;">Pill Badge: Position, Style &amp; Text</h2>
        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px;">
          <div style="padding:18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border-left:3px solid #CC0000;">
            <div style="font-weight:700;color:#1A1A1A;margin-bottom:4px;">Rule 1 &mdash; Left-aligned at NAME_X, never centered</div>
            <div style="color:#555;font-size:0.95rem;">The pill belongs inside the profile card zone, not floating in the middle of the image.</div>
          </div>
          <div style="padding:18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border-left:3px solid #CC0000;">
            <div style="font-weight:700;color:#1A1A1A;margin-bottom:4px;">Rule 2 &mdash; Title Case only, never ALL CAPS</div>
            <div style="color:#555;font-size:0.95rem;">"AI Tools" &#10003; &nbsp;&nbsp; "AI TOOLS" &#10007; — ALL CAPS was explicitly rejected in testing.</div>
          </div>
          <div style="padding:18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border-left:3px solid #CC0000;">
            <div style="font-weight:700;color:#1A1A1A;margin-bottom:4px;">Rule 3 &mdash; Y position must clear the avatar</div>
            <div style="color:#555;font-size:0.95rem;">pill_y = max(handle_y + handle_height + 14, avatar_bottom + 8) — this guarantees no overlap regardless of text height.</div>
          </div>
        </div>
        <div style="background:#0D0D0D;border-radius:12px;padding:20px 24px;overflow-x:auto;">
          <div style="color:#888;font-size:0.75rem;margin-bottom:10px;letter-spacing:1px;">PYTHON SNIPPET</div>
          <pre style="color:#00D4AA;font-family:monospace;font-size:0.85rem;line-height:1.8;margin:0;">pill_y = max(handle_y + handle_h + 14, AV_BOTTOM + 8)

draw.rounded_rectangle(
    [NAME_X, pill_y, NAME_X + pill_w, pill_y + pill_h],
    radius=pill_h // 2, fill=pill_color
)
draw.text(
    (NAME_X + pill_w // 2, pill_y + pill_h // 2),
    category.title(),   # .title() enforces Title Case automatically
    font=pill_font, fill='white', anchor='mm'
)</pre>
        </div>
        <div style="margin-top:16px;padding:14px 18px;background:#fff5f5;border-radius:8px;border-left:3px solid #CC0000;color:#1A1A1A;font-size:0.9rem;">
          <strong>&#9888; Most common mistake:</strong> hardcoding a pixel value for pill_y. Always calculate it from the avatar bottom so it adapts to any layout.
        </div>
      </div>`;
    return el;
  }
};
