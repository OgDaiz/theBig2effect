import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches IntersectionObserver to animate elements into view.
 * Usage: const ref = useReveal(); then <div ref={ref} className="reveal">
 */
export function useReveal(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    // Observe all .reveal children, or the element itself
    const targets = el.querySelectorAll('.reveal');
    if (targets.length > 0) {
      targets.forEach((t, i) => {
        t.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(t);
      });
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useSingleReveal — for a single element ref
 */
export function useSingleReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
