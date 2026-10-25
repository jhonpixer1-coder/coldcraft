"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./team-cards.module.css";

const teamMembers = [
  {
    name: "Sadequl Islam",
    phone: "+8801717329793",
    email: "sadequl03@gmail.com",
    card: "/team/sadequl-islam.png",
  },
  {
    name: "Azizur Rahman",
    phone: "+8801722353205",
    email: "azizur.ruet@gmail.com",
    card: "/team/azizur-rahman.png",
  },
  {
    name: "MD. Mehedi Hasan",
    phone: "+8801717522802",
    email: "mehadi.hasan953@gmail.com",
    card: "/team/md-mehedi-hasan.png",
  },
  {
    name: "Md. Mahmudur Rahman",
    phone: "+8801719062420",
    email: "it06029@gmail.com",
    card: "/team/md-mahmudur-rahman.png",
  },
  {
    name: "Proloy Sarker",
    phone: "+8801711478849",
    email: "proloy7@gmail.com",
    card: "/team/proloy-sarker.png",
  },
  {
    name: "Nahid Akter",
    phone: "+8801731368698",
    email: "nahidarow@gmail.com",
    card: "/team/nahid-akter.png",
  },
  {
    name: "Tanvirul Islam",
    phone: "+8801750083464",
    email: "spare.ccel@gmail.com",
    card: "/team/tanvirul-islam.png",
  },
  {
    name: "Ashraful Hassan Siddique",
    phone: "+8801329649181",
    email: "ashrafulhassan035@gmail.com",
    card: "/team/ashraful-hassan-siddique.png",
  },
  {
    name: "Jashim Uddin",
    phone: "+8801736055168",
    email: "designcceltd@gmail.com",
    card: "/team/jashim-uddin.png",
  },
];

type TeamMember = (typeof teamMembers)[number];

export default function TeamCards() {
  const cardDialog = useRef<HTMLDialogElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [shareStatus, setShareStatus] = useState("");

  function openCard(member: TeamMember) {
    setSelectedMember(member);
    cardDialog.current?.showModal();
  }

  async function shareMember(member: TeamMember) {
    const details = `${member.name} | Cold Craft Engineering Ltd.\nPhone / WhatsApp: ${member.phone}\nEmail: ${member.email}\nWeb: https://cce-bd.com/`;
    setShareStatus("");

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${member.name} | Cold Craft Engineering Ltd.`,
          text: details,
          url: `${window.location.origin}${member.card}`,
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        setShareStatus("Could not share these details. Please use the contact links.");
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(details);
      setShareStatus("Contact details copied to the clipboard.");
    } catch {
      setShareStatus("Sharing is unavailable. Please use the WhatsApp or email links.");
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="team-title">
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Cold Craft Engineering</p>
          <h1 id="team-title">The team</h1>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">The team</span>
          </nav>
          <a className={styles.scrollLink} href="#team-members">
            Meet the team
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 3.5v12m-5-5 5 5 5-5" />
            </svg>
          </a>
        </div>
      </section>

      <section
        className={styles.section}
        id="team-members"
        aria-label="Team contact cards"
      >
        <div className={styles.wrap}>
          <div className={styles.grid}>
            {teamMembers.map((member) => (
              <article className={styles.personCard} key={member.name}>
                <button
                  className={styles.imageButton}
                  onClick={() => openCard(member)}
                  type="button"
                  aria-label={`Enlarge ${member.name}'s contact card`}
                >
                  <Image
                    className={styles.contactCardImage}
                    src={member.card}
                    alt={`${member.name} contact card`}
                    width={768}
                    height={768}
                  />
                </button>

                <div className={styles.actions}>
                  <a
                    className={styles.whatsapp}
                    href={`https://wa.me/${member.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a className={styles.action} href={`mailto:${member.email}`}>
                    Email
                  </a>
                  <button
                    className={styles.share}
                    onClick={() => void shareMember(member)}
                    type="button"
                  >
                    Share
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.shareStatus} role="status" aria-live="polite">
            {shareStatus}
          </p>
        </div>
      </section>

      <dialog
        className={styles.previewDialog}
        ref={cardDialog}
        aria-label={selectedMember ? `${selectedMember.name} contact card` : "Team contact card"}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        onClose={() => setSelectedMember(null)}
      >
        {selectedMember && (
          <>
            <Image
              className={styles.previewImage}
              src={selectedMember.card}
              alt={`${selectedMember.name} contact card`}
              width={768}
              height={768}
            />
            <form method="dialog">
              <button className={styles.closeButton}>Close</button>
            </form>
          </>
        )}
      </dialog>
    </main>
  );
}
