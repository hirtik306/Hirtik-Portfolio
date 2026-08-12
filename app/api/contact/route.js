import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // 1. Save to Supabase (if configured)
    if (supabaseAdmin) {
      const { error } = await supabaseAdmin
        .from("messages")
        .insert([{ name, email, message }]);
      if (error) {
        console.error("Supabase insert error:", error.message);
      }
    }

    // 2. Send email notification via Resend (if configured)
    let resendError = null;
    if (resend) {
      const { error: sendError } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [process.env.NOTIFY_EMAIL || "hirtikkumar001288@gmail.com"],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        html: `
          <h2>New contact form message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br>")}</p>
        `,
      });
      if (sendError) {
        resendError = sendError;
        console.error("Resend send error:", sendError);
      }
    }

    if (!supabaseAdmin && !resend) {
      // Neither configured yet — let the frontend know so it can fall back to mailto.
      return NextResponse.json(
        { ok: false, error: "not_configured" },
        { status: 200 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
