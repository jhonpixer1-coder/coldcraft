import Image from "next/image";
import Link from "next/link";
import styles from "./site-header.module.css";

const navigation = ["Home", "About", "Projects", "Products", "Contact"];

export default function SiteHeader({ activePage = "Home" }: { activePage?: string } = {}) {
  return (
    <header className={styles.header} id="home">
      <div className={styles.utilityBar}>
        <div className={styles.inner}>
          <div className={styles.contactDetails}>
            <a className={styles.contactLink} href="mailto:info@cce-bd.com">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                <path d="m4.5 7 7.5 6 7.5-6" />
              </svg>
              <span>info@cce-bd.com</span>
            </a>
            <a className={styles.contactLink} href="tel:+8801722353205">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M7.2 3.5H4.8a1.3 1.3 0 0 0-1.3 1.4c.8 8.3 7 14.5 15.3 15.3a1.3 1.3 0 0 0 1.4-1.3v-2.4a1.3 1.3 0 0 0-1.1-1.3l-3.2-.5a1.3 1.3 0 0 0-1.2.4l-1.4 1.4a15.2 15.2 0 0 1-5-5l1.4-1.4a1.3 1.3 0 0 0 .4-1.2l-.5-3.2a1.3 1.3 0 0 0-1.4-1.2Z" />
              </svg>
              <span>+880 1722 353205</span>
            </a>
          </div>

          <div className={styles.utilityRight}>
            <span className={styles.openStatus}>
              <span className={styles.statusDot} />
              Open now, until 6:00 PM
            </span>
            <div className={styles.socialLinks} aria-label="Social media">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H8v3.1h2.8v8h3.4Z" />
                </svg>
              </a>
              <a href="https://x.com/" aria-label="X">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M18.9 3h2.8l-6.1 7 7.2 11h-5.6l-4.4-6.8-5.9 6.8H4l6.5-7.5L3.6 3h5.7l4 6.3L18.9 3Zm-1 16h1.5L8.4 4.9H6.8L17.9 19Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle className={styles.socialDot} cx="17.5" cy="6.8" r="1" />
                </svg>
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="M21 7.2a2.5 2.5 0 0 0-1.8-1.8C17.6 5 12 5 12 5s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 7.2a26 26 0 0 0-.4 4.8 26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.4 19 12 19 12 19s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.8 26 26 0 0 0-.4-4.8Z" />
                  <path className={styles.playIcon} d="m10 15.5 5-3.5-5-3.5v7Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navigationBar}>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/#home" aria-label="Cold Craft Engineering home">
            <Image
              className={styles.brandLogo}
              src="/logo.png"
              alt="Cold Craft Engineering logo"
              width={220}
              height={80}
              priority
            />
          </Link>

          <nav className={styles.navigation} aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                className={`${styles.navLink} ${item === activePage ? styles.active : ""}`}
                href={item === "Home" ? "/#home" : item === "About" ? "/about" : `/#${item.toLowerCase()}`}
                aria-current={item === activePage ? "page" : undefined}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>

          <a className={styles.quoteButton} href="mailto:info@cce-bd.com?subject=Request%20a%20quote">
            Request a quote
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <path d="M3.5 10h12m-5-5 5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}