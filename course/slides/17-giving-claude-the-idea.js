export const slide = {
  render() {
    const el = document.createElement('div');
    const actions = [
      'Claude writes the Python graphic script with your layout rules',
      'Script runs — branded PNG is generated and saved',
      'Claude sends the POST to your Google Sheet webhook',
      'Row appears in your content calendar with status: pending',
      'Zapier fires — Buffer queues the post',
      'LinkedIn post goes live at your scheduled time',
    ];
    const rows = actions.map(s => `<div style="display:flex;gap:12px;align-items:center;padding:12px 16px;background:#fff;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.06);">
      <span style="color:#7B2FBE;font-weight:700;">&#8594;</span>
      <span style="color:#333;">${s}</span>
    </div>`).join('');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 20px;">The One-Prompt Workflow</h2>
        <div style="background:#0D0D0D;border-radius:12px;padding:24px;margin-bottom:24px;">
          <div style="color:#888;font-size:0.8rem;margin-bottom:8px;">YOU TYPE THIS IN CLAUDE CODE:</div>
          <p style="color:#00D4AA;font-family:monospace;font-size:1rem;line-height:1.7;margin:0;">"Generate a LinkedIn graphic for the topic: 3 Ways AI Saves Small Business Owners 10 Hours a Week, category: AI Tools. Post it to the content calendar."</p>
        </div>
        <h3 style="color:#333;margin:0 0 14px;">What happens next — automatically:</h3>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">${rows}</div>
        <div style="background:#7B2FBE;color:#fff;border-radius:10px;padding:18px 24px;text-align:center;font-size:1.05rem;font-weight:600;">
          That one sentence triggers the entire 8-step pipeline. This is what automation looks like.
        </div>
      </div>`;
    return el;
  }
};
