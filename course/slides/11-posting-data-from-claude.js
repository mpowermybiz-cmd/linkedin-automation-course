export default {
  id: "11-posting-data-from-claude",
  title: "Posting Data from Claude Code",
  type: "code-explainer",
  content: {
    heading: "Python: Sending the Row to Your Sheet",
    explanation: "After the graphic is generated, this code fires automatically and writes the row to your content calendar.",
    code: `import urllib.request
import urllib.error
import json
import ssl

def post_to_sheet(webhook_url, payload):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        webhook_url,
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST"
    )

    # Step 1: POST — capture redirect
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        if e.code in (301, 302, 307, 308):
            redirect_url = e.headers.get("Location")
            # Step 2: GET the redirect URL
            get_req = urllib.request.Request(redirect_url)
            with urllib.request.urlopen(get_req, context=ctx) as resp2:
                return json.loads(resp2.read())
        raise`,
    callout: "The two-step redirect is required. Google Apps Script always redirects — skip this and your POST silently fails.",
  },
};
