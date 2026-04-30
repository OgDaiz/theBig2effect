/**
 * ─────────────────────────────────────────
 * THE BIG 2 EFFECT — Site Configuration
 * ─────────────────────────────────────────
 * Update this file to change content across the entire site.
 * No need to touch individual components.
 */

export const SITE_CONFIG = {
  name: 'The Big 2 Effect',
  tagline: 'Mobile Barber',
  phone: '+234 8137618224',         // 📱 Replace with real number
  whatsapp: '2348137618224',          // 📱 Replace with real WhatsApp number (no + or spaces)
  email: 'thebig2effect@gmail.com',   // 📧 Replace with real email
  formspreeId: 'YOUR_FORMSPREE_ID',   // 📋 Replace after signing up at formspree.io
  coverage: 'Abuja & Nationwide',
  coverageDetail: 'FCT · Lagos · Port Harcourt · Anywhere you are',
  hours: 'Monday – Sunday · 8:00am – 9:00pm',
  socials: {
    instagram: 'https://instagram.com/thebig2effect',  // Replace
    whatsapp:  'https://wa.me/2348137618224',          // Replace
    twitter:   'https://twitter.com/thebig2effect',    // Replace
    tiktok:    'https://tiktok.com/@thebig2effect',    // Replace
  },
  year: new Date().getFullYear(),
};

export const SERVICES = [
  {
    id: '01',
    name: 'Classic Cut',
    description: 'Scissor or clipper — shaped to your face structure. Sharp, clean, and timeless.',
    price: '₦8,000',
    duration: '45 min',
  },
  {
    id: '02',
    name: 'Cut & Beard Sculpt',
    description: 'Full haircut with precision beard lineup and detailed shaping. Total transformation.',
    price: '₦12,000',
    duration: '70 min',
  },
  {
    id: '03',
    name: 'Beard Grooming',
    description: 'Hot towel prep, razor lineup, beard oil treatment. Grooming as a ritual.',
    price: '₦5,500',
    duration: '30 min',
  },
  {
    id: '04',
    name: 'The Big 2 Package',
    description: 'Cut, beard sculpt, scalp treatment & styling — the full Big 2 Effect experience.',
    price: '₦18,000',
    duration: '90 min',
  },
];

export const GALLERY_ITEMS = [
  // 📸 Replace src values with your actual image paths (e.g. '/images/gallery-1.jpg')
  // Place your images in /public/images/
  { id: 1, src: '/images/skinfade.jpg',   alt: 'Skin fade haircut' },
  { id: 2, src: '/images/beardsculpt.jpg', tag: 'Beard Sculpt',  alt: 'Beard sculpting' },
  { id: 3, src: 'images/taperfade.jpg', tag: 'Taper',         alt: 'Taper haircut' },
  { id: 4, src: 'images/lineup.jpg', tag: 'Lineup',        alt: 'Hair lineup' },
  { id: 5, src: 'images/classics.jpg', tag: 'Classic Cut',   alt: 'Classic haircut' },
  { id: 6, src: 'images/shape.jpg', tag: 'Shape Up',      alt: 'Shape up' },
  { id: 7, src: 'lowfade.jpg', tag: 'Low Fade',      alt: 'Low fade' },
  { id: 8, src: null, tag: 'Full Package',  alt: 'Full grooming package' },
  { id: 9, src: null, tag: 'Beard Trim',    alt: 'Beard trim' },
];

export const STATS = [
  { num: '500+', label: 'Clients served' },
  { num: '3+',   label: 'Years of craft' },
  { num: '100%', label: 'Mobile' },
];

export const NAV_LINKS = [
  { label: 'About',    href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'Contact',  href: '/contact' },
];
