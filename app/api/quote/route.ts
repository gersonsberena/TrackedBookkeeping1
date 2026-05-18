import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, business, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // Placeholder — wire to Resend/SendGrid here
  console.log("Quote request received:", { name, email, business, message });

  return NextResponse.json({ ok: true });
}
