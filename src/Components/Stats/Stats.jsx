import React, { useEffect, useRef, useState } from "react";
import "./Stats.scss";

const statsData = [
  { target: 150, suffix: "+", label: ["Luxury Cars in", "Our Fleet"] },
  { target: 8000, suffix: "+", label: ["Satisfied Clients", "Worldwide"] },
  { target: 10, suffix: "+ Years", label: ["Providing Premium", "Services"] },
  { target: 4.9, suffix: "", label: ["Customer", "Ratings"], isDecimal: true },
];

function useCountUp(target, isDecimal, started) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    let startTime = null;

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      setCount(isDecimal ? parseFloat(value.toFixed(1)) : Math.floor(value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, isDecimal]);

  return count;
}

const StatItem = ({ target, suffix, label, isDecimal, started }) => {
  const count = useCountUp(target, isDecimal, started);

  return (
    <div className="stat-item">
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">
        {label[0]}
        {label[1]}
      </span>
    </div>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <h2 className="stats-heading">Step Into the World of Luxury</h2>
      <p className="stats-subheading">
        Experience, trust, and unmatched service crafted over the years.
      </p>
      <div className="stats-grid">
        {statsData.map((stat, i) => (
          <React.Fragment key={i}>
            <StatItem {...stat} started={started} />
            {i < statsData.length - 1 && <div className="stats-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
