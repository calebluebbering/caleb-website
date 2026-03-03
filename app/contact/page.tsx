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
        setSuccess(true);
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,400&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <main className="contact-page">
        <h1 className="contact-title">let&apos;s <em>connect</em></h1>
        <p className="contact-sub">I&apos;d love to hear from you — so hopefully this form works so I can get back to you asap. Confidence is KEY!</p>
        <p className="contact-sub italic">(It works I tested it💪)</p>

        {!success ? (
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="What's on your mind?" rows={5} required />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <span className="dot-spin">
                    <span /><span /><span />
                  </span>
                ) : (
                  <>Send Message →</>
                )}
              </button>

              {error && <p className="contact-error">{error}</p>}
            </form>
          </div>
        ) : (
          <div className="success-state">
            <div className="success-icon">🌸</div>
            <h2>message <em>received</em></h2>
            <p>I&apos;ve got your message and will get back to you as soon as possible. Thanks for reaching out!</p>
          </div>
        )}
      </main>
    </>
  );
}
