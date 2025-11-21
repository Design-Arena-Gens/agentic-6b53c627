import { featuredHotel } from "@/lib/hotel";

export function Timeline() {
  return (
    <section className="grid" style={{ gap: "2rem" }}>
      <div>
        <h2 className="section-heading">Evolution of the shoreline concept</h2>
        <p className="sub-heading">
          Annual upgrades keep the lagoon pristine and the reef resilient. Track how the
          resort has layered in marine-first innovations since launch.
        </p>
      </div>
      <div className="card timeline">
        {featuredHotel.timeline.map((item) => (
          <article key={item.label} className="timeline-item">
            <time>{item.date}</time>
            <div>
              <strong>{item.label}</strong>
              <p className="muted" style={{ marginTop: "0.35rem" }}>
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
