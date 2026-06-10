/**
 * payhip-webhook — receives Payhip purchase notifications and stores
 * the buyer's email in Supabase so they can access the course.
 *
 * Set up in Payhip Dashboard → Account → Developer → Webhook Endpoint
 * URL: https://socialmedia-automation-course.netlify.app/.netlify/functions/payhip-webhook
 *
 * No npm deps — uses native Node 18 fetch.
 */
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method not allowed' };
    }

    try {
        console.warn('Payhip webhook received. Body:', event.body);

        // Payhip sends application/x-www-form-urlencoded
        const params = new URLSearchParams(event.body);

        const buyerEmail       = params.get('buyer_email');
        const purchaseKey      = params.get('purchase_key')      || '';
        const productPermalink = params.get('product_permalink') || '';

        if (!buyerEmail) {
            console.error('Payhip webhook: missing buyer_email. Full params:', event.body);
            return { statusCode: 400, body: 'Missing buyer_email' };
        }

        const normalized = buyerEmail.toLowerCase().trim();

        const SUPABASE_URL         = process.env.SUPABASE_URL;
        const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

        if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
            console.error('Missing Supabase env vars');
            return { statusCode: 500, body: 'Server configuration error' };
        }

        // Use INSERT with ON CONFLICT DO UPDATE (explicit upsert via query param)
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
