export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">

        <div style="background:linear-gradient(135deg,#1A1A1A 0%,#2d2d2d 100%);border-radius:16px;padding:48px;text-align:center;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:#CC0000;"></div>

          <h1 style="font-size:2.1rem;font-weight:800;margin:0 0 16px;line-height:1.25;color:#ffffff;">
            Graphic Content Automation<br>with Claude Code for Social Media
          </h1>
          <p style="font-size:1.05rem;margin:0 0 28px;line-height:1.6;color:rgba(255,255,255,0.8);">
            Build the exact pipeline that powers MPowerMyBiz &mdash; from a single idea to a scheduled post, completely automatically.
          </p>
          <div style="display:inline-block;background:rgba(204,0,0,0.25);border:1px solid #CC0000;border-radius:8px;padding:12px 28px;">
            <span style="color:#ffffff;font-weight:600;">Instructor:</span>
            <span style="color:#ffffff;"> MPowerMyBiz &nbsp;&middot;&nbsp;</span>
            <a href="https://mpowermybiz.net" target="_blank" style="color:#ff8080;font-weight:600;text-decoration:none;">mpowermybiz.net</a>
            <span style="color:#ffffff;"> &nbsp;&middot;&nbsp; @mpowermybiz</span>
          </div>
        </div>

        <div style="margin-top:24px;padding:24px 28px;background:#f9f9f9;border-radius:12px;border-left:4px solid #CC0000;">
          <p style="margin:0;font-size:1.05rem;line-height:1.8;color:#1A1A1A;">
            In this course you will build a <strong style="color:#1A1A1A;">real, working automation</strong>. No theory &mdash; just the actual system. By the end, you give Claude Code a topic idea and your branded graphic is generated, logged to a Google Sheet, and posted to social media &mdash; all without touching anything else.
          </p>
        </div>

        <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">

          <div style="padding:20px 16px;background:#fff;border-radius:10px;border-top:3px solid #CC0000;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="width:44px;height:44px;background:#CC0000;border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
              <span style="color:#fff;font-size:0.8rem;font-weight:800;letter-spacing:-0.5px;">AI</span>
            </div>
            <div style="font-weight:700;color:#1A1A1A;font-size:0.9rem;">AI-Generated Graphics</div>
          </div>

          <div style="padding:20px 16px;background:#fff;border-radius:10px;border-top:3px solid #CC0000;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="width:44px;height:44px;background:#1A1A1A;border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
              <span style="color:#fff;font-size:0.75rem;font-weight:800;">CAL</span>
            </div>
            <div style="font-weight:700;color:#1A1A1A;font-size:0.9rem;">Auto Content Calendar</div>
          </div>

          <div style="padding:20px 16px;background:#fff;border-radius:10px;border-top:3px solid #CC0000;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="width:44px;height:44px;background:#CC0000;border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
              <span style="color:#fff;font-size:0.75rem;font-weight:800;">ZAP</span>
            </div>
            <div style="font-weight:700;color:#1A1A1A;font-size:0.9rem;">Zapier Auto-Publish</div>
          </div>

        </div>
      </div>`;
    return el;
  }
};
