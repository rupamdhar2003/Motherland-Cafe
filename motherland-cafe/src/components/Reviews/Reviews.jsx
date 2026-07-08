import './Reviews.css';

function Stars({ n = 5 }) {
  return (
    <span className="rev-stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2.5 14.9 8.6 21.5 9.5 16.7 14 17.9 20.6 12 17.4 6.1 20.6 7.3 14 2.5 9.5 9.1 8.6z"/>
        </svg>
      ))}
    </span>
  );
}

function Initials({ name, color }) {
  const parts = name.trim().split(/\s+/);
  const letters = (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
  return <span className="rev-avatar" style={{ background: color }}>{letters}</span>;
}

const AVATAR_COLORS = ['var(--terra)', 'var(--forest)', 'var(--gold)'];

export default function Reviews({ reviews }) {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <header className="rev-head">
          <div>
            <span className="eyebrow">{reviews.eyebrow}</span>
            <h2 className="display-2 rev-title">{reviews.headline}</h2>
          </div>

          <div className="rev-aggregate">
            <div className="rev-aggregate-score">{reviews.aggregate.score}</div>
            <div className="rev-aggregate-body">
              <Stars n={5} />
              <span>{reviews.aggregate.reviews} reviews on {reviews.aggregate.source}</span>
            </div>
          </div>
        </header>

        <div className="rev-grid">
          {reviews.items.map((r, i) => (
            <article className="rev-card" key={r.author}>
              <Stars n={r.rating} />
              <blockquote className="rev-body">"{r.body}"</blockquote>
              <footer className="rev-foot">
                <Initials name={r.author} color={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
                <div>
                  <div className="rev-author">{r.author}</div>
                  <div className="rev-meta">{r.badge} · {r.when}</div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="rev-source">
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.5l6.8-6.8C35.8 2.6 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.5 17.7 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.7 7.1l7.5 5.8c4.4-4.1 7-10.1 7-17.2z"/>
            <path fill="#FBBC05" d="M10.5 28.6c-.7-2.1-1-4.3-1-6.6s.4-4.5 1-6.6L2.6 9.3C.9 12.9 0 16.3 0 22s.9 9.1 2.6 12.7l7.9-6.1z"/>
            <path fill="#34A853" d="M24 44c6.3 0 11.7-2.1 15.5-5.7l-7.5-5.8c-2.1 1.4-4.7 2.3-8 2.3-6.3 0-11.6-4-13.5-9.9l-7.9 6.1C6.5 38.6 14.6 44 24 44z"/>
          </svg>
          <span>Sourced from public Google reviews. See all 2,535 on Google Maps.</span>
        </div>
      </div>
    </section>
  );
}
