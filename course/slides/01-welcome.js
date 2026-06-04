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
          Content Automation with Claude Code<br>for Social Media
        </h1>

        <p style="font-size:1rem;color:#444;line-height:1.75;margin:0 0 6px;">
          Build the exact pipeline that powers MPowerMyBiz &mdash; from a single idea to a scheduled social media post, completely automatically.
        </p>
        <p style="font-size:0.92rem;color:#666;line-height:1.75;margin:0 0 20px;">
          No theory &mdash; just the real, working system. Give Claude Code a topic and your branded graphic is generated, logged to a Google Sheet, and posted to social media &mdash; all without touching anything else.
        </p>

        <div style="display:flex;align-items:center;gap:8px;padding-bottom:22px;border-bottom:1px solid #ebebeb;margin-bottom:28px;flex-wrap:wrap;">
          <span style="color:#999;font-size:0.8rem;">By</span>
          <a href="https://mpowermybiz.net" target="_blank" style="color:#1A1A1A;font-weight:700;font-size:0.85rem;text-decoration:none;border-bottom:2px solid #CC0000;padding-bottom:1px;">MPowerMyBiz</a>
        </div>

        <div style="position:relative;">
          <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);z-index:2;">
            <div style="background:#CC0000;color:#fff;font-size:0.7rem;font-weight:800;padding:4px 14px;border-radius:20px;letter-spacing:1px;white-space:nowrap;">&#9654; WATCH THIS FIRST</div>
          </div>
          <div style="background:#0D0D0D;border-radius:12px;padding:clamp(4px,2vw,8px);box-shadow:0 6px 24px rgba(0,0,0,0.15);overflow:hidden;position:relative;">
            <video
              id="intro-video"
              autoplay
              muted
              controls
              playsinline
              webkit-playsinline
              x-webkit-airplay="allow"
              style="width:100%;height:auto;border-radius:6px;display:block;max-height:min(380px,56vw);background:#000;object-fit:contain;"
              preload="metadata">
              <source src="./course/assets/video/intro-video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <!-- Unmute overlay button -->
            <div id="unmute-btn" style="position:absolute;bottom:48px;right:16px;z-index:10;cursor:pointer;background:rgba(0,0,0,0.75);border:2px solid rgba(255,255,255,0.6);border-radius:24px;padding:7px 16px;display:flex;align-items:center;gap:7px;backdrop-filter:blur(4px);transition:background 0.2s;"
              onmouseover="this.style.background='rgba(204,0,0,0.85)'"
              onmouseout="this.style.background='rgba(0,0,0,0.75)'"
              onclick="(function(){var v=document.getElementById('intro-video');var b=document.getElementById('unmute-btn');v.muted=false;v.volume=1;b.style.display='none';})()">
              <span style="font-size:1rem;">&#128264;</span>
              <span style="color:#fff;font-size:0.75rem;font-weight:700;white-space:nowrap;">Click to Unmute</span>
            </div>
          </div>
          <div style="text-align:center;margin-top:8px;color:#aaa;font-size:0.75rem;">Course introduction &mdash; what you will build and how it works</div>
        </div>

        <div style="margin-top:28px;background:#f9f9f9;border-radius:10px;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;border:1px solid #ebebeb;">
          <div>
            <div style="font-size:0.8rem;font-weight:700;color:#1A1A1A;margin-bottom:2px;">Have a question? We&rsquo;re here to help.</div>
            <div style="font-size:0.78rem;color:#666;">Reach out any time throughout the course &mdash; no question is too small.</div>
          </div>
          <a href="mailto:mpowermybiz@gmail.com" style="display:inline-flex;align-items:center;gap:7px;background:#1A1A1A;color:#fff;font-size:0.78rem;font-weight:700;padding:9px 18px;border-radius:8px;text-decoration:none;white-space:nowrap;">&#9993; mpowermybiz@gmail.com</a>
        </div>

      </div>`;
    return el;
  }
};
