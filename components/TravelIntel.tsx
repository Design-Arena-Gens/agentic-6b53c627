import { featuredHotel } from "@/lib/hotel";

export function TravelIntel() {
  return (
    <section className="grid" style={{ gap: "2.25rem" }}>
      <div>
        <h2 className="section-heading">Getting there & maximizing reef time</h2>
        <p className="sub-heading">
          Optimize your arrival, dive flow, and downtime using intel collected from the
          resort&apos;s concierge and resident marine rangers.
        </p>
      </div>
      <div className="card" style={{ display: "grid", gap: "1.5rem" }}>
        <div className="grid" style={{ gap: "0.75rem" }}>
          {featuredHotel.travelTips.map((tip) => (
            <p key={tip}>• {tip}</p>
          ))}
        </div>
        <div className="divider" />
        <div className="cta-panel">
          <div>
            <strong style={{ fontSize: "1.15rem" }}>Coordinates</strong>
            <p>
              {featuredHotel.location.coordinates[0].toFixed(6)},{" "}
              {featuredHotel.location.coordinates[1].toFixed(6)}
            </p>
            <p className="muted" style={{ marginTop: "0.5rem" }}>
              {featuredHotel.location.waterfront}
            </p>
          </div>
          <a
            className="button"
            href={`https://www.google.com/maps/search/?api=1&query=${featuredHotel.location.coordinates[0]},${featuredHotel.location.coordinates[1]}`}
            target="_blank"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
