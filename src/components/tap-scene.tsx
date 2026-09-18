"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";
import { HeroArtwork } from "./product-artwork";

export function TapScene() {
  const [replay, setReplay] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sceneRef.current;
    if (!node) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (visible && !document.hidden && !motion.matches) {
        timer = setInterval(() => setReplay((value) => value + 1), 5000);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.25 });
    observer.observe(node);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <Reveal className="tap-scene">
      <div ref={sceneRef} className="scene-stage">
      <div key={replay} className="hero-art-frame">
        <HeroArtwork />
      </div>
      </div>
    </Reveal>
  );
}
