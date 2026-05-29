import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, business, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Tracked Bookkeeping <onboarding@resend.dev>",
    to: "rose.m.berena@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}${business ? ` — ${business}` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business || "—"}`,
      ``,
      `Message:`,
      message || "(no message)",
    ].join("\n"),
    html: `
      <div style="font-family:sans-serif;max-width:560px;color:#15201C">
        <h2 style="margin:0 0 24px;font-size:22px">New inquiry from ${name}</h2>
        <table style="width:100%;border-collapse:collapse;font-size:15px">
          <tr><td style="padding:10px 0;border-top:1px solid #ddd;color:#6A726E;width:120px">Name</td><td style="padding:10px 0;border-top:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:10px 0;border-top:1px solid #ddd;color:#6A726E">Email</td><td style="padding:10px 0;border-top:1px solid #ddd"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:10px 0;border-top:1px solid #ddd;color:#6A726E">Business</td><td style="padding:10px 0;border-top:1px solid #ddd">${business || "—"}</td></tr>
          ${message ? `<tr><td style="padding:10px 0;border-top:1px solid #ddd;color:#6A726E;vertical-align:top">Message</td><td style="padding:10px 0;border-top:1px solid #ddd">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
        <p style="margin:28px 0 0;font-size:13px;color:#6A726E">Sent via trackedbookkeeping.com</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
