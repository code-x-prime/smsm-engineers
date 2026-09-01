import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as zod from "zod";

// Zod schema matching all form states across the site
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
  partnershipType: zod.string().optional(),
  recaptchaToken: zod.string().optional(),
});

async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  // If reCAPTCHA isn't configured on the server, don't block submissions.
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await res.json();
    // v3 returns a score 0.0–1.0; 0.5 is Google's suggested default threshold.
    return Boolean(data.success) && (typeof data.score !== "number" || data.score >= 0.5);
  } catch {
    return false;
  }
}

type ContactBody = zod.infer<typeof contactBodySchema>;

// Metadata describing each form: where it lives on the site, a display title,
// and which fields (in order) should appear in the notification email.
const formMeta: Record<
  ContactBody["type"],
  { title: string; sourcePage: string; sourceUrl: string; fields: { key: keyof ContactBody; label: string }[] }
> = {
  contact: {
    title: "General Contact Enquiry",
    sourcePage: "Contact Us",
    sourceUrl: "/contact",
    fields: [
      { key: "name", label: "Full Name" },
      { key: "email", label: "Email Address" },
      { key: "phone", label: "Phone Number" },
      { key: "company", label: "Company" },
      { key: "subject", label: "Subject" },
      { key: "message", label: "Message" },
    ],
  },
  career: {
    title: "Career Application",
    sourcePage: "Careers",
    sourceUrl: "/careers",
    fields: [
      { key: "name", label: "Full Name" },
      { key: "email", label: "Email Address" },
      { key: "phone", label: "Phone Number" },
      { key: "position", label: "Position Applied For" },
      { key: "coverLetter", label: "Cover Letter" },
    ],
  },
  partner: {
    title: "Partnership Registration",
    sourcePage: "Become a Partner",
    sourceUrl: "/become-partner",
    fields: [
      { key: "companyName", label: "Company Name" },
      { key: "contactPerson", label: "Contact Person" },
      { key: "email", label: "Email Address" },
      { key: "phone", label: "Phone Number" },
      { key: "partnershipType", label: "Partnership Category" },
      { key: "region", label: "Target Territory" },
      { key: "message", label: "Proposal / Notes" },
    ],
  },
  query: {
    title: "Product / Quote Enquiry",
    sourcePage: "Request a Quote",
    sourceUrl: "/query-form",
    fields: [
      { key: "subject", label: "Request Subject / Type" },
      { key: "name", label: "Full Name" },
      { key: "company", label: "Company" },
      { key: "email", label: "Email Address" },
      { key: "phone", label: "Phone Number" },
      { key: "productInterest", label: "Product / Software of Interest" },
      { key: "estimatedVolume", label: "Estimated Volume" },
      { key: "message", label: "Message / Requirements" },
    ],
  },
  feedback: {
    title: "Customer Feedback",
    sourcePage: "Feedback Form",
    sourceUrl: "/feedback-form",
    fields: [
      { key: "name", label: "Full Name" },
      { key: "email", label: "Email Address" },
      { key: "rating", label: "Rating" },
      { key: "serviceType", label: "Service Type" },
      { key: "comments", label: "Comments" },
    ],
  },
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.json();
    const body = contactBodySchema.parse(rawBody);
    const meta = formMeta[body.type];

    const isHuman = await verifyRecaptcha(body.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { success: false, error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }

    console.log(`[Form Submission - ${body.type}]`, body);

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com",
      port: Number(process.env.BREVO_SMTP_PORT) || 587,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const displayName = body.name || body.contactPerson || body.companyName || body.email;

    const fieldRows = meta.fields
      .map(({ key, label }) => {
        const value = body[key];
        if (!value) return "";
        return `
          <tr>
            <td style="padding: 12px 16px; font-weight: 600; color: #071A35; background: #F8FAFC; width: 200px; vertical-align: top; border-bottom: 1px solid #E2E8F0; font-size: 13px;">${escapeHtml(label)}</td>
            <td style="padding: 12px 16px; color: #334155; border-bottom: 1px solid #E2E8F0; font-size: 14px; white-space: pre-wrap;">${escapeHtml(String(value))}</td>
          </tr>`;
      })
      .join("");

    const mailOptions = {
      from: process.env.MAIL_FROM || "SMSM Web Portal <portal@smsmengineers.in>",
      to: process.env.NOTIFICATION_EMAIL || "support@smsmengineers.in",
      replyTo: body.email,
      subject: `[${meta.sourcePage}] ${body.subject ? body.subject + " — " : ""}New ${meta.title} — ${displayName}`,
      text: [
        `New submission from: ${meta.sourcePage} (${meta.sourceUrl})`,
        `Submitted: ${submittedAt} IST`,
        "",
        ...meta.fields
          .filter(({ key }) => body[key])
          .map(({ label, key }) => `${label}: ${body[key]}`),
      ].join("\n"),
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #071A35, #0A4ABF); padding: 28px 32px; border-radius: 12px 12px 0 0;">
            <span style="display: inline-block; background: rgba(255,255,255,0.12); color: #00AEEF; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px;">
              ${escapeHtml(meta.sourcePage)}
            </span>
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 600;">
              New ${escapeHtml(meta.title)}
            </h1>
            <p style="color: rgba(255,255,255,0.65); font-size: 13px; margin: 8px 0 0;">
              Submitted ${escapeHtml(submittedAt)} IST via smsmengineers.in${escapeHtml(meta.sourceUrl)}
            </p>
          </div>
          <div style="border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 12px 12px; overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse;">
              ${fieldRows}
            </table>
            <div style="padding: 16px 32px; background: #F8FAFC;">
              <a href="mailto:${escapeHtml(body.email)}" style="display: inline-block; background: #00AEEF; color: #071A35; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; padding: 10px 20px; border-radius: 999px; text-decoration: none;">
                Reply to ${escapeHtml(displayName)}
              </a>
            </div>
          </div>
          <p style="text-align: center; font-size: 11px; color: #94A3B8; margin-top: 16px;">
            Sent automatically from the SMSM Engineers website portal.
          </p>
        </div>
      `,
    };

    if (process.env.BREVO_SMTP_USER && process.env.BREVO_SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Brevo SMTP credentials not configured. Form data logged only, no email sent.");
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
