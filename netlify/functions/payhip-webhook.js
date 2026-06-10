/**
 * payhip-webhook — receives Payhip purchase notifications and stores
 * the buyer's email in Supabase so they can access the course.
 *
 * Set up in Payhip Dashboard → Products → Your Product → Webhooks
 * URL: https://YOUR-SITE.netlify.app/.netlify/functions/payhip-webhook
 *
 * No npm deps — uses native Node 18 fetch.
 */
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method not allowed' };
    }

    try {
        // Payhip sends application/x-www-form-urlencoded
        console.warn('Payhip webhook received. Body:', event.body);
        const params = new URLSearchParams(event.body);

        const buyerEmail      = params.get('buyer_email');
        const purchaseKey     = params.get('purchase_key')     || '';
        const productPermalink = params.get('product_permalink') || '';

        if (!buyerEmail) {
            console.error('Payhip webhook: missing buyer_email');
            return { statusCode: 400, body: 'Missing buyer_email' };
        }

        const normalized = buyerEmail.toLowerCase().trim();

        const SUPABASE_URL         = process.env.SUPABASE_URL;
        const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

        if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
            console.error('Missing Supabase env vars');
            return { statusCode: 500, body: 'Server configuration error' };
        }

        // Upsert — handles refunds/re-purchases cleanly without duplicates
        const res = await fetch(`${SUPABASE_URL}/rest/v1/purchasers`, {
            method: 'POST',
            headers: {
                'apikey':        SUPABASE_SERVICE_KEY,
                'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
                'Content-Type':  'application/json',
                'Prefer':        'resolution=merge-duplicates',
            },
            body: JSON.stringify({
                email:              normalized,
                purchase_key:       purchaseKey,
                product_permalink:  productPermalink,
            }),
        });

        if (!res.ok) {
            const txt = await res.text();
            console.error('Supabase upsert failed:', txt);
            return { statusCode: 500, body: 'Database error' };
        }

        console.warn(`✅ Course access granted: ${normalized}`);
        return { statusCode: 200, body: 'OK' };

    } catch (err) {
        console.error('payhip-webhook error:', err);
        return { statusCode: 500, body: 'Server error' };
    }
};
