import Link from "next/link";

export default function Banner() {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
      <Link
        href="/"
        className="inline-block transition-transform"
      >
        <h1 className="font-mono text-3xl font-bold banner__name">
          Caleb Luebbering
        </h1>
      </Link>

      <div className="flex gap-2 items-center">
        <a
          href="https://www.linkedin.com/in/caleb-luebbering/"
          rel="noopener noreferrer"
          target="_blank"
          className="custom-button custom-button-linkedin"
        >
          <span className="custom-button-icon"
            style={{
              maskImage: "url('/LinkedIn.svg')",
              WebkitMaskImage: "url('/LinkedIn.svg')",
            }}
          />
          LinkedIn
        </a>

        <a
          href="https://github.com/calebluebbering"
          rel="noopener noreferrer"
          target="_blank"
          className="custom-button"
        >
          <span
            className="custom-button-icon"
            style={{
              maskImage: "url('/github-mark.svg')",
              WebkitMaskImage: "url('/github-mark.svg')",
            }}
          />
          GitHub
        </a>
      </div>
    </header>
  );
}