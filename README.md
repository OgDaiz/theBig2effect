# The Big 2 Effect — Website

Premium mobile barber website built with React + React Router.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
cd big2effect
npm install
```

### 2. Run locally
```bash
npm start
```
Opens at http://localhost:3000

### 3. Build for production
```bash
npm run build
```
Creates an optimised `/build` folder ready to deploy.

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI pieces
│   ├── Navbar.jsx     # Fixed top navigation
│   ├── Footer.jsx     # Site footer
│   ├── Hero.jsx       # Homepage hero (video bg)
│   ├── About.jsx      # About section
│   ├── Services.jsx   # Services list
│   ├── GalleryPreview.jsx  # Homepage gallery teaser
│   ├── CTAStrip.jsx   # Call-to-action banner
│   └── Marquee.jsx    # Scrolling text strip
│
├── pages/
│   ├── Home.jsx       # / (homepage)
│   ├── Gallery.jsx    # /gallery (full portfolio)
│   └── Contact.jsx    # /contact (booking form)
│
├── hooks/
│   ├── useReveal.js   # Scroll reveal animation
│   └── useScrollNav.js # Nav scroll detection
│
├── utils/
│   └── config.js      # ⭐ ALL content lives here — edit this!
│
└── styles/
    ├── globals.css    # CSS variables, reset
    └── shared.css     # Shared utility classes
```

---

## ✏️ How to Update Content

### Everything is in `src/utils/config.js`

```js
export const SITE_CONFIG = {
  phone: '+234 800 000 0000',       // ← Your real number
  whatsapp: '2348000000000',         // ← No +, no spaces
  email: 'thebig2effect@gmail.com', // ← Real email
  formspreeId: 'YOUR_ID',           // ← From formspree.io
  coverage: 'Abuja & Nationwide',
  // ...
};
```

---

## 🎬 Adding the Hero Video

1. Get your `.mp4` video (free on [pexels.com](https://pexels.com) — search "barber")
2. Place it at: `public/videos/hero.mp4`
3. Open `src/components/Hero.jsx`
4. Find the comment `🎬 TO ADD YOUR VIDEO` and follow the instructions there

---

## 📸 Adding Gallery Photos

1. Place images in `public/images/` (e.g. `gallery-1.jpg`, `gallery-2.jpg`)
2. Open `src/utils/config.js`
3. Update the `GALLERY_ITEMS` array:

```js
export const GALLERY_ITEMS = [
  { id: 1, src: '/images/gallery-1.jpg', tag: 'Skin Fade', alt: 'Skin fade cut' },
  { id: 2, src: '/images/gallery-2.jpg', tag: 'Beard Sculpt', alt: 'Beard sculpt' },
  // ... add as many as you want
];
```

---

## 📸 Adding the Barber Photo (About section)

1. Place image at `public/images/barber.jpg`
2. Open `src/components/About.jsx`
3. Follow the instructions in the `📸 TO ADD THE BARBER'S PHOTO` comment

---

## 📋 Setting Up Formspree (Email form)

1. Go to [formspree.io](https://formspree.io) and sign up free
2. Create a new form — point it to your client's email
3. Copy your form ID (looks like `xyzabcde`)
4. Open `src/utils/config.js` and paste it:
```js
formspreeId: 'xyzabcde',
```
Done. Every booking form submission goes straight to email.

---

## 💬 WhatsApp Bookings

The contact form has a "Book via WhatsApp" button that:
- Pre-fills a message with all the booking details
- Opens the client's WhatsApp directly
- No setup required — just update the `whatsapp` number in `config.js`

---

## 🌐 Deploying

### Netlify (recommended — free)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `/build` folder
4. Done — live in 30 seconds

### Vercel
```bash
npm install -g vercel
vercel
```

---

## 🔧 Adding New Pages

1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```
3. Add link in `src/utils/config.js` → `NAV_LINKS`

---

Built with ❤️ for The Big 2 Effect.
