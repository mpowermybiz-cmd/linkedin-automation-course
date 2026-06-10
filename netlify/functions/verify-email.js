/**
 * verify-email — checks if an email has a valid course purchase in Supabase.
 * Called by the access gate on every course open.
 * No npm deps — uses native Node 18 fetch.
 */
exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    try {
        const { email } = JSON.parse(event.body || '{}');
        if (!email) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Email required' }) };
        }

        const normalized = email.toLowerCase().trim();

        // Course owner always has access
        if (normalized === 'mpowermybiz@gmail.com') {
            return { statusCode: 200, headers, body: JSON.stringify({ access: true }) };
        }

        const SUPABASE_URL      = process.env.SUPABASE_URL;
        const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

        if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
            console.error('Missing Supabase env vars');
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server configuration error' }) };
        }

        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/purchasers?email=eq.${encodeURIComponent(normalized)}&select=email`,
            {
                headers: {
                    'apikey': SUPABASE_SERVICE_KEY,
                    'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
                },
            }
        );

        if (!res.ok) {
            console.error('Supabase query failed:', res.status);
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Database error' }) };
        }

        const data = await res.json();
        const access = Array.isArray(data) && data.length > 0;

        return { statusCode: 200, headers, body: JSON.stringify({ access }) };

    } catch (err) {
        console.error('verify-email error:', err);
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server error' }) };
    }
};
