export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">Dynamic Positioning — Never Hardcode Y Values</h2>
        <p style="color:#555;margin:0 0 20px;">The most common mistake is hardcoding pixel positions. If your avatar size changes, everything overlaps. Always compute positions from the element above.</p>
        <div style="background:#0D0D0D;border-radius:12px;padding:24px;margin-bottom:20px;overflow-x:auto;">
          <pre style="color:#00D4AA;font-family:monospace;font-size:0.9rem;line-height:1.8;margin:0;"># Always compute positions dynamically
AV_TOP    = 60           # Avatar top edge
AV_D      = 112          # Avatar diameter
AV_BOTTOM = AV_TOP + AV_D   # = 172

BADGE_Y      = AV_BOTTOM + 20         # Pill 20px below avatar
BADGE_BOTTOM = BADGE_Y + badge_height # computed from font metrics

HL_Y  = BADGE_BOTTOM + 44             # Headline 44px below pill
SUB_Y = HL_Y + headline_height + 52   # Sub-headline 52px after headline
DIV_Y = SUB_BOTTOM + 55               # Divider 55px below sub-headline</pre>
        </div>
        <div style="background:#fff3cd;border-left:4px solid #F5A623;border-radius:8px;padding:16px 20px;">
          <strong>⚠️ Rule:</strong> If you hardcode these numbers, one font size change breaks your entire layout. Always chain from AV_BOTTOM.
        </div>
      </div>`;
    return el;
  }
};
