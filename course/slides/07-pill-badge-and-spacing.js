export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 20px;">Pill Rules: Position, Style &amp; Text</h2>
        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px;">
          <div style="padding:18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="font-weight:700;color:#222;margin-bottom:4px;">Rule 1 — Left-aligned at NAME_X, never centered</div>
            <div style="color:#555;font-size:0.95rem;">The pill belongs inside the profile card zone, not floating in the middle of the image.</div>
          </div>
          <div style="padding:18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="font-weight:700;color:#222;margin-bottom:4px;">Rule 2 — Title Case only, never ALL CAPS</div>
            <div style="color:#555;font-size:0.95rem;">"AI Tools" ✓ &nbsp;&nbsp; "AI TOOLS" ✗ — ALL CAPS was explicitly rejected.</div>
          </div>
          <div style="padding:18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="font-weight:700;color:#222;margin-bottom:4px;">Rule 3 — Y = max(HANDLE_Y + handle_h + 14, AV_BOTTOM + 8)</div>
            <div style="color:#555;font-size:0.95rem;">This guarantees the pill never overlaps the avatar regardless of text height.</div>
          </div>
        </div>
        <div style="background:#0D0D0D;border-radius:12px;padding:20px 24px;overflow-x:auto;">
          <pre style="color:#00D4AA;font-family:monospace;font-size:0.85rem;line-height:1.8;margin:0;">pill_y = max(handle_y + handle_h + 14, AV_BOTTOM + 8)

draw.rounded_rectangle(
    [NAME_X, pill_y, NAME_X + pill_w, pill_y + pill_h],
    radius=pill_h // 2, fill=pill_color
)
draw.text(
    (NAME_X + pill_w // 2, pill_y + pill_h // 2),
    category.title(),   # &lt;-- .title() enforces Title Case
    font=pill_font, fill='white', anchor='mm'
)</pre>
        </div>
      </div>`;
    return el;
  }
};
