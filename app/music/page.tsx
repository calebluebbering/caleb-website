"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const albums = [
    {
      title: "OK Computer",
      artist: "Radiohead",
      image: "/images/music/ok-computer.png",
    },
    {
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      image: "/images/music/dark-side.png",
    },
    {
      title: "The Great Divide",
      artist: "Noah Kahan",
      image: "/images/music/great-divide.jpg",
    },
    {
      title: "Imaginal Disk",
      artist: "Magdalena Bay",
      image: "/images/music/imaginal-disk.png",
    },
    {
      title: "Static & Silence",
      artist: "The Sundays",
      image: "/images/music/static-silence.jpg",
    },
    {
      title: "Preacher's Daughter",
      artist: "Ethel Cain",
      image: "/images/music/preacher-daughter.png",
    },
    {
      title: "Charm",
      artist: "Clairo",
      image: "/images/music/charm.png",
    },
    {
      title: "Hamilton",
      artist: "Lin-Manuel Miranda",
      image: "/images/music/hamilton.jpeg",
    },
  ];

  const favoriteArtists = [
    "Creep - Radiohead",
    "Don't Look Back In Anger - Oasis",
    "Dogs - Pink Floyd",
    "She's Electric - Oasis",
    "Band On The Run - Paul McCartney",
    "No One Noticed- The Marías",
    "505 - Arctic Monkeys"
  ];

  const favoriteAlbums = [
    "Secret Door - Arctic Monkeys",
    "Cry for Me - Magdalena Bay",
    "Sun Bleached Flies - Ethel Cain",
    "Across the Universe - The Beatles",
    "Life Goes On - The Sundays",
    "Jane - Elf Power",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestStatus, setRequestStatus] = useState<
    "success" | "error" | null
  >(null);

  const [requestMessage, setRequestMessage] = useState("");

  const handleSongRequest = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setRequestStatus(null);
    setRequestMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/song-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          song: formData.get("song"),
          artist: formData.get("artist"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send request.");
      }

      form.reset();

      setRequestStatus("success");
      setRequestMessage("Song request sent! I will be listening... it better be good.");
    } catch (error) {
      console.error(error);

      setRequestStatus("error");
      setRequestMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <main className="flex min-h-screen flex-col max-w-5xl mx-auto px-4 py-4 sm:py-8 leading-5 font-sans">
      <section className="my-container">
        <h2 className="section-title">Music</h2>

        {/* Album Shelves */}
        <div className="music-shelves">
          {Array.from({
            length: Math.ceil(albums.length / 4),
          }).map((_, shelfIndex) => {
            const shelfAlbums = albums.slice(
              shelfIndex * 4,
              shelfIndex * 4 + 4
            );

            return (
              <div className="music-shelf" key={shelfIndex}>
                <div className="album-row">
                  {shelfAlbums.map((album) => (
                    <div className="album" key={album.title}>
                      <Image
                        src={album.image}
                        alt={`${album.title} by ${album.artist}`}
                      />

                      <div className="album-label">
                        <strong>{album.title}</strong>
                        <span>{album.artist}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="shelf-board" />
              </div>
            );
          })}
        </div>

        {/* Now Playing */}
        <div className="now-playing">
          <div className="now-playing-record">
            <div className="vinyl">
              <div className="vinyl-label">
                <Image src="/images/music/in-rainbows.png" alt="" />
              </div>

              <div className="vinyl-center" />
            </div>

            <div className="tonearm">
              <div className="tonearm-base" />
              <div className="tonearm-arm" />
              <div className="tonearm-head" />
            </div>
          </div>

          <div className="now-playing-info">
            <span className="now-playing-eyebrow">Now Playing</span>

            <h3>In Rainbows</h3>

            <p>Radiohead</p>

            <div className="now-playing-progress">
              <span />
            </div>

            {/*
            <div className="now-playing-times">
              <span>2:14</span>
              <span>4:15</span>
            </div>
            */}
          </div>
        </div>

        {/* Favorites */}
        <div className="music-favorites">
          <div className="music-favorites-column">
            <h3>Favorite Songs</h3>

            <ul>
              {favoriteArtists.map((artist) => (
                <li key={artist}>{artist}</li>
              ))}
            </ul>
          </div>

          <div className="music-favorites-column">
            <h3>PLEASE LISTEN🙏</h3>

            <ul>
              {favoriteAlbums.map((album) => (
                <li key={album}>{album}</li>
              ))}
            </ul>
          </div>
        </div>


        {/* Song Request */}
        <div className="song-request">
          <div className="song-request-header">
            <div>
              <span className="song-request-eyebrow">
                Have a suggestion?
              </span>

              <h3>Please I need more</h3>
            </div>

            <span className="song-request-icon">♫</span>
          </div>

          <form
            className="song-request-form"
            onSubmit={handleSongRequest}
          >
            <div className="song-request-fields">
              <input
                type="text"
                name="song"
                placeholder="Song title"
                required
                disabled={isSubmitting}
              />

              <input
                type="text"
                name="artist"
                placeholder="Artist"
                required
                disabled={isSubmitting}
              />
            </div>

            <textarea
              name="message"
              placeholder="Anything else? (optional)"
              rows={2}
              disabled={isSubmitting}
            />

            <button type="submit" className="custom-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="song-request-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Request
                  <span>→</span>
                </>
              )}
            </button>

            {requestMessage && (
              <div
                className={`song-request-status ${
                  requestStatus === "success"
                    ? "song-request-success"
                    : "song-request-error"
                }`}
              >
                <span>{requestStatus === "success" ? "✓" : "!"}</span>
                <span>{requestMessage}</span>
              </div>
            )}
          </form>
        </div>




      </section>
    </main>
  );
}