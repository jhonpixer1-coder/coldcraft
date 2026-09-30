"use client";

import { useState } from "react";
import styles from "./faq-section.module.css";

const questions = [
  {
    question: "What is an HVAC system and why is it important?",
    answer:
      "HVAC means heating, ventilation, and air conditioning. A well-designed system helps maintain comfortable temperatures, healthy indoor air, and efficient energy use in homes and workplaces.",
    icon: "snowflake",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with pharmaceutical, healthcare, manufacturing, commercial, and other industrial facilities across Bangladesh, tailoring each solution to the needs of the site.",
    icon: "building",
  },
  {
    question: "Do you provide end-to-end HVAC installation and maintenance?",
    answer:
      "Yes. Our team can support projects from system planning and equipment selection through installation, commissioning, and ongoing maintenance.",
    icon: "tools",
  },
  {
    question: "What are cleanroom panels and where are they used?",
    answer:
      "Cleanroom panels create smooth, controlled interior surfaces that are easier to maintain. They are commonly used in pharmaceutical, laboratory, medical, and precision-manufacturing environments.",
    icon: "panels",
  },
  {
    question: "How can I request a quote or consultation?",
    answer:
      "Call us or send an email with a brief description of your project, site, and requirements. Our team will get in touch to discuss the next steps.",
    icon: "document",
  },
] as const;

type QuestionIconName = (typeof questions)[number]["icon"];

function QuestionIcon({ name }: { name: QuestionIconName }) {
  if (name === "snowflake") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5v19M3.8 7.2l16.4 9.6M3.8 16.8l16.4-9.6M8.5 4.5 12 8l3.5-3.5M8.5 19.5 12 16l3.5 3.5" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 21V4.5A1.5 1.5 0 0 1 5.5 3h9A1.5 1.5 0 0 1 16 4.5V21M2.5 21h19M8 7h2m3 0h2M8 11h2m3 0h2M8 15h2m3 0h2M10 21v-3.5h3V21m5-9h2.5V21" />
      </svg>
    );
  }

  if (name === "tools") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.5 6a5 5 0 0 0-6.3 6.3l-4.7 4.8a2 2 0 0 0 2.8 2.8l4.8-4.7A5 5 0 0 0 17.5 9l-3.1 3.1-2.8-2.8L14.5 6Z" />
        <path d="m14.5 15.5 4.7 4.7m-2.5-7 4-4a3 3 0 0 0-4.2-4.2l-4 4" />
      </svg>
    );
  }

  if (name === "panels") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 7h8M8 11h8M8 15h8M8 19h5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5v4h4M8 12h8m-8 3h8m-8 3h5" />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <span className={`${styles.dots} ${styles.dotsLeft}`} aria-hidden="true" />
      <span className={`${styles.dots} ${styles.dotsRight}`} aria-hidden="true" />
      <span className={styles.arcPattern} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>FAQs</p>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          <h2 id="faq-title">Have a <span>Question?</span></h2>
          <p>Find answers to common questions about our HVAC solutions, services, and support.</p>
        </header>

        <div className={styles.questions}>
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <article className={`${styles.item} ${isOpen ? styles.open : ""}`} key={item.question}>
                <button
                  className={styles.question}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={styles.questionIcon}>
                    <QuestionIcon name={item.icon} />
                  </span>
                  <span className={styles.questionText}>{item.question}</span>
                  <svg className={styles.chevron} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="m4 7 6 6 6-6" />
                  </svg>
                </button>
                <div className={styles.answerClip} id={answerId} aria-hidden={!isOpen}>
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className={styles.contact}>
          <span className={styles.headset} aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M5 17v-2a11 11 0 0 1 22 0v2m-22 0v6a3 3 0 0 0 3 3h3v-9H8a3 3 0 0 0-3 3m22-3v6a3 3 0 0 1-3 3h-3v-9h3a3 3 0 0 1 3 3m-3 6a5 5 0 0 1-5 4h-3" />
              <circle cx="13" cy="30" r="1" />
            </svg>
          </span>
          <div className={styles.contactCopy}>
            <h3>Can&apos;t find what you&apos;re looking for?</h3>
            <p>We&apos;re here to help! Get in touch with our team for personalized assistance.</p>
          </div>
          <a className={styles.contactButton} href="tel:+8801722353205">
            Contact Us
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 10h13m-5-5 5 5-5 5" />
            </svg>
          </a>
        </aside>
      </div>
    </section>
  );
}