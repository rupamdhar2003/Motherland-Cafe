import { useEffect, useRef, useState } from 'react';

// Counts a numeric value up from `from` to `target` when the element enters view.
// One requestAnimationFrame loop per element, runs once, disconnects observer after.
export function useCountUp(target, { from = 0, duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined') {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        setValue(target);
        return;
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const t0 = performance.now();
            const step = (now) => {
              const p = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setValue(from + (target - from) * eased);
              if (p < 1) requestAnimationFrame(step);
              else setValue(target);
            };
            requestAnimationFrame(step);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, from, duration]);

  return { ref, value: value.toFixed(decimals) };
}
