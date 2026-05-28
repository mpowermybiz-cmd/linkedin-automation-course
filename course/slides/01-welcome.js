export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <style>@media(max-width:600px){.w01-strip{flex-wrap:wrap;gap:16px!important;}.w01-strip>div{flex:0 0 auto!important;}}</style>
      <div style="max-width:800px;margin:0 auto;padding:28px clamp(14px,4vw,24px);font-family:sans-serif;">

        <div style="height:4px;background:linear-gradient(90deg,#CC0000 0%,#1A1A1A 100%);border-radius:2px;margin-bottom:28px;"></div>

        <div style="margin-bottom:14px;">
          <span style="background:#fff0f0;color:#CC0000;font-size:0.7rem;font-weight:800;padding:4px 13px;border-radius:20px;letter-spacing:1.2px;">AUTOMATION COURSE</span>
        </div>

        <h1 style="font-size:clamp(1.5rem,5.5vw,2.2rem);font-weight:800;color:#1A1A1A;line-height:1.2;margin:0 0 14px;">
          Graphic Content Automation<br>with Claude Code for Social Media
        </h1>

        <p style="font-size:1rem;color:#444;line-height:1.75;margin:0 0 6px;">
          Build the exact pipeline that powers MPowerMyBiz &mdash; from a single idea to a scheduled LinkedIn post, completely automatically.
        </p>
        <p style="font-size:0.92rem;color:#666;line-height:1.75;margin:0 0 20px;">
          No theory &mdash; just the real, working system. Give Claude Code a topic and your branded graphic is generated, logged to a Google Sheet, and posted to social media &mdash; all without touching anything else.
        </p>

        <div style="display:flex;align-items:center;gap:8px;padding-bottom:22px;border-bottom:1px solid #ebebeb;margin-bottom:22px;flex-wrap:wrap;">
          <span style="color:#999;font-size:0.8rem;">By</span>
          <span style="color:#1A1A1A;font-weight:700;font-size:0.85rem;">MPowerMyBiz</span>
          <span style="color:#ddd;">&middot;</span>
          <a href="https://mpowermybiz.net" target="_blank" style="color:#CC0000;font-size:0.82rem;font-weight:600;text-decoration:none;">mpowermybiz.net</a>
          <span style="color:#ddd;">&middot;</span>
          <span style="color:#999;font-size:0.8rem;">@mpowermybiz</span>
        </div>

        <div class="w01-strip" style="display:flex;align-items:center;padding-bottom:22px;border-bottom:1px solid #ebebeb;margin-bottom:28px;justify-content:center;gap:8px;">

          <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;">
            <div style="width:42px;height:42px;background:#1A1A1A;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:8px;">
              <span style="color:#D97757;font-size:0.78rem;font-weight:800;font-family:monospace;">&lt;/&gt;</span>
            </div>
            <div style="font-size:0.82rem;font-weight:700;color:#1A1A1A;">Claude Code</div>
            <div style="font-size:0.7rem;color:#aaa;margin-top:2px;">Writes &amp; runs everything</div>
          </div>

          <div style="color:#CC0000;font-size:1.3rem;font-weight:700;flex-shrink:0;padding:0 6px;margin-bottom:18px;">&#8594;</div>

          <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;">
            <div style="width:42px;height:42px;background:#0F9D58;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:8px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="white" fill-opacity="0.15"/>
                <line x1="3" y1="8" x2="21" y2="8" stroke="white" stroke-width="1.5"/>
                <line x1="3" y1="13" x2="21" y2="13" stroke="white" stroke-width="1.5"/>
                <line x1="3" y1="18" x2="21" y2="18" stroke="white" stroke-width="1.5"/>
                <line x1="9" y1="3" x2="9" y2="21" stroke="white" stroke-width="1.5"/>
                <line x1="15" y1="3" x2="15" y2="21" stroke="white" stroke-width="1.5"/>
              </svg>
            </div>
            <div style="font-size:0.82rem;font-weight:700;color:#1A1A1A;">Google Sheets</div>
            <div style="font-size:0.7rem;color:#aaa;margin-top:2px;">Content calendar</div>
          </div>

          <div style="color:#CC0000;font-size:1.3rem;font-weight:700;flex-shrink:0;padding:0 6px;margin-bottom:18px;">&#8594;</div>

          <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;">
            <div style="width:42px;height:42px;background:#FF4A00;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:8px;">
              <span style="color:#fff;font-size:1.15rem;font-weight:900;font-style:italic;font-family:Georgia,serif;line-height:1;">Z</span>
            </div>
            <div style="font-size:0.82rem;font-weight:700;color:#1A1A1A;">Zapier</div>
            <div style="font-size:0.7rem;color:#aaa;margin-top:2px;">Auto-publishes to LinkedIn</div>
          </div>

        </div>

        <div style="position:relative;">
          <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);z-index:2;">
            <div style="background:#CC0000;color:#fff;font-size:0.7rem;font-weight:800;padding:4px 14px;border-radius:20px;letter-spacing:1px;white-space:nowrap;">&#9654; WATCH THIS FIRST</div>
          </div>
          <div style="background:#0D0D0D;border-radius:12px;padding:8px;box-shadow:0 6px 24px rgba(0,0,0,0.15);">
            <video
              controls
              playsinline
              webkit-playsinline
              x-webkit-airplay="allow"
              style="width:100%;border-radius:6px;display:block;max-height:380px;background:#000;"
              preload="none">
              <source src="./course/assets/video/intro-video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div style="text-align:center;margin-top:8px;color:#aaa;font-size:0.75rem;">Course introduction &mdash; what you will build and how it works</div>
        </div>

      </div>`;
    return el;
  }
};
