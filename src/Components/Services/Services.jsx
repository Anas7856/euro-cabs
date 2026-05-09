import React from "react";
import "./Services.scss";

// Replace with your actual images
import img1 from "../../assets/s1.jpeg";
import img2 from "../../assets/s2.jpeg";
import img3 from "../../assets/s3.jpeg";
import img4 from "../../assets/s4.jpeg";

const services = [
  {
    image: img1,
    title: "Chauffeur Service",
    desc: "Travel in ultimate comfort with our highly trained and professional chauffeurs, ensuring a seamless and stress-free experience.",
  },
  {
    image: img2,
    title: "Airport Transfers",
    desc: "Arrive in style with our punctual and comfortable airport transfer service. Start or end your journey with class.",
  },
  {
    image: img3,
    title: "Corporate Rentals",
    desc: "Elevate your business trips with our tailored corporate rental services, perfect for executives and clients.",
  },
  {
    image: img4,
    title: "Wedding & Events",
    desc: "Make your special moments unforgettable with our high-end cars, perfect for weddings, galas, and events.",
  },
];

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-heading">
          Exceptional Services for a <br />
          <span>Luxurious</span> Drive
        </h2>
        <p className="services-sub">
          Our tailored services redefine the way you travel, ensuring comfort,
          convenience, and class.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-card__img-wrap">
              <img src={s.image} alt={s.title} className="service-card__img" />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <button className="service-card__btn">
                Learn More <ArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
