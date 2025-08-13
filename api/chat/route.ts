
import { NextResponse } from 'next/server'

/**
 * POST /api/chat
 * Body: { message: string }
 * Environment: OPENAI_API_KEY required to enable server-side proxy.
 * This file is a placeholder — to enable, set OPENAI_API_KEY in Vercel and remove the mock.
 */

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    if (!process.env.OPENAI_API_KEY) {
      // Mock reply for local/dev if no API key set
      return NextResponse.json({ reply: "Hi! I'm your FitFlow assistant. Ask me about products, workouts, or shipping." })
    }
    // Example flow (unimplemented stub):
    // const resp = await fetch('https://api.openai.com/v1/chat/completions', { ... })
    // return NextResponse.json({ reply: await resp.text() })
    return NextResponse.json({ reply: "AI proxy is configured on the server. Please add OPENAI_API_KEY to your environment." })
  } catch (e) {
    return NextResponse.json({ error: e.message || String(e) }, { status: 500 })
  }
}
