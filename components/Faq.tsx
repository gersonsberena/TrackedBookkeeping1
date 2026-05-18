'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "How does onboarding work?",
    a: "We start with a free 30-minute call to understand your business. Then we connect your accounts, review the current state of your books, and send you an onboarding checklist. Most clients are fully set up within a week.",
  },
  {
    q: "What accounting software do you use?",
    a: "We primarily work in QuickBooks Online, which is the industry standard for small businesses. We also work in Xero. If you're not yet on either, we'll set you up on the right platform for your needs.",
  },
  {
    q: "Do I need to organize my receipts?",
    a: "Nope. We'll connect your bank feeds and payment processors directly. If you want to capture receipts for expense reports, we can set you up with Dext or Hubdoc — but it's not required.",
  },
  {
    q: "When do I receive my monthly reports?",
    a: "By the 10th of every month — guaranteed. You'll receive a PDF with your P&L, balance sheet, and a brief summary of anything notable we spotted.",
  },
  {
    q: "Do you do taxes?",
    a: "We don't file tax returns, but we work closely with your CPA or tax preparer to make sure they have everything they need. If you don't have a CPA, we can refer you to one we trust.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is based on your monthly transaction volume. Most small business clients start at $250–$450/month for monthly bookkeeping. Request a quote for an exact price based on your situation.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-side">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-h2">Questions we hear all the time</h2>
            <p className="faq-side-p">
              Can&apos;t find an answer? Send us a message and we&apos;ll get back to you same day.
            </p>
            <a href="#cta" className="btn btn-primary">Ask us directly →</a>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                  <button
                    className="faq-q"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className="faq-chev" aria-hidden="true">▾</span>
                  </button>
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
