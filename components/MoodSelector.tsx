"use client";

import { motion } from "framer-motion";

const moods = [
  {
    emoji: "😔",
    title: "Lonely",
  },
  {
    emoji: "😰",
    title: "Anxious",
  },
  {
    emoji: "🔥",
    title: "Motivated",
  },
  {
    emoji: "😴",
    title: "Tired",
  },
  {
    emoji: "😌",
    title: "Calm",
  },
  {
    emoji: "📚",
    title: "Focused",
  },
];

export default function MoodSelector() {
  return (
    <section
      id="moods"
      className="px-6 py-20"
    >
      <h2 className="mb-12 text-center text-5xl font-bold">
        How are you feeling today?
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3">

        {moods.map((mood, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition hover:border-purple-400 hover:bg-white/10"
          >
            <div className="text-6xl">
              {mood.emoji}
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              {mood.title}
            </h3>

          </motion.div>
        ))}

      </div>
    </section>
  );
}