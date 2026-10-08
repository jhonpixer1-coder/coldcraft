import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ContactInquiry from "@/components/contact-inquiry";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Cold Craft Engineering Ltd.",
  description:
    "Tell Cold Craft Engineering about your HVAC, cold storage, or industrial refrigeration project.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader activePage="Contact" />
      <main className={styles.page}>
        <div className={styles.background} aria-hidden="true" />
        <div className={styles.content}>
          <section className={styles.intro} aria-labelledby="contact-title">
            <p className={styles.officeHours}>
              <span aria-hidden="true" />
              Office hours · Sat–Thu, 9:00 AM–6:00 PM
            </p>
            <h1 id="contact-title">Tell us what you need to keep cool.</h1>
            <p className={styles.description}>
              HVAC, cold storage and industrial refrigeration. Share a few
              details and an engineer will reply within one working day.
            </p>

            <div className={styles.contactMethods}>
              <a className={styles.contactCard} href="tel:+8801722353205">
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M7.2 3.5H4.8a1.3 1.3 0 0 0-1.3 1.4c.8 8.3 7 14.5 15.3 15.3a1.3 1.3 0 0 0 1.4-1.3v-2.4a1.3 1.3 0 0 0-1.1-1.3l-3.2-.5a1.3 1.3 0 0 0-1.2.4l-1.4 1.4a15.2 15.2 0 0 1-5-5l1.4-1.4a1.3 1.3 0 0 0 .4-1.2l-.5-3.2a1.3 1.3 0 0 0-1.4-1.2Z" />
                  </svg>
                </span>
                <span className={styles.contactText}>
                  <small>Call the office</small>
                  <strong>+880 1722 353205</strong>
                </span>
              </a>

              <a className={styles.contactCard} href="mailto:service@cce-bd.com">
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                    <path d="m4.5 7 7.5 6 7.5-6" />
                  </svg>
                </span>
                <span className={styles.contactText}>
                  <small>Email service requests</small>
                  <strong>service@cce-bd.com</strong>
                </span>
              </a>

              <a
                className={styles.contactCard}
                href="https://wa.me/8801722353205"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z" />
                    <path d="M9 9.2c.7 2 1.8 3.1 3.8 3.8" />
                  </svg>
                </span>
                <span className={styles.contactText}>
                  <small>Message us on WhatsApp</small>
                  <strong>Start a chat</strong>
                </span>
              </a>
            </div>
          </section>

          <ContactInquiry />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
