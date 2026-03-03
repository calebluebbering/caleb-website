"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./banner.css";
import { usePathname } from "next/navigation";

export default function Banner({
  src = "/me-w-camera.jpg",
  name = "Caleb Luebbering",
}) {
  const [passionsOpen, setPassionsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Career", href: "/career" },
    {
      label: "Hobbies", href: "/hobbies",
      dropdown: [
        { label: "Music", href: "/hobbies#music" },
        { label: "Movies & TV", href: "/hobbies#film" },
        { label: "Books", href: "/hobbies#books" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`banner ${hidden ? "banner--hidden" : ""}`}>
      <div className="banner__inner">
        <div className="banner__avatar">
          <Image
            src={src}
            alt="Profile"
            width={120}
            height={120}
            className="banner__avatar-img"
          />
        </div>

        <div className="banner__center">
          <h1 className="banner__name">
            <Link href="/" className="banner__name-link">
              {name}
            </Link>
          </h1>

          <nav className="banner__nav">
            <ul className="banner__nav-list">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <li
                    key={item.label}
                    className={`banner__nav-item banner__nav-item--has-dropdown ${
                      item.dropdown.some((sub) => sub.href === pathname) || pathname === item.href
                        ? "banner__nav-item--active"
                        : ""
                    }`}
                    onMouseEnter={() => setPassionsOpen(true)}
                    onMouseLeave={() => setPassionsOpen(false)}
                  >

                    <Link href={item.href} className="banner__nav-link banner__nav-link--btn">
                      {item.label} ▾
                    </Link>

                    <ul
                      className={`banner__dropdown${
                        passionsOpen ? " banner__dropdown--open" : ""
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <li key={sub.label} className="banner__dropdown-item">
                          <Link
                            href={sub.href}
                            className={`banner__dropdown-link ${
                              pathname === sub.href ? "banner__nav-item--active" : ""
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li
                    key={item.label}
                    className={`banner__nav-item ${
                      pathname === item.href ? "banner__nav-item--active" : ""
                    }`}
                  >
                    <Link href={item.href} className="banner__nav-link">
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        <div className="banner__filler">
          <div id="FillerIcons" className="flex justify-center space-x-6 pt-2">
            <a
              href="https://github.com/calebluebbering"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="/github-mark.svg" className="w-7 h-7" />
            </a>

            <a
              href="https://www.linkedin.com/in/caleb-luebbering/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="/LinkedIn.svg" className="w-7 h-7" />
            </a>
          </div>

          <div id="FillerHamburger" className="flex justify-center space-x-6 pt-2">
            <button
              className={`hamburger ${mobileOpen ? "hamburger--open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}>
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="mobile-menu__group">
                  <span className="mobile-menu__title">{item.label}</span>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="mobile-menu__link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}