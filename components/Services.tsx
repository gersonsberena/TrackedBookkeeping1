'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

function PlDashCard() {
  return (
    <div className="dirC-dash" aria-hidden="true">
      <div className="dirC-dash-top">
        <div className="dirC-dash-title">
          Profit &amp; Loss
          <span>Apr 2024</span>
        </div>
        <div className="dirC-dash-status">Live</div>
      </div>
      <div className="dirC-dash-kpis">
        <div className="dirC-kpi">
          <div className="dirC-kpi-l">Revenue</div>
          <div className="dirC-kpi-v">$48.2k<span className="dirC-kpi-d up">↑8%</span></div>
        </div>
        <div className="dirC-kpi">
          <div className="dirC-kpi-l">Expenses</div>
          <div className="dirC-kpi-v">$31.7k<span className="dirC-kpi-d down">↑3%</span></div>
        </div>
        <div className="dirC-kpi">
          <div className="dirC-kpi-l">Net</div>
          <div className="dirC-kpi-v" style={{ color: "#2E7D5B" }}>$16.5k<span className="dirC-kpi-d up">↑18%</span></div>
        </div>
      </div>
      <svg className="dirC-dash-chart" viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true" style={{ height: 80, width: "100%", display: "block" }}>
        <polyline
          points="0,70 40,52 80,58 120,28 160,38 200,16"
          fill="none"
          stroke="#2F5D4D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const services = [
  {
    id: "monthly",
    num: "01",
    title: "Monthly Bookkeeping",
    blurb: "Full-cycle monthly close — bank feeds, categorization, reconciliation, and financial statements delivered by the 10th.",
    highlight: true,
  },
  {
    id: "cleanup",
    num: "02",
    title: "Books Cleanup",
    blurb: "Behind on your books? We'll untangle months (or years) of messy transactions and get you current.",
    highlight: false,
  },
  {
    id: "qbo",
    num: "03",
    title: "QuickBooks Setup",
    blurb: "New to QuickBooks Online? We'll set up your chart of accounts, connect your banks, and train you on the basics.",
    highlight: false,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-head', {
        y: 32, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-head', start: 'top 82%' },
      });
      gsap.from('.svc-card', {
        y: 36, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12,
        scrollTrigger: { trigger: '.svc-grid', start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services-head">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="section-h2">Services built for small business owners</h2>
          </div>
          <p className="services-intro">
            No enterprise overhead. Just clean, reliable financials every month.
          </p>
        </div>
        <div className="svc-grid" style={{ marginTop: 56 }}>
          {services.map((svc) => (
            <div key={svc.id} className="svc-card">
              <div className="svc-card-top">
                <span className="svc-num">{svc.num}</span>
                {svc.highlight && <span className="svc-tag">Most popular</span>}
              </div>
              <h3 className="svc-name">{svc.title}</h3>
              <p className="svc-blurb">{svc.blurb}</p>
              {svc.highlight && <PlDashCard />}
              <div className="svc-card-foot">
                <a href="#cta" className="svc-link">Get a quote →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
