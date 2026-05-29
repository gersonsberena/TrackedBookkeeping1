'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

function PlMiniCard() {
  return (
    <div className="dirC-dash" style={{ marginTop: 20 }} aria-hidden="true">
      <div className="dirC-dash-top">
        <div className="dirC-dash-title">Monthly Report <span>Ready ✓</span></div>
      </div>
      <div className="dirC-dash-kpis" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="dirC-kpi">
          <div className="dirC-kpi-l">Revenue</div>
          <div className="dirC-kpi-v">$48.2k</div>
        </div>
        <div className="dirC-kpi">
          <div className="dirC-kpi-l">Net</div>
          <div className="dirC-kpi-v" style={{ color: "#2E7D5B" }}>$16.5k</div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Connect your accounts",
    body: "We link your bank accounts, credit cards, and payment processors securely through your accounting software.",
  },
  {
    num: "02",
    title: "We categorize everything",
    body: "Every transaction is reviewed, categorized, and reconciled — no automation-only shortcuts.",
  },
  {
    num: "03",
    title: "Review your reports",
    body: "Receive your P&L, balance sheet, and cash-flow statement by the 10th of each month.",
    motif: true,
  },
  {
    num: "04",
    title: "Ask us anything",
    body: "Questions about a line item? Wondering if you can afford that hire? Message us — we respond same day.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process .section-head', {
        y: 32, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.process .section-head', start: 'top 82%' },
      });
      gsap.from('.proc-step', {
        y: 34, opacity: 0, duration: 0.55, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: '.proc-grid', start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="process" id="process" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="section-h2">Up and running in one week</h2>
        </div>
        <div className="proc-grid">
          {steps.map((step, i) => (
            <div key={step.num} className="proc-step">
              {i < steps.length - 1 && (
                <svg className="proc-arrow" viewBox="0 0 22 16" fill="none">
                  <path d="M0 8h20M14 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <div className="proc-step-top">
                <span className="proc-n">{step.num}</span>
              </div>
              <h3 className="proc-title">{step.title}</h3>
              <p className="proc-body">{step.body}</p>
              {step.motif && <PlMiniCard />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
