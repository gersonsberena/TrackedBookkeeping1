'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const credentials = [
  "Certified Bookkeeper (CB)",
  "QuickBooks Advanced ProAdvisor",
  "Xero Advisor Certified",
  "7+ years bookkeeping experience",
  "Northeast Florida native",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portrait-frame', {
        x: -40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-grid', start: 'top 78%' },
      });
      gsap.from('.about-grid > div:last-child', {
        x: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-grid', start: 'top 78%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <div className="pp-pattern" />
              <div className="pp-label">
                <span>Photo coming soon</span>
                <strong>Rose</strong>
                <span className="pp-hint">Lead Bookkeeper</span>
              </div>
            </div>
            <div className="portrait-tag">
              <span className="pt-line">Rose B.</span>
              <span className="pt-sub">Certified Bookkeeper</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">About Rose</p>
            <h2 className="section-h2 about-h2">
              Your numbers deserve a real human, not just software.
            </h2>
            <p className="about-p">
              Hi, I&apos;m Rose — founder of Tracked Bookkeeping and a lifelong Northeast
              Florida resident. I started Tracked because I watched too many small business
              owners stress over spreadsheets when they should be focused on their craft.
            </p>
            <p className="about-p">
              I specialize in service businesses, contractors, and retail shops across
              Jacksonville, St. Augustine, and the surrounding area. I know the seasonal
              swings, the local vendors, and the tax quirks of doing business in Florida.
            </p>
            <div className="about-meta">
              {credentials.map((cred) => (
                <div key={cred}>
                  <div className="am-num">✓</div>
                  <div className="am-lbl">{cred}</div>
                </div>
              ))}
            </div>
            <div className="cert-badges">
              <img src="/badges/qb-payroll.png" alt="QuickBooks Payroll Certified" />
              <img src="/badges/qb-level2.png" alt="QuickBooks Advanced ProAdvisor" />
              <img src="/badges/xero-advisor.png" alt="Xero Advisor Certified" />
            </div>
            <a href="#cta" className="btn btn-primary">Work with Rose →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
