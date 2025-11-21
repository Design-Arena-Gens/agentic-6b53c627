import { featuredHotel } from "@/lib/hotel";

export function ReefIntel() {
  return (
    <section className="grid" style={{ gap: "2.25rem" }}>
      <div>
        <h2 className="section-heading">House reef essentials</h2>
        <p className="sub-heading">
          The resort&apos;s marine team maintains a living reef corridor just 420 m from
          shore. Here&apos;s what to expect before you jump in.
        </p>
      </div>
      <ul className="reef-intel">
        {featuredHotel.reef.highlights.map((highlight) => (
          <li key={highlight}>
            <small>Highlight</small>
            <p>{highlight}</p>
          </li>
        ))}
        <li>
          <small>Dive center</small>
          <p>
            {featuredHotel.diveCenter.operator} &middot; {featuredHotel.diveCenter.boatTripsPerDay} boat departures daily
          </p>
          <p className="muted">{featuredHotel.diveCenter.houseDiveBrief}</p>
          <a
            href={`mailto:${featuredHotel.diveCenter.contact}`}
            style={{ color: "var(--sea)", fontWeight: 600, marginTop: "0.25rem" }}
          >
            {featuredHotel.diveCenter.contact}
          </a>
        </li>
      </ul>
    </section>
  );
}
