"use client";

import { useEffect, useState } from "react";

export const sections = [
  { id: "cara-kerja", label: "Cara kerja" },
  { id: "produk", label: "Produk" },
  { id: "faq", label: "Tanya jawab" },
];

export function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.3;
      let current = "";
      for (const { id } of sections) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= readingLine && rect.bottom > readingLine) current = id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return active;
}
