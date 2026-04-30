import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, NAV_LINKS, SERVICES } from '../utils/config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-brand-name">BIG 2 EFFECT</div>
          <div className="footer-brand-tag">Mobile Barber</div>
          <p className="footer-brand-desc">
            Premium mobile grooming brought to your door. Precision, craft, and excellence — wherever you are in Nigeria.
          </p>
        </div>

        {/* Navigate */}
        <div className="footer-col">
          <div className="footer-col-label">Navigate</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                {href.startsWith('/#')
                  ? <a href={href}>{label}</a>
                  : <Link to={href}>{label}</Link>
                }
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <div className="footer-col-label">Services</div>
          <ul>
            {SERVICES.map(s => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <div className="footer-col-label">Socials</div>
          <ul>
            <li><a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href={SITE_CONFIG.socials.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noreferrer">Twitter / X</a></li>
            <li><a href={SITE_CONFIG.socials.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {SITE_CONFIG.year} The Big 2 Effect · All rights reserved
        </div>
        <div className="footer-tag">
          <span className="footer-tag-line" />
          Mobile Barber · Nigeria
        </div>
      </div>
    </footer>
  );
}
