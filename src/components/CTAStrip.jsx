import React from 'react';
import { Link } from 'react-router-dom';
import { useSingleReveal } from '../hooks/useReveal';
import './CTAStrip.css';

export default function CTAStrip() {
  const ref = useSingleReveal();

  return (
    <div className="cta-strip reveal" ref={ref}>
      <div className="cta-left">
        <div className="sec-label">Ready?</div>
        <h2 className="cta-title">
          Your best look,<br /><em>delivered.</em>
        </h2>
      </div>
      <div className="cta-right">
        <p className="cta-sub">
          We come to you — home, office, wherever.<br />
          Available 7 days a week across Nigeria.
        </p>
        <Link to="/contact" className="btn-primary">
          <span>Book your session</span>
        </Link>
      </div>
    </div>
  );
}
