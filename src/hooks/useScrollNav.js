import { useState, useEffect } from 'react';

/**
 * useScrollNav — returns true when page has scrolled past `threshold` px
 */
export function useScrollNav(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * useActiveSection — returns the id of the currently visible section
 */
export function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
}
