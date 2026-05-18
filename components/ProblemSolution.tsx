const problems = [
  "Shoe-box receipts and mystery transactions",
  "No idea if you're actually profitable",
  "Panic every quarter when taxes are due",
  "Hours lost reconciling statements yourself",
  "Accountant gets messy books — you pay more",
];

const solutions = [
  "Every transaction categorized and reconciled",
  "P&L, balance sheet, and cash flow — every month",
  "Tax-ready financials handed to your CPA on time",
  "Free your weekends — we handle the numbers",
  "Clean books → lower accounting fees",
];

export default function ProblemSolution() {
  return (
    <section className="ps" id="why">
      <div className="ps-grid">
        <div className="ps-col ps-bad">
          <div className="ps-col-head">
            <span className="ps-tag ps-tag-bad">Without Tracked</span>
          </div>
          <ul>
            {problems.map((p) => (
              <li key={p}>
                <span className="ps-mark ps-mark-bad">✕</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="ps-col ps-good">
          <div className="ps-col-head">
            <span className="ps-tag ps-tag-good">With Tracked</span>
          </div>
          <ul>
            {solutions.map((s) => (
              <li key={s}>
                <span className="ps-mark ps-mark-good">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
