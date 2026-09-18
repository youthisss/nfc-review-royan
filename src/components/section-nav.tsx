"use client";

import { sections, useActiveSection } from "./use-active-section";
import { useEffect, useRef, useState } from "react";

export function SectionNav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 801px)");
    const closeOnResize = () => setOpen(false);
    const closeOnOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    };
    desktop.addEventListener("change", closeOnResize);
    document.addEventListener("pointerdown", closeOnOutside);
    return () => {
      desktop.removeEventListener("change", closeOnResize);
      document.removeEventListener("pointerdown", closeOnOutside);
    };
  }, []);

  return (
    <div className="navigation-shell" data-open={open}
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <button ref={toggle} className="menu-toggle" type="button"
        aria-expanded={open} aria-controls="primary-navigation"
        aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
        onClick={() => setOpen((value) => !value)}>
        <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
      </button>
    <nav id="primary-navigation" aria-label="Navigasi utama">
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>
          {label}
        </a>
      ))}
    </nav>
    </div>
  );
}
