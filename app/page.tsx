import Hero from "../components/Hero";
import MoodSelector from "../components/MoodSelector";
import AffirmationCard from "../components/AffirmationCard";
import AiGenerator from "../components/AiGenerator";
import StreakCard from "../components/StreakCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen text-white">

      <div className="mx-auto max-w-7xl">

        <Navbar />

        <Hero />

        <div className="mx-auto h-px w-5/6 bg-white/10" />

        <MoodSelector />

        <div className="mx-auto h-px w-5/6 bg-white/10" />

        <StreakCard />

        <section className="px-6 py-20">

          <AffirmationCard
            text="I am becoming calmer, stronger, and more confident every single day."
          />

        </section>

        <AiGenerator />

        <footer className="px-6 py-20 text-center text-gray-400">

          <p>
            Built to inspire confidence, clarity, and positive self-talk.
          </p>

        </footer>

      </div>

    </main>
  );
}