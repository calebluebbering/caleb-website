"use client";

import { useState, FormEvent } from "react";
import "./contact.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess(true); // ✅ hides form
        form.reset();
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Error sending message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      {!success ? (
        <>
          <div className="contact-header">
            <h2>Let&apos;s Connect</h2>
            <p>I&apos;d love to hear from you. Send me a message below.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="What's on your mind?"
                rows={5}
                required
              ></textarea>
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {error && <p className="error">{error}</p>}
          </form>
        </>
      ) : (
        <div className="success-state">
          <h2>Message Received ✨</h2>
          <p>
            I&apos;ve received your message and will get back to you as soon as
            possible. Thank you!
          </p>
        </div>
      )}
    </div>
  );
}