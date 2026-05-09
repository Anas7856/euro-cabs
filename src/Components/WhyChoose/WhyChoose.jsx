import React from "react";
import "./WhyChoose.scss";

const reasons = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safety First",
    desc: "Every vehicle is rigorously inspected and every chauffeur is background-checked, licensed, and trained to the highest standard.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Always On Time",
    desc: "Punctuality is our promise. We track your flight, monitor traffic, and ensure you arrive exactly when you need to.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11l5 5v5a2 2 0 0 1-2 2z" />
        <polyline points="16 17 16 13 8 13 8 17" />
        <polyline points="8 7 8 3 13 3" />
      </svg>
    ),
    title: "Premium Fleet",
    desc: "From Rolls-Royce limousines to executive SUVs, our meticulously maintained fleet delivers unmatched comfort and elegance.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Personal Chauffeurs",
    desc: "Our professional chauffeurs are more than drivers — they are discreet, courteous, and dedicated to your comfort.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "UK-Wide Coverage",
    desc: "Whether it's London, Edinburgh, Bath, or the Cotswolds — we operate across the entire United Kingdom, 24/7.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. What you see is what you pay — luxury made accessible and honest.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-header">
        <p className="why-label">Why Choose Us</p>
        <h2 className="why-heading">
          The Standard of <span>Excellence</span>
        </h2>
        <p className="why-sub">
          Six reasons thousands of travellers trust us for every journey across
          the UK.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <div className="why-card" key={i}>
            <div className="why-card__icon">{r.icon}</div>
            <h3 className="why-card__title">{r.title}</h3>
            <p className="why-card__desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
