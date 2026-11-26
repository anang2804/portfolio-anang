"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroMotion({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(
          [
            "[data-hero-eyebrow]",
            "[data-hero-name]",
            "[data-hero-role]",
            "[data-hero-portrait]",
          ],
          {
            autoAlpha: 0,
            y: 18,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          },
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
}
