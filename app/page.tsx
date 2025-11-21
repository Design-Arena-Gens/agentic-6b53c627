import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { ReefIntel } from "@/components/ReefIntel";
import { SeasonalIntel } from "@/components/SeasonalIntel";
import { Timeline } from "@/components/Timeline";
import { TravelIntel } from "@/components/TravelIntel";

export default function Page() {
  return (
    <main>
      <Hero />
      <Highlights />
      <ReefIntel />
      <SeasonalIntel />
      <Timeline />
      <TravelIntel />
    </main>
  );
}
