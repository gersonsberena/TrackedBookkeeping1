'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-eyebrow', { y: 18, opacity: 0, duration: 0.6, delay: 0.15 })
        .from('.hero-h1', { y: 56, opacity: 0, duration: 0.85 }, '-=0.35')
        .from('.hero-sub', { y: 22, opacity: 0, duration: 0.6 }, '-=0.45')
        .from('.hero-ctas .btn', { y: 14, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-media">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-tint" />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="badge-dot" />
          Northeast Florida · Jacksonville &amp; St. Augustine
        </div>
        <h1 className="hero-h1">
          Clean books.<br />
          Clear numbers.<br />
          Calm Mondays.
        </h1>
        <p className="hero-sub">
          Monthly bookkeeping for Northeast Florida small businesses —
          delivered every month, on time.
        </p>
        <div className="hero-ctas">
          <a href="#cta" className="btn btn-primary">Let&apos;s talk →</a>
          <a href="#process" className="btn btn-ghost">Book a 30-min call</a>
        </div>
      </div>
    </section>
  );
}
