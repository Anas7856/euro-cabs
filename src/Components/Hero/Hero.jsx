import React from "react";
import "./Hero.scss";

// Splits a string into individually animated word spans
const SplitText = ({ text, baseDelay = 0.18 }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span className="word-wrap" key={i}>
          <span
            style={{
              animationDelay: `${baseDelay + i * 0.07}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </>
  );
};

const Hero = () => {
  return (
    <div className="Hero">
      <div className="row">
        <div className="col-12">
          <div className="hero-content">
            <h1>
              <SplitText
                text="Find New and Pre-Owned Cars for Sale Today"
                baseDelay={0.2}
              />
            </h1>
            <p>
              Browse a wide selection of new and used vehicles, ready for
              immediate purchase or inquiry.
            </p>
            <div className="hero-button-box">
              <button>Explore Vehicles</button>
              <button className="active">Search Vehicles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
