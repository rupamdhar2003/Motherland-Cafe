import { useEffect, useState } from 'react';
import './Navbar.css';

function BrandMark({ label }) {
  return (
    <a href="#top" className="brand" aria-label={`${label} — home`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="26" height="26">
          <circle cx="16" cy="16" r="15" fill="var(--forest)" />
          <path
            d="M9 22 V11 l7 9 7-9 v11"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="brand-word">
        <span className="brand-word-top">{label}</span>
        <span className="brand-word-sub">Chowringhee</span>
      </span>
    </a>
  );
}

export default function Navbar({ brand, links, ctaLabel = 'Reserve a table', ctaHref = '#reserve' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--menu-open' : ''}`} id="top">
      <div className="nav-inner container">
        <BrandMark label={brand.name} />

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={ctaHref} className="btn btn-primary nav-cta">
            {ctaLabel}
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-nav-inner">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
          <a href={ctaHref} className="btn btn-primary mobile-nav-cta" onClick={() => setOpen(false)}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
