export const slide = {
  render() {
    const el = document.createElement('div');
    const recap = [
      ['Python script generates your branded LinkedIn graphic', '🐍'],
      ['Webhook posts every graphic to your content calendar', '📊'],
      ['Zapier + Buffer schedule and publish automatically', '⚡'],
      ['Claude Code runs all of it from a single prompt', '🤖'],
    ];
    const cards = recap.map(([text, icon]) => `<div style="padding:16px;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);display:flex;gap:12px;align-items:flex-start;">
      <span style="font-size:1.4rem;">${icon}</span>
      <span style="color:#333;font-size:0.95rem;line-height:1.5;">${text}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <div style="text-align:center;margin-bottom:32px;">
          <div style="font-size:3rem;margin-bottom:12px;">&#127881;</div>
          <h2 style="font-size:2rem;color:#7B2FBE;margin:0 0 8px;">You Built a Real Automation</h2>
          <p style="color:#555;margin:0;">Not a demo. Not a tutorial. The actual system.</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px;">${cards}</div>
        <div style="background:#f8f4ff;border-radius:12px;padding:20px 24px;margin-bottom:20px;">
          <h3 style="color:#7B2FBE;margin:0 0 12px;">What's Next in the MPowerMyBiz Series:</h3>
          <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;color:#333;">
            <li>Instagram Carousel Automation with Claude Code</li>
            <li>Building AI Voiceovers for Content with ElevenLabs</li>
            <li>Full Content Calendar Automation: LinkedIn + Instagram in One Pipeline</li>
          </ul>
        </div>
        <div style="background:#0077B5;color:#fff;border-radius:10px;padding:16px 24px;text-align:center;font-weight:600;">
          Follow @mpowermybiz on LinkedIn to see this pipeline in action every day.
        </div>
      </div>`;
    return el;
  }
};
