import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { GALLERY_ITEMS } from '../utils/config';
import './GalleryPreview.css';

// Show only first 5 items on homepage
const PREVIEW_ITEMS = GALLERY_ITEMS.slice(0, 5);

// Gradient fallbacks per slot
const FALLBACKS = [
  'linear-gradient(160deg,#181410 0%,#282018 50%,#141210 100%)',
  'linear-gradient(135deg,#0f0f0c 0%,#1d1b13 100%)',
  'linear-gradient(135deg,#111014 0%,#1c1820 100%)',
  'linear-gradient(160deg,#0d1112 0%,#151e1d 100%)',
  'linear-gradient(135deg,#15110f 0%,#211910 100%)',
];

export default function GalleryPreview() {
  const ref = useReveal();

  return (
    <section className="gallery-preview" id="gallery-preview" ref={ref}>
      <div className="gallery-preview-head reveal">
        <div>
          <div className="sec-label">Portfolio</div>
          <h2 className="sec-title">The <em>work</em></h2>
        </div>
        <p className="gallery-preview-sub">
          Every cut documented.<br />Every client a statement.
        </p>
      </div>

      {/* Grid */}
      <div className="gp-grid reveal reveal-delay-1">
        {PREVIEW_ITEMS.map((item, i) => (
          <div
            className={`gp-item gp-item-${i + 1}`}
            key={item.id}
            style={{ background: item.src ? undefined : FALLBACKS[i] }}
          >
            {item.src
              ? <img src={item.src} alt={item.alt} loading="lazy" />
              : (
                <div className="gp-placeholder">
                  <span className="gp-placeholder-icon">✂</span>
                  <span className="gp-placeholder-text">Add photo</span>
                </div>
              )
            }
            <div className="gp-overlay">
              <span className="gp-tag">{item.tag}</span>
            </div>
            <span className="gp-num">0{i + 1}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="reveal reveal-delay-2 gallery-preview-cta">
        <Link to="/gallery" className="btn-outline">
          View full portfolio →
        </Link>
        <p className="gallery-preview-count">{GALLERY_ITEMS.length} pieces in catalogue</p>
      </div>
    </section>
  );
}
