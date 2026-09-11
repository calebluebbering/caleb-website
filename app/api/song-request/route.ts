
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const RATE_LIMIT = 3;
const RATE_WINDOW = 10 * 60 * 1000; // 10 minutes

const requests = new Map<string, number[]>();

export async function POST(req: Request) {
  try {
    // Get the user's IP address
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0].trim() || "unknown";

    const now = Date.now();

    // Get previous requests from this IP
    const timestamps = requests.get(ip) || [];

    // Remove requests outside the rate limit window
    const recentRequests = timestamps.filter(
      (timestamp) => now - timestamp < RATE_WINDOW
    );

    // Check rate limit
    if (recentRequests.length >= RATE_LIMIT) {
      return NextResponse.json(
        {
          message:
            "Too many song requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Record this request
    recentRequests.push(now);
    requests.set(ip, recentRequests);

    const { song, artist, message } = await req.json();

    if (!song || !artist) {
      return NextResponse.json(
        { message: "Song and artist are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Song Request" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `🎵 Song Request: ${song} - ${artist}`,
      text: `
Song: ${song}
Artist: ${artist}

Message:
${message || "No additional message."}
      `,
      html: `
        <h2>🎵 New Song Request</h2>
        <p><strong>Song:</strong> ${song}</p>
        <p><strong>Artist:</strong> ${artist}</p>
        ${
          message
            ? `<p><strong>Message:</strong><br>${message}</p>`
            : ""
        }
      `,
    });

    return NextResponse.json(
      { message: "Song request sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Song request email error:", error);

    return NextResponse.json(
      { message: "Failed to send song request. That is embarrassing. You can just email me if its that good: caluebbering@gmail.com"},
      { status: 500 }
    );
  }
}
