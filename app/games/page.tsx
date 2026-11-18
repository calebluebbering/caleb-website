
import Link from "next/link";

export default function GamesPage() {
  const games = [
    {
      title: "Hippo",
      description: "A little game about avoiding obstacles.",
      href: "/games/hippo",
    },
  ];

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 py-8 sm:py-12 font-sans">
      <h2 className="section-title">Games</h2>

      <div className="mt-6 flex flex-col gap-3">
        {games.map((game) => (
          <Link
            key={game.title}
            href={game.href}
            className="group flex items-center justify-between border-b border-current/15 py-4 hover:text-pink-400 transition-colors"
          >
            <div>
              <h3 className="text-lg font-medium">{game.title}</h3>
              <p className="text-sm opacity-60">{game.description}</p>
            </div>

            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
