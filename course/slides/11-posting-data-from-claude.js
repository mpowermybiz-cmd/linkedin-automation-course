export const slide = {
  render() {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="max-width:800px;margin:0 auto;padding:40px 24px;font-family:sans-serif;">
        <h2 style="font-size:1.8rem;color:#7B2FBE;margin:0 0 8px;">Python: Sending the Row to Your Sheet</h2>
        <p style="color:#555;margin:0 0 20px;">After the graphic is generated, this fires automatically and writes the row to your content calendar.</p>
        <div style="background:#0D0D0D;border-radius:12px;padding:24px;overflow-x:auto;">
          <pre style="color:#00D4AA;font-family:monospace;font-size:0.82rem;line-height:1.8;margin:0;">import urllib.request, urllib.error, json, ssl

def post_to_sheet(webhook_url, payload):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        webhook_url, data=data,
        headers={'Content-Type': 'application/json'},
        method='POST'
    )
    try:
        with urllib.request.urlopen(req, context=ctx) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        if e.code in (301, 302, 307, 308):
            # Step 2: GET the redirect URL
            redirect = e.headers.get('Location')
            with urllib.request.urlopen(redirect, context=ctx) as r2:
                return json.loads(r2.read())
        raise</pre>
        </div>
        <div style="margin-top:16px;background:#e8f8f4;border-radius:8px;padding:14px 18px;color:#00907a;">
          <strong>The two-step redirect is required.</strong> Google Apps Script always redirects — skip it and your POST silently fails every time.
        </div>
      </div>`;
    return el;
  }
};
