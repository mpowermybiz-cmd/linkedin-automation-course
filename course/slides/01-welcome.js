export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <div style="background:linear-gradient(135deg,#1A1A1A 0%,#2d2d2d 100%);border-radius:16px;padding:48px;color:#fff;text-align:center;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:#CC0000;"></div>
          <h1 style="font-size:2.2rem;font-weight:700;margin:0 0 16px;line-height:1.25;">Graphic Content Automation<br>with Claude Code for Social Media</h1>
          <p style="font-size:1.1rem;opacity:0.85;margin:0 0 28px;line-height:1.6;">Build the exact pipeline that powers MPowerMyBiz — from a single idea to a scheduled post, completely automatically.</p>
          <a href="https://mpowermybiz.net" target="_blank" style="display:inline-block;background:rgba(204,0,0,0.2);border:1px solid #CC0000;border-radius:8px;padding:12px 28px;color:#fff;text-decoration:none;">
            <strong>Instructor:</strong> MPowerMyBiz &nbsp;·&nbsp; <span style="color:#ff6b6b;">mpowermybiz.net</span> &nbsp;·&nbsp; @mpowermybiz
          </a>
        </div>
        <div style="margin-top:28px;padding:24px 28px;background:#f9f9f9;border-radius:12px;border-left:4px solid #CC0000;">
          <p style="margin:0;font-size:1.05rem;line-height:1.8;color:#1A1A1A;">
            In this course you will build a <strong>real, working automation</strong>. No theory — just the actual system. By the end, you give Claude Code a topic idea and your branded graphic is generated, logged to a Google Sheet, and scheduled to post on social media — all without you touching anything else.
          </p>
        </div>
        <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
          <div style="padding:16px;background:#fff;border-radius:10px;border-top:3px solid #CC0000;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="font-size:1.6rem;margin-bottom:6px;">🎨</div>
            <div style="font-weight:700;color:#1A1A1A;font-size:0.9rem;">AI-Generated Graphics</div>
          </div>
          <div style="padding:16px;background:#fff;border-radius:10px;border-top:3px solid #CC0000;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="font-size:1.6rem;margin-bottom:6px;">📊</div>
            <div style="font-weight:700;color:#1A1A1A;font-size:0.9rem;">Auto Content Calendar</div>
          </div>
          <div style="padding:16px;background:#fff;border-radius:10px;border-top:3px solid #CC0000;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="font-size:1.6rem;margin-bottom:6px;">⚡</div>
            <div style="font-weight:700;color:#1A1A1A;font-size:0.9rem;">Zapier Auto-Publish</div>
          </div>
        </div>
      </div>`;
    return el;
  }
};
