
"use client";

import { useEffect, useRef, useState } from "react";

export default function HippoPage() {
  const gameRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === gameRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await gameRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <main className="w-full flex justify-center mt-5">
      <div
        ref={gameRef}
        className="relative w-full max-w-[1920px] aspect-video bg-black
        [&:fullscreen]:w-screen [&:fullscreen]:h-screen
        [&:fullscreen]:max-w-none [&:fullscreen]:aspect-auto"
      >
        <iframe
          src="/games/hippo/index.html"
          title="Hippo Game"
          className="w-full h-full border-0"
          allow="autoplay; fullscreen"
        />

        <button
          onClick={toggleFullscreen}
          className="absolute bottom-3 right-3 z-10 bg-black/60 text-white px-3 py-2 text-sm hover:bg-black/80 transition"
        >
          {isFullscreen ? "✕ Exit Fullscreen" : "⛶ Fullscreen"}
        </button>
      </div>
    </main>
  );
}
