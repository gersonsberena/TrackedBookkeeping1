'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const industries = [
  {
    label: "Service Businesses",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 10v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Contractors & Trades",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 22l4-4m0 0l8-8m-8 8l2-6-6 2zm8-8l2-6-6 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Retail Shops",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 8h18l-1.5 8H6.5L5 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 8L4 5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="22" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="22" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Restaurants & Food",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M9 4v5c0 2.21 1.79 4 4 4s4-1.79 4-4V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 13v11M9 4v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Cleaning Companies",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M8 20c0-5 2-9 6-12 4 3 6 7 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 8V5m-3 4L9 7m8 2l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Freelancers & Creatives",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 23l4-10 6-6 6-3-3 6-6 6-7 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.industries .section-head', {
        y: 32, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.industries .section-head', start: 'top 82%' },
      });
      gsap.from('.ind-tile', {
        y: 24, opacity: 0, duration: 0.45, ease: 'power2.out', stagger: 0.06,
        scrollTrigger: { trigger: '.ind-grid', start: 'top 80%' },
      });
      gsap.from('.ind-footer', {
        opacity: 0, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.ind-footer', start: 'top 88%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="industries" id="industries" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-light">Who we work with</p>
          <h2 className="section-h2 industries-h2">
            Built for the businesses that keep Florida running.
          </h2>
        </div>
        <div className="ind-grid">
          {industries.map(({ label, icon }) => (
            <div key={label} className="ind-tile">
              <div className="ind-icon">{icon}</div>
              <span className="ind-label">{label}</span>
            </div>
          ))}
        </div>
        <p className="ind-footer">
          Not on the list? Rose works with all types of small businesses —{" "}
          <a href="#cta">let&apos;s talk</a>.
        </p>
      </div>
    </section>
  );
}
