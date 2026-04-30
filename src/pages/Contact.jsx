import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SITE_CONFIG, SERVICES } from '../utils/config';
import './Contact.css';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  address: '',
  message: '',
};

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ── Formspree submission ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${SITE_CONFIG.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          phone: form.phone,
          email: form.email,
          service: form.service,
          date: form.date,
          time: form.time,
          address: form.address,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm(INITIAL_FORM);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // ── WhatsApp redirect ──
  const handleWhatsApp = () => {
    const service = form.service || 'not specified';
    const date    = form.date    || 'not specified';
    const time    = form.time    || 'not specified';
    const address = form.address || 'not specified';
    const name    = form.firstName ? `${form.firstName} ${form.lastName}` : 'there';

    const text = encodeURIComponent(
      `Hello! I'd like to book a session with The Big 2 Effect.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${form.phone || 'not provided'}\n` +
      `*Service:* ${service}\n` +
      `*Date:* ${date}\n` +
      `*Time:* ${time}\n` +
      `*Address:* ${address}\n` +
      (form.message ? `*Note:* ${form.message}` : '')
    );

    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <main className="contact-page">
      {/* Page hero */}
      <div className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-content">
          <div className="sec-label">Get in touch</div>
          <h1 className="contact-hero-title">
            Your next cut,<br /><em>scheduled.</em>
          </h1>
          <p className="contact-hero-sub">
            Fill in the form and we'll confirm your appointment within the hour. We come to you — anywhere in Nigeria.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="contact-body" ref={ref}>
        {/* Left — info */}
        <div className="reveal contact-info">
          <div className="contact-info-section">
            <div className="contact-info-label">Reach us directly</div>
            <div className="contact-rows">
              <a href={`tel:${SITE_CONFIG.phone}`} className="crow">
                <div className="crow-icon">✆</div>
                <div>
                  <div className="crow-main">{SITE_CONFIG.phone}</div>
                  <div className="crow-sub">Call or WhatsApp</div>
                </div>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="crow">
                <div className="crow-icon">@</div>
                <div>
                  <div className="crow-main">{SITE_CONFIG.email}</div>
                  <div className="crow-sub">We reply within the hour</div>
                </div>
              </a>
              <div className="crow">
                <div className="crow-icon">◎</div>
                <div>
                  <div className="crow-main">{SITE_CONFIG.coverage}</div>
                  <div className="crow-sub">{SITE_CONFIG.coverageDetail}</div>
                </div>
              </div>
              <div className="crow">
                <div className="crow-icon">◷</div>
                <div>
                  <div className="crow-main">{SITE_CONFIG.hours}</div>
                  <div className="crow-sub">Book 24hrs in advance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-label">Follow the work</div>
            <div className="contact-socials">
              {[
                { label: 'Instagram', href: SITE_CONFIG.socials.instagram },
                { label: 'WhatsApp', href: SITE_CONFIG.socials.whatsapp },
                { label: 'TikTok', href: SITE_CONFIG.socials.tiktok },
                { label: 'Twitter / X', href: SITE_CONFIG.socials.twitter },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-social-link">
                  <span className="social-arrow">↗</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal reveal-delay-2 contact-form-wrap">
          <div className="contact-form-header">
            <div className="form-header-dot" />
            <span className="form-header-title">Book a session</span>
          </div>

          {status === 'success' ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Booking received.</h3>
              <p className="success-body">We'll confirm your appointment within 60 minutes. Check your WhatsApp and email.</p>
              <button className="btn-outline" onClick={() => setStatus('idle')}>Make another booking</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="fg">
                  <label htmlFor="firstName">First name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="Emeka" value={form.firstName} onChange={handleChange} required />
                </div>
                <div className="fg">
                  <label htmlFor="lastName">Last name</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Okafor" value={form.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="fg">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+234 801 234 5678" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="fg">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
                </div>
              </div>

              <div className="fg fg-full">
                <label htmlFor="service">Select service</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Choose a service</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.name}>{s.name} — {s.price}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="fg">
                  <label htmlFor="date">Preferred date</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={handleChange} required />
                </div>
                <div className="fg">
                  <label htmlFor="time">Preferred time</label>
                  <input id="time" name="time" type="time" value={form.time} onChange={handleChange} required />
                </div>
              </div>

              <div className="fg fg-full">
                <label htmlFor="address">Your address</label>
                <input id="address" name="address" type="text" placeholder="Where should we come to?" value={form.address} onChange={handleChange} required />
              </div>

              <div className="fg fg-full">
                <label htmlFor="message">Additional notes (optional)</label>
                <textarea id="message" name="message" placeholder="Any special requests or details..." value={form.message} onChange={handleChange} rows={3} />
              </div>

              {status === 'error' && (
                <p className="form-error">Something went wrong. Please try WhatsApp below.</p>
              )}

              <div className="form-actions">
                {/* Primary: Formspree email */}
                <button type="submit" className="btn-primary form-submit-btn" disabled={status === 'sending'}>
                  <span>{status === 'sending' ? 'Sending...' : 'Confirm booking'}</span>
                </button>

                {/* Secondary: WhatsApp */}
                <button type="button" className="btn-whatsapp" onClick={handleWhatsApp}>
                  <span className="whatsapp-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <span>Book via WhatsApp</span>
                </button>
              </div>

              <p className="form-note">
                We'll confirm your appointment within 60 minutes via WhatsApp or email.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
