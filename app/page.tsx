"use client";

import { useState } from "react";
import Image from "next/image";

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
              Hi! I&apos;m Caleb, a software engineer and also
              human being!
            </p>

            <br />

            <p>
              I am passionate about creating beautiful, clean, interactive software that people use 
              while trying not to obsess too much over making it perfect
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
            <Image
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

          <div className="flex gap-4 items-center">
            <a href="/music"
              className="custom-button custom-button-pink"
            >
            <span className="custom-button-icon"
              style={{
                maskImage: "url('/images/music-note.png')",
                WebkitMaskImage: "url('/images/music-note.png')",
              }}
            />
            Music
            </a>

            <a href="/scrapbook"
              className="custom-button custom-button-pink"
            >
            Scrapbook
            </a>

            <a href="/lore"
              className="custom-button custom-button-pink"
            >
            Lore
            </a>
          </div>

          
      </section>

      {/* Experience */}
      <section className="my-container" id="experience">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">

          {/* Software Developer */}
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-company-info">
                <Image
                  src="/images/farmers-logo.jpg"
                  alt="Farmer Companies"
                  className="experience-logo"
                />

                <div>
                  <h3 className="experience-title">Software Developer</h3>
                  <p className="experience-company">Farmer Companies</p>
                </div>
              </div>

              <span className="experience-date">
                May 2025 - Present
              </span>
            </div>

            <ul className="experience-details">
              <li>
                Develop and deploy <strong>30+ internal applications</strong> using C#, .NET, SQL Server, Entity Framework, and JavaScript.
              </li>
              <li>
                Built and maintain a <strong>company-wide intranet used by 500+ employees</strong>, providing centralized access to employee information, applications, resources, and internal tools.
              </li>
              <li>
                Improved application performance by reducing a <strong>6-hour API synchronization process to 15 minutes</strong> through asynchronous concurrent requests with controlled throttling.
              </li>
              <li>
                Own applications throughout the development lifecycle, from <strong>database design and backend development to UI implementation, deployment, and maintenance</strong>.
              </li>
              <li>
                Integrate REST APIs and modernize legacy applications with reusable
                UI patterns.
              </li>
            </ul>
          </div>

          {/* Programming Intern */}
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-company-info">
                <Image
                  src="/images/farmers-logo.jpg"
                  alt="Farmer Companies"
                  className="experience-logo"
                />

                <div>
                  <h3 className="experience-title">Programming Intern</h3>
                  <p className="experience-company">Farmer Companies</p>
                </div>
              </div>

              <span className="experience-date">
                May 2024 - Aug 2024
              </span>
            </div>

            <ul className="experience-details">
              <li>
                Built and deployed <strong>two .NET applications</strong> to automate
                business processes.
              </li>
              <li>
                Integrated external APIs, including Salesforce, to synchronize
                business data.
              </li>
              <li>
                Developed a <strong>generative AI proof-of-concept using Gemini and LangChain</strong> to retrieve database information and provide context-aware responses.
              </li>
            </ul>
          </div>

          {/* IT Intern */}
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-company-info">
                <Image
                  src="/images/diamond-pet-food-logo.png"
                  alt="Diamond Pet Foods"
                  className="experience-logo"
                />

                <div>
                  <h3 className="experience-title">IT Intern</h3>
                  <p className="experience-company">Diamond Pet Foods</p>
                </div>
              </div>

              <span className="experience-date">
                Jun 2023 - Aug 2023
              </span>
            </div>

            <ul className="experience-details">
              <li>
                Supported enterprise systems, networking, and help desk operations
                in a manufacturing environment.
              </li>
              <li>
                Earned <strong>CompTIA A+</strong> certification while developing
                hands-on troubleshooting experience.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects */}
      {/*
      <section className="my-container" id="projects">
        <h2 className="section-title">Projects</h2>

          I will add my projects.
      </section>
      */}

    </main>
  );
}