import './Footer.css';
import MotherlandMark from '../icons/MotherlandMark.jsx';

export default function Footer({ brand, footer }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <span className="footer-brand-mark" aria-hidden="true">
              <MotherlandMark size={32} color="var(--cream)" />
            </span>
            <div>
              <div className="footer-brand-word">{brand.wordmark}</div>
              <div className="footer-brand-tag">{footer.tagline}</div>
            </div>
          </div>

          <div className="footer-cta">
            <span>Ready when you are.</span>
            <a href="#reserve" className="btn btn-terra footer-cta-btn">
              Reserve a table
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-cols">
          {footer.columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {year} {brand.wordmark}. Chowringhee, Kolkata.</span>
        <span className="footer-bottom-sep">·</span>
        <span className="footer-credit">
          Website by{' '}
          <a
            href="https://rupamdhar.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit-link"
          >
            Rupam
            <svg
              className="footer-credit-link-icon"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 2h5v5" />
              <path d="M14 2L7 9" />
              <path d="M12 9v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
