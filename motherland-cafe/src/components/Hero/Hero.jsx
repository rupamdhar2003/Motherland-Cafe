import './Hero.css';

function StarRow() {
  return (
    <span className="stars" aria-hidden="true">
      {[0,1,2,3,4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5 14.9 8.6 21.5 9.5 16.7 14 17.9 20.6 12 17.4 6.1 20.6 7.3 14 2.5 9.5 9.1 8.6z"/>
        </svg>
      ))}
    </span>
  );
}

export default function Hero({ hero, brand }) {
  return (
    <section className="hero" id='top'>
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="hero-eyebrow reveal">
            <span className="dot" />
            {hero.eyebrow}
          </span>
          <h1 className="display-1 hero-title reveal reveal-delay-1">
            {hero.headline.split(',').map((chunk, i, arr) => (
              <span key={i} className="hero-title-line">
                {i === arr.length - 1 ? <em>{chunk}</em> : <>{chunk}{','}</>}
              </span>
            ))}
          </h1>
          <p className="lead hero-sub reveal reveal-delay-2">{hero.sub}</p>

          <div className="hero-ctas reveal reveal-delay-3">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">{hero.secondaryCta.label}</a>
          </div>

          <div className="hero-meta reveal reveal-delay-4">
            <div className="hero-rating">
              <div className="hero-rating-score">{hero.ratingBadge.score}</div>
              <div className="hero-rating-body">
                <StarRow />
                <div className="hero-rating-caption">
                  <strong>{hero.ratingBadge.label}</strong>
                  <span>·  {hero.ratingBadge.reviews}</span>
                </div>
              </div>
            </div>
            <div className="hero-sep" />
            <div className="hero-hours">
              <span className="dot" />
              <span>{hero.hoursPill}</span>
            </div>
          </div>
        </div>

        <figure className="hero-figure reveal reveal-delay-2">
          <div className="hero-figure-inner">
            <img src={hero.image} alt={hero.imageAlt} loading="eager" fetchpriority="high" />
            <div className="hero-figure-glow" aria-hidden="true" />
            <div className="hero-figure-frame" aria-hidden="true" />
          </div>

          <div className="hero-float hero-float--top">
            <span className="hero-float-eyebrow">Signature</span>
            <span className="hero-float-title">Cortado</span>
            <span className="hero-float-sub">Pulled tight, textured fine</span>
          </div>

          <div className="hero-float hero-float--bottom">
            <div className="hero-float-avatars" aria-hidden="true">
              <span style={{ background: 'var(--terra)' }}>A</span>
              <span style={{ background: 'var(--forest)' }}>M</span>
              <span style={{ background: 'var(--gold)' }}>S</span>
            </div>
            <div>
              <div className="hero-float-title">Loved by 2,500+ guests</div>
              <div className="hero-float-sub">A Chowringhee regular since 2019</div>
            </div>
          </div>
        </figure>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[
            'All-day breakfast',
            'Third-wave coffee',
            'Handmade pasta',
            'Weekend brunch',
            'Fast wifi',
            'Vegetarian & vegan',
            'Gluten-free options',
            'Card & UPI',
            'All-day breakfast',
            'Third-wave coffee',
            'Handmade pasta',
            'Weekend brunch',
            'Fast wifi',
            'Vegetarian & vegan',
            'Gluten-free options',
            'Card & UPI'
          ].map((item, i) => (
            <span key={i} className="hero-marquee-item">
              <span className="hero-marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
