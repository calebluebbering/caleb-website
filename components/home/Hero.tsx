"use client";
import { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,400&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
      
      <section className="hero">
        <div className="hero__content">
          {/*<p className="hero__eyebrow">Welcome to my site</p>*/}
          <h2 className="hero__title" ref={titleRef}>
            hi! welcome to<br />my <em>site.</em>
          </h2>
          <p className="hero__subtitle">
            Here you can explore my work, my life, and my experiences - all while having a good time&nbsp;🍻 !
          </p>
          <div className="hero__buttons">
            <a href="/career" className="btn btn--primary">
              View My Work <span className="btn-arrow">→</span>
            </a>
            <a href="/hobbies" className="btn btn--ghost">
              Explore My World <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
