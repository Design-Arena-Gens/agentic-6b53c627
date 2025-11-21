"use client";

import { useState } from "react";
import { featuredHotel } from "@/lib/hotel";

export function SeasonalIntel() {
  const [currentSeason, setCurrentSeason] = useState(0);

  return (
    <section className="grid" style={{ gap: "2rem" }}>
      <div>
        <h2 className="section-heading">Reef calendar intelligence</h2>
        <p className="sub-heading">
          Match your stay with the most active reef window. Metrics blend long-term marine
          surveys, daily visibility logs, and manta sightings from the Magawish Dive Hub.
        </p>
      </div>
      <div className="card" style={{ display: "grid", gap: "2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {featuredHotel.seasonalIntel.map((season, index) => {
            const active = index === currentSeason;
            return (
              <button
                key={season.label}
                onClick={() => setCurrentSeason(index)}
                style={{
                  border: "none",
                  background: active ? "var(--sea)" : "rgba(10, 126, 163, 0.1)",
                  color: active ? "#fff" : "var(--sea)",
                  padding: "0.75rem 1.2rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {season.label}
              </button>
            );
          })}
        </div>
        <SeasonDetails index={currentSeason} />
      </div>
    </section>
  );
}

function SeasonDetails({ index }: { index: number }) {
  const season = featuredHotel.seasonalIntel[index];
  return (
    <div className="grid" style={{ gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
      <div className="reef-highlight">
        <strong>Sea temperature</strong>
        <p>{season.seaTemperature}</p>
      </div>
      <div className="reef-highlight">
        <strong>Manta probability</strong>
        <p>{season.mantaProbability}% chance on escorted zodiac drops</p>
      </div>
      <div className="reef-highlight">
        <strong>Reef health index</strong>
        <p>{season.reefHealthScore}/100 based on live coral cover and bleaching watch</p>
      </div>
      <div className="reef-highlight" style={{ gridColumn: "1 / -1" }}>
        <strong>Pro tip</strong>
        <p>{season.notes}</p>
      </div>
    </div>
  );
}
