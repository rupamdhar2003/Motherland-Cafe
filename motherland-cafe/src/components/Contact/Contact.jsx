import './Contact.css';
import WhatsappIcon from '../icons/WhatsappIcon.jsx';

export default function Contact({ contact }) {
  const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappText)}`;

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-card">
        <div className="contact-copy">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="display-2 contact-title">{contact.headline}</h2>
          <p className="lead contact-sub">{contact.sub}</p>

          <div className="contact-methods">
            <a className="contact-method" href={waUrl} target="_blank" rel="noopener noreferrer">
              <span className="contact-method-icon" style={{ background: '#25D366' }}>
                <WhatsappIcon size={22} color="#fff" />
              </span>
              <div>
                <div className="contact-method-label">WhatsApp</div>
                <div className="contact-method-val">{contact.phone}</div>
              </div>
              <svg className="contact-method-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a className="contact-method" href={`tel:${contact.phoneTel}`}>
              <span className="contact-method-icon" style={{ background: 'var(--forest)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 5c0-.6.4-1 1-1h3l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v3c0 .6-.4 1-1 1A15 15 0 014 5z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="contact-method-label">Call the cafe</div>
                <div className="contact-method-val">{contact.phone}</div>
              </div>
              <svg className="contact-method-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a className="contact-method" href={`mailto:${contact.email}`}>
              <span className="contact-method-icon" style={{ background: 'var(--terra)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="1.8"/>
                  <path d="M3 7l9 6 9-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="contact-method-label">Email</div>
                <div className="contact-method-val">{contact.email}</div>
              </div>
              <svg className="contact-method-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <aside className="contact-aside">
          <div className="contact-aside-tag">
            <span className="dot" />
            Reply time · under 1 hour
          </div>
          <h3 className="display-3 contact-aside-title">
            Planning something bigger?
          </h3>
          <p className="contact-aside-body">
            Private brunches, off-site work days, birthday cakes, a launch party — we've hosted most of it. Message us on WhatsApp with a rough date and we'll come back with a plan.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn contact-aside-cta">
            <WhatsappIcon size={16} />
            Message on WhatsApp
          </a>
        </aside>
        </div>
      </div>
    </section>
  );
}
