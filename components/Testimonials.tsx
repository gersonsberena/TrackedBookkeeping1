'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const testimonials = [
  {
    stars: 5,
    quote:
      "Rose cleaned up 18 months of chaos in two weeks. Our accountant was amazed — said it was the cleanest set of books she'd seen from a small business.",
    name: "Marcus T.",
    initials: "MT",
    biz: "Owner, MT Electrical Services · Jacksonville",
  },
  {
    stars: 5,
    quote:
      "I used to dread tax season. Now I just forward the email Rose sends on the 10th. It's that simple.",
    name: "Diane R.",
    initials: "DR",
    biz: "Owner, Coastal Pilates Studio · St. Augustine",
  },
  {
    stars: 5,
    quote:
      "Finally know if I'm actually making money. The monthly P&L breakdown changed how I price my projects.",
    name: "Kevin O.",
    initials: "KO",
    biz: "General Contractor · Fleming Island",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testi-head', {
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.testi-head', start: 'top 82%' },
      });
      gsap.from('.testi-card', {
        y: 34, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12,
        scrollTrigger: { trigger: '.testi-grid', start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="testi" id="testimonials" ref={ref}>
      <div className="container">
        <div className="testi-head">
          <div>
            <p className="eyebrow">Client stories</p>
            <h2 className="section-h2">Northeast Florida businesses,<br />in their own words</h2>
          </div>
          <div className="testi-aggregate">
            <div className="ta-stars">{"★".repeat(5)}</div>
            <p className="ta-text"><strong>5.0</strong> — verified reviews</p>
          </div>
        </div>
        <div className="testi-grid" style={{ marginTop: 56 }}>
          {testimonials.map((t) => (
            <figure key={t.name} className="testi-card">
              <div className="testi-stars">{"★".repeat(t.stars)}</div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-who">{t.name}</div>
                  <div className="testi-role">{t.biz}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
