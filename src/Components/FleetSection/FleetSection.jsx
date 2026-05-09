import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./FleetSection.scss";

// Replace these with your actual car images
import car1 from "../../assets/Rolls-Royce.jpeg";
import car2 from "../../assets/Auto bene di lusso_ Perché mantenerla oggi costa sempre di più secondo l’ingegnere Joseba Barrenengoa -.jpeg";
import car3 from "../../assets/BMW 320i.jpeg";
import car4 from "../../assets/download - 2026-05-10T003009.247.jpeg";
import car5 from "../../assets/It’s coming girl 💕.jpeg";

const fleet = [
  {
    name: "Rolls-Royce Limousine",
    seats: 6,
    luggage: 6,
    price: "$2,500",
    image: car1,
  },
  {
    name: "Mercedes-Benz ",
    seats: 5,
    luggage: 3,
    price: "$1,800",
    image: car2,
  },
  {
    name: "BMW 320i",
    seats: 14,
    luggage: 8,
    price: "$2,100",
    image: car3,
  },
  {
    name: "Cadillac Escalade",
    seats: 8,
    luggage: 2,
    price: "$1,600",
    image: car4,
  },
  {
    name: "Bentley Mulsanne",
    seats: 4,
    luggage: 4,
    price: "$3,200",
    image: car5,
  },
];

// Lightweight SVG icons — stroke white, no fill
const SeatIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.7)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LuggageIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.7)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const FleetSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(max-width: 600px)": { slidesToScroll: 1 },
    },
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="fleet-section">
      {/* Header row */}
      <div className="fleet-header">
        <div className="fleet-header-left">
          <h2 className="fleet-heading">
            Explore Our <span>Exquisite</span> Fleet
          </h2>
          <p className="fleet-sub">
            From sleek sports cars to executive sedans, our fleet caters to
            every occasion and style.
          </p>
        </div>
        <div className="fleet-nav">
          <button
            className="nav-btn"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <button
            className="nav-btn nav-btn--active"
            onClick={scrollNext}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="fleet-embla" ref={emblaRef}>
        <div className="fleet-embla__container">
          {fleet.map((car, i) => (
            <div className="fleet-embla__slide" key={i}>
              <div className="fleet-card">
                <div className="fleet-card__img-wrap">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="fleet-card__img"
                  />
                </div>
                <div className="fleet-card__body">
                  <h3 className="fleet-card__name">{car.name}</h3>
                  <div className="fleet-card__meta">
                    <div className="meta-group">
                      <span className="meta-item">
                        <SeatIcon /> {car.seats}
                      </span>
                      <span className="meta-item">
                        <LuggageIcon /> {car.luggage}
                      </span>
                    </div>
                    <span className="fleet-card__price">
                      {car.price}
                      <span className="price-day">/day</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
