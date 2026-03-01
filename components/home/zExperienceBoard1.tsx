"use client";
import { useState, useRef, useCallback, useEffect } from "react";

type Note = {
  id: number;
  type: "sticky" | "photo" | "tag" | "doodle";
  content: string;
  emoji?: string;
  color: string;
  x: number;
  y: number;
  rotation: number;
  pinColor?: string;
};

const INITIAL_NOTES: Note[] = [
  {
    id: 1, type: "sticky",
    content: "Currently obsessed with building things that feel *alive*",
    emoji: "⚡",
    color: "#fffacd",
    x: 5, y: 8, rotation: -2.5,
    pinColor: "#e84040",
  },
  {
    id: 2, type: "sticky",
    content: "Coffee shop coder ☕ give me a window seat and I'm unstoppable",
    color: "#d4f1c4",
    x: 32, y: 5, rotation: 1.8,
    pinColor: "#2d9e5f",
  },
  {
    id: 3, type: "tag",
    content: "React · Next.js · TypeScript",
    color: "#fce4ec",
    x: 62, y: 6, rotation: -1,
    pinColor: "#e040a0",
  },
  {
    id: 4, type: "sticky",
    content: "Hiking > Netflix (most days)",
    emoji: "🏔️",
    color: "#e3f2fd",
    x: 10, y: 48, rotation: 2.2,
    pinColor: "#4090e0",
  },
  {
    id: 5, type: "sticky",
    content: "Ask me about: film photography, sourdough, and why tabs > spaces",
    color: "#fff3e0",
    x: 38, y: 46, rotation: -1.5,
    pinColor: "#e07020",
  },
  {
    id: 6, type: "tag",
    content: "📍 Based in San Francisco",
    color: "#f3e5f5",
    x: 68, y: 48, rotation: 1.2,
    pinColor: "#9040e0",
  },
  {
    id: 7, type: "sticky",
    content: "Currently reading: Piranesi 🐟",
    color: "#e8f5e9",
    x: 20, y: 78, rotation: -0.8,
    pinColor: "#40a060",
  },
  {
    id: 8, type: "tag",
    content: "🎵 Indie folk · Jazz · 00s emo (no shame)",
    color: "#fce4ec",
    x: 52, y: 76, rotation: 1.6,
    pinColor: "#e04060",
  },
];

function Pin({ color }: { color: string }) {
  return (
    <div style={{
      position: "absolute",
      top: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "14px",
      height: "14px",
      borderRadius: "50% 50% 50% 0",
      background: color,
      boxShadow: `0 2px 6px ${color}88, inset 0 1px 2px rgba(255,255,255,0.4)`,
      zIndex: 2,
    }} />
  );
}

export default function ExperienceBoard() {
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const boardRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  const bringToFront = useCallback((id: number) => {
    setNotes(prev => {
      const idx = prev.findIndex(n => n.id === id);
      if (idx === -1) return prev;
      const updated = [...prev];
      const [note] = updated.splice(idx, 1);
      updated.push(note);
      return updated;
    });
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent, id: number) => {
    e.preventDefault();
    const board = boardRef.current;
    if (!board) return;
    const rect = board.getBoundingClientRect();
    const note = notes.find(n => n.id === id);
    if (!note) return;

    const noteX = (note.x / 100) * rect.width;
    const noteY = (note.y / 100) * rect.height;
    dragOffset.current = {
      x: e.clientX - rect.left - noteX,
      y: e.clientY - rect.top - noteY,
    };
    dragging.current = false;
    setActiveId(id);
    bringToFront(id);
  }, [notes, bringToFront]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (activeId === null) return;
      const board = boardRef.current;
      if (!board) return;
      dragging.current = true;
      const rect = board.getBoundingClientRect();
      const x = ((e.clientX - rect.left - dragOffset.current.x) / rect.width) * 100;
      const y = ((e.clientY - rect.top - dragOffset.current.y) / rect.height) * 100;
      setNotes(prev => prev.map(n =>
        n.id === activeId
          ? { ...n, x: Math.max(0, Math.min(85, x)), y: Math.max(0, Math.min(80, y)) }
          : n
      ));
    };

    const onMouseUp = () => {
      if (activeId !== null && !dragging.current) {
        // It was a click, flip the note
        setFlipped(prev => {
          const next = new Set(prev);
          if (next.has(activeId)) next.delete(activeId);
          else next.add(activeId);
          return next;
        });
      }
      setActiveId(null);
      dragging.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [activeId]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=DM+Sans:wght@400;500&display=swap');

        .board-section {
          padding: 4rem 2rem 5rem;
          background: #faf8f3;
        }

        .board-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .board-header h2 {
          font-family: 'Fraunces', 'Georgia', serif;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 300;
          color: #1a1612;
          margin: 0 0 0.4rem;
        }

        .board-header p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: #8a7d6e;
        }

        .corkboard {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 520px;
          margin: 0 auto;
          border-radius: 16px;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.03) 24px, rgba(0,0,0,0.03) 25px),
            repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(0,0,0,0.03) 24px, rgba(0,0,0,0.03) 25px),
            #d4a96a;
          background-size: 25px 25px, 25px 25px, cover;
          box-shadow:
            0 0 0 6px #c49558,
            0 0 0 10px #b8844a,
            0 10px 40px rgba(0,0,0,0.25),
            inset 0 0 80px rgba(0,0,0,0.1);
          overflow: hidden;
          user-select: none;
        }

        .note-wrap {
          position: absolute;
          cursor: grab;
          transition: filter 0.15s ease;
        }

        .note-wrap:active {
          cursor: grabbing;
        }

        .note-wrap.active {
          filter: drop-shadow(0 12px 28px rgba(0,0,0,0.3));
        }

        .note-inner {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        .note-inner.flipped {
          transform: rotateY(180deg);
        }

        .note-front, .note-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .note-back {
          position: absolute;
          inset: 0;
          transform: rotateY(180deg);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Caveat', cursive;
          font-size: 1rem;
          color: #5a4f44;
          padding: 1rem;
          text-align: center;
        }

        .sticky-note {
          width: 160px;
          min-height: 120px;
          padding: 1.2rem 1rem 1rem;
          border-radius: 3px;
          font-family: 'Caveat', cursive;
          font-size: 1.05rem;
          line-height: 1.45;
          color: #2a2218;
          box-shadow:
            3px 3px 10px rgba(0,0,0,0.18),
            0 1px 3px rgba(0,0,0,0.12);
          position: relative;
        }

        .sticky-note::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 20px; height: 20px;
          background: inherit;
          filter: brightness(0.88);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .tag-note {
          padding: 0.6rem 1.1rem;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #3a2f28;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.16);
          white-space: nowrap;
        }

        .note-emoji {
          font-size: 1.3rem;
          display: block;
          margin-bottom: 0.3rem;
        }

        .board-hint {
          text-align: center;
          margin-top: 1.2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: #a08070;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .board-hint span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
      `}</style>

      <section className="board-section">
        <div className="board-header">
          <h2>a little about me</h2>
          <p>drag the notes around · click to flip ✦</p>
        </div>

        <div className="corkboard" ref={boardRef}>
          {notes.map((note, i) => (
            <div
              key={note.id}
              className={`note-wrap ${activeId === note.id ? "active" : ""}`}
              style={{
                left: `${note.x}%`,
                top: `${note.y}%`,
                transform: `rotate(${note.rotation}deg)`,
                zIndex: i + 1,
              }}
              onMouseDown={e => onMouseDown(e, note.id)}
            >
              <Pin color={note.pinColor || "#e84040"} />
              <div className={`note-inner ${flipped.has(note.id) ? "flipped" : ""}`}>
                {/* Front */}
                <div className="note-front">
                  {note.type === "tag" ? (
                    <div className="tag-note" style={{ background: note.color }}>
                      {note.content}
                    </div>
                  ) : (
                    <div className="sticky-note" style={{ background: note.color }}>
                      {note.emoji && <span className="note-emoji">{note.emoji}</span>}
                      {note.content}
                    </div>
                  )}
                </div>
                {/* Back */}
                <div
                  className="note-back"
                  style={{ background: note.color, boxShadow: "3px 3px 10px rgba(0,0,0,0.18)" }}
                >
                  {["✦", "♡", "☻", "✿", "★"][note.id % 5]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="board-hint">
          <span>✥ drag to rearrange</span>
          <span>✥ click to flip</span>
        </div>
      </section>
    </>
  );
}
