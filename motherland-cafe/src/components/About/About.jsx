import './About.css';

const ICONS = {
  wifi: (
    <path d="M5 13a11 11 0 0114 0M8.5 16.5a6 6 0 017 0M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  ),
  laptop: (
    <><rect x="4" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M2 19h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>
  ),
  sun: (
    <><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>
  ),
  leaf: (
    <path d="M6 20c8 0 14-6 14-14 0 0-6 0-10 4S6 20 6 20zM6 20l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  ),
  wheat: (
    <path d="M12 3v18M8 6l4 4M16 6l-4 4M8 10l4 4M16 10l-4 4M8 14l4 4M16 14l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  ),
  chair: (
    <path d="M6 4h12v6H6zM4 10h16M7 10v10M17 10v10M7 15h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  ),
  card: (
    <><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M3 10h18M7 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>
  ),
  bag: (
    <path d="M6 7h12l-1 13H7L6 7zM9 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  )
};

function AmenityIcon({ name }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[name] ?? ICONS.sun}
    </svg>
  );
}

export default function About({ about }) {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <figure className="about-figure">
          <img src={about.image} alt={about.imageAlt} loading="lazy" />
          <div className="about-figure-tag">
            <span className="eyebrow">Chowringhee, Kolkata</span>
            <span className="about-figure-tag-line">Dr. Md. Ishaque Rd · Block-D</span>
          </div>
          <div className="about-figure-badge">
            <span className="about-figure-badge-num">6</span>
            <span className="about-figure-badge-cap">years<br/>strong</span>
          </div>
        </figure>

        <div className="about-copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="display-2 about-title">{about.headline}</h2>
          {about.body.map((p, i) => (
            <p className="lead about-para" key={i}>{p}</p>
          ))}

          <ul className="about-amenities" aria-label="What we offer">
            {about.amenities.map((a) => (
              <li key={a.label} className="about-amenity">
                <span className="about-amenity-icon">
                  <AmenityIcon name={a.icon} />
                </span>
                <span>{a.label}</span>
              </li>
            ))}
          </ul>

          <div className="about-quote">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h1v3a1 1 0 001.6.8L11 15h4a2 2 0 002-2V9a2 2 0 00-2-2h-1M15 7V4M19 7V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>"The ambiance, the design, the members really know their place and how to run it."</p>
            <span className="about-quote-source">— Google guest, 4.7★</span>
          </div>
        </div>
      </div>
    </section>
  );
}
