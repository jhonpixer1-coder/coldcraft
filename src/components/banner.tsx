"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./banner.module.css";

const slides = [
  {
    id: "engineering",
    eyebrow: "Cold Craft Engineering Ltd.",
    accent: "Smart",
    firstLine: "Engineering.",
    secondLine: "Sustainable Impact.",
    description: "Future-ready HVAC & fire systems that save energy and lives.",
    action: "Explore our services",
    href: "#products",
    images: ["/hero-hvac.png"],
  },
  {
    id: "comfort",
    eyebrow: "Comfort, engineered.",
    accent: "Efficient",
    firstLine: "Systems.",
    secondLine: "Lasting Comfort.",
    description: "Thoughtful climate solutions for the places where life happens.",
    action: "Discover our projects",
    href: "#projects",
    images: ["/fire.png"],
  },
  {
    id: "protection",
    eyebrow: "Protection by design.",
    accent: "Safety",
    firstLine: "Without Compromise.",
    secondLine: "Ready for Every Need.",
    description: "Integrated fire protection and expert installation, built around people.",
    action: "Talk to our team",
    href: "mailto:info@cce-bd.com",
    images: ["/bms-building-management.png"],
  },
  {
    id: "air-quality",
    eyebrow: "Clean air, engineered.",
    accent: "Advanced",
    firstLine: "Filtration.",
    secondLine: "Healthier Environments.",
    description: "Advanced filtration solutions for air quality control.",
    action: "Talk to our team",
    href: "mailto:info@cce-bd.com",
    images: ["/filter.png"],
  },
];

const achievements = [
  { value: "100+", label: "Projects Completed", icon: "people" },
  { value: "10+", label: "Years of Experience", icon: "shield" },
  { value: "100%", label: "Committed to Sustainability", icon: "leaf" },
];

const services = [
  { label: "HVAC Solutions", icon: "snowflake" },
  { label: "Expert Installation", icon: "wrench" },
  { label: "Reliable Protection", icon: "shield" },
];

function AchievementIcon({ name }: { name: string }) {
  if (name === "people") {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="9" r="3" />
        <circle cx="19" cy="10" r="2.3" />
        <path d="M3.5 21v-1.2a6.5 6.5 0 0 1 13 0V21h-13Zm13.8-7.1a5.2 5.2 0 0 1 7.2 4.8V21h-5.5" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="m14 3 9 3.3v6.5c0 5.6-3.7 9.6-9 12.2-5.3-2.6-9-6.6-9-12.2V6.3L14 3Z" />
        <path d="m10 14 2.6 2.6 5.6-5.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M23.5 4.5c-9.7.1-16 2.5-17.8 8.1-1.2 3.7 1.6 6.4 5.1 5.3 5.6-1.8 8-8.1 8.1-13.4-4.2 5.4-7.7 9-13.7 14.8" />
      <path d="M5 23c3.3-3.4 7.2-5.8 12-7.3" />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  if (name === "snowflake") {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3v22M4.5 8.5l19 11M4.5 19.5l19-11M10.5 6.5 14 10l3.5-3.5M10.5 21.5 14 18l3.5 3.5M4.5 13l4.8 1-1.3 4.7M23.5 15l-4.8-1 1.3-4.7M8 9.3l1.3 4.7-4.8 1M20 18.7l-1.3-4.7 4.8-1" />
      </svg>
    );
  }

  if (name === "wrench") {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M17 6.2a6 6 0 0 0-7.6 7.6l-5.7 5.7a2.4 2.4 0 0 0 3.4 3.4l5.7-5.7A6 6 0 0 0 20.4 9l-3.8 3.8-3.4-3.4L17 6.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="m14 3 9 3.3v6.5c0 5.6-3.7 9.6-9 12.2-5.3-2.6-9-6.6-9-12.2V6.3L14 3Z" />
      <path d="m10 14 2.6 2.6 5.6-5.7" />
    </svg>
  );
}

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (!isPlaying || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [activeSlide, isPlaying]);

  function moveSlide(direction: number) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section
      className={styles.banner}
      aria-roledescription="carousel"
      aria-label="Cold Craft Engineering highlights"
    >
      <div className={styles.photoPanels} aria-hidden="true">
        {slides.map((item, slideIndex) => (
          <div
            className={`${styles.photoSlide} ${slideIndex === activeSlide ? styles.currentPhotoSlide : ""}`}
            key={item.id}
          >
            {item.images.map((image, imageIndex) => (
              <div
                className={`${styles.photoPanel} ${[styles.panelOne, styles.panelTwo, styles.panelThree][imageIndex]}`}
                key={image}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  priority={slideIndex === 0}
                  sizes="(max-width: 700px) 55vw, 44vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.copyContent} key={slide.id} aria-live={isPlaying ? "off" : "polite"}>
            <p className={styles.eyebrow}>{slide.eyebrow}</p>
            <h1 className={styles.title} id="banner-title">
              <span>{slide.accent}</span> {slide.firstLine}
              <br />
              {slide.secondLine}
            </h1>
            <p className={styles.description}>{slide.description}</p>
            <a className={styles.readMore} href={slide.href}>
              {slide.action}
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11m-5-5 5 5-5 5" />
              </svg>
            </a>
          </div>

          <div className={styles.sliderControls} role="group" aria-label="Banner controls">
            <button className={styles.arrowButton} type="button" aria-label="Previous slide" onClick={() => moveSlide(-1)}>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M16 10H5m5 5-5-5 5-5" />
              </svg>
            </button>
            <div className={styles.slideIndicators}>
              {slides.map((item, index) => (
                <button
                  className={`${styles.slideIndicator} ${index === activeSlide ? styles.activeIndicator : ""}`}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  key={item.id}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <button className={styles.arrowButton} type="button" aria-label="Next slide" onClick={() => moveSlide(1)}>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11m-5-5 5 5-5 5" />
              </svg>
            </button>
            <button
              className={styles.playButton}
              type="button"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
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

          <div className={styles.achievements}>
            {achievements.map((item) => (
              <div className={styles.achievement} key={item.label}>
                <span className={styles.achievementIcon}>
                  <AchievementIcon name={item.icon} />
                </span>
                <span className={styles.achievementText}>
                  <span className={styles.achievementValue}>{item.value}</span>
                  <span className={styles.achievementLabel}>{item.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.services} aria-label="Our services">
        {services.map((service) => (
          <div className={styles.service} key={service.label}>
            <span className={styles.serviceIcon}>
              <ServiceIcon name={service.icon} />
            </span>
            <span className={styles.serviceLabel}>{service.label}</span>
          </div>
        ))}
      </div>

      
    </section>
  );
}