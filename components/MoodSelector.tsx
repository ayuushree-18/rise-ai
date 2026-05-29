"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { affirmations } from "../app/data/affirmations";
import AffirmationCard from "./AffirmationCard"; 

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

  const [selectedMood, setSelectedMood] =
    useState("");
  const [currentAffirmation, setCurrentAffirmation] =
    useState("");

  return (
    <section className="fade-section px-6 py-20"
      id="moods"
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
            onClick={() => {

              setSelectedMood(mood.title);

              const moodAffirmations =
                affirmations[
                  mood.title as keyof typeof affirmations
                ];

              const randomAffirmation =
                moodAffirmations[
                  Math.floor(
                     Math.random() *
                       moodAffirmations.length
                  )
                  ];

              setCurrentAffirmation(
                 randomAffirmation
                  );

}}
            className={`cursor-pointer rounded-3xl border p-10 text-center backdrop-blur-xl transition ${
              selectedMood === mood.title
                ? "border-purple-400 bg-purple-500/20"
                : "border-white/10 bg-white/5 hover:border-purple-400 hover:bg-white/10"
            }`}
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

      {selectedMood && (

  <div className="mt-14">

    <div className="mb-6 text-center">

      <p className="text-xl text-purple-300">
        Selected Mood
      </p>

      <h3 className="mt-2 text-4xl font-bold">
        {selectedMood}
      </h3>

    </div>

    <AffirmationCard
      text={currentAffirmation}
    />

  </div>

)}

    </section>
  );
}