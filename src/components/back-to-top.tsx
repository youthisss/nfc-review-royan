"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("atas");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a className="back-to-top" href="#atas" hidden={!visible} aria-label="Kembali ke hero">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20V4m-7 7 7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
