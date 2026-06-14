import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body?.name || "";
    const phone = body?.phone || "";
    const email = body?.email || "";
    const city = body?.city || "Midlands";
    const message = body?.message || "";

    // Using Resend to send a professionally formatted email
    await resend.emails.send({
      from: "MAXX Waste <onboarding@resend.dev>", 
      to: "info@maxxwasteremovals.co.uk",
      reply_to: email,
      subject: `New Waste Removal Quote Request - ${city}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f9; padding: 40px 20px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #e1e8ed;">
            
            <!-- Header -->
            <div style="background-color: #07152f; padding: 30px; text-align: center;">
              <h1 style="color: #f6be00; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Quote Request</h1>
              <p style="color: #ffffff; margin-top: 10px; opacity: 0.8;">Service Area: ${city}</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px;">
              <div style="margin-bottom: 30px;">
                <h3 style="color: #07152f; border-bottom: 2px solid #f6be00; display: inline-block; padding-bottom: 5px; margin-bottom: 20px;">Customer Details</h3>
                <p style="margin: 10px 0; color: #4b5563;"><strong style="color: #07152f; width: 100px; display: inline-block;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0; color: #4b5563;"><strong style="color: #07152f; width: 100px; display: inline-block;">Phone:</strong> ${phone}</p>
                <p style="margin: 10px 0; color: #4b5563;"><strong style="color: #07152f; width: 100px; display: inline-block;">Email:</strong> ${email}</p>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #07152f; border-bottom: 2px solid #f6be00; display: inline-block; padding-bottom: 5px; margin-bottom: 20px;">Message</h3>
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb; color: #374151; line-height: 1.6; white-space: pre-line;">
                  ${message}
                </div>
              </div>

              <div style="text-align: center; margin-top: 40px;">
                <a href="tel:${phone}" style="background-color: #f6be00; color: #07152f; padding: 15px 30px; border-radius: 12px; text-decoration: none; font-weight: bold; display: inline-block;">Call Customer Now</a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Sent from MAXX Waste Removals Official Website</p>
            </div>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
