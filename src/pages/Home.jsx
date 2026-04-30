import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import GalleryPreview from '../components/GalleryPreview';
import CTAStrip from '../components/CTAStrip';
import './Home.css';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <GalleryPreview />
      <CTAStrip />
    </main>
  );
}
