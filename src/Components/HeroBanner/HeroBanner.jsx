import React from "react";
import "./HeroBanner.scss";
import bannerBg from "../../assets/banner-bg.jpg"; // your full-width car/road image

const HeroBanner = () => {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content">
        <p className="hero-banner__label">
          Premium Cab Services · United Kingdom
        </p>
        <h2 className="hero-banner__title">
          Your Journey, <br /> <span>Redefined.</span>
        </h2>
        <p className="hero-banner__desc">
          Experience the pinnacle of luxury travel across the UK — from airport
          transfers to bespoke chauffeur experiences, crafted for those who
          expect the best.
        </p>
        <button className="hero-banner__btn">
          Book Your Ride
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
