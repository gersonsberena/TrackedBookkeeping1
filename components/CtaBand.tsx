'use client';

import { useState, FormEvent } from 'react';

export default function CtaBand() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      business: (form.elements.namedItem('business') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="cta-band" id="cta">
      <div className="container">
        <div className="cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Get started</p>
            <h2 className="cta-h2">Ready for calm Mondays?</h2>
            <p className="cta-p">
              Tell us a bit about your business and we&apos;ll send you a custom quote
              within one business day. No commitment required.
            </p>
            <div className="cta-actions">
              <a href="mailto:hello@trackedbookkeeping.com" className="btn btn-primary">
                hello@trackedbookkeeping.com
              </a>
            </div>
          </div>
          <div className="cta-card">
            {status === 'sent' ? (
              <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--on-dark)" }}>
                <p style={{ fontSize: 40, margin: "0 0 16px" }}>✓</p>
                <p style={{ fontSize: 18, fontFamily: "var(--serif)", letterSpacing: "-0.01em" }}>
                  Got it! We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
                <div className="cta-form-row">
                  <label htmlFor="name" className="cta-form-label">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                    disabled={status === 'sending'}
                    className="cta-form-input"
                  />
                </div>
                <div className="cta-form-row">
                  <label htmlFor="email" className="cta-form-label">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@mybusiness.com"
                    required
                    disabled={status === 'sending'}
                    className="cta-form-input"
                  />
                </div>
                <div className="cta-form-row">
                  <label htmlFor="business" className="cta-form-label">Business name</label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="My Business LLC"
                    disabled={status === 'sending'}
                    className="cta-form-input"
                  />
                </div>
                <div className="cta-form-row">
                  <label htmlFor="message" className="cta-form-label">Anything else?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us what's going on with your books..."
                    disabled={status === 'sending'}
                    className="cta-form-input"
                  />
                </div>
                {status === 'error' && (
                  <p style={{ color: "#F4C76D", fontSize: 14, margin: 0 }}>
                    Something went wrong. Please email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Let\'s talk →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
