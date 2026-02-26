export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__title">
          hi! welcome to my site!
        </h2>
        <p className="hero__subtitle">
          Here you can view my work, my life, and my experiences all while having a good time
          <span className="">🍻</span>!
        </p>

        <div className="hero__buttons">
          <a href="/career" className="btn btn--primary">
            View My Work
          </a>
          <a href="/scrapbook" className="btn btn--ghost">
            Explore My World
          </a>
        </div>
      </div>
    </section>
  );
}