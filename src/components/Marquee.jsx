import React from 'react';
import './Marquee.css';

const ITEMS = [
  'Precision Cuts', 'Beard Sculpting', 'Mobile Service',
  'Nationwide Delivery', 'The Big 2 Effect', 'Premium Grooming',
];

export default function Marquee() {
  // Duplicate for seamless loop
  const all = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {all.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item}
            <span className="marquee-sep">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
