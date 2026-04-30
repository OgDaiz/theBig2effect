import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(36px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1.2s var(--ease), transform 1.2s var(--ease)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* ── Video Background ── */}
      <div className="hero-video-wrap">
        {/*
          🎬 TO ADD YOUR VIDEO:
          1. Place your .mp4 file in /public/videos/hero.mp4
          2. Uncomment the <video> tag below and remove the .hero-video-fallback div
        */}
        { <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/hero.mp4"
        /> }

        {/* Fallback gradient until video is added */}
        <div className="hero-video-fallback" />
      </div>

      {/* Overlays */}
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <div className="hero-grid" />
      <div className="hero-glow" />

      {/* Rotating badge */}
      <div className="hero-badge" aria-hidden="true">
        <div className="hero-badge-inner">
          <span className="hero-badge-num">5★</span>
          <span className="hero-badge-lbl">Top Rated<br />Nigeria</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>

      {/* Content */}
      <div className="hero-content" ref={contentRef}>
        <div className="gold-line-accent">Mobile Barber · Nigeria</div>

        <h1 className="hero-h1">
          <span className="hero-line">The cut that</span>
          <span className="hero-line">creates the <em>effect.</em></span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-desc">
            Elite grooming — your doorstep, your schedule. Precision and craft delivered wherever you are in Nigeria.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">
              <span>Schedule a session</span>
            </Link>
            <button
              className="btn-outline"
              onClick={() => scrollToSection('services')}
            >
              Explore services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
