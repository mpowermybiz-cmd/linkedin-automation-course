export const slide = {
  render() {
    const el = document.createElement('div');
    const recap = [
      ['Claude Code generates your branded social media graphic on a schedule', '&#127912;'],
      ['Webhook logs every graphic to your content calendar automatically', '&#128202;'],
      ['Zapier posts directly to LinkedIn — no manual steps, ever', '&#9889;'],
      ['You set the topic once. The entire pipeline runs itself.', '&#129302;'],
    ];
    const cards = recap.map(([text, icon]) => `<div style="padding:16px 18px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);display:flex;gap:14px;align-items:flex-start;border-left:3px solid #CC0000;">
      <span style="font-size:1.4rem;flex-shrink:0;">${icon}</span>
      <span style="color:#1A1A1A;font-size:0.95rem;line-height:1.6;">${text}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <div style="text-align:center;margin-bottom:32px;">
          <div style="font-size:3rem;margin-bottom:12px;">&#127881;</div>
          <h2 style="font-size:2rem;color:#1A1A1A;margin:0 0 8px;font-weight:800;">You Did It. This Is Real.</h2>
          <p style="color:#555;margin:0;font-size:1.05rem;">Not a demo. Not a template. <strong>The actual automation.</strong></p>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px;">${cards}</div>

        <div style="background:#1A1A1A;border-radius:12px;padding:22px 24px;margin-bottom:16px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:#CC0000;"></div>
          <h3 style="color:#fff;margin:0 0 14px;font-size:1.05rem;">&#128640; What&rsquo;s Next in the MPowerMyBiz Series:</h3>
          <ul style="margin:0;padding-left:0;list-style:none;display:flex;flex-direction:column;gap:10px;">
            <li style="display:flex;gap:10px;align-items:flex-start;color:rgba(255,255,255,0.85);font-size:0.92rem;">
              <span style="color:#CC0000;font-weight:700;flex-shrink:0;">&#8594;</span>
              <span><strong style="color:#fff;">Instagram Carousel Automation</strong> with Claude Code — same pipeline, new format</span>
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start;color:rgba(255,255,255,0.85);font-size:0.92rem;">
              <span style="color:#CC0000;font-weight:700;flex-shrink:0;">&#8594;</span>
              <span><strong style="color:#fff;">AI Voiceovers for Your Content</strong> using ElevenLabs + Claude Code</span>
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start;color:rgba(255,255,255,0.85);font-size:0.92rem;">
              <span style="color:#CC0000;font-weight:700;flex-shrink:0;">&#8594;</span>
              <span><strong style="color:#fff;">Full Content Calendar Automation:</strong> LinkedIn + Instagram in one unified pipeline</span>
            </li>
          </ul>
        </div>

        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:16px 24px;text-align:center;font-weight:700;font-size:1rem;">
          Follow <strong>@mpowermybiz</strong> on LinkedIn to see this pipeline in action.
        </div>
        <div style="margin-top:12px;text-align:center;">
          <a href="https://mpowermybiz.net" target="_blank" style="color:#CC0000;font-weight:700;font-size:0.95rem;text-decoration:none;">mpowermybiz.net &#8599;</a>
        </div>
      </div>`;
    return el;
  }
};
