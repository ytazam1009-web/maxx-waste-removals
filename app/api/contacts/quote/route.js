import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body?.name || "";
    const phone = body?.phone || "";
    const email = body?.email || "";
    const city = body?.city || "";
    const message = body?.message || "";

    await resend.emails.send({
      from: "MAXX Waste <onboarding@resend.dev>",
      to: "info@maxxwasteremovals.co.uk",
      subject: `New Waste Removal Quote - ${city || "Unknown City"}`,

      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; padding:25px; border-radius:12px;">

            <h2 style="margin-bottom:20px; color:#111;">
              New Quote Request
            </h2>

            <p><b>Name:</b> ${name}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>City:</b> ${city}</p>

            <hr style="margin:20px 0;" />

            <p><b>Message:</b></p>
            <p style="white-space:pre-line;">${message}</p>

            <hr style="margin:20px 0;" />

            <p style="font-size:12px; color:#777;">
              Sent from MAXX Waste Removals website
            </p>

          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}