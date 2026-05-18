export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="brand">
          <div className="brand-mark">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
              <rect x="11" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
              <rect x="2" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
              <rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
            </svg>
          </div>
          <span className="brand-name">Tracked</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">How it works</a></li>
          <li><a href="#about">About Rose</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#cta" className="btn btn-nav">Request a quote →</a>
      </div>
    </nav>
  );
}
