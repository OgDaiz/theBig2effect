import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScrollNav } from '../hooks/useScrollNav';
import { NAV_LINKS } from '../utils/config';
import './Navbar.css';

export default function Navbar() {
  const scrolled = useScrollNav(80);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <span className="nav-logo-eyebrow">
          <span className="eyebrow-line" />
          The
          <span className="eyebrow-line" />
        </span>
        <span className="nav-logo-main">BIG 2 EFFECT</span>
        <span className="nav-logo-sub">Mobile Barber</span>
      </Link>

      {/* Links */}
      <ul className="nav-links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            {href.startsWith('/#') ? (
              <a
                href={href}
                className={`nav-link ${location.hash === href.replace('/', '') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            ) : (
              <Link
                to={href}
                className={`nav-link ${location.pathname === href ? 'active' : ''}`}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link to="/contact" className="nav-cta">
        <span>Book a Cut</span>
      </Link>
    </nav>
  );
}
