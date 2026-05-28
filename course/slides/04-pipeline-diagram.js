export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#1A1A1A;margin:0 0 6px;">How the Pieces Connect</h2>
        <p style="color:#555;margin:0 0 24px;">6 steps. <strong style="color:#CC0000;">You only set up step 1 once.</strong></p>

        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f5f5f5;">
              <div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">1</div>
              <strong style="color:#1A1A1A;min-width:130px;">You</strong>
              <span style="color:#555;font-size:0.95rem;">Set up a scheduled task in Claude Code</span>
            </div>
            <div style="padding:10px 18px 12px 66px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;line-height:1.8;">
                &bull; Open Terminal &rarr; run <code style="background:#f0f0f0;padding:1px 6px;border-radius:3px;font-size:0.8rem;">claude</code> &rarr; create a new scheduled task<br>
                &bull; Set your topic, category, schedule (e.g. weekdays at 8am)<br>
                &bull; Paste your automation instructions (see reference below) &rarr; save
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f5f5f5;">
              <div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</div>
              <strong style="color:#1A1A1A;min-width:130px;">Claude Code</strong>
              <span style="color:#555;font-size:0.95rem;">Writes and runs the Python graphic script</span>
            </div>
            <div style="padding:10px 18px 12px 66px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;line-height:1.8;">
                &bull; <strong style="color:#CC0000;">Runs locally on your Mac</strong> &mdash; not in the cloud<br>
                &bull; Your Mac must be on when the scheduled task fires<br>
                &bull; Claude writes a fresh Python script each run based on your instructions
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f5f5f5;">
              <div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">3</div>
              <strong style="color:#1A1A1A;min-width:130px;">Python Script</strong>
              <span style="color:#555;font-size:0.95rem;">Generates your branded PNG graphic</span>
            </div>
            <div style="padding:10px 18px 12px 66px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;line-height:1.8;">
                &bull; Uses Pillow to draw all 6 graphic zones (avatar, name, handle, pill, headline, sub-headline)<br>
                &bull; PNG saved locally to your output folder<br>
                &bull; File named automatically by date + topic
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f5f5f5;">
              <div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">4</div>
              <strong style="color:#1A1A1A;min-width:130px;">Webhook POST</strong>
              <span style="color:#555;font-size:0.95rem;">Sends metadata to your Google Sheet</span>
            </div>
            <div style="padding:10px 18px 12px 66px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;margin-bottom:8px;line-height:1.8;">
                &bull; Claude Code sends this payload automatically to your Apps Script URL:<br>
              </div>
              <div style="background:#0D0D0D;border-radius:6px;padding:10px 14px;font-family:monospace;font-size:0.75rem;color:#00D4AA;line-height:1.7;">
                &#123; date, title, caption, hashtags, image_url,<br>
                &nbsp;&nbsp;source: "Claude Code", status: "pending" &#125;
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f5f5f5;">
              <div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">5</div>
              <strong style="color:#1A1A1A;min-width:130px;">Google Sheet</strong>
              <span style="color:#555;font-size:0.95rem;">New row added to your content calendar</span>
            </div>
            <div style="padding:10px 18px 12px 66px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;line-height:1.8;">
                &bull; Row appears instantly with all 9 columns filled<br>
                &bull; Status column = <strong style="color:#CC0000;">"pending"</strong> &mdash; Zapier watches for this value<br>
                &bull; You can review or edit any row before it posts
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.06);overflow:hidden;">
            <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #f5f5f5;">
              <div style="width:34px;height:34px;border-radius:50%;background:#CC0000;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">6</div>
              <strong style="color:#1A1A1A;min-width:130px;">Zapier</strong>
              <span style="color:#555;font-size:0.95rem;">Detects new row and posts to LinkedIn</span>
            </div>
            <div style="padding:10px 18px 12px 66px;background:#fafafa;">
              <div style="color:#555;font-size:0.82rem;line-height:1.8;">
                &bull; Zap fires when it sees a new row with status = "pending"<br>
                &bull; Maps caption + image_url to your LinkedIn post fields<br>
                &bull; Post goes live &mdash; zero manual steps from you
              </div>
            </div>
          </div>

        </div>

        <div style="background:#1A1A1A;border-radius:10px;padding:16px 20px;margin-bottom:12px;">
          <div style="color:#fff;font-size:0.8rem;font-weight:700;letter-spacing:1px;margin-bottom:8px;">SCHEDULED TASK INSTRUCTIONS TEMPLATE &mdash; paste this into Claude Code:</div>
          <pre style="color:#00D4AA;font-family:monospace;font-size:0.78rem;line-height:1.7;margin:0;white-space:pre-wrap;">"Generate a new social media graphic for small business owners.
Topic: [auto-generate a relevant AI or business tip]
Category: AI Tools
Run the Python graphic script, save PNG to ~/output/graphics/
POST results to: [YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL]
Caption: 2 sentences about the topic
Hashtags: #MPowerMyBiz #AITools #SmallBusiness #Automation
Confirm the new row appears in the Google Sheet with status: pending"</pre>
        </div>

        <div style="background:#CC0000;color:#fff;border-radius:10px;padding:14px 20px;text-align:center;font-weight:700;">
          One setup. Six steps run automatically every time.
        </div>

      </div>`;
    return el;
  }
};
