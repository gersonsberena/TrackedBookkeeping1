export default function Hero() {
  return (
    <section className="hero" id="home">
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
          delivered by the 10th, every month.
        </p>
        <div className="hero-ctas">
          <a href="#cta" className="btn btn-primary">Request a quote →</a>
          <a href="#process" className="btn btn-ghost">Book a 30-min call</a>
        </div>
      </div>
    </section>
  );
}
