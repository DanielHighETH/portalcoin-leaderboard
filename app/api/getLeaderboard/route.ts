import { NextRequest, NextResponse } from 'next/server'
export const revalidate = 0;

export async function GET() {
    const url = process.env.LINK;
    
    if (!url) {
        return NextResponse.json({ error: "No ENV link is set" }, { status: 500 });
    }

    try {
        const response = await fetch(url, {
            next: { revalidate: 0 }
        });
        if (!response.ok) {
            return NextResponse.json({ error: `HTTP error! status: ${response.status}` }, { status: 500 });

        }
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
