import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      message,
      city = "Unknown",
    } = body;

    if (!name || !phone || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const msg = message.toLowerCase();

    const isHotLead =
      msg.includes("urgent") ||
      msg.includes("same day") ||
      msg.includes("today") ||
      message.length > 25;

    const leadTag = isHotLead ? "🔥 HOT LEAD" : "📩 NEW LEAD";

    const fromEmail =
      "MAXX Waste <info@yourdomain.com>"; // replace later with verified domain

    // -----------------------------
    // 1️⃣ EMAIL TO YOU
    // -----------------------------
    await resend.emails.send({
      from: fromEmail,
      to: "info@maxxwasteremovals.co.uk",
      subject: `${leadTag} - ${city} - ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>${leadTag}</h2>
          <hr/>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr/>
          <h3>Message</h3>
          <p style="background:#f5f5f5;padding:10px;">
            ${message}
          </p>
          <hr/>
          <p style="color:gray;">
            MAXX Waste Removals CRM System
          </p>
        </div>
      `,
    });

    // -----------------------------
    // 2️⃣ AUTO REPLY
    // -----------------------------
    if (email) {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "We received your request ✔ MAXX Waste Removals",
        html: `
          <div style="font-family: Arial; padding: 20px;">
            <h2>Thanks ${name} 👋</h2>

            <p>
              We’ve received your waste removal request from <strong>${city}</strong>.
            </p>

            <p>
              Our team will contact you shortly with a fast quote.
            </p>

            <hr/>

            <p><strong>Need urgent help?</strong></p>
            <p>Call: +44 7348 481092</p>

            <p style="color:gray;">
              MAXX Waste Removals Team
            </p>
          </div>
        `,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}