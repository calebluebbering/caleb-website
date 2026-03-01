"use client";
import { useEffect, useRef, useState } from "react";
import "./customcursor.css";

type Dot = { x: number; y: number; id: number };

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // Smooth ring position (lerped)
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const dotCounter = useRef(0);
  const frameRef = useRef<number>(0);
  const lastDotTime = useRef(0);

  useEffect(() => {
    // Hide system cursor globally
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Spawn trail dots while moving
      const now = Date.now();
      if (now - lastDotTime.current > 38) {
        lastDotTime.current = now;
        const id = dotCounter.current++;
        setDots(prev => [...prev.slice(-14), { x: e.clientX, y: e.clientY, id }]);
      }

      // Move cursor dot instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Detect hovering over interactive elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest("a, button, [role='button'], input, textarea, select, .board-item");
      setHovering(isInteractive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseover", onOver);

    // RAF loop for smooth ring lerp
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frameRef.current);
    };
  }, [visible]);

  // Auto-remove old dots
  useEffect(() => {
    const timer = setTimeout(() => {
      setDots(prev => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [dots]);

  return (
    <>
      <div className="cursor-root" aria-hidden="true">
        {/* Trail */}
        {dots.map((dot, i) => {
          const size = Math.max(2, 5 * (i / dots.length));
          return (
            <div
              key={dot.id}
              className="cursor-trail-dot"
              style={{
                width: size,
                height: size,
                marginTop: -size / 2,
                marginLeft: -size / 2,
                opacity: (i / dots.length) * 0.5,
                // @ts-expect-error: Using CSS custom property for animation, TS doesn't recognize it
                "--trail-pos": `translate(${dot.x}px, ${dot.y}px)`,
                transform: `translate(${dot.x}px, ${dot.y}px)`,
              }}
            />
          );
        })}

        {/* Glow */}
        <div
          ref={glowRef}
          className={`cursor-glow${clicking ? " clicking" : ""}${!visible ? " cursor-hidden" : ""}`}
        />

        {/* Outer ring (lerped) */}
        <div
          ref={ringRef}
          className={`cursor-ring${clicking ? " clicking" : ""}${hovering ? " hovering" : ""}${!visible ? " cursor-hidden" : ""}`}
        />

        {/* Inner dot (instant) */}
        <div
          ref={cursorRef}
          className={`cursor-dot${clicking ? " clicking" : ""}${hovering ? " hovering" : ""}${!visible ? " cursor-hidden" : ""}`}
        />
      </div>
    </>
  );
}
