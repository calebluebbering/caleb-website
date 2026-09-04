"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Music", href: "/music" },
  { label: "Scrapbook", href: "/scrapbook" },
  { label: "Lore", href: "/lore" },
];

export default function SidePane() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="sidebar fixed left-0 top-0 z-50 hidden h-screen border-r border-black/10 px-6 py-8 md:block"
    >
      {/* Falling leaves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="leaf leaf-1" />
        <span className="leaf leaf-2" />
        <span className="leaf leaf-3" />
        <span className="leaf leaf-4" />
        <span className="leaf leaf-5" />
        <span className="leaf leaf-6" />
      </div>

      {/* Logo */}
      <Link href="/" className="relative z-10 block w-fit">
        <img
          src="/logo.png"
          alt="Caleb Luebbering"
          className="w-24 object-contain sidebar-logo"
        />

        <span className="mt-4 flex justify-center">
          <span className="h-2 w-2 rotate-45 border-r border-b border-black/25" />
        </span>
      </Link>

      {/* Menu */}
      <nav
        className={`relative z-10 mt-12 transition-all duration-500 ${
          hovered
            ? "translate-x-0 opacity-100"
            : "-translate-x-4 opacity-0"
        }`}
      >
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center gap-3 text-sm transition-colors hover:text-pink-500"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="sidebar-nav">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}