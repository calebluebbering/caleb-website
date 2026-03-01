"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import "./experienceboard.css";

type ItemType = "sticky" | "tag" | "nav-card" | "polaroid";

type BoardItem = {
  id: number;
  type: ItemType;
  content: string;
  emoji?: string;
  color: string;
  x: number;
  y: number;
  rotation: number;
  pinColor?: string;
  href?: string;
  label?: string;
  caption?: string;
  size?: string;
};

const INITIAL_ITEMS: BoardItem[] = [
  // ── Sticky notes ────────────────────────────────────────
  {
    id: 1, type: "sticky",
    content: "Learn · Love · Create",
    emoji: "👑",
    color: "#fffacd",
    x: 4, y: 6, rotation: -2.5,
    pinColor: "#e84040",
  },
  {
    id: 12, type: "sticky",
    content: "TODO: Read The Pragmatic Programmer📖",
    color: "#d4f1c4",
    x: 36, y: 10, rotation: 1.8,
    pinColor: "#d3c82c",
    size: "14px",
  },
  {
    id: 2, type: "sticky",
    content: "Obsessed with building things to perfection!",
    color: "#d4f1c4",
    x: 32, y: 8, rotation: 1.8,
    pinColor: "#2d9e5f",
  },
  
  {
    id: 3, type: "sticky",
    content: "Carpie Diem, Crab Rangoon, Catan, and the Oxford Comma",
    color: "#fff3e0",
    x: 6, y: 55, rotation: 2.2,
    pinColor: "#e07020",
  },
  {
    id: 4, type: "sticky",
    content: "TODO: Learn Free Bird Solo ",
    emoji: "🎸",
    color: "#e8f5e9",
    x: 38, y: 60, rotation: -1.2,
    pinColor: "#40a060",
  },
  // ── Tags ────────────────────────────────────────────────
  {
    id: 5, type: "tag",
    content: "Full-Stack · ASP.NET · AI",
    color: "#fce4ec",
    x: 60, y: 6, rotation: -1,
    pinColor: "#e040a0",
  },
  {
    id: 6, type: "tag",
    content: "📍 Based in Jefferson City, MO",
    color: "#f3e5f5",
    x: 73, y: 51, rotation: 1.4,
    pinColor: "#9040e0",
  },
  {
    id: 7, type: "tag",
    content: "🎵 Don't Look Back In Anger · Oasis",
    color: "#fce4ec",
    x: 3, y: 83, rotation: -0.8,
    pinColor: "#e04060",
  },
  // ── Polaroid ────────────────────────────────────────────
  {
    id: 11, type: "polaroid",
    content: "",
    caption: "graduation '25 🐻",
    color: "#fff",
    x: 57, y: 22, rotation: -3,
    pinColor: "#861f30",
  },
  // ── Nav cards (clickable) ────────────────────────────────
  {
    id: 8, type: "nav-card",
    content: "See what I've built",
    emoji: "💻",
    label: "My Work",
    href: "/career",
    color: "#1a1612",
    x: 80, y: 18, rotation: 1.5,
    pinColor: "#e84040",
  },
  {
    id: 9, type: "nav-card",
    content: "OutsIDE the IDE",
    emoji: "🌍",
    label: "Scrapbook",
    href: "/scrapbook",
    color: "#2d4a3e",
    x: 19, y: 34, rotation: -2,
    pinColor: "#2d9e5f",
  },
  {
    id: 10, type: "nav-card",
    content: "Get in touch with me",
    emoji: "✉️",
    label: "Contact",
    href: "/contact",
    color: "#3a2060",
    x: 70, y: 68, rotation: 1.2,
    pinColor: "#9040e0",
  },
];

function Pin({ color }: { color: string }) {
  return (
    <div style={{
      position: "absolute",
      top: "-11px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      background: `radial-gradient(circle at 38% 35%, rgba(255,255,255,0.55) 0%, ${color} 55%)`,
      boxShadow: `0 2px 8px ${color}99, 0 1px 2px rgba(0,0,0,0.3)`,
      zIndex: 2,
    }} />
  );
}

export default function ExperienceBoard() {
  const [items, setItems] = useState<BoardItem[]>(INITIAL_ITEMS);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragMoved = useRef(false);

  const router = useRouter();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const bringToFront = useCallback((id: number) => {
    setItems(prev => {
      const idx = prev.findIndex(n => n.id === id);
      if (idx === -1) return prev;
      const copy = [...prev];
      const [item] = copy.splice(idx, 1);
      copy.push(item);
      return copy;
    });
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent, id: number) => {
    if (isMobile) return;
    // Don't start drag on nav-card anchor elements — let clicks pass through
    const target = e.target as HTMLElement;
    if (target.closest("a")) return;
    e.preventDefault();
    const board = boardRef.current;
    if (!board) return;
    const rect = board.getBoundingClientRect();
    const item = items.find(n => n.id === id);
    if (!item) return;
    dragOffset.current = {
      x: e.clientX - rect.left - (item.x / 100) * rect.width,
      y: e.clientY - rect.top - (item.y / 100) * rect.height,
    };
    dragMoved.current = false;
    setActiveId(id);
    bringToFront(id);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [isMobile, items, bringToFront]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (activeId === null || isMobile) return;
    const board = boardRef.current;
    if (!board) return;
    const rect = board.getBoundingClientRect();
    const dx = e.clientX - rect.left - dragOffset.current.x;
    const dy = e.clientY - rect.top - dragOffset.current.y;
    // Only start drag after a few pixels of movement
    const dist = Math.hypot(
      e.clientX - rect.left - dragOffset.current.x - ((items.find(n => n.id === activeId)?.x ?? 0) / 100 * rect.width),
      e.clientY - rect.top - dragOffset.current.y - ((items.find(n => n.id === activeId)?.y ?? 0) / 100 * rect.height)
    );
    if (dist > 4) dragMoved.current = true;
    const x = (dx / rect.width) * 100;
    const y = (dy / rect.height) * 100;
    setItems(prev => prev.map(n =>
      n.id === activeId
        ? { ...n, x: Math.max(0, Math.min(85, x)), y: Math.max(0, Math.min(82, y)) }
        : n
    ));
  }, [activeId, isMobile, items]);

  const onPointerUp = useCallback(() => {
    setActiveId(null);
    setTimeout(() => { dragMoved.current = false; }, 50);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,400&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <section className="board-section">
        <div className="board-header">
          <h2>a little about me</h2>
          {/*<p>drag the notes · tap the dark cards to explore</p> */}
        </div>

        <div
          className="corkboard"
          ref={boardRef}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {items.map((item, i) => {
            const isLink = item.type === "nav-card";

            const inner = (() => {
              switch (item.type) {
                case "sticky":
                  return (
                    <div className="sticky-note" style={{ background: item.color, fontSize: item.size}}>
                      {item.emoji && <span className="note-emoji">{item.emoji}</span>}
                      {item.content}
                    </div>
                  );
                case "tag":
                  return (
                    <div className="tag-pill" style={{ background: item.color }}>
                      {item.content}
                    </div>
                  );
                case "nav-card":
                  return (
                    <a
                      href={item.href}
                      className="nav-card"
                      style={{ background: item.color }}
                      onClick={e => { if (dragMoved.current) e.preventDefault(); }}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <span className="card-emoji">{item.emoji}</span>
                      <span className="card-label">{item.label}</span>
                      <span className="card-sub">{item.content}</span>
                      <span className="card-arrow">→</span>
                    </a>
                  );
                case "polaroid":
                  return (
                    <div className="polaroid">
                      <div className="polaroid-photo">
                        <img src="/graduation.png"></img>
                      </div>
                      <div className="polaroid-caption">{item.caption}</div>
                    </div>
                  );
              }
            })();

            return (
              <div
                key={item.id}
                className={`board-item${activeId === item.id ? " is-active" : ""}${isLink ? " is-link" : ""}`}
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: `rotate(${item.rotation}deg)`,
                  zIndex: i + 1,
                }}
                onPointerDown={e => onPointerDown(e, item.id)}
                onClick={() => {
                  if (isLink && !dragMoved.current) {
                    if (item.href)
                      router.push(item.href);
                  }
                }}
              >
                <Pin color={item.pinColor || "#e84040"} />
                {inner}
              </div>
            );
          })}
        </div>

        <div className="board-hint">
          <span className="drag-hint">✥ drag to rearrange</span>
          <span>✥ tap the cards to navigate</span>
        </div>
      </section>
    </>
  );
}
