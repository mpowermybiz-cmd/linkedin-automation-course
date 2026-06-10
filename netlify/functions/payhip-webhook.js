/**
 * payhip-webhook — receives purchase notifications from EITHER:
 *   1. Payhip direct webhook (form-urlencoded) — paid purchases
 *   2. Zapier webhook (JSON) — ALL purchases including discount/free codes
 *
 * Both routes save the buyer email to Supabase to grant course access.
 */
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method not allowed' };
    }

    try {
        console.warn('Webhook received. Content-Type:', event.headers['content-type']);
        console.warn('Body:', event.body);

        const contentType = event.headers['content-type'] || '';
        let buyerEmail = '';
        let purchaseKey = '';
        let productPermalink = '';

        if (contentType.includes('application/json')) {
            // Zapier sends JSON — field name depends on how Zap is configured
            const json = JSON.parse(event.body || '{}');
            buyerEmail       = json.buyer_email || json.email || json.buyer || '';
            purchaseKey      = json.purchase_key || json.order_id || '';
            productPermalink = json.product_permalink || json.product || '';
        } else {
            // Payhip direct webhook sends form-urlencoded
            const params     = new URLSearchParams(event.body);
            buyerEmail       = params.get('buyer_email') || '';
            purchaseKey      = params.get('purchase_key')      || '';
            productPermalink = params.get('product_permalink') || '';
        }

        if (!buyerEmail) {
            console.error('Missing buyer email. Body:', event.body);
            return { statusCode: 400, body: 'Missing buyer email' };
        }

        const normalized = buyerEmail.toLowerCase().trim();

        const SUPABASE_URL         = process.env.SUPABASE_URL;
        const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

        if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
            console.error('Missing Supabase env vars');
            return { statusCode: 500, body: 'Server configuration error' };
        }

        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/purchasers?on_conflict=email`,
            {
                method: 'POST',
                headers: {
                    'apikey':        SUPABASE_SERVICE_KEY,
                    'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
                    'Content-Type':  'application/json',
                    'Prefer':        'resolution=merge-duplicates,return=minimal',
                },
                body: JSON.stringify({
                    email:             normalized,
                    purchase_key:      purchaseKey,
                    product_permalink: productPermalink,
                }),
            }
        );

        const responseText = await res.text();

        if (!res.ok) {
            console.error('Supabase insert failed. Status:', res.status, 'Response:', responseText);
            return { statusCode: 500, body: 'Database error' };
        }

        console.warn(`✅ Course access granted: ${normalized}`);
        return { statusCode: 200, body: 'OK' };

    } catch (err) {
        console.error('payhip-webhook error:', err.message);
        return { statusCode: 500, body: 'Server error' };
    }
};
