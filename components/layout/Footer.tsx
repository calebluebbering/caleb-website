import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,400&display=swap');

        
      `}</style>

      <footer className="footer">
        <div className="footer__inner">

          {/* Logo */}
          <Link href="/" className="footer__brand">
            <Image
              src="/logo.png"
              alt="Site logo"
              width={48}
              height={48}
              className="footer__logo"
            />
            <span className="footer__wordmark">Caleb Luebbering</span>
          </Link>

          {/* Nav */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <Link href="/" className="footer__link">Home</Link>
            <span className="footer__sep" aria-hidden="true" />
            <Link href="/career" className="footer__link">Career</Link>
            <span className="footer__sep" aria-hidden="true" />
            <Link href="/passions" className="footer__link">Passions</Link>
            <span className="footer__sep" aria-hidden="true" />
            <Link href="/contact" className="footer__link">Contact</Link>
          </nav>

          <div className="footer__divider" />

          {/* Copyright */}
          <div className="footer__bottom">
            <p className="footer__copy">© {year} — made with Next.js</p>
          </div>

        </div>
      </footer>
    </>
  );
}
