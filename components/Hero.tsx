"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <div className="absolute h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center animate-float"
      >
        <h1 className="text-6xl font-bold leading-tight md:text-8xl">
          Rewrite <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Inner Voice
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
          Personalized AI affirmations designed for your emotions,
          mindset, and goals.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-400">

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            AI Personalized
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            Daily Streaks
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            Mood-Based
          </span>

</div>
        <a
           href="#moods"
           className="mt-8 inline-block rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-purple-500 active:scale-95"
        >
         Start Your Journey
        </a>
      </motion.div>
    </section>
  );
}