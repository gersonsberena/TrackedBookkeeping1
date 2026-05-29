const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="/" className="brand">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
                <rect x="11" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
                <rect x="2" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
                <rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
              </svg>
              Tracked
            </a>
            <p className="footer-tag">
              Clean books for Northeast Florida small businesses.
            </p>
            <div className="footer-badge">
              <span className="badge-dot" />
              <div>
                <strong>Jacksonville &amp; St. Augustine, FL</strong>
                <span>Serving Northeast Florida</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-h">Services</p>
            <a href="#services">Monthly Bookkeeping</a>
            <a href="#services">Books Cleanup</a>
            <a href="#services">QuickBooks Setup</a>
          </div>

          <div className="footer-col">
            <p className="footer-h">Company</p>
            <a href="#process">How it works</a>
            <a href="#about">About Rose</a>
            <a href="#testimonials">Client stories</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-col">
            <p className="footer-h">Contact</p>
            <a href="mailto:hello@trackedbookkeeping.com">hello@trackedbookkeeping.com</a>
            <a href="tel:+19043256184">(904) 325-6184</a>
            <span className="footer-hours">Mon–Fri, 9 AM – 5 PM</span>
            <a href="#cta">Let&apos;s talk →</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tracked Bookkeeping LLC. All rights reserved.</p>
          <p>
            <a href="/privacy">Privacy</a>
            {" · "}
            <a href="/terms">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
