import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Tracked Bookkeeping",
  description: "Privacy Policy for Tracked Bookkeeping — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: May 29, 2026</p>
            <h1 className="legal-h1">Privacy Policy</h1>
            <p className="legal-intro">
              Tracked Bookkeeping (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit <strong>trackedbookkeeping.com</strong> or contact us about our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you voluntarily provide to us, including:</p>
            <ul>
              <li><strong>Contact information</strong> — your name, email address, phone number, and business name when you fill out our contact or quote request form.</li>
              <li><strong>Message content</strong> — any details you share about your business or bookkeeping needs.</li>
              <li><strong>Communications</strong> — records of emails, messages, or calls between you and Tracked Bookkeeping.</li>
            </ul>
            <p>
              We may also automatically collect limited technical data when you visit our website, such as
              your IP address, browser type, referring URLs, and pages viewed — primarily for security
              and analytics purposes.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes for bookkeeping services.</li>
              <li>Communicate with you about your account, services, or questions.</li>
              <li>Improve our website and service offerings.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties
              for marketing purposes.
            </p>

            <h2>3. Cookies</h2>
            <p>
              Our website may use cookies — small data files stored on your browser — to improve your
              browsing experience and understand how visitors use our site. You can instruct your browser
              to refuse all cookies or to indicate when a cookie is being sent. Note that some portions
              of our site may not function properly without cookies.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              We may use third-party tools to operate our website and business, including analytics
              providers, email delivery services, and scheduling tools. These providers have their own
              privacy policies governing how they handle data. We only share the minimum information
              necessary for them to perform their functions.
            </p>
            <p>
              Our website may contain links to external websites. We are not responsible for the
              privacy practices or content of those sites.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information
              from unauthorized access, disclosure, alteration, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p>
              Please do not send sensitive financial information (tax IDs, bank account numbers,
              Social Security Numbers) through our website contact form. Use secure, encrypted channels
              for sharing sensitive documents.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services, comply with
              legal obligations, resolve disputes, and enforce our agreements. If you would like us to
              delete your information, please contact us and we will do so unless we are legally required
              to retain it.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your information, subject to legal retention requirements.</li>
              <li>Opt out of marketing communications at any time by replying &ldquo;unsubscribe&rdquo; to any email we send.</li>
            </ul>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18. We do not
              knowingly collect personal information from children. If we learn that we have collected
              information from a child, we will delete it promptly.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website after
              any changes constitutes acceptance of the updated policy.
            </p>

            <h2>10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <div className="legal-contact">
              <p><strong>Tracked Bookkeeping</strong></p>
              <p>Jacksonville &amp; St. Augustine, FL</p>
              <p>Email: <a href="mailto:hello@trackedbookkeeping.com">hello@trackedbookkeeping.com</a></p>
              <p>Phone: <a href="tel:+19043256184">(904) 325-6184</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
