import Marquee from "react-fast-marquee";
import styles from "./ImageScroller.module.scss";

const IMAGES_ROW_1 = [
  {
    src: "/images/fleet/mercedes-s-class.jpg",
    alt: "Mercedes-Benz S-Class",
    label: "S-Class",
  },
  {
    src: "/images/locations/heathrow.jpg",
    alt: "Heathrow Terminal 5",
    label: "Heathrow",
  },
  {
    src: "/images/fleet/range-rover.jpg",
    alt: "Range Rover Autobiography",
    label: "Range Rover",
  },
  {
    src: "/images/locations/canary-wharf.jpg",
    alt: "Canary Wharf London",
    label: "Canary Wharf",
  },
  { src: "/images/fleet/bmw-7.jpg", alt: "BMW 7 Series", label: "7 Series" },
  {
    src: "/images/locations/oxford-street.jpg",
    alt: "Oxford Street London",
    label: "Oxford Street",
  },
  {
    src: "/images/fleet/v-class.jpg",
    alt: "Mercedes-Benz V-Class",
    label: "V-Class",
  },
  {
    src: "/images/locations/edinburgh.jpg",
    alt: "Edinburgh Scotland",
    label: "Edinburgh",
  },
];

const IMAGES_ROW_2 = [
  {
    src: "/images/locations/mayfair.jpg",
    alt: "Mayfair London",
    label: "Mayfair",
  },
  {
    src: "/images/fleet/eqs.jpg",
    alt: "Mercedes-Benz EQS Electric",
    label: "EQS Electric",
  },
  {
    src: "/images/locations/gatwick.jpg",
    alt: "Gatwick Airport",
    label: "Gatwick",
  },
  {
    src: "/images/fleet/tesla-s.jpg",
    alt: "Tesla Model S Plaid",
    label: "Tesla S",
  },
  {
    src: "/images/locations/chelsea.jpg",
    alt: "Chelsea London",
    label: "Chelsea",
  },
  {
    src: "/images/fleet/rolls.jpg",
    alt: "Rolls-Royce Phantom",
    label: "Phantom",
  },
  {
    src: "/images/locations/manchester.jpg",
    alt: "Manchester City Centre",
    label: "Manchester",
  },
  {
    src: "/images/fleet/bentley.jpg",
    alt: "Bentley Flying Spur",
    label: "Flying Spur",
  },
];

// Fallback placeholder when image fails to load
const PlaceholderSVG = () => (
  <svg
    className={styles.placeholder}
    viewBox="0 0 320 200"
    fill="none"
    aria-hidden="true"
  >
    <rect width="320" height="200" fill="#0a0a0a" />
    <rect
      x="1"
      y="1"
      width="318"
      height="198"
      stroke="rgba(200,153,56,0.12)"
      strokeWidth="1"
      fill="none"
      rx="3"
    />
    {/* Simple car silhouette */}
    <g
      opacity="0.12"
      stroke="#c89938"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M80 122 L90 100 L120 90 L200 90 L230 100 L240 122 Z" />
      <circle cx="110" cy="128" r="14" />
      <circle cx="210" cy="128" r="14" />
      <path d="M96 122 L100 104 L126 96 L194 96 L224 104 L224 122" />
      <path d="M130 96 L140 90" />
      <path d="M190 96 L192 90" />
    </g>
  </svg>
);

const ImageCard = ({ src, alt, label }) => (
  <figure className={styles.imageCard}>
    <div className={styles.imgWrap}>
      <img
        src={src}
        alt={alt}
        className={styles.img}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling?.style.setProperty(
            "display",
            "flex",
          );
        }}
      />
      <div className={styles.fallback} style={{ display: "none" }}>
        <PlaceholderSVG />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
    </div>
    {label && <figcaption className={styles.caption}>{label}</figcaption>}
  </figure>
);

export default function ImageScroller() {
  return (
    <section
      className={styles.section}
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      {/* Glow */}
      <div className={styles.sectionGlow} aria-hidden="true" />

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>Fleet & Destinations</span>
          <span className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.heading} id="gallery-heading">
          Everywhere You Need to <span>Be</span>
        </h2>

        <p className={styles.desc}>
          A curated fleet maintained to concours standard, ready for any journey
          — across London, across the country, across the continent.
        </p>
      </div>

      {/* Row 1 — LTR */}
      <div className={styles.row}>
        <Marquee
          speed={44}
          gradient
          gradientColor="#000000"
          gradientWidth={160}
          pauseOnHover
        >
          {IMAGES_ROW_1.map((img) => (
            <ImageCard key={img.src} {...img} />
          ))}
        </Marquee>
      </div>

      {/* Row 2 — RTL */}
      <div className={styles.row}>
        <Marquee
          speed={36}
          direction="right"
          gradient
          gradientColor="#000000"
          gradientWidth={160}
          pauseOnHover
        >
          {IMAGES_ROW_2.map((img) => (
            <ImageCard key={img.src} {...img} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
