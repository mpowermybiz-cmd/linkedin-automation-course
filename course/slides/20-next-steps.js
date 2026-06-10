export const slide = {
  render() {
    const el = document.createElement('div');

    // ── MPowerMyBiz branded completion graphic ──────────────────────────────
    const heroSvg = '<div style="position:relative;width:190px;height:200px;display:flex;align-items:center;justify-content:center;">'
      + '<div style="width:170px;height:170px;border-radius:50%;background:#1A1A1A;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(0,0,0,0.18);">'
      + '<img src="./course/assets/images/mpowermybiz-logo.png" alt="MPowerMyBiz" style="width:120px;height:auto;display:block;" />'
      + '</div>'
      + '<div style="position:absolute;top:10px;right:0;width:48px;height:48px;border-radius:50%;background:#28a745;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.2);">'
      + '<svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 13 L10 19 L21 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      + '</div>'
      + '</div>';

    // ── what you built checklist ────────────────────────────────────────────
    const recap = [
      'Claude Code generates your branded graphic on a schedule &mdash; fully automated',
      'Webhook logs every post to your Google Sheet content calendar instantly',
      'Zapier detects the new row and publishes directly to LinkedIn for you',
      'You set the topic once. The entire pipeline runs itself from there.',
    ];

    const checkList = recap.map((text) => {
      return '<div style="display:flex;gap:14px;align-items:flex-start;padding:13px 0;border-bottom:1px solid #f0f0f0;">'
        + '<div style="width:22px;height:22px;border-radius:50%;background:#28a745;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;">'
        + '<span style="color:#fff;font-size:0.75rem;font-weight:900;">&#10003;</span>'
        + '</div>'
        + '<span style="color:#1A1A1A;font-size:0.93rem;line-height:1.65;">' + text + '</span>'
        + '</div>';
    }).join('');

    // ── what's next list ────────────────────────────────────────────────────
    const nextItems = [
      ['Instagram Carousel Automation', 'Same pipeline, new format &mdash; with Claude Code'],
      ['Automated Social Media Videos', 'Generate & post branded videos on autopilot'],
      ['Build Your Course Using AI', 'Create and launch a course with Claude Code'],
    ];

    const nextList = nextItems.map(([title, sub]) => {
      return '<div style="display:flex;gap:12px;align-items:flex-start;padding:11px 0;border-bottom:1px solid rgba(255,255,255,0.08);">'
        + '<span style="color:#CC0000;font-weight:700;flex-shrink:0;margin-top:2px;">&#8594;</span>'
        + '<div>'
        + '<div style="color:#fff;font-weight:700;font-size:0.9rem;">' + title + '</div>'
        + '<div style="color:rgba(255,255,255,0.55);font-size:0.79rem;margin-top:2px;">' + sub + '</div>'
        + '</div>'
        + '</div>';
    }).join('');

    el.innerHTML = `
      <style>@media(max-width:600px){.ns-hero{flex-direction:column!important;gap:20px!important;}.ns-hero-svg{display:none!important;}}</style>
      <div style="max-width:860px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div class="ns-hero" style="display:flex;align-items:center;gap:36px;margin-bottom:36px;">
          <div style="flex:1;">
            <div style="display:inline-block;background:#28a745;color:#fff;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;margin-bottom:14px;">PIPELINE COMPLETE</div>
            <h2 style="font-size:clamp(1.6rem,6vw,2.5rem);color:#1A1A1A;margin:0 0 12px;font-weight:800;line-height:1.15;">You Did It.<br>This Is Real.</h2>
            <p style="color:#555;font-size:1rem;margin:0;line-height:1.75;">Not a demo. Not a template. <strong style="color:#1A1A1A;">The actual automation</strong> &mdash; the exact pipeline running at MPowerMyBiz right now.</p>
          </div>
          <div class="ns-hero-svg" style="flex-shrink:0;">${heroSvg}</div>
        </div>

        <div style="margin-bottom:32px;">
          <div style="font-size:0.7rem;font-weight:800;letter-spacing:1.8px;color:#CC0000;margin-bottom:4px;">WHAT YOU BUILT</div>
          ${checkList}
        </div>

        <div style="background:#1A1A1A;border-radius:12px;padding:22px 24px;margin-bottom:16px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:#CC0000;"></div>
          <div style="font-size:0.7rem;font-weight:800;letter-spacing:1.5px;color:rgba(255,255,255,0.35);margin-bottom:14px;">WHAT&rsquo;S NEXT IN THE MPOWERMYBIZ SERIES</div>
          ${nextList}
        </div>

        <div style="margin-top:0;background:#f9f9f9;border-radius:10px;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;border:1px solid #ebebeb;">
          <div>
            <div style="font-size:0.8rem;font-weight:700;color:#1A1A1A;margin-bottom:2px;">Join our exclusive student community 📱</div>
            <div style="font-size:0.78rem;color:#666;">Connect on Instagram &mdash; share your progress, ask questions &amp; celebrate wins with fellow students. Access requires approval so we keep it just for course members.</div>
          </div>
          <a href="https://www.instagram.com/mpowermybiz" target="_blank" style="display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#833AB4,#C13584,#E1306C);color:#fff;font-size:0.78rem;font-weight:700;padding:9px 18px;border-radius:8px;text-decoration:none;white-space:nowrap;">&#128247; Join on Instagram</a>
        </div>

      </div>`;
    return el;
  }
};
