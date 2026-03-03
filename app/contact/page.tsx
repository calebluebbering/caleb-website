import './contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Message
          <textarea placeholder="Your message..." required rows={5}></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}