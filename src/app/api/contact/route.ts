import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as zod from "zod";

// Zod schemas matching form states
const contactBodySchema = zod.object({
  type: zod.enum(["contact", "career", "partner", "query", "feedback"]),
  name: zod.string().optional(),
  email: zod.string().email(),
  phone: zod.string().optional(),
  company: zod.string().optional(),
  companyName: zod.string().optional(),
  contactPerson: zod.string().optional(),
  position: zod.string().optional(),
  coverLetter: zod.string().optional(),
  productInterest: zod.string().optional(),
  estimatedVolume: zod.string().optional(),
  rating: zod.string().optional(),
  serviceType: zod.string().optional(),
  comments: zod.string().optional(),
  subject: zod.string().optional(),
  message: zod.string().optional(),
  region: zod.string().optional(),
});

export async function POST(req: Request) {
  try {
    const rawBody = await req.json();
    const body = contactBodySchema.parse(rawBody);

    console.log(`[Form Submission - ${body.type}]`, body);

    // Setup Nodemailer transporter with Brevo SMTP details or fallback to logs
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || "mock_user@smsm.in",
        pass: process.env.SMTP_PASS || "mock_pass",
      },
    });

    const mailOptions = {
      from: `"SMSM Web Portal" <${process.env.SMTP_USER || "portal@smsmengineers.in"}>`,
      to: process.env.NOTIFICATION_EMAIL || "support@smsmengineers.in",
      subject: `[${body.type.toUpperCase()}] New Submission from ${body.name || body.contactPerson || body.email}`,
      text: JSON.stringify(body, null, 2),
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #071A35; border-bottom: 2px solid #00AEEF; padding-bottom: 10px;">
            New ${body.type.toUpperCase()} Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            ${Object.entries(body)
              .map(
                ([key, val]) => `
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px; font-weight: bold; color: #555; text-transform: capitalize;">${key}</td>
                <td style="padding: 8px; color: #222;">${val}</td>
              </tr>
            `
              )
              .join("")}
          </table>
          <p style="margin-top: 20px; font-size: 11px; color: #888;">
            Sent automatically from SMSM Engineers website portal.
          </p>
        </div>
      `,
    };

    // Attempt sending, fallback to log if authentication fails in local env
    if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PASS !== "mock_pass") {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("SMTP Credentials not configured. Logged form data successfully.");
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error: any) {
    console.error("Form processing error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process form submission" },
      { status: 400 }
    );
  }
}
