import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { journey } from "@/content/journey";

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline chapters={journey} />
    </>
  );
}
