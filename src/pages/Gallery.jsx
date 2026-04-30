import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { GALLERY_ITEMS } from '../utils/config';
import './Gallery.css';

const FILTERS = ['All', 'Fade', 'Beard', 'Classic', 'Package'];

const FALLBACKS = [
  'linear-gradient(160deg,#181410 0%,#282018 50%,#141210 100%)',
  'linear-gradient(135deg,#0f0f0c 0%,#1d1b13 100%)',
  'linear-gradient(135deg,#111014 0%,#1c1820 100%)',
  'linear-gradient(160deg,#0d1112 0%,#151e1d 100%)',
  'linear-gradient(135deg,#15110f 0%,#211910 100%)',
  'linear-gradient(160deg,#131010 0%,#1e1510 100%)',
  'linear-gradient(135deg,#100f14 0%,#191820 100%)',
  'linear-gradient(160deg,#0e1210 0%,#141e14 100%)',
  'linear-gradient(135deg,#141210 0%,#211c10 100%)',
];

export default function Gallery() {
  const ref = useReveal();
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  // Page entrance
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.tag.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <main className="gallery-page">
      {/* Hero */}
      <div className="gallery-hero">
        <div className="gallery-hero-bg" />
        <div className="gallery-hero-content">
          <div className="sec-label">Portfolio</div>
          <h1 className="gallery-hero-title">
            The <em>work</em>
          </h1>
          <p className="gallery-hero-sub">
            Every cut tells a story. Every client leaves with the effect.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="gallery-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`gallery-filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid-full" ref={ref}>
        {filtered.map((item, i) => (
          <div
            className="reveal gallery-full-item"
            key={item.id}
            style={{ background: item.src ? undefined : FALLBACKS[i % FALLBACKS.length] }}
            onClick={() => item.src && setLightbox(item)}
          >
            {item.src
              ? <img src={item.src} alt={item.alt} loading="lazy" />
              : (
                <div className="gf-placeholder">
                  <span className="gf-icon">✂</span>
                  <span className="gf-label">Add photo</span>
                </div>
              )
            }
            <div className="gf-overlay">
              <div className="gf-info">
                <span className="gf-tag">{item.tag}</span>
                <span className="gf-num">0{i + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Count */}
      <div className="gallery-count">
        Showing {filtered.length} of {GALLERY_ITEMS.length} pieces
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="lightbox-label">{lightbox.tag}</div>
          </div>
        </div>
      )}
    </main>
  );
}
