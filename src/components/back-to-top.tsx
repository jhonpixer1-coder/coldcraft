"use client";

import { useEffect, useState } from "react";
import styles from "./back-to-top.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setIsVisible(window.scrollY > 480);
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function returnToTop() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
      type="button"
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      title="Back to top"
      onClick={returnToTop}
    >
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 16V4m-5 5 5-5 5 5" />
      </svg>
    </button>
  );
}