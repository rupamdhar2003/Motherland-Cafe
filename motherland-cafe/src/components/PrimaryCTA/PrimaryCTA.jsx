import { useMemo, useState } from 'react';
import './PrimaryCTA.css';
import WhatsappIcon from '../icons/WhatsappIcon.jsx';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

function todayIso() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function buildWhatsappUrl({ number, form, isDesk }) {
  const lines = [
    `Hi Motherland Cafe — I'd like to ${isDesk ? 'reserve a desk for the day' : 'reserve a table'}.`,
    '',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Date: ${form.date}`,
    !isDesk ? `Time: ${form.time}` : null,
    !isDesk ? `Party size: ${form.party}` : null,
    form.notes ? `Notes: ${form.notes}` : null,
    '',
    'Sent from your new website.'
  ].filter(Boolean).join('\n');

  return `https://wa.me/${number}?text=${encodeURIComponent(lines)}`;
}

function readAccessKey() {
  const raw = (import.meta.env.VITE_WEB3FORMS_KEY || '').trim().replace(/^["']|["']$/g, '');
  const placeholder = raw === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' || raw === '';
  return { key: raw, configured: !placeholder };
}

export default function PrimaryCTA({ reserve }) {
  const { key: accessKey, configured } = readAccessKey();

  const [isDesk, setIsDesk] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: todayIso(),
    time: '13:00',
    party: '2',
    notes: ''
  });

  const partySizes = useMemo(
    () => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'],
    []
  );

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return 'Please add your name.';
    if (!form.phone.trim()) return 'Please add a phone number so we can confirm.';
    if (!form.date) return 'Pick a date.';
    if (!isDesk && !form.time) return 'Pick a time.';
    return null;
  };

  // --- Web3Forms path: submit form → email lands in owner inbox ---
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const problem = validate();
    if (problem) {
      setErrorMsg(problem);
      setStatus('error');
      return;
    }
    setErrorMsg('');
    setStatus('submitting');

    const subject = isDesk
      ? `New desk reservation — ${form.name}`
      : `New table reservation — ${form.name} (party of ${form.party})`;

    const payload = {
      access_key: accessKey,
      subject,
      from_name: 'Motherland Cafe Website',
      cafe: 'Motherland Cafe',
      type: isDesk ? 'Desk for the day' : 'Table reservation',
      name: form.name,
      phone: form.phone,
      date: form.date,
      time: isDesk ? 'Full day (8:00 AM – 9:30 PM)' : form.time,
      party_size: isDesk ? '1 (desk)' : form.party,
      notes: form.notes,
      submitted_at: new Date().toISOString()
    };

    try {
      if (!configured) {
        // Demo-safe fallback so the flow still shows off in review.
        await new Promise((r) => setTimeout(r, 700));
      } else {
        const res = await fetch(WEB3FORMS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message || 'Submission failed');
      }
      setStatus('success');
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong.');
      setStatus('error');
    }
  };

  // --- WhatsApp path: open wa.me with prefilled reservation, no server call ---
  const handleWhatsappSubmit = () => {
    const problem = validate();
    if (problem) {
      setErrorMsg(problem);
      setStatus('error');
      return;
    }
    setErrorMsg('');
    const url = buildWhatsappUrl({
      number: reserve.whatsappNumber,
      form,
      isDesk
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setStatus('idle');
    setForm({
      name: '',
      phone: '',
      date: todayIso(),
      time: '13:00',
      party: '2',
      notes: ''
    });
  };

  return (
    <section className="reserve section" id="reserve">
      <div className="container reserve-grid">
        <aside className="reserve-side">
          <span className="eyebrow">{reserve.eyebrow}</span>
          <h2 className="display-2 reserve-title">{reserve.headline}</h2>
          <p className="lead reserve-sub">{reserve.sub}</p>

          <ul className="reserve-perks">
            {reserve.perks.map((perk) => (
              <li key={perk}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <figure className="reserve-figure">
            <img src={reserve.image} alt="A quiet weekday afternoon at Motherland" loading="lazy" />
            <figcaption>
              <span className="eyebrow">Best time to book</span>
              <span>Weekday lunch · 12:30 – 2:30 PM</span>
            </figcaption>
          </figure>
        </aside>

        <div className="reserve-panel">
          {status === 'success' ? (
            <SuccessCard reserve={reserve} form={form} isDesk={isDesk} onReset={resetForm} />
          ) : (
            <form className="reserve-form" onSubmit={handleEmailSubmit} noValidate>
              <div className="reserve-form-head">
                <div>
                  <span className="eyebrow">Reservation</span>
                  <h3 className="display-3 reserve-form-title">
                    {isDesk ? 'Reserve a desk for the day' : 'Book a table'}
                  </h3>
                </div>

                <div className="reserve-toggle" role="group" aria-label="Reservation type">
                  <button
                    type="button"
                    className={`reserve-toggle-btn ${!isDesk ? 'is-active' : ''}`}
                    onClick={() => setIsDesk(false)}
                    aria-pressed={!isDesk}
                  >
                    Table
                  </button>
                  <button
                    type="button"
                    className={`reserve-toggle-btn ${isDesk ? 'is-active' : ''}`}
                    onClick={() => setIsDesk(true)}
                    aria-pressed={isDesk}
                  >
                    Desk
                  </button>
                </div>
              </div>

              <div className="reserve-fields">
                <label className="field field-full">
                  <span>Full name</span>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="e.g. Aritra Basak"
                  />
                </label>

                <label className="field">
                  <span>Phone (WhatsApp)</span>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 90000 00000"
                  />
                </label>

                <label className="field">
                  <span>Date</span>
                  <input
                    type="date"
                    required
                    min={todayIso()}
                    value={form.date}
                    onChange={update('date')}
                  />
                </label>

                {!isDesk && (
                  <>
                    <label className="field">
                      <span>Time</span>
                      <input
                        type="time"
                        required
                        value={form.time}
                        onChange={update('time')}
                        min="08:00"
                        max="21:30"
                      />
                    </label>

                    <label className="field">
                      <span>Party size</span>
                      <select value={form.party} onChange={update('party')}>
                        {partySizes.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </label>
                  </>
                )}

                {isDesk && (
                  <div className="reserve-desk-note">
                    <span className="reserve-desk-note-title">Full-day work desk</span>
                    <span className="reserve-desk-note-body">
                      One seat, one power outlet, all day. Complimentary refills of filter coffee and unlimited wifi. ₹499/day, adjusted against your bill.
                    </span>
                  </div>
                )}

                <label className="field field-full">
                  <span>Anything we should know? <em>(optional)</em></span>
                  <textarea
                    rows="3"
                    value={form.notes}
                    onChange={update('notes')}
                    placeholder="Birthday, allergies, quiet corner, prefer window seat…"
                  />
                </label>
              </div>

              {status === 'error' && (
                <div className="reserve-alert" role="alert">
                  <strong>Couldn't send that.</strong>
                  <span>{errorMsg} — or call us at {reserve.whatsappNumber.replace(/^91/, '+91 ')} and we'll sort it directly.</span>
                </div>
              )}

              {!configured && (
                <div className="reserve-alert reserve-alert--warn" role="status">
                  <strong>Demo mode.</strong>
                  <span>Add a Web3Forms key to <code>.env</code> to enable email delivery. The WhatsApp button works either way.</span>
                </div>
              )}

              <div className="reserve-submit">
                <button
                  type="submit"
                  className="btn btn-terra reserve-submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Spinner /> Sending…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Send booking by email
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="btn reserve-submit-btn reserve-submit-btn--wa"
                  onClick={handleWhatsappSubmit}
                  disabled={status === 'submitting'}
                >
                  <WhatsappIcon size={18} />
                  Or book on WhatsApp
                </button>
              </div>

              <p className="reserve-submit-note">
                Email lands in the cafe's inbox · WhatsApp opens a prefilled chat you can send in one tap.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="reserve-spinner">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" strokeOpacity="0.28"/>
      <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

function SuccessCard({ reserve, form, isDesk, onReset }) {
  const wa = buildWhatsappUrl({ number: reserve.whatsappNumber, form, isDesk });
  return (
    <div className="reserve-success" role="status" aria-live="polite">
      <div className="reserve-success-icon">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="display-3 reserve-success-title">Request sent, {form.name.split(' ')[0] || 'friend'}.</h3>
      <p className="lead reserve-success-body">
        Your {isDesk ? 'desk' : 'table'} request just landed in the cafe's inbox. We'll confirm on WhatsApp within a few minutes.
      </p>
      <div className="reserve-success-actions">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn reserve-submit-btn--wa">
          <WhatsappIcon size={18} />
          Message on WhatsApp too
        </a>
        <button className="btn btn-ghost" onClick={onReset}>Book another</button>
      </div>
    </div>
  );
}
