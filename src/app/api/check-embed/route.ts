import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get('url');

    if (!url) return NextResponse.json({ embeddable: false });

    let parsed: URL;
    try {
        parsed = new URL(url);
    } catch {
        return NextResponse.json({ embeddable: false });
    }

    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        return NextResponse.json({ embeddable: false });
    }

    try {
        const res = await fetch(url, {
            method: 'HEAD',
            signal: AbortSignal.timeout(5000),
        });

        const xfo = res.headers.get('x-frame-options')?.trim().toUpperCase();
        const csp = res.headers.get('content-security-policy') ?? '';

        const xfoBlocked = xfo === 'DENY' || xfo === 'SAMEORIGIN';
        const cspBlocked = csp.includes('frame-ancestors') && !/frame-ancestors[^;]*\*/.test(csp);

        return NextResponse.json({ embeddable: !xfoBlocked && !cspBlocked });
    } catch {
        return NextResponse.json({ embeddable: true });
    }
}
