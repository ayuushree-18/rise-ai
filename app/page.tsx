import Hero from "../components/Hero";
import MoodSelector from "../components/MoodSelector";
import TodaysEnergy from "../components/TodaysEnergy";
import AiGenerator from "../components/AiGenerator";
import StreakCard from "../components/StreakCard";
import Navbar from "../components/Navbar";
import AffirmationCarousel from "../components/AffirmationCarousel";
import MouseGlow from "../components/MouseGlow";
import QuoteShowcase from "../components/QuoteShowcase";
import AmbientPlayer from "../components/AmbientPlayer";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <MouseGlow />

      <div className="mx-auto max-w-7xl">
        
        <Navbar />

        <Hero />
        
        <TodaysEnergy />

        <div className="mx-auto h-px w-5/6 bg-white/10" />

        <MoodSelector />

        <div className="mx-auto h-px w-5/6 bg-white/10" />

        <StreakCard />

        <section className="px-6 py-20">

        </section>

        <AiGenerator />

        <QuoteShowcase />

        <AffirmationCarousel />

        <AmbientPlayer />
        
        <footer className="px-6 py-20 text-center text-gray-400">

          <p>
            Built to inspire confidence, clarity, and positive self-talk.
          </p>

        </footer>

      </div>

    </main>
  );
}