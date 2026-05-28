export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <div style="background:linear-gradient(135deg,#7B2FBE,#00D4AA);border-radius:16px;padding:48px;color:#fff;text-align:center;">
          <h1 style="font-size:2.2rem;font-weight:700;margin:0 0 16px;">LinkedIn Graphics Automation<br>with Claude Code</h1>
          <p style="font-size:1.2rem;opacity:0.9;margin:0 0 24px;">Build the exact pipeline that powers MPowerMyBiz — from idea to scheduled post, automatically.</p>
          <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:8px;padding:12px 24px;">
            <strong>Instructor:</strong> MPowerMyBiz &nbsp;·&nbsp; @mpowermybiz
          </div>
        </div>
        <div style="margin-top:32px;padding:24px;background:#f8f8ff;border-radius:12px;border-left:4px solid #7B2FBE;">
          <p style="margin:0;font-size:1.05rem;line-height:1.7;color:#333;">
            In this course you'll build a <strong>real, working automation</strong>. No theory — just the actual system. By the end, you give Claude Code a topic idea and your branded LinkedIn graphic is generated, logged to a Google Sheet, and scheduled to post — all without you touching anything else.
          </p>
        </div>
      </div>`;
    return el;
  }
};
