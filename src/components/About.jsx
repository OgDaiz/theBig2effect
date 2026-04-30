import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { STATS } from '../utils/config';
import './About.css';

export default function About() {
  const ref = useReveal();

  return (
    <section className="about" id="about" ref={ref}>
      {/* Photo */}
      <div className="reveal about-photo">
        {
          
             <img src="/images/barber.jpeg" alt="The Big 2 Effect barber" />
        }
        <div className="about-photo-inner">
          <div className="about-photo-placeholder">
            <span className="about-photo-icon">📸</span>
            <span className="about-photo-label">Barber photo here</span>
          </div>
        </div>
        <div className="bracket bracket-tl" aria-hidden="true" />
        <div className="bracket bracket-br" aria-hidden="true" />
        <div className="about-photo-bar" aria-hidden="true" />
      </div>

      {/* Text */}
      <div className="reveal reveal-delay-1 about-text">
        <div className="sec-label">Who we are</div>
        <h2 className="about-title">
          More than a barber.<br />
          An <em>experience.</em>
        </h2>
        <p className="about-body">
          The Big 2 Effect isn't just a name — it's a promise. Two things guaranteed on every visit: a razor-precise cut and an experience that leaves a lasting impression. We bring the barbershop to you, without compromising a single inch of quality — anywhere in Nigeria.
        </p>

        <div className="about-stats">
          {STATS.map(({ num, label }) => (
            <div className="about-stat" key={label}>
              <span className="about-stat-num">{num}</span>
              <span className="about-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
