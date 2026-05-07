import React from "react";
import "./Hero.scss";
import mercedesImg from "../../assets/magnific_a-black-mercedesbenz-scla_2941732922.png";

const HEADING_WORDS = ["Your", "Ultimate", "Luxury", "Drive", "Awaits"];

const MARQUEE_ROW_ONE = [
  "Airport Transfers",
  "Luxury Cab Service",
  "City Tours",
  "Corporate Rides",
  "Wedding Cars",
  "Chauffeur Service",
  "Long Distance Travel",
  "VIP Transport",
  "Hotel Pickups",
  "Event Transfers",
  "Executive Rentals",
  "24/7 Cab Booking",
];

const MARQUEE_ROW_TWO = [
  "Mercedes-Benz S-Class",
  "BMW 7 Series",
  "Toyota Camry",
  "Honda Civic",
  "Toyota Corolla",
  "Suzuki Cultus",
  "Toyota Prado",
  "Land Cruiser V8",
  "Rolls Royce Ghost",
  "Coaster Bus",
  "Honda BRV",
  "Fortuner 4x4",
];

const renderMarqueeContent = (items) =>
  [...Array(2)].map((_, ri) => (
    <span key={ri} className="marquee-content">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span>{item}</span>
          <span className="marquee-star">✦</span>
        </React.Fragment>
      ))}
    </span>
  ));

const Hero = () => {
  return (
    <div className="Hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-content">
              {/* Badge — same animation as your reference */}
              <div className="hero-badge">
                <div className="badge-inner">
                  <span className="badge-dot" />
                  <span className="badge-text">✦ Premium Collection 2025</span>
                </div>
              </div>

              {/* Heading — same word-by-word reveal */}
              <h1 className="hero-heading reveal-heading">
                {HEADING_WORDS.map((word, i) => (
                  <span className="word" key={i}>
                    <span style={{ animationDelay: `${0.3 + i * 0.07}s` }}>
                      {word === "Ultimate" ? <em>{word}</em> : word}
                    </span>
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="reveal-subtitle">
                Rent the world's finest cars and redefine luxury travel.
              </p>

              {/* Car image */}
              <div className="hero-car reveal-car">
                <img src={mercedesImg} alt="Luxury Mercedes" />
                <div className="car-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Same X marquee as reference — just our colors & content */}
      <div className="hero-marquee-wrapper">
        <div className="marquee-band band-diagonal-right">
          <div className="marquee-track">
            <div className="marquee-inner">
              {renderMarqueeContent(MARQUEE_ROW_ONE)}
            </div>
          </div>
        </div>

        <div className="marquee-band band-diagonal-left">
          <div className="marquee-track">
            <div className="marquee-inner marquee-reverse">
              {renderMarqueeContent(MARQUEE_ROW_TWO)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
