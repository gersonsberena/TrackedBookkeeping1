import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Tracked Bookkeeping",
  description: "Terms of Service for Tracked Bookkeeping — your agreement for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: May 29, 2026</p>
            <h1 className="legal-h1">Terms of Service</h1>
            <p className="legal-intro">
              Please read these Terms of Service carefully before using the Tracked Bookkeeping website
              at <strong>trackedbookkeeping.com</strong>. By accessing or using our website, you agree
              to be bound by these Terms. If you do not agree, please do not use this site.
            </p>

            <h2>1. About This Website</h2>
            <p>
              This website is operated by Tracked Bookkeeping, a bookkeeping services firm based in
              Northeast Florida. The content on this site is for general informational purposes about
              our services. Use of our bookkeeping services is governed by a separate written engagement
              agreement between you and Tracked Bookkeeping.
            </p>

            <h2>2. No Professional Advice</h2>
            <p>
              The information provided on this website — including articles, blog posts, FAQs, and
              service descriptions — is for general informational purposes only. It does <strong>not</strong> constitute
              financial, tax, legal, accounting, investment, or any other form of professional advice.
              You should consult a qualified professional before making decisions based on any information
              found on this site.
            </p>

            <h2>3. Scope of Our Services</h2>
            <p>
              Tracked Bookkeeping provides bookkeeping services only. We are not a Certified Public
              Accountant (CPA) firm, law firm, or tax preparation firm. We do not:
            </p>
            <ul>
              <li>Prepare tax returns or provide tax advice</li>
              <li>Perform audits or attestation services</li>
              <li>Provide legal advice or legal document preparation</li>
              <li>Provide investment advice or financial planning services</li>
            </ul>
            <p>
              For these services, we recommend consulting a licensed CPA, attorney, or other
              qualified professional.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>By using this website, you agree that you will not:</p>
            <ul>
              <li>Violate any applicable local, state, national, or international law or regulation.</li>
              <li>Attempt to gain unauthorized access to any portion of our website or its related systems.</li>
              <li>Use any automated tools (bots, scrapers, crawlers) to collect data from our site without prior written permission.</li>
              <li>Introduce viruses, malware, or other harmful code to our website.</li>
              <li>Use our website to send spam or unsolicited commercial communications.</li>
              <li>Impersonate Tracked Bookkeeping or any of its personnel.</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images, and design — is
              owned by Tracked Bookkeeping or its licensors and is protected by applicable copyright
              and trademark laws. You may view and print content for personal, non-commercial use only.
              Any other use requires prior written permission from Tracked Bookkeeping.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for your
              convenience only. We do not control, endorse, or assume any responsibility for the content
              or practices of any third-party websites. Accessing third-party links is at your own risk.
            </p>

            <h2>7. Contact Form Submissions</h2>
            <p>
              Submitting a contact or quote request form on this website does not create a client
              relationship between you and Tracked Bookkeeping. A formal engagement only begins upon
              execution of a written engagement agreement.
            </p>
            <p>
              Please do not submit sensitive financial information — such as Social Security Numbers,
              Employer Identification Numbers, bank account numbers, or passwords — through our
              website contact form. Use secure, encrypted channels for sharing sensitive documents.
            </p>

            <h2>8. Privacy</h2>
            <p>
              Your use of this website is also governed by our{" "}
              <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by reference.
            </p>

            <h2>9. Disclaimers</h2>
            <p>
              This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis,
              without warranties of any kind, either express or implied. Tracked Bookkeeping makes no
              warranty that the website will be uninterrupted, error-free, or free of viruses or other
              harmful components. We do not warrant the accuracy, completeness, or usefulness of any
              information on the site.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Tracked Bookkeeping shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages —
              including lost profits, data loss, or business interruption — arising from your use of
              (or inability to use) this website or its content. In no event shall our total liability
              to you for all claims exceed one hundred dollars ($100.00).
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Tracked Bookkeeping and its owners,
              employees, and agents from any claims, liabilities, damages, losses, and expenses
              (including reasonable attorneys&apos; fees) arising out of or related to your violation of
              these Terms or your misuse of our website.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Florida, without regard to its conflict of law provisions. Any disputes
              arising from these Terms or your use of this website shall be resolved exclusively in
              the state or federal courts located in Duval County, Florida.
            </p>

            <h2>13. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting to this page, with an updated &ldquo;Last updated&rdquo; date.
              Your continued use of the website after any changes constitutes your acceptance of
              the revised Terms.
            </p>

            <h2>14. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
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
