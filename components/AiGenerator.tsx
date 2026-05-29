"use client";

import { useState } from "react";

export default function AiGenerator() {

  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generateAffirmations() {

    if (!mood) return;

    setLoading(true);

    try {

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood,
        }),
      });

      const data = await response.json();

      if (data.text) {

        setResult(data.text);

      } else {

        setResult(`
     • I am capable of overcoming difficult moments.

     • I grow stronger with every challenge.

     • I am calm, focused, and resilient.

     • My future is filled with opportunities.

     • I trust myself to keep moving forward.
       ` );

}

    } catch (error) {

      console.log(error);

      setResult(`
    • I believe in my ability to improve.

    • Every day is a fresh beginning.

    • I am stronger than my doubts.

    • I choose growth over fear.

    • I deserve peace and confidence.
      `);

}

    setLoading(false);
  }

  return (
    <section className="fade-section px-6 py-20">

      <div className="mx-auto max-w-3xl rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h2 className="text-4xl font-bold">
          Generate AI Affirmations
        </h2>

        <input
          type="text"
          placeholder="Enter your mood..."
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="mt-8 w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-lg outline-none"
        />

        <button
          onClick={generateAffirmations}
          className="mt-6 rounded-full bg-purple-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-purple-500"
        >
          {loading ? "AI is thinking..." : "Generate"}
        </button>

        {result && (
          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="mb-6 text-2xl font-bold text-purple-300">
               Your Personalized Affirmations
            </h3>

          <div className="space-y-4 whitespace-pre-wrap text-lg leading-relaxed text-gray-200">
            {result}
          </div>

        </div>
)}

      </div>

    </section>
  );
}