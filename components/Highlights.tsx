import { featuredHotel } from "@/lib/hotel";

const beachEntries = [
  { label: "Sand grade", value: featuredHotel.beachQuality.sandGrade },
  { label: "Swim zone", value: featuredHotel.beachQuality.swimZone },
  { label: "Water entry", value: featuredHotel.beachQuality.entry },
  { label: "Exclusivity", value: featuredHotel.beachQuality.exclusivity }
];

export function Highlights() {
  return (
    <section className="grid" style={{ gap: "2.25rem" }}>
      <div>
        <h2 className="section-heading">Why it leads Hurghada&apos;s beaches</h2>
        <p className="sub-heading">
          This is the only Magawish peninsula resort built post-2020 with a marina-free
          shoreline, giving guests undisturbed lagoon water and reef access within minutes.
        </p>
      </div>
      <div className="grid" style={{ gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        <div className="card" style={{ display: "grid", gap: "1rem" }}>
          <strong style={{ fontSize: "1.15rem" }}>Beach specification</strong>
          <ul className="grid" style={{ gap: "0.9rem" }}>
            {beachEntries.map((item) => (
              <li key={item.label}>
                <small className="muted" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {item.label}
                </small>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ display: "grid", gap: "1rem" }}>
          <strong style={{ fontSize: "1.15rem" }}>Signature accommodations</strong>
          <ul className="grid" style={{ gap: "0.75rem" }}>
            {featuredHotel.roomHighlights.map((highlight) => (
              <li key={highlight} style={{ lineHeight: 1.5 }}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ display: "grid", gap: "1rem" }}>
          <strong style={{ fontSize: "1.15rem" }}>Awards & recognition</strong>
          <ul className="grid" style={{ gap: "0.75rem" }}>
            {featuredHotel.accolades.map((accolade) => (
              <li key={accolade} style={{ lineHeight: 1.5 }}>{accolade}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
