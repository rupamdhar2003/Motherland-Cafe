import './Location.css';
import { useReveal } from '../../hooks/useReveal.js';

function DayRow({ day, open, close, isToday }) {
  return (
    <li className={`loc-day ${isToday ? 'is-today' : ''}`}>
      <span className="loc-day-name">{day}</span>
      <span className="loc-day-hours">
        <span>{open}</span>
        <span className="loc-day-dash">–</span>
        <span>{close}</span>
      </span>
      {isToday && <span className="loc-day-tag">Today</span>}
    </li>
  );
}

export default function Location({ location }) {
  const todayIdx = (new Date().getDay() + 6) % 7; // JS: Sun=0. We want Mon=0.
  const map = useReveal();
  const panel = useReveal({ threshold: 0.2 });

  return (
    <section className="location section" id="location">
      <div className="container loc-grid">
        <div ref={map.ref} className={`loc-map on-scroll ${map.visible ? 'is-visible' : ''}`}>
          <div className="loc-map-frame">
            {/* No-API-key fallback: static iframe using search query. Swap for embed API when you have a key. */}
            <iframe
              title="Motherland Cafe on Google Maps"
              src="https://www.google.com/maps?q=Motherland+Cafe+Chowringhee+Mansion+Kolkata&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="loc-map-badge">
            <div className="loc-map-badge-marker">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s-7-7.5-7-13a7 7 0 1114 0c0 5.5-7 13-7 13z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <div className="loc-map-badge-title">Chowringhee, Kolkata</div>
              <div className="loc-map-badge-sub">Plus code · {location.plusCode}</div>
            </div>
          </div>
        </div>

        <div ref={panel.ref} className={`loc-panel on-scroll ${panel.visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">{location.eyebrow}</span>
          <h2 className="display-2 loc-title">{location.headline}</h2>

          <div className="loc-address">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 22s-7-7.5-7-13a7 7 0 1114 0c0 5.5-7 13-7 13z" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            <p>{location.address}</p>
          </div>

          <div className="loc-modes">
            {location.modes.map((m) => (
              <span key={m} className="loc-mode">{m}</span>
            ))}
          </div>

          <div className="loc-actions">
            <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get directions
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              View on Google
            </a>
          </div>

          <div className="loc-hours">
            <div className="loc-hours-head">
              <span className="eyebrow">Hours</span>
              <span className="loc-hours-status">
                <span className="dot" />
                Open now · until 9:30 PM
              </span>
            </div>
            <ul className="loc-days">
              {location.hours.map((h, i) => (
                <DayRow
                  key={h.day}
                  day={h.day}
                  open={h.open}
                  close={h.close}
                  isToday={i === todayIdx}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
