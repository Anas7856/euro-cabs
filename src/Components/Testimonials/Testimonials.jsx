import Marquee from "react-fast-marquee";
import styles from "./Testimonials.module.scss";

const REVIEWS = [
  {
    name: "James Whitmore",
    title: "Managing Director, Whitmore Capital",
    review:
      "VANTARA has handled all our executive travel for three years. The level of discretion and punctuality is simply unmatched. Our board members ask for them by name.",
    stars: 5,
    initials: "JW",
  },
  {
    name: "Sophia Ellingham",
    title: "Principal, Ellingham & Partners",
    review:
      "I've used dozens of chauffeur services across London and none come close. The Mercedes S-Class was immaculate, the driver anticipated every need. Truly first-class.",
    stars: 5,
    initials: "SE",
  },
  {
    name: "Tariq Al-Rashid",
    title: "Private Client",
    review:
      "From Heathrow to Edinburgh — not a single moment of stress. The journey was smoother than any business class flight I've taken. I won't use anyone else.",
    stars: 5,
    initials: "TA",
  },
  {
    name: "Charlotte Hensley",
    title: "Events Director, Hensley Group",
    review:
      "We coordinated 14 vehicles for our annual gala. Every single car arrived on time, every driver was impeccably presented. Our guests were genuinely impressed.",
    stars: 5,
    initials: "CH",
  },
  {
    name: "Dr. Marcus Reid",
    title: "Consultant Surgeon",
    review:
      "Reliability is everything in my profession. VANTARA has never once let me down — not in five years of daily bookings. An exceptional, professional operation.",
    stars: 5,
    initials: "MR",
  },
  {
    name: "Isabelle Fontaine",
    title: "Creative Director, Fontaine Studio",
    review:
      "The attention to detail is extraordinary. My preferences are remembered without being asked. It feels less like a car service and more like a personal concierge.",
    stars: 5,
    initials: "IF",
  },
  {
    name: "Oliver Bancroft",
    title: "Senior Partner, Bancroft Legal",
    review:
      "Confidentiality matters enormously in my line of work. VANTARA understands this without it ever needing to be said. Impeccable, every single time.",
    stars: 5,
    initials: "OB",
  },
  {
    name: "Priya Nair",
    title: "Head of Strategy, NairTech",
    review:
      "I booked a last-minute airport run at 4am — responded in minutes, pristine car, professional driver. That's the kind of service that builds lifelong loyalty.",
    stars: 5,
    initials: "PN",
  },
];

const StarIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="#c89938"
    stroke="none"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ReviewCard = ({ name, title, review, stars, initials }) => (
  <article className={styles.card}>
    <div className={styles.cardTop}>
      <div className={styles.avatar} aria-hidden="true">
        {initials}
      </div>
      <div className={styles.meta}>
        <span className={styles.name}>{name}</span>
        <span className={styles.clientTitle}>{title}</span>
      </div>
    </div>

    <div className={styles.stars} aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: stars }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>

    <blockquote className={styles.quote}>
      <span className={styles.quoteOpen}>&ldquo;</span>
      {review}
      <span className={styles.quoteClose}>&rdquo;</span>
    </blockquote>
  </article>
);

export default function Testimonials() {
  const firstHalf = REVIEWS.slice(0, Math.ceil(REVIEWS.length / 2));
  const secondHalf = REVIEWS.slice(Math.ceil(REVIEWS.length / 2));

  return (
    <section
      className={styles.section}
      id="reviews"
      aria-labelledby="reviews-heading"
    >
      {/* Glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.header}>
        <div className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>Client Testimonials</span>
          <span className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.heading} id="reviews-heading">
          Trusted by Those Who <span>Demand</span> the Best
        </h2>

        <p className={styles.desc}>
          Our reputation is built on thousands of flawless journeys and the
          trust of clients who accept nothing less than extraordinary.
        </p>

        {/* Aggregate rating */}
        <div
          className={styles.rating}
          aria-label="Average rating 5 out of 5 based on 3200 journeys"
        >
          <div className={styles.ratingStars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className={styles.ratingNum}>5.0</span>
          <span className={styles.ratingLabel}>from 3,200+ journeys</span>
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className={styles.marqueeWrap}>
        <Marquee
          speed={38}
          gradient
          gradientColor="#000000"
          gradientWidth={120}
          pauseOnHover
        >
          {firstHalf.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </Marquee>
      </div>

      {/* Row 2 — right to left */}
      <div className={styles.marqueeWrap}>
        <Marquee
          speed={32}
          direction="right"
          gradient
          gradientColor="#000000"
          gradientWidth={120}
          pauseOnHover
        >
          {secondHalf.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
