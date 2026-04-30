import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { SERVICES } from '../utils/config';
import './Services.css';

export default function Services() {
  const ref = useReveal();

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-head">
        <div className="reveal">
          <div className="sec-label">What we offer</div>
          <h2 className="sec-title">
            Crafted for the<br /><em>discerning</em> man
          </h2>
        </div>
        <p className="reveal reveal-delay-1 services-note">
          All services delivered at your location. Travel included across Nigeria.
        </p>
      </div>

      <ul className="svc-list reveal reveal-delay-2">
        {SERVICES.map((svc) => (
          <li className="svc-item" key={svc.id}>
            <span className="svc-num">{svc.id}</span>
            <div className="svc-info">
              <div className="svc-name">{svc.name}</div>
              <div className="svc-desc">{svc.description}</div>
            </div>
            <span className="svc-duration">{svc.duration}</span>
            <span className="svc-price">{svc.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
