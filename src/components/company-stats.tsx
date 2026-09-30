"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./company-stats.module.css";

const statistics = [
  { value: 10, label: "Running projects", icon: "clock", accent: "gold" },
  { value: 65, label: "Completed projects", icon: "check", accent: "blue" },
  { value: 50, label: "Total products", icon: "box", accent: "gold" },
  { value: 345, label: "Total employees", icon: "people", accent: "blue" },
] as const;

type StatisticIconName = (typeof statistics)[number]["icon"];

function StatisticIcon({ name }: { name: StatisticIconName }) {
  if (name === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6.5v5.8l3.7 2.2" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="m7.8 12.2 2.8 2.8 5.8-6" />
      </svg>
    );
  }

  if (name === "box") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 8.5 4.6v8.8L12 21l-8.5-4.6V7.6L12 3Z" />
        <path d="m3.8 7.8 8.2 4.5 8.2-4.5M12 12.3V21m-4.2-16 8.4 4.6v4.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20v-1a5.5 5.5 0 0 1 11 0v1h-11Zm12.2-11.5a2.5 2.5 0 1 1 0 5m2.2 2a4.5 4.5 0 0 1 2.6 4.1V20h-3" />
    </svg>
  );
}

export default function CompanyStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValues] = useState(() => statistics.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => {
        setValues(statistics.map(({ value }) => value));
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const duration = 1350;
    let startTime = 0;
    let frame = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;

      setValues(statistics.map(({ value }) => Math.round(value * easedProgress)));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [isVisible]);

  return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="stats-title">
      <svg className={styles.snowflake} viewBox="0 0 420 580" fill="none" aria-hidden="true">
        <circle cx="210" cy="290" r="48" />
        <path d="M210 10v560M210 290 28 185m182 105L28 395m182-105 182-105M210 290l182 105M210 98l-48-48m48 48 48-48M210 482l-48 48m48-48 48 48M82 217l-66 13m66-13-15-66M82 363l-66-13m66 13-15 66M338 217l66 13m-66-13 15-66m-15 212 66-13m-66 13 15 66" />
      </svg>

      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 id="stats-title">Cold Craft Engineering Ltd.</h2>
          <p><span />Serving the Nation</p>
        </header>

        <div className={styles.grid}>
          {statistics.map((statistic, index) => (
            <article
              className={styles.statistic}
              key={statistic.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className={`${styles.keyline} ${styles[statistic.accent]}`} aria-hidden="true" />
              <span className={styles.icon}>
                <StatisticIcon name={statistic.icon} />
              </span>
              <p className={styles.value} aria-label={`${statistic.value} plus`}>
                <span>{values[index]}</span><span className={styles.plus}>+</span>
              </p>
              <p className={styles.label}>{statistic.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}