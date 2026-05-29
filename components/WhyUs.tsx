'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const cards = [
  {
    title: "Local & available",
    body: "Based in Northeast Florida. We know the regional economy — seasonal businesses, tourism cycles, construction booms.",
  },
  {
    title: "Delivered every month",
    body: "Every month, on schedule. Your books are closed, reconciled, and in your inbox — bookkeeping as a recurring routine, not a one-off task.",
  },
  {
    title: "Human eyes, every time",
    body: "We don't just export a bank feed. Every transaction is reviewed by a real bookkeeper before you see it.",
  },
  {
    title: "Same-day responses",
    body: "Have a question about a transaction or vendor? We're here. Not in a ticket queue — actually here.",
  },
];

function WhyIcon({ index }: { index: number }) {
  const icons = ["📍", "📅", "🔒", "💬"];
  return (
    <div className="why-art" style={{ fontSize: 32, width: 56, height: 56, display: "grid", placeItems: "center" }}>
      {icons[index]}
    </div>
  );
}

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why .section-head', {
        y: 32, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.why .section-head', start: 'top 82%' },
      });
      gsap.from('.why-card', {
        y: 30, opacity: 0, duration: 0.55, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: '.why-grid', start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="why" id="why-us" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-light">Why Tracked</p>
          <h2 className="section-h2" style={{ color: "var(--on-dark)" }}>
            The bookkeeper your business deserves
          </h2>
        </div>
        <div className="why-grid">
          {cards.map((card, i) => (
            <div key={card.title} className="why-card">
              <WhyIcon index={i} />
              <h3 className="why-title">{card.title}</h3>
              <p className="why-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
