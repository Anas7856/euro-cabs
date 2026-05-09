import React from "react";
import logo from "../../assets/logo.png";
import "./footer.scss";

const Footer = () => {
  const navLinks = ["Fleet", "Drive With Us", "About Us", "Contact Us"];

  const services = [
    "Airport Transfers",
    "Corporate Travel",
    "Long-Distance Journeys",
    "Events & Occasions",
    "Roadshows & Tours",
    "VIP Protection",
  ];

  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="footer__top">
        <div className="container-fluid">
          <div className="footer__grid">
            {/* ── Col 1: Brand ── */}
            <div className="footer__brand">
              <a href="#" className="footer__logo-link">
                <img src={logo} alt="Vantara Logo" className="footer__logo" />
              </a>
              <p className="footer__desc">
                VANTARA delivers uncompromising precision and discretion across
                the United Kingdom. Every journey, flawlessly executed — from
                private airport transfers to bespoke corporate travel.
              </p>
              <div className="footer__socials">
                {/* Instagram */}
                <a
                  href="#"
                  className="footer__social-btn"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.5"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="footer__social-btn"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="#"
                  className="footer__social-btn"
                  aria-label="X / Twitter"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l16 16M4 20L20 4" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Col 2: Navigation ── */}
            <div className="footer__col">
              <h4 className="footer__col-title">Navigation</h4>
              <ul className="footer__links">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer__link">
                      <span className="footer__link-arrow">→</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Services ── */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__links">
                {services.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer__link">
                      <span className="footer__link-arrow">→</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact ── */}
            <div className="footer__col">
              <h4 className="footer__col-title">Get in Touch</h4>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z" />
                    </svg>
                  </span>
                  <div>
                    <span className="footer__contact-label">Phone</span>
                    <a
                      href="tel:+442012345678"
                      className="footer__contact-value"
                    >
                      +44 20 1234 5678
                    </a>
                  </div>
                </li>

                <li className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <span className="footer__contact-label">Email</span>
                    <a
                      href="mailto:reservations@vantara.co.uk"
                      className="footer__contact-value"
                    >
                      reservations@vantara.co.uk
                    </a>
                  </div>
                </li>

                <li className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <span className="footer__contact-label">Address</span>
                    <span className="footer__contact-value">
                      14 Mayfair Court, London W1K 3AP
                    </span>
                  </div>
                </li>

                <li className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <svg
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
                  </span>
                  <div>
                    <span className="footer__contact-label">Availability</span>
                    <span className="footer__contact-value">
                      24 / 7 — Always Available
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer__divider" />

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="container-fluid">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              © {new Date().getFullYear()} VANTARA Chauffeur Services Ltd. All
              rights reserved.
            </p>
            <div className="footer__legal-links">
              <a href="#" className="footer__legal-link">
                Privacy Policy
              </a>
              <span className="footer__legal-dot" />
              <a href="#" className="footer__legal-link">
                Terms of Service
              </a>
              <span className="footer__legal-dot" />
              <a href="#" className="footer__legal-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
