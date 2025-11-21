import { featuredHotel } from "@/lib/hotel";

export function Hero() {
  return (
    <section className="grid" style={{ gap: "2.5rem" }}>
      <div className="grid" style={{ gap: "1.75rem" }}>
        <span className="badge">New-build 5★ reef resort</span>
        <h1 className="title">
          {featuredHotel.name}
        </h1>
        <p className="lead">
          Purpose-built in {featuredHotel.quickMetrics.yearBuilt} on Hurghada&apos;s Magawish
          peninsula, this all-suite resort pairs a silken, private lagoon with a protected
          house reef monitored by on-site marine biologists.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {featuredHotel.bookingLinks.map((link) => (
            <a
              key={link.url}
              className="button"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
      <div className="card" style={{ display: "grid", gap: "1.2rem" }}>
        <div className="metric-grid">
          <div className="metric">
            <span>Opened</span>
            <strong>{featuredHotel.quickMetrics.yearBuilt}</strong>
          </div>
          <div className="metric">
            <span>Private shore</span>
            <strong>{featuredHotel.quickMetrics.shoreLengthMeters} m</strong>
          </div>
          <div className="metric">
            <span>Suite inventory</span>
            <strong>{featuredHotel.quickMetrics.suites}</strong>
          </div>
          <div className="metric">
            <span>Reef drop-off</span>
            <strong>{featuredHotel.quickMetrics.reefDropOffMeters} m</strong>
          </div>
        </div>
        <div className="reef-highlight">
          <strong>Live reef briefing</strong>
          <p>{featuredHotel.reef.conservationNotes}</p>
          <p className="muted">
            {featuredHotel.reef.depth} • Visibility {featuredHotel.reef.visibility} • Rated{" "}
            {featuredHotel.reef.difficulty}
          </p>
        </div>
      </div>
    </section>
  );
}
