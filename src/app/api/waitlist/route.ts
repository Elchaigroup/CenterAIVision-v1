import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, product } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const payload = {
      email,
      product: product || 'General',
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    // Google Apps Script returns 302 redirects, but as long as we get a response, it worked
    const text = await response.text()

    // Check if response contains success or if it's a valid response
    if (response.ok || text.includes('success') || response.status === 302) {
      return NextResponse.json({ success: true })
    }

    throw new Error('Failed to save to spreadsheet')
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }
}
