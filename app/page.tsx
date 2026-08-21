"use client";

import { useState } from "react";

export default function Page() {
  const [active, setActive] = useState(false);

  
  return (
    <main className="flex min-h-screen flex-col max-w-5xl mx-auto px-4 py-4 sm:py-8 leading-5 font-sans">

      {/* About */}
      <section className="my-container">
        <h2 className="section-title">Hello!!!</h2>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <p>
              Hi! I'm Caleb, a software engineer and also
              human being!
            </p>

            <br />

            <p>
              I am passionate about creating beautiful software that people actually use 
              while trying not to obsess over making it perfect
              (unless it needs to be, then hooray!).
            </p>

            <br />

            <p>
              OutsIDE the IDE <span>(see what I did there)</span>, you
              will catch me playing guitar, playing video
              games, working out, or adventuring outsIDE <span>(haha get it?)</span>.
              Okay sorry—I enjoy hiking and nature.
            </p>
          </div>

          <div
            className="w-full sm:w-64 shrink-0 cursor-pointer"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={() => setActive((prev) => !prev)}
          >
            <img
              src={active ? "/images/bear-hug.jpg" : "/images/graduation.jpg"}
              alt="Caleb Luebbering"
              className="w-full object-cover"
            />

            <p className="text-dark text-center">
              {active ? "Bear hug" : "I'm a bear🐻"}
            </p>
          </div>
        </div>
      </section>

      {/* Random */}
      <section className="my-container" id="outside">
        <h2 className="section-title">Side Notes</h2>

        <p>
          Music, Lore, Scrapbook.

          Lore - do I still make youtube videos - no i dont
          Whats your youtube channel? Im not telling you
        </p>
      </section>

      {/* Experience */}
      <section className="my-container" id="experience">
        <h2 className="section-title">Experience</h2>

        <p>
          Experience section
        </p>
      </section>

      {/* Projects */}
      <section className="my-container" id="projects">
        <h2 className="section-title">Projects</h2>

        <p>
          I will add my projects.
        </p>
      </section>

    </main>
  );
}