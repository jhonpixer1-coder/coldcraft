"use client";

import { useState, type FormEvent } from "react";
import styles from "./career-application.module.css";

export default function CareerApplication() {
  const [fileName, setFileName] = useState("");
  const [gmailComposeUrl, setGmailComposeUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const cv = formData.get("cv");

    if (!(cv instanceof File) || cv.size === 0) {
      return;
    }

    const composeUrl = new URL("https://mail.google.com/mail/");
    composeUrl.searchParams.set("view", "cm");
    composeUrl.searchParams.set("fs", "1");
    composeUrl.searchParams.set("to", "azizur.ruet@gmail.com");
    composeUrl.searchParams.set("su", `Career application: ${name}`);
    composeUrl.searchParams.set(
      "body",
      [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        `CV to attach: ${cv.name}`,
        "",
        "Please attach my CV to this email before sending.",
      ].join("\n"),
    );

    const url = composeUrl.toString();
    setGmailComposeUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className={styles.section} aria-labelledby="career-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Careers at Cold Craft</p>
          <h2 id="career-title">Build your career in HVAC engineering.</h2>
          <p>
            We&apos;re always looking for talented, passionate people to join
            the team. Send your CV and we&apos;ll be in touch when a role fits.
          </p>
        </div>

        <div className={styles.panel}>
          <h3>Apply with your CV</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <label className={styles.field}>
                <span>
                  Name<span className={styles.required}>*</span>
                </span>
                <input autoComplete="name" name="name" required />
              </label>
              <label className={styles.field}>
                <span>
                  Email<span className={styles.required}>*</span>
                </span>
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@email.com"
                  type="email"
                  required
                />
              </label>
            </div>

            <label className={styles.fileField}>
              <span>
                CV<span className={styles.required}>*</span>
              </span>
              <span className={styles.fileControl}>
                <span className={styles.chooseFile}>Choose file</span>
                <span className={styles.fileName}>
                  {fileName || "PDF or Word, no file chosen"}
                </span>
                <input
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  aria-label="Choose your CV (PDF or Word document)"
                  name="cv"
                  onChange={(event) =>
                    setFileName(event.currentTarget.files?.[0]?.name ?? "")
                  }
                  required
                  type="file"
                />
              </span>
            </label>

            <button className={styles.submit} type="submit">
              Send application
            </button>
            <p className={styles.hint}>
              Gmail will open with your details. Attach your CV there before
              sending.
            </p>
            {gmailComposeUrl && (
              <p className={styles.status} aria-live="polite">
                Application draft ready for {fileName}. Attach the file in
                Gmail and press Send. If Gmail didn&apos;t open,{" "}
                <a
                  href={gmailComposeUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  open the draft
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
