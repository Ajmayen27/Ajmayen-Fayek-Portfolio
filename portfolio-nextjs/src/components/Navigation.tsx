"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_SECTIONS = [
  { id: "about",          label: "About",          icon: "01" },
  { id: "experience",     label: "Experience",      icon: "02" },
  { id: "education",      label: "Education",       icon: "03" },
  { id: "projects",       label: "Projects",        icon: "04" },
  { id: "skills",         label: "Skills",          icon: "05" },
  { id: "certifications", label: "Certifications",  icon: "06" },
  { id: "blog",           label: "Blog",            icon: "07" },
  { id: "contact",        label: "Contact",         icon: "08" },
];

const RESUME = "/resume/Ajmayen_Fayek_Resume.pdf";

export default function Navigation() {
  const [active, setActive]       = useState("");
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [drawerOpen, setDrawer]   = useState(false);
  const indicatorRef              = useRef<HTMLSpanElement>(null);
  const linksRef                  = useRef<HTMLUListElement>(null);

  /* ── Scroll tracking ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const y   = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
      setScrolled(y > 50);

      let cur = "";
      document.querySelectorAll<HTMLElement>("section[id]").forEach((s) => {
        if (y >= s.offsetTop - 120) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Animated indicator pill under active link ───────────── */
  useEffect(() => {
    if (!indicatorRef.current || !linksRef.current) return;
    const activeEl = linksRef.current.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (activeEl) {
      const li = activeEl.closest("li") as HTMLElement;
      indicatorRef.current.style.left  = li.offsetLeft + "px";
      indicatorRef.current.style.width = li.offsetWidth + "px";
      indicatorRef.current.style.opacity = "1";
    } else {
      indicatorRef.current.style.opacity = "0";
    }
  }, [active]);

  /* ── Smooth scroll helper ────────────────────────────────── */
  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
    setDrawer(false);
    document.body.style.overflow = "";
  };

  const toggleDrawer = () => {
    const next = !drawerOpen;
    setDrawer(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      {/* ── Scroll progress bar ─────────────────────────────── */}
      <div className="npb" style={{ width: `${progress}%` }} aria-hidden />

      {/* ── Main Navbar ─────────────────────────────────────── */}
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

        {/* Logo */}
        <a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => go(e, "hero")}
          aria-label="Go to top"
        >
          <span className="navbar-logo-a">A</span>
          <span className="navbar-logo-dot">.</span>
          <span className="navbar-logo-name">FAYEK</span>
        </a>

        {/* Desktop nav links */}
        <nav className="navbar-links-wrap" aria-label="Main navigation">
          <ul className="navbar-links" ref={linksRef}>
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  data-id={s.id}
                  href={`#${s.id}`}
                  className={`navbar-link ${active === s.id ? "navbar-link--active" : ""}`}
                  onClick={(e) => go(e, s.id)}
                >
                  <span className="navbar-link-num">{s.icon}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          {/* sliding indicator */}
          <span className="navbar-indicator" ref={indicatorRef} aria-hidden />
        </nav>

        {/* Right actions */}
        <div className="navbar-actions">
          <Link
            href={RESUME}
            className="navbar-resume"
            download="Ajmayen_Fayek_Resume.pdf"
            aria-label="Download Resume"
          >
            <span>resume</span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
          <button
            className={`navbar-burger ${drawerOpen ? "navbar-burger--open" : ""}`}
            onClick={toggleDrawer}
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ────────────────────────────────────── */}
      {drawerOpen && (
        <div className="drawer-backdrop" onClick={toggleDrawer} aria-hidden />
      )}
      <aside className={`drawer ${drawerOpen ? "drawer--open" : ""}`} aria-label="Mobile navigation">
        <div className="drawer-head">
          <span className="drawer-title">// navigation</span>
          <button className="drawer-close" onClick={toggleDrawer} aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="drawer-nav">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`drawer-link ${active === s.id ? "drawer-link--active" : ""}`}
              onClick={(e) => go(e, s.id)}
            >
              <span className="drawer-link-num">{s.icon}</span>
              <span className="drawer-link-label">{s.label}</span>
              {active === s.id && <span className="drawer-link-dot" aria-hidden />}
            </a>
          ))}
        </nav>

        <div className="drawer-footer">
          <Link
            href={RESUME}
            className="drawer-resume"
            download="Ajmayen_Fayek_Resume.pdf"
          >
            ↓ download resume
          </Link>
        </div>
      </aside>
    </>
  );
}
