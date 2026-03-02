import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies | Caleb Luebbering",
  description: "The music, movies, shows, and books I love.",
};

// ─────────────────────────────────────────────────────────────
// ✏️  FILL IN YOUR DATA BELOW
// ─────────────────────────────────────────────────────────────

const HERO = {
  eyebrow: "beyond the screen",
  title: "things I love",                        // ✏️
  subtitle: "I love coding, but there are some other things I love divvying up my free time to. My (mostly) daily habits include going to the gym, playing the guitar, and working on a side project. Also obviously hanging out with friends and family, as I am very much a people person.",
  subtitle2: "When I'm not creating, I'm consuming! I love finding new things and sharing what I am passionate about, specifically music and film! (I'm always taking suggestions)",
};

// ── MUSIC ────────────────────────────────────────────────────

const MUSIC = {
  intro: "I try to listen to everything, but there are some artists and albums I cannot escape.",  // ✏️

  favoriteArtists: [
    { name: "Phoebe Bridgers",   genre: "Indie Folk",    note: "Quietly devastating every time." },  // ✏️
    { name: "Chet Baker",        genre: "Jazz",          note: "Sunday morning, every morning." },   // ✏️
    { name: "Mitski",            genre: "Alt / Indie",   note: "Unmatched emotional precision." },   // ✏️
    { name: "Mac DeMarco",       genre: "Lo-fi Rock",    note: "Perpetually on my summer playlist." }, // ✏️
    { name: "John Coltrane",     genre: "Jazz",          note: "A Giant Steps above the rest." },    // ✏️
    { name: "Sufjan Stevens",    genre: "Folk / Classical", note: "Makes me feel things I can't name." }, // ✏️
  ],

  favoriteAlbums: [
    { title: "punisher",              artist: "Phoebe Bridgers",  year: "2020", emoji: "🌙" }, // ✏️
    { title: "Kind of Blue",          artist: "Miles Davis",      year: "1959", emoji: "🎷" }, // ✏️
    { title: "Be the Cowboy",         artist: "Mitski",           year: "2018", emoji: "🌾" }, // ✏️
    { title: "Illinois",              artist: "Sufjan Stevens",   year: "2005", emoji: "🌻" }, // ✏️
  ],

  currentlyListening: "Javelin by Sufjan Stevens — can't stop, won't stop.",  // ✏️ or set to ""
};

// ── MOVIES & TV ──────────────────────────────────────────────

const SCREEN = {
  intro: "I tend toward slow films, beautiful cinematography, and shows that trust the viewer to keep up.",  // ✏️

  favoriteFilms: [
    { title: "Eternal Sunshine of the Spotless Mind", year: "2004", note: "Perfect in every way.", emoji: "🧠" }, // ✏️
    { title: "Portrait of a Lady on Fire",            year: "2019", note: "The most beautiful film I've ever seen.", emoji: "🔥" }, // ✏️
    { title: "Her",                                   year: "2013", note: "Wrecked me the first time.", emoji: "💌" }, // ✏️
    { title: "Spirited Away",                         year: "2001", note: "Still magical at any age.", emoji: "🐉" }, // ✏️
    { title: "Moonlight",                             year: "2016", note: "Filmmaking as poetry.", emoji: "🌊" }, // ✏️
  ],

  favoriteShows: [
    { title: "Succession",      seasons: "4 seasons", note: "The greatest drama ever made, no notes.", emoji: "👔" }, // ✏️
    { title: "Fleabag",         seasons: "2 seasons", note: "Broke my heart twice.", emoji: "🩸" }, // ✏️
    { title: "The Bear",        seasons: "3 seasons", note: "Stressful. Brilliant. Addictive.", emoji: "🐻" }, // ✏️
    { title: "Severance",       seasons: "2 seasons", note: "Nothing like it on TV right now.", emoji: "🏢" }, // ✏️
    { title: "Nathan For You",  seasons: "4 seasons", note: "Deeply unsettling comedy genius.", emoji: "📋" }, // ✏️
  ],

  currentlyWatching: "Finishing up The Rehearsal — Nathan Fielder is in a league of his own.",  // ✏️ or set to ""
};

// ── BOOKS ────────────────────────────────────────────────────

const BOOKS = {
  intro: "I read slowly and underline everything. Mostly literary fiction, some non-fiction, the occasional sci-fi spiral.",  // ✏️

  favorites: [
    {
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      genre: "Sci-Fi",
      note: "Changed how I think about identity and society.",
      emoji: "❄️",
    }, // ✏️
    {
      title: "Piranesi",
      author: "Susanna Clarke",
      genre: "Fantasy",
      note: "Strange, quiet, and utterly unlike anything else.",
      emoji: "🐟",
    }, // ✏️
    {
      title: "Normal People",
      author: "Sally Rooney",
      genre: "Literary Fiction",
      note: "Uncomfortably real. Read it in one sitting.",
      emoji: "📎",
    }, // ✏️
    {
      title: "Stoner",
      author: "John Williams",
      genre: "Literary Fiction",
      note: "The saddest, most beautiful book I've ever read.",
      emoji: "🍂",
    }, // ✏️
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      note: "Made me rethink everything I thought I knew.",
      emoji: "🌍",
    }, // ✏️
    {
      title: "The Dispossessed",
      author: "Ursula K. Le Guin",
      genre: "Sci-Fi",
      note: "Le Guin doing what only Le Guin can do.",
      emoji: "🪐",
    }, // ✏️
  ],

  currentlyReading: {
    title: "Piranesi",     // ✏️
    author: "Susanna Clarke", // ✏️
    progress: 68,             // ✏️ percentage 0–100
  },
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export default function HobbiesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,400&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500&display=swap');

        :root {
          --ink:       #1c1712;
          --navy:      #0f2557;
          --accent:    #1a4fd6;
          --muted:     #6a5f54;
          --soft:      #9a8c7e;
          --cream:     #faf8f3;
          --card-bg:   #ffffff;
          --line:      rgba(15,37,87,0.1);
          --tag-bg:    rgba(15,37,87,0.07);
          --now-bg:    rgba(15,37,87,0.05);
        }

        .hobbies-page {
          background: var(--cream);
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          color: var(--ink);
        }

        /* ── Hero ── */
        .hobbies-hero {
          max-width: 860px;
          margin: 0 auto;
          padding: 5rem 2rem 3.5rem;
        }

        .hobbies-hero__eyebrow {
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .hobbies-hero__eyebrow::before {
          content: '';
          width: 22px; height: 1px;
          background: var(--accent);
        }

        .hobbies-hero__title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.2rem, 5.5vw, 3.8rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0 0 1rem;
        }
        .hobbies-hero__title em {
          font-style: italic;
          color: var(--navy);
        }

        .hobbies-hero__sub {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--muted);
          max-width: 480px;
          margin: 0;
        }

        /* ── Page body ── */
        .hobbies-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 1rem 2rem 6rem;
          display: flex;
          flex-direction: column;
          gap: 5.5rem;
        }

        /* ── Section shell ── */
        .h-section {}

        .h-section__header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--line);
        }

        .h-section__icon {
          font-size: 1.4rem;
          line-height: 1;
        }

        .h-section__title {
          font-family: 'Fraunces', serif;
          font-size: 1.55rem;
          font-weight: 300;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0;
        }

        .h-section__intro {
          font-size: 0.92rem;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 2rem;
          max-width: 600px;
        }

        /* ── Currently ── */
        .currently-bar {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          background: var(--now-bg);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 0.75rem 1.1rem;
          margin-bottom: 2rem;
        }

        .currently-bar__dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }

        .currently-bar__label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          flex-shrink: 0;
        }

        .currently-bar__text {
          font-family: 'Lora', serif;
          font-size: 0.88rem;
          font-style: italic;
          color: var(--muted);
        }

        /* ── Sub-label ── */
        .sub-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--soft);
          margin: 0 0 1rem;
        }

        /* ── Music: artist chips ── */
        .artist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.8rem;
          margin-bottom: 2.4rem;
        }

        .artist-chip {
          background: var(--card-bg);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .artist-chip:hover {
          box-shadow: 0 4px 16px rgba(15,37,87,0.1);
          transform: translateY(-2px);
        }

        .artist-chip__name {
          font-family: 'Fraunces', serif;
          font-size: 0.98rem;
          font-weight: 500;
          color: var(--ink);
          margin: 0 0 0.2rem;
        }

        .artist-chip__genre {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 0.35rem;
        }

        .artist-chip__note {
          font-size: 0.8rem;
          color: var(--soft);
          font-style: italic;
          margin: 0;
        }

        /* ── Albums row ── */
        .album-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .album-pill {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: var(--card-bg);
          border: 1px solid var(--line);
          border-radius: 100px;
          padding: 0.45rem 1rem 0.45rem 0.7rem;
          transition: box-shadow 0.15s;
        }
        .album-pill:hover {
          box-shadow: 0 3px 12px rgba(15,37,87,0.1);
        }

        .album-pill__emoji { font-size: 1rem; }

        .album-pill__info {}
        .album-pill__title {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--ink);
          display: block;
          line-height: 1.2;
        }
        .album-pill__artist {
          font-size: 0.72rem;
          color: var(--soft);
          display: block;
        }

        /* ── Film / show cards ── */
        .media-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 1rem;
        }

        .media-card {
          background: var(--card-bg);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 1.1rem 1.1rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .media-card:hover {
          box-shadow: 0 6px 22px rgba(15,37,87,0.1);
          transform: translateY(-2px);
        }

        .media-card__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.4rem;
        }

        .media-card__emoji { font-size: 1.3rem; }

        .media-card__year,
        .media-card__seasons {
          font-size: 0.7rem;
          color: var(--soft);
          padding-top: 0.15rem;
          white-space: nowrap;
        }

        .media-card__title {
          font-family: 'Fraunces', serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--ink);
          margin: 0;
          line-height: 1.25;
        }

        .media-card__note {
          font-size: 0.8rem;
          font-style: italic;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }

        /* ── Books ── */
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.1rem;
        }

        .book-card {
          background: var(--card-bg);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 1.2rem 1.1rem 1rem;
          display: flex;
          gap: 0.9rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .book-card:hover {
          box-shadow: 0 6px 22px rgba(15,37,87,0.1);
          transform: translateY(-2px);
        }

        .book-card__spine {
          width: 6px;
          flex-shrink: 0;
          border-radius: 3px;
          background: linear-gradient(180deg, var(--accent) 0%, var(--navy) 100%);
          opacity: 0.35;
        }

        .book-card__body { flex: 1; }

        .book-card__genre {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 0.3rem;
        }

        .book-card__title {
          font-family: 'Lora', serif;
          font-size: 0.98rem;
          font-weight: 500;
          color: var(--ink);
          margin: 0 0 0.15rem;
          line-height: 1.3;
        }

        .book-card__author {
          font-size: 0.78rem;
          color: var(--soft);
          margin: 0 0 0.6rem;
        }

        .book-card__note {
          font-size: 0.8rem;
          font-style: italic;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }

        .book-card__emoji {
          font-size: 1.4rem;
          position: absolute;
          top: 1rem; right: 1rem;
        }

        /* ── Currently reading progress ── */
        .reading-now {
          background: var(--now-bg);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 1.1rem 1.2rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .reading-now__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .reading-now__info {}
        .reading-now__title {
          font-family: 'Lora', serif;
          font-size: 0.96rem;
          font-weight: 500;
          color: var(--ink);
          margin: 0;
        }
        .reading-now__author {
          font-size: 0.78rem;
          color: var(--soft);
        }

        .reading-now__pct {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--accent);
          white-space: nowrap;
        }

        .progress-track {
          width: 100%;
          height: 4px;
          background: var(--line);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--navy), var(--accent));
        }

        /* ── Divider between sub-sections ── */
        .inner-divider {
          border: none;
          border-top: 1px solid var(--line);
          margin: 2rem 0;
        }

        @media (max-width: 580px) {
          .hobbies-hero { padding: 3.5rem 1.2rem 2.5rem; }
          .hobbies-body { padding: 0 1.2rem 4rem; gap: 4rem; }
          .media-grid   { grid-template-columns: 1fr 1fr; }
          .books-grid   { grid-template-columns: 1fr; }
        }
      `}</style>

      <main className="hobbies-page">

        {/* ── Hero ── */}
        <section className="hobbies-hero">
          {/*<p className="hobbies-hero__eyebrow">{HERO.eyebrow}</p>*/}
          <h1 className="hobbies-hero__title">
            {HERO.title.split(" ").slice(0, -1).join(" ")}{" "}
            <em>{HERO.title.split(" ").slice(-1)}</em>
          </h1>
          <p className="hobbies-hero__sub">{HERO.subtitle}</p>
          <br></br>
          <p className="hobbies-hero__sub">{HERO.subtitle2}</p>
        </section>

        <div className="hobbies-body">

          {/* ════════════════════════════════════════
              MUSIC
          ════════════════════════════════════════ */}
          <section id="music" className="h-section">
            <div className="h-section__header">
              <span className="h-section__icon">🎵</span>
              <h2 className="h-section__title">Music</h2>
            </div>

            {/*<p className="h-section__intro">{MUSIC.intro}</p>*/}

            {MUSIC.currentlyListening && (
              <div className="currently-bar">
                <span className="currently-bar__dot" />
                <span className="currently-bar__label">Now playing</span>
                <span className="currently-bar__text">{MUSIC.currentlyListening}</span>
              </div>
            )}

            <p className="sub-label">Favorite Artists</p>
            <div className="artist-grid">
              {MUSIC.favoriteArtists.map((a, i) => (
                <div className="artist-chip" key={i}>
                  <p className="artist-chip__genre">{a.genre}</p>
                  <p className="artist-chip__name">{a.name}</p>
                  <p className="artist-chip__note">{a.note}</p>
                </div>
              ))}
            </div>

            <hr className="inner-divider" />

            <p className="sub-label">Albums I Always Return To</p>
            <div className="album-row">
              {MUSIC.favoriteAlbums.map((a, i) => (
                <div className="album-pill" key={i}>
                  <span className="album-pill__emoji">{a.emoji}</span>
                  <div className="album-pill__info">
                    <span className="album-pill__title">{a.title}</span>
                    <span className="album-pill__artist">{a.artist} · {a.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════
              MOVIES & TV
          ════════════════════════════════════════ */}
          <section id="film" className="h-section">
            <div className="h-section__header">
              <span className="h-section__icon">🎬</span>
              <h2 className="h-section__title">Movies &amp; TV Shows</h2>
            </div>

            <p className="h-section__intro">{SCREEN.intro}</p>

            {SCREEN.currentlyWatching && (
              <div className="currently-bar">
                <span className="currently-bar__dot" />
                <span className="currently-bar__label">Currently watching</span>
                <span className="currently-bar__text">{SCREEN.currentlyWatching}</span>
              </div>
            )}

            <p className="sub-label">Favorite Films</p>
            <div className="media-grid" style={{ marginBottom: "2rem" }}>
              {SCREEN.favoriteFilms.map((f, i) => (
                <div className="media-card" key={i}>
                  <div className="media-card__top">
                    <span className="media-card__emoji">{f.emoji}</span>
                    <span className="media-card__year">{f.year}</span>
                  </div>
                  <h3 className="media-card__title">{f.title}</h3>
                  <p className="media-card__note">{f.note}</p>
                </div>
              ))}
            </div>

            <hr className="inner-divider" />

            <p className="sub-label">Favorite Shows</p>
            <div className="media-grid">
              {SCREEN.favoriteShows.map((s, i) => (
                <div className="media-card" key={i}>
                  <div className="media-card__top">
                    <span className="media-card__emoji">{s.emoji}</span>
                    <span className="media-card__seasons">{s.seasons}</span>
                  </div>
                  <h3 className="media-card__title">{s.title}</h3>
                  <p className="media-card__note">{s.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════
              BOOKS
          ════════════════════════════════════════ */}
          <section id="books" className="h-section">
            <div className="h-section__header">
              <span className="h-section__icon">📚</span>
              <h2 className="h-section__title">Books</h2>
            </div>

            <p className="h-section__intro">{BOOKS.intro}</p>

            {/* Currently reading */}
            <div className="reading-now">
              <div className="reading-now__top">
                <div className="reading-now__info">
                  <p className="reading-now__title">📖 {BOOKS.currentlyReading.title}</p>
                  <p className="reading-now__author">{BOOKS.currentlyReading.author}</p>
                </div>
                <span className="reading-now__pct">{BOOKS.currentlyReading.progress}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${BOOKS.currentlyReading.progress}%` }}
                />
              </div>
            </div>

            <p className="sub-label">All-Time Favorites</p>
            <div className="books-grid">
              {BOOKS.favorites.map((b, i) => (
                <div className="book-card" key={i}>
                  <div className="book-card__spine" />
                  <div className="book-card__body">
                    <p className="book-card__genre">{b.genre}</p>
                    <h3 className="book-card__title">{b.emoji} {b.title}</h3>
                    <p className="book-card__author">{b.author}</p>
                    <p className="book-card__note">{b.note}</p>
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
