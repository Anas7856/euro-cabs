import React from "react";
import "./BestLocation.scss";
import l1 from "../../assets/Londres.jpeg";
import l2 from "../../assets/download - 2026-05-09T233730.405.jpeg";

import l3 from "../../assets/download - 2026-05-09T233818.155.jpeg";

import l4 from "../../assets/What To Do In London + London Travel Tips for Any Season!.jpeg";

const locations = [
  {
    region: "England · Capital",
    title: "London",
    desc: "A timeless metropolis where royal heritage meets contemporary luxury. From Mayfair's grand hotels to the Thames at dusk, London captivates at every turn.",
    image: l1,
    layout: "image-first",
  },
  {
    region: "England · Countryside",
    title: "The Cotswolds",
    desc: "Honey-stone villages, rolling meadows, and boutique manor retreats define England's most beloved countryside.",
    image: l2,
    layout: "text-first",
  },
  {
    region: "Scotland · Historic",
    title: "Edinburgh",
    desc: "A city of dramatic castle silhouettes and cobbled closes. Edinburgh's old town and vibrant arts scene enchant every visitor.",
    image: l3,
    layout: "image-first",
  },
  {
    region: "England · Georgian",
    title: "Bath",
    desc: "Elegant Georgian architecture frames ancient Roman baths in this UNESCO World Heritage city — a sanctuary of culture and charm.",
    image: l4,
    layout: "text-first",
  },
];

const LocationCard = ({ region, title, desc, image, layout }) => {
  const isImageFirst = layout === "image-first";

  return (
    <div className="loc-card">
      {isImageFirst && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        <span className="card-region">{region}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
      </div>
      {!isImageFirst && <img src={image} alt={title} className="card-image" />}
    </div>
  );
};

const BestLocation = () => {
  return (
    <section className="best-location">
      {/* <p className="section-label">United Kingdom</p> */}
      <h2 className="section-heading">
        Best <span>Locations</span> in the UK
      </h2>
      <p className="section-sub">
        Handpicked destinations for the discerning traveller.
      </p>

      <div className="cards-wrapper">
        {locations.map((loc, i) => (
          <LocationCard key={i} {...loc} />
        ))}
      </div>
    </section>
  );
};

export default BestLocation;
