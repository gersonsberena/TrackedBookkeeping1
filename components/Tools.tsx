const tools = [
  "QuickBooks Online",
  "Xero",
  "Gusto",
  "Stripe",
  "Square",
  "PayPal",
  "Shopify",
  "Dext",
  "Hubdoc",
  "Bill.com",
];

export default function Tools() {
  return (
    <section className="tools">
      <p className="tools-label">Works with the tools you already use</p>
      <div className="tools-row">
        {tools.map((tool) => (
          <span key={tool} className="tool-chip">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
