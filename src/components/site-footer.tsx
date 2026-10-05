import Link from "next/link";
import styles from "./site-footer.module.css";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/#products" },
  { label: "Contact Us", href: "/#contact" },
];

function ContactIcon({ name }: { name: "pin" | "phone" | "mail" | "clock" }) {
  if (name === "pin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.2 3.5H4.8a1.3 1.3 0 0 0-1.3 1.4c.8 8.3 7 14.5 15.3 15.3a1.3 1.3 0 0 0 1.4-1.3v-2.4a1.3 1.3 0 0 0-1.1-1.3l-3.2-.5a1.3 1.3 0 0 0-1.2.4l-1.4 1.4a15.2 15.2 0 0 1-5-5l1.4-1.4a1.3 1.3 0 0 0 .4-1.2l-.5-3.2a1.3 1.3 0 0 0-1.4-1.2Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5v5.8l3.7 2.2" />
    </svg>
  );
}

function SocialIcon({ name }: { name: "facebook" | "x" | "linkedin" | "instagram" | "youtube" }) {
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H8v3.1h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 3h2.8l-6.1 7 7.2 11h-5.6l-4.4-6.8-5.9 6.8H4l6.5-7.5L3.6 3h5.7l4 6.3L18.9 3Zm-1 16h1.5L8.4 4.9H6.8L17.9 19Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.5H3.4V20h3.1V8.5ZM5 3.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.6 13.4c0-3.4-1.8-5-4.2-5a3.7 3.7 0 0 0-3.3 1.8V8.5H10V20h3.1v-5.7c0-1.5.3-3 2.2-3s2.1 1.7 2.1 3.1V20h3.2v-6.6Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className={styles.socialDot} cx="17.5" cy="6.8" r="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 7.2a2.5 2.5 0 0 0-1.8-1.8C17.6 5 12 5 12 5s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 7.2a26 26 0 0 0-.4 4.8 26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.4 19 12 19 12 19s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.8 26 26 0 0 0-.4-4.8Z" />
      <path className={styles.playIcon} d="m10 15.5 5-3.5-5-3.5v7Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.columns}>
          <section className={styles.brandColumn} aria-label="About Cold Craft Engineering">
            <Link className={styles.brand} href="/#home" aria-label="Cold Craft Engineering home">
              <svg className={styles.brandMark} viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="22.5" />
                <path d="M24 8v7m0 18v7M8 24h7m18 0h7M12.7 12.7l5 5m12.6 12.6 5 5m0-23.2-5 5m-12.6 12.6-5 5" />
                <path d="m24 17 2.7 4.3 4.8 2.7-4.8 2.7L24 31l-2.7-4.3-4.8-2.7 4.8-2.7L24 17Z" />
                <circle cx="24" cy="24" r="2.7" />
              </svg>
              <span className={styles.brandWords}>
                <span><strong>Cold Craft</strong></span>
                <span>Engineering Ltd.</span>
                <small>Serving the Nation</small>
              </span>
            </Link>
            <p className={styles.summary}>
              We provide high-quality HVAC systems, cleanroom solutions, and industrial engineering services with a commitment to excellence, reliability, and innovation.
            </p>
            <nav className={styles.socials} aria-label="Social media">
              <a href="https://www.facebook.com/" aria-label="Facebook"><SocialIcon name="facebook" /></a>
              <a href="https://x.com/" aria-label="X"><SocialIcon name="x" /></a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
              <a href="https://www.instagram.com/" aria-label="Instagram"><SocialIcon name="instagram" /></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><SocialIcon name="youtube" /></a>
            </nav>
          </section>

          <nav className={styles.quickLinks} aria-label="Footer navigation">
            <h2 className={styles.columnTitle}>Quick Links</h2>
            <span className={styles.titleRule} aria-hidden="true" />
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span aria-hidden="true">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className={styles.contactColumn} aria-labelledby="footer-contact-title">
            <h2 className={styles.columnTitle} id="footer-contact-title">Contact Info</h2>
            <span className={styles.titleRule} aria-hidden="true" />
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}><ContactIcon name="pin" /></span>
                <a href="https://www.google.com/maps/search/?api=1&query=2%2FM%2F3+Golden+Street%2C+Ring+Road%2C+Shamoly%2C+Mohammadpur%2C+Dhaka-1207" target="_blank" rel="noreferrer">
                  2/M/3 Golden Street, Ring Road, Shamoly, Mohammadpur, Dhaka-1207
                </a>
              </li>
              <li>
                <span className={styles.contactIcon}><ContactIcon name="phone" /></span>
                <a href="tel:+8801722353205">+880 1722 353 205</a>
              </li>
              <li>
                <span className={styles.contactIcon}><ContactIcon name="mail" /></span>
                <a href="mailto:info@cce-bd.com">info@cce-bd.com</a>
              </li>
              <li>
                <span className={styles.contactIcon}><ContactIcon name="clock" /></span>
                <span>Sat-Thu: 09:00 AM - 06:00 PM<br /><strong>Closed on Friday</strong></span>
              </li>
            </ul>
          </section>

          <section className={styles.touchColumn} aria-labelledby="footer-touch-title">
            <h2 className={styles.columnTitle} id="footer-touch-title">Get In Touch</h2>
            <span className={styles.titleRule} aria-hidden="true" />
            <p>We&apos;re here to help! Reach out to us for any inquiries or support.</p>
            <a className={styles.contactButton} href="tel:+8801722353205">
              Contact Us
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 10h13m-5-5 5 5-5 5" />
              </svg>
            </a>
            <a
              className={styles.map}
              href="https://www.google.com/maps/search/?api=1&query=2%2FM%2F3+Golden+Street%2C+Ring+Road%2C+Shamoly%2C+Mohammadpur%2C+Dhaka-1207"
              target="_blank"
              rel="noreferrer"
              aria-label="View Cold Craft Engineering at 2/M/3 Golden Street, Shamoly, Mohammadpur on Google Maps"
            >
              <span className={styles.mapShape} aria-hidden="true" />
              <span className={styles.mapPin} aria-hidden="true"><ContactIcon name="pin" /></span>
            </a>
          </section>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Cold Craft Engineering Ltd. All Rights Reserved.</p>
          <nav aria-label="Legal links">
            <a href="mailto:info@cce-bd.com?subject=Privacy%20Policy">Privacy Policy</a>
            <span aria-hidden="true" />
            <a href="mailto:info@cce-bd.com?subject=Terms%20and%20Conditions">Terms &amp; Conditions</a>
          </nav>
          <a className={styles.whatsapp} href="https://wa.me/8801722353205" aria-label="Chat with us on WhatsApp">
            <span className={styles.whatsappIcon}>
              <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M23 13.6a9.2 9.2 0 0 1-13.6 8.1L4 23l1.4-5.1A9.2 9.2 0 1 1 23 13.6Z" />
                <path d="M10 9.5c.4-.8.7-.8 1.1-.8.3 0 .5 0 .7.5l.8 1.8c.1.3.1.5-.1.7l-.7.9c-.2.2-.2.4-.1.7.7 1.3 1.8 2.4 3.1 3.1.3.2.5.1.7-.1l.9-1c.2-.2.4-.2.7-.1l1.8.9" />
              </svg>
            </span>
            <span className={styles.whatsappText}><strong>Chat with us</strong><small>We&apos;re online!</small></span>
          </a>
        </div>
      </div>
    </footer>
  );
}