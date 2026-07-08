import './MenuHighlights.css';
import { useReveal } from '../../hooks/useReveal.js';

function MenuCard({ item, feature = false }) {
  return (
    <article className={`menu-card ${feature ? 'menu-card--feature' : ''} ${item.placeholder ? 'menu-card--placeholder' : ''}`}>
      <div className="menu-card-media">
        {item.placeholder ? (
          <div className="menu-card-placeholder">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="9" cy="11" r="1.6" fill="currentColor"/>
              <path d="M21 16l-5-5-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Your menu photo here</span>
          </div>
        ) : (
          <img src={item.image} alt={item.title} loading="lazy" />
        )}
        <span className="menu-card-category">{item.category}</span>
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-title">{item.title}</h3>
        <p className="menu-card-desc">{item.description}</p>
      </div>
    </article>
  );
}

export default function MenuHighlights({ menu }) {
  const [feature, ...rest] = menu.items;
  const head = useReveal();
  const featureReveal = useReveal({ threshold: 0.15 });
  const restReveal = useReveal({ threshold: 0.1 });

  return (
    <section className="menu section" id="menu">
      <div className="container">
        <header
          ref={head.ref}
          className={`menu-head on-scroll ${head.visible ? 'is-visible' : ''}`}
        >
          <div>
            <span className="eyebrow">{menu.eyebrow}</span>
            <h2 className="display-2 menu-title">{menu.headline}</h2>
          </div>
          <p className="lead menu-sub">{menu.sub}</p>
        </header>

        <div className="menu-grid">
          <div
            ref={featureReveal.ref}
            className={`menu-feature-wrap on-scroll on-scroll--scale ${featureReveal.visible ? 'is-visible' : ''}`}
          >
            <MenuCard item={feature} feature />
          </div>
          <div
            ref={restReveal.ref}
            className={`menu-rest stagger ${restReveal.visible ? 'is-visible' : ''}`}
          >
            {rest.map((it) => (
              <MenuCard key={it.title} item={it} />
            ))}
          </div>
        </div>

        <div className="menu-footer">
          <span>Full food menu · 11 pages</span>
          <span className="menu-footer-dot">·</span>
          <span>Beverages menu · 2 pages</span>
          <span className="menu-footer-dot">·</span>
          <a href="#reserve" className="menu-footer-link">
            Ask for it when you sit down
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
