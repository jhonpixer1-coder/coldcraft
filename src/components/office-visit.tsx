"use client";

import { useState, useSyncExternalStore } from "react";
import styles from "./office-visit.module.css";

const officeAddress =
  "2/M/3 Golden Street, Ring Road, Shamoly, Mohammadpur, Dhaka-1207";
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `COLD CRAFT ENGINEERING LIMITED, ${officeAddress}`,
)}`;

function getTodayInDhaka() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "Asia/Dhaka",
  }).format(new Date());
}

function subscribeToDhakaDayChange(callback: () => void) {
  const intervalId = window.setInterval(callback, 60_000);
  return () => window.clearInterval(intervalId);
}

export default function OfficeVisit() {
  const today = useSyncExternalStore(
    subscribeToDhakaDayChange,
    getTodayInDhaka,
    () => null,
  );
  const [copyMessage, setCopyMessage] = useState("");

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(officeAddress);
      setCopyMessage("Address copied.");
    } catch {
      setCopyMessage("Could not copy the address. Please select and copy it.");
    }
  }

  return (
    <section className={styles.section} aria-labelledby="office-visit-title">
      <div className={styles.inner}>
        <div className={styles.address}>
          <p className={styles.eyebrow}>FIND US IN DHAKA</p>
          <div className={styles.addressHeading}>
            <span className={styles.locationIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2.3" />
              </svg>
            </span>
            <h2 id="office-visit-title">Visit the office</h2>
          </div>
          <address>{officeAddress}</address>
          <div className={styles.actions}>
            <a
              className={styles.directions}
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
            <button
              className={styles.copy}
              type="button"
              onClick={copyAddress}
              aria-describedby="copy-address-status"
            >
              Copy address
            </button>
          </div>
          <p
            className={styles.copyStatus}
            id="copy-address-status"
            aria-live="polite"
          >
            {copyMessage}
          </p>
        </div>

        <div className={styles.hours} aria-label="Office hours">
          <p className={styles.hoursEyebrow}>PLAN YOUR VISIT</p>
          <h3>Office hours</h3>
          <p className={styles.hoursDescription}>
            We&apos;re open six days a week to help with your project.
          </p>
          <div className={styles.hoursRow}>
            <span>
              Saturday to Thursday
              {today && today !== "Friday" && (
                <span className={styles.today}>Today</span>
              )}
            </span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className={styles.hoursRow}>
            <span>
              Friday
              {today === "Friday" && (
                <span className={styles.today}>Today</span>
              )}
            </span>
            <span className={styles.closed}>Closed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
