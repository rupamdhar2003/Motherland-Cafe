import { useEffect, useRef, useState } from 'react';

// Reveals an element (returns { ref, visible }) the first time it scrolls into view.
// Cheap: single IntersectionObserver per element, disconnects after first hit,
// respects prefers-reduced-motion (returns visible=true immediately).
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined') {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        setVisible(true);
        return;
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
