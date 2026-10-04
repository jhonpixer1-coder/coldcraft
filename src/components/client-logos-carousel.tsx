"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./client-logos-carousel.module.css";

const clients = [
  { name: "Line-link Purification", wordmark: "Line-link", descriptor: "Purification", style: "lineLink" },
  { name: "TICA", wordmark: "TICA", descriptor: "", style: "tica" },
  { name: "ELTA Fans", wordmark: "ELTA", descriptor: "FANS", style: "elta" },
  { name: "Maple", wordmark: "MAPLE", descriptor: "", style: "maple" },
  { name: "AAF International", wordmark: "AAF", descriptor: "INTERNATIONAL", style: "aaf" },
  { name: "DB", wordmark: "DB", descriptor: "", style: "db", image: "/db-logo.png" },
  { name: "Aermec", wordmark: "AERMEC", descriptor: "", style: "aermec" },
  { name: "Calpeda", wordmark: "calpeda", descriptor: "", style: "calpeda" },
  { name: "MayAir", wordmark: "MayAir", descriptor: "Clean Air, Our Future", style: "mayair" },
  { name: "Kingland Clean", wordmark: "KLC", descriptor: "KINGLAND CLEAN", style: "klc" },
  { name: "Siemens", wordmark: "SIEMENS", descriptor: "", style: "siemens" },
  { name: "Daikin", wordmark: "DAIKIN", descriptor: "AIR CONDITIONERS", style: "daikin" },
  { name: "Regin", wordmark: "REGIN", descriptor: "", style: "regin" },
];

export default function ClientLogosCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isPlaying ||
      !isVisible ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(() => scrollTrack(1), 3600);
    return () => window.clearInterval(interval);
  }, [isPlaying, isVisible]);

  function scrollTrack(direction: -1 | 1) {
    const track = trackRef.current;
    const firstLogo = track?.firstElementChild;
    if (!track || !firstLogo) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = firstLogo.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (direction > 0 && track.scrollLeft >= maxScroll - 2) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && track.scrollLeft <= 2) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section
      className={styles.section}
      id="clients"
      aria-labelledby="clients-title"
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>Clients &amp; Partners</p>
            <h2 className={styles.title} id="clients-title">Global Reach</h2>
          </div>
          <p className={styles.description}>
            We proudly serve a network of clients and partners across Bangladesh and beyond,
            contributing to industry-wide growth and innovation.
          </p>
        </div>

        <div className={styles.carousel}>
          <button
            className={styles.arrow}
            type="button"
            aria-label="Previous clients"
            onClick={() => scrollTrack(-1)}
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M16 10H4m5-5-5 5 5 5" />
            </svg>
          </button>

          <div
            className={styles.logoTrack}
            ref={trackRef}
            role="group"
            aria-label="Client and partner logos"
          >
            {clients.map((client) => (
              <div className={styles.logoItem} key={client.name}>
                {client.image ? (
                  <div className={`${styles.wordmark} ${styles[client.style]}`} role="img" aria-label={client.name}>
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={150}
                      height={150}
                      className={styles.dbLogo}
                      priority={false}
                    />
                  </div>
                ) : (
                  <div
                    className={`${styles.wordmark} ${styles[client.style]}`}
                    role="img"
                    aria-label={client.name}
                  >
                    {client.style === "lineLink" && <span className={styles.lineMark} aria-hidden="true" />}
                    {client.style === "calpeda" && <span className={styles.calpedaMark} aria-hidden="true" />}
                    {client.style === "db" && <span className={styles.dbMark} aria-hidden="true">✳</span>}
                    <span className={styles.wordmarkText}>{client.wordmark}</span>
                    {client.descriptor && <span className={styles.descriptor}>{client.descriptor}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className={styles.arrow}
            type="button"
            aria-label="Next clients"
            onClick={() => scrollTrack(1)}
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12m-5-5 5 5-5 5" />
            </svg>
          </button>
        </div>

        <div className={styles.controls}>
          <div className={styles.indicators} aria-hidden="true">
            <span className={styles.activeIndicator} />
            <span />
            <span />
          </div>
          <button
            className={styles.playToggle}
            type="button"
            aria-label={isPlaying ? "Pause logo carousel" : "Play logo carousel"}
            aria-pressed={!isPlaying}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? (
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7 5v10m6-10v10" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="m7 5 8 5-8 5V5Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}