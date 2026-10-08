"use client";

import { useState, type FormEvent } from "react";
import styles from "./contact-inquiry.module.css";

const inquiryTypes = [
  "HVAC system",
  "Cold storage",
  "Industrial refrigeration",
  "Service & maintenance",
  "Something else",
];

export default function ContactInquiry() {
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0]);
  const [submissionMessage, setSubmissionMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const subject = `Website inquiry: ${inquiryType}`;
    const body = [
      `Inquiry type: ${inquiryType}`,
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Project details:",
      project || "Not provided",
    ].join("\n");

    window.location.href = `mailto:midnght23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmissionMessage(
      "Your email app should open with your inquiry ready to send. If it doesn't, email midnght23@gmail.com directly.",
    );
  }

  return (
    <section className={styles.panel} aria-labelledby="inquiry-title">
      <h2 id="inquiry-title">Send an inquiry</h2>
      <p className={styles.intro}>
        The more we know about the site, the faster we can quote.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.serviceFieldset}>
          <legend>What do you need help with?</legend>
          <div className={styles.serviceOptions}>
            {inquiryTypes.map((type) => (
              <label
                className={`${styles.serviceOption} ${inquiryType === type ? styles.selected : ""}`}
                key={type}
              >
                <input
                  type="radio"
                  name="inquiryType"
                  value={type}
                  checked={inquiryType === type}
                  onChange={() => setInquiryType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.fields}>
          <label className={styles.field}>
            <span>First name<span className={styles.required}>*</span></span>
            <input autoComplete="given-name" name="firstName" required />
          </label>
          <label className={styles.field}>
            <span>Last name</span>
            <input autoComplete="family-name" name="lastName" />
          </label>
          <label className={styles.field}>
            <span>Email<span className={styles.required}>*</span></span>
            <input
              autoComplete="email"
              name="email"
              placeholder="you@company.com"
              type="email"
              required
            />
          </label>
          <label className={styles.field}>
            <span>Phone<span className={styles.required}>*</span></span>
            <input
              autoComplete="tel"
              name="phone"
              placeholder="+880 1XXX XXXXXX"
              type="tel"
              required
            />
          </label>
          <label className={`${styles.field} ${styles.projectField}`}>
            <span>Tell us about the project</span>
            <textarea
              name="project"
              placeholder="Site type, approximate area, and when you need it done."
              rows={4}
            />
          </label>
        </div>

        <button className={styles.submit} type="submit">
          Send inquiry
        </button>
        <p className={styles.hint}>Fields marked * are required.</p>
        <p className={styles.status} aria-live="polite">
          {submissionMessage}
        </p>
      </form>
    </section>
  );
}
