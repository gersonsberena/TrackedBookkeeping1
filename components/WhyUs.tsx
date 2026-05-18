const cards = [
  {
    title: "Local & available",
    body: "Based in Northeast Florida. We know the regional economy — seasonal businesses, tourism cycles, construction booms.",
  },
  {
    title: "Delivered by the 10th",
    body: "Not \"when we get to it.\" Your financials land in your inbox on the same date every month, guaranteed.",
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
  return (
    <section className="why" id="why-us">
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
