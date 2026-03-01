import type { Metadata } from "next";
import "./career.css";

export const metadata: Metadata = {
  title: "Career | My Site",
  description: "My work, projects, and experience.",
};

// ───────────────────
//     ✏️ DATA 
// ───────────────────

const BIO = {
  greeting: "what I do",
  name: "Caleb Luebbering",                          // ✏️ your name
  title: "Software Engineer",    // ✏️ your title/role
  bio: "I build thoughtful digital experiences that live at the intersection of design and engineering. I care deeply about making something meaningful.",  // ✏️ short bio
  resumeUrl: "/resume.pdf",                   // ✏️ path to your resume PDF (or remove the button)
};

const EXPERIENCE: {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags?: string[];
}[] = [
  {
    company: "Farmer Companies", 
    role: "Software Engineer",   
    period: "May 2025 — Present",           
    location: "Jefferson City, MO",  
    bullets: [
      "Developed internal .NET MVC webapps - including the company intranet.",
      "Created .NET console applications - reducing script runtime by over 90%",
      "Designed databases for scalability and flexibility.",
    ],
    tags: [".NET", "C#", "Bootstrap"], 
  },
  {
    company: "Farmer Companies",        
    role: "Programming Intern",            
    period: "May 2024 - Aug 2024",               
    location: "Jefferson City, MO",                  
    bullets: [
      "Developed applications for data integration from and to external APIs.",        
      "Designed necessary databases.",  
    ],
    tags: ["C#", "SQL", "APIs"],  
  },
  {
    company: "Diamond Pet Foods",        
    role: "IT Intern",            
    period: "June 2023 - Aug 2023",               
    location: "Jefferson City, MO",                  
    bullets: [
      "Supported multiple IT teams in daily operations and technical initiatives.",
      "Earned the CompTIA A+ certification."
    ],
    tags: ["CompTIA A+", "Networking", "Cybersecurity"],  
  },
];

const PROJECTS: {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  year: string;
}[] = [
  {
    name: "Cole County Industries Website",                                   
    description: "Created the website for a local ready-mix conrete company. (which happens to be my dads)",
    tags: ["Next.js"],       
    url: "https://www.colecountyconcrete.com/",
    year: "2024", 
  },
  {
    name: "UniVentures",                                   
    description: "A dynamic campus-based platform designed for any college. Each user's experience is tailored to their institution, creating a localized space where students can share events, connect with peers, and explore what's happening within their own campus community. (Live is not fully functioning)",
    tags: ["React", "Tailwind", "Flask", "MySQL"],       
    github: "https://github.com/calebluebbering/UniVentures",
    url: "https://univentures.vercel.app/",
    year: "2024", 
  },
  {
    name: "Govee Control App",
    description: "A simple app to automate my Govee lights. Motivated by turning them off from my phone so I don't have to stand up.", 
    tags: ["Python", "API"], 
    year: "2024", 
  },
  {
    name: "Sudoku Solver",
    description: "An ugly gui for solving Sudoku given some input. I do not remember why I made this.", 
    tags: ["Qt", "C++"], 
    github: "https://github.com/calebluebbering/sudoku-solver", 
    year: "2023", 
  },
  {
    name: "Wordle Helper",
    description: "My first big coding project, done in high school. Inspired by my entire family playing Wordle every day. Might defeat the purpose but at least I win.",
    tags: ["UWP", "C#", "XAML"],    
    url: "https://github.com/calebluebbering/wordle-helper",     
    year: "2022",       
  },
];

const EDUCATION: {
  school: string;
  degree: string;
  field: string;
  period: string;
  note?: string;
}[] = [
  {
    school: "Missouri State University", 
    degree: "B.S.", 
    field: "Computer Science", 
    period: "2022-2025", 
    note: "Minor in Mathematics · 3.5 GPA · Dean's List", 
  },
];

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["C#", "Python", "C++", "Java", "SQL", "JavaScript", "HTML", "CSS", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],  // ✏️
  },
  {
    category: "Backend",
    items: ["IIS", "Databases", "Authentication", "Node.js", "Flask", "REST"]
  },
  {
    category: "Tooling",
    items: ["Azure DevOps", "GitHub", "Postman", "Vercel"], 
  },
];

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export default function CareerPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,400&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <main className="career-page">

        {/* ── Hero ── */}
        <section className="career-hero">
          <p className="career-hero__eyebrow">{BIO.greeting}</p>
          <h1 className="career-hero__title">
            {BIO.name},<br />
            <em>{BIO.title}</em>
          </h1>
          <p className="career-hero__bio">{BIO.bio}</p>
          {/*
          <div className="career-hero__actions">
            <a href={BIO.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-resume">
              Download Résumé ↓
            </a>
          </div>
          */}
        </section>

        <div className="career-body">

          {/* ── Work Experience ── */}
          <section className="section">
            <div className="section__header">
              <h2 className="section__title">Work Experience</h2>
            </div>
            <div className="exp-list">
              {EXPERIENCE.map((job, i) => (
                <div className="exp-card" key={i}>
                  <div className="exp-card__meta">
                    <span className="exp-card__period">{job.period}</span>
                    <span className="exp-card__location">{job.location}</span>
                  </div>
                  <div className="exp-card__body">
                    <h3 className="exp-card__role">{job.role}</h3>
                    <p className="exp-card__company">{job.company}</p>
                    <ul className="exp-card__bullets">
                      {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    {job.tags && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {job.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Projects ── */}
          <section className="section">
            <div className="section__header">
              <h2 className="section__title">Projects</h2>
              <span className="section__count">{PROJECTS.length} projects</span>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-card__top">
                    <h3 className="project-card__name">{p.name}</h3>
                    <span className="project-card__year">{p.year}</span>
                  </div>
                  <p className="project-card__desc">{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  {(p.url || p.github) && (
                    <div className="project-card__links">
                      {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link">Live ↗</a>}
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub ↗</a>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Education ── */}
          <section className="section">
            <div className="section__header">
              <h2 className="section__title">Education</h2>
            </div>
            <div className="edu-list">
              {EDUCATION.map((e, i) => (
                <div className="edu-card" key={i}>
                  <div className="edu-card__period">{e.period}</div>
                  <div>
                    <h3 className="edu-card__school">{e.school}</h3>
                    <p className="edu-card__degree">{e.degree} {e.field}</p>
                    {e.note && <p className="edu-card__note">{e.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Skills ── */}
          <section className="section">
            <div className="section__header">
              <h2 className="section__title">Skills</h2>
            </div>
            <div className="skills-grid">
              {SKILLS.map((group, i) => (
                <div className="skill-group" key={i}>
                  <p className="skill-group__cat">{group.category}</p>
                  <div className="skill-group__items">
                    {group.items.map(item => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
