export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-customDarkBlue to-grey-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="font-sans text-center space-y-4">
          {/* Name */}
          <h1 className="text-5xl font-bold tracking-tight">
            Caleb Luebbering
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl text-slate-400">
            Software Engineer
          </h2>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-2">
            <a href="https://github.com/calebluebbering"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-blue-400 transition-colors duration-200">
              <img src="/github-mark.svg" alt="GitHub Icon" className="w-8 h-8"/>
            </a>
            <a href="https://www.linkedin.com/in/caleb-luebbering/"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-blue-400 transition-colors duration-200">
              <img src="/LinkedIn.svg" alt="GitHub Icon" className="w-8 h-8"/>
            </a>
          </div>
        </header>

        {/* Body */}
        <main className="flex flex-col transition-all font-sans pt-16 pl-4 space-y-20">

          {/* About */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold uppercase tracking-wider">About</h2>
            <div className="pt-6 text-slate-400 space-y-4">
              <p>
                Hi! I am a software engineer with a passion for learning and making things
                better.
              </p>
              <p>
                Currently, I am a student at Missouri State University, and plan on 
                graduating in May 2025 with a Bachelor&aposs in Computer Science, a mathematics
                minor, and a certificate in web development. My desire for knowledge and ability
                to be self-taught has led me to my success in academics, as well as in my personal pursuits.
              </p>
              <p>
                In my free time, I enjoy playing video games, working out, watching tv, and playing Catan
                (I always win).
              </p>
            </div>
          </section>

          {/* Experiences */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold uppercase tracking-wider">Experience</h2>

            {/* Job 1 */}
            <div className="pt-6">
              <p className="text-slate-400 text-sm">MAY 2024 — AUGUST 2024</p>
              <h3 className="text-lg text-slate-300 font-semibold pt-2">Farmer Companies · Programming Intern</h3>
              <p className="text-slate-400 pt-4">
                Develop applications for automated data manipulation, including data syncing functions between 
                database and API data. Design SQL databases to support API-driven applications. 
                Participate in team meetings, communicate with end users, and contribute to team environment and morale.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">.NET</span>
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">C#</span>
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">API</span>
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Microsoft SQL</span>
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Salesforce</span>
              </div>
            </div>

            {/* Job 2 */}
            <div className="pt-10">
              <p className="text-slate-400 text-sm">JUNE 2023 — AUGUST 2023</p>
              <h3 className="text-lg text-slate-300 font-semibold pt-2">Diamond Pet Foods · IT Intern</h3>
              <p className="text-slate-400 pt-4">
              Assisted the systems, networking, and help desk teams in various day-to-day 
              operations for manufacturing efficiency, safety, and security. Learned core IT concepts 
              in the field while acquiring the CompTIA A+ Certification.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Customer Support</span>
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Computer Hardware</span>
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Desktop Imaging</span>
                <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">CompTIA A+</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="max-w-4xl mx-auto pt-2">
            <h2 className="text-lg font-bold uppercase tracking-wider">Projects</h2>
            <div className="grid gap-8 pt-6">
              

              {/* Project - UniVentures */}
              <div className="flex bg-grey-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <img
                  src="/UniVentures.png"
                  alt="Wordle Solver"
                  className="w-1/3 object-cover"
                />
                {/* Text */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold">UniVentures</h3>
                  <p className="text-slate-400 text-sm">2024</p>
                  <p className="text-slate-400 pt-2">
                    UniVentures is a team project created by myself, Colton Lee,
                    Marc Ball, and Aniya Watson. It is a full-stack web app for college
                    students to see what there is to do at their new home, see what other students
                    are up to, and read and write reviews on their favorite adventures!
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">React</span>
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Flask</span>
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Tailwind CSS</span>
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">MySQL</span>
                  </div>
                </div>
              </div>


              {/* Project - Wordle Helper */}
              <div className="flex bg-grey-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <img
                  src="/wordlesolver.jpeg"
                  alt="Wordle Solver"
                  className="w-1/3 object-cover"
                />
                {/* Text */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold">Wordle Helper</h3>
                  <p className="text-slate-400 text-sm">2022</p>
                  <p className="text-slate-400 pt-2">
                    A Universal Windows Platform app to help solve New York Times&apos daily Wordle.
                    Inspired by the idea of beating my family.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">UWP</span>
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">C#</span>
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">XAML</span>
                  </div>
                </div>
              </div>



              {/* Project - Govee Control App */}
              <div className="flex bg-grey-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <img
                  src="/govee-control.png"
                  alt="Govee Control App"
                  className="w-1/3 object-cover"
                />
                {/* Text */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold">Govee Control App</h3>
                  <p className="text-slate-400 text-sm">2024</p>
                  <p className="text-slate-400 pt-2">
                    I got lazy pulling out my phone and waiting for the app to connect
                    to my lights. So why not have an app that can turn them on since I
                    am already on my computer?
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Python</span>
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">API</span>
                  </div>
                </div>
              </div>



              {/* Project - Sudoku Solver */}
              <div className="flex bg-grey-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <img
                  src="/sudokusolver.png"
                  alt="Sudoku Solver"
                  className="w-1/3 object-cover"
                />
                {/* Text */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold">Sudoku Solver</h3>
                  <p className="text-slate-400 text-sm">2023</p>
                  <p className="text-slate-400 pt-2">
                    A Qt GUI app to solve any Sudoku game. 
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">Qt</span>
                    <span className="bg-customDarkBlue text-teal-300 text-sm px-3 py-1 rounded-lg">C++</span>
                  </div>
                </div>
              </div>



            </div>
          </section>

          <footer className="text-center py-8">
            <p className="text-slate-400 pt-2">
              I built this website using{' '}
              <a 
                href="https://nextjs.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal-300 hover:underline">
                Next.js
              </a>{' '}
              and{' '}
              <a 
                href="https://tailwindcss.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal-300 hover:underline">
                Tailwind CSS
              </a>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
