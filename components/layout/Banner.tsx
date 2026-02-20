"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./banner.css";

export default function Banner({
  src = "/me-w-camera.jpg",
  name = "Caleb Luebbering",
}) {
  const [passionsOpen, setPassionsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Career", href: "/career" },
    {
      label: "Other Passions",
      dropdown: [
        { label: "Music", href: "/passions/music" },
        { label: "Movies & TV", href: "/passions/movies" },
        { label: "Books", href: "/passions/books" },
      ],
    },
    { label: "Scrapbook", href: "/scrapbook" },
  ];

  return (
    <header className="banner">
      <div className="banner__inner">

        {/* Avatar */}
        <div className="banner__avatar">
          <Image
            src={src}
            alt="Profile"
            width={140}
            height={140}
            className="banner__avatar-img"
          />
        </div>

        {/* Name + Nav */}
        <div className="banner__center">
          <h1 className="banner__name">{name}</h1>

          <nav className="banner__nav">
            <ul className="banner__nav-list">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <li
                    key={item.label}
                    className="banner__nav-item banner__nav-item--has-dropdown"
                    onMouseEnter={() => setPassionsOpen(true)}
                    onMouseLeave={() => setPassionsOpen(false)}
                  >
                    <button className="banner__nav-link banner__nav-link--btn">
                      {item.label} ▾
                    </button>

                    <ul className={`banner__dropdown${passionsOpen ? " banner__dropdown--open" : ""}`}>
                      {item.dropdown.map((sub) => (
                        <li key={sub.label} className="banner__dropdown-item">
                          <Link href={sub.href} className="banner__dropdown-link">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label} className="banner__nav-item">
                    <Link href={item.href} className="banner__nav-link">
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        {/* Filler */}
        <div className="banner__filler">

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-2">
            <a href="https://github.com/calebluebbering"
               target="_blank"
               rel="noopener noreferrer"
               className="social-icon">
              <img src="/github-mark.svg" alt="GitHub Icon" className="w-8 h-8"/>
            </a>
            <a href="https://www.linkedin.com/in/caleb-luebbering/"
               target="_blank"
               rel="noopener noreferrer"
               className="social-icon">
              <img src="/LinkedIn.svg" alt="GitHub Icon" className="w-8 h-8"/>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}