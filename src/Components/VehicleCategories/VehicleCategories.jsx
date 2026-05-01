import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VehicleCategories.scss";

const categories = [
  {
    label: "All Vehicles",
    image:
      "https://framerusercontent.com/images/C2MSRdGKD0s7Qig4WxDcVi57ZQ.webp?width=1080&height=1080",
    href: "#",
  },
  {
    label: "Sedan",
    image:
      "https://framerusercontent.com/images/aWmfcZdUBcJLfPjBnL7qF0KeayU.webp?width=1080&height=1080",
    href: "#",
  },
  {
    label: "SUV",
    image:
      "https://framerusercontent.com/images/Tm6aGm17QQN7S6tkFAvU9h9JRLk.webp?width=1080&height=1080",
    href: "#",
  },
  {
    label: "Truck",
    image:
      "https://framerusercontent.com/images/2gb30RJNDG6qdadLF1omdAgFs7Y.webp?width=1080&height=1080",
    href: "#",
  },
  {
    label: "Electric",
    image:
      "https://framerusercontent.com/images/C2MSRdGKD0s7Qig4WxDcVi57ZQ.webp?width=1080&height=1080",
    href: "#",
  },
];

const VehicleCategories = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3.08,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.6 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1.1 },
      },
    ],
  };

  return (
    <section className="vehicle-categories">
      {/* Header row */}
      <div className="vc-header">
        <div className="vc-header__left">
          <span className="vc-eyebrow">· Vehicle Categories</span>
          <h2 className="vc-title">Browse by Vehicle Type</h2>
        </div>
        <div className="vc-header__arrows">
          <button
            className="vc-arrow"
            aria-label="Previous"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            className="vc-arrow"
            aria-label="Next"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="vc-slider-wrap">
        <Slider ref={sliderRef} {...settings}>
          {categories.map((cat) => (
            <div key={cat.label} className="vc-slide">
              <a href={cat.href} className="vc-card">
                <div className="vc-card__img-wrap">
                  <img src={cat.image} alt={cat.label} />
                </div>
                <span className="vc-card__label">{cat.label}</span>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default VehicleCategories;
