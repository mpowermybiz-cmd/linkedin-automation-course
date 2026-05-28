export const slide = {
  render() {
    const el = document.createElement('div');

    // ── SVG human illustration ──────────────────────────────────────────────
    const heroSvg = '<svg width="190" height="200" viewBox="0 0 190 200" xmlns="http://www.w3.org/2000/svg">'
      // soft background circle
      + '<circle cx="95" cy="100" r="90" fill="#f5f5f5"/>'
      // shadow
      + '<ellipse cx="95" cy="178" rx="48" ry="8" fill="#e0e0e0"/>'
      // laptop hinge base
      + '<rect x="42" y="144" width="106" height="7" rx="3.5" fill="#2d2d2d"/>'
      // keyboard deck
      + '<rect x="48" y="140" width="94" height="7" rx="2" fill="#3a3a3a"/>'
      // screen housing
      + '<rect x="54" y="104" width="82" height="40" rx="6" fill="#1A1A1A"/>'
      // screen face
      + '<rect x="57" y="107" width="76" height="34" rx="4" fill="#0D1117"/>'
      // code lines on screen
      + '<rect x="61" y="112" width="22" height="2.5" rx="1.2" fill="#FF7B72" opacity="0.9"/>'
      + '<rect x="61" y="117" width="42" height="2.5" rx="1.2" fill="#00D4AA" opacity="0.9"/>'
      + '<rect x="61" y="122" width="30" height="2.5" rx="1.2" fill="#FFA657" opacity="0.9"/>'
      + '<rect x="61" y="127" width="18" height="2.5" rx="1.2" fill="#79C0FF" opacity="0.9"/>'
      + '<rect x="61" y="132" width="48" height="2.5" rx="1.2" fill="#00D4AA" opacity="0.7"/>'
      // torso / shirt
      + '<path d="M50 118 Q95 104 140 118 L136 148 Q95 155 54 148 Z" fill="#CC0000"/>'
      // neck
      + '<rect x="88" y="90" width="14" height="20" rx="6" fill="#B5835A"/>'
      // head
      + '<circle cx="95" cy="72" r="24" fill="#B5835A"/>'
      // hair
      + '<path d="M71 65 Q95 44 119 65 Q117 50 95 44 Q73 50 71 65 Z" fill="#1A1A1A"/>'
      // subtle ear highlights
      + '<circle cx="71" cy="72" r="4" fill="#A07040"/>'
      + '<circle cx="119" cy="72" r="4" fill="#A07040"/>'
      // success badge (green circle + checkmark)
      + '<circle cx="135" cy="44" r="20" fill="#28a745"/>'
      + '<circle cx="135" cy="44" r="17" fill="#22c55e"/>'
      + '<path d="M125 44 L131 51 L145 33" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
      + '</svg>';

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
      ['AI Voiceovers for Your Content', 'ElevenLabs + Claude Code integration'],
      ['Full Content Calendar Automation', 'LinkedIn + Instagram unified in one pipeline'],
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

        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
          <span style="font-weight:700;font-size:0.95rem;color:#fff;">Follow <strong style="color:#fff;">@mpowermybiz</strong> on LinkedIn to see this pipeline in action.</span>
          <a href="https://mpowermybiz.net" target="_blank" style="color:#fff;font-weight:700;font-size:0.85rem;text-decoration:none;border:2px solid rgba(255,255,255,0.5);padding:5px 14px;border-radius:20px;white-space:nowrap;">mpowermybiz.net &#8599;</a>
        </div>

      </div>`;
    return el;
  }
};
