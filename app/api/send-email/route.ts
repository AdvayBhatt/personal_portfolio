import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not found");
    return NextResponse.json({ status: "error", error: "Missing API key" });
  }

  const resend = new Resend(resendApiKey);

  const { name, email, message, subject } = await req.json();

  try {
    await resend.emails.send({
      from: "Hello <hello@resend.io>",
      to: "advayabhattacharya@gmail.com",
      subject,
      text: `${name} <${email}> says: ${message}`,
    });

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "error", error: err });
  }
}
