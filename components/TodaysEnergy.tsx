"use client";

const energies = [
  {
    title: "Inner Peace",
    description:
      "Today is about slowing down, breathing deeply, and protecting your mental energy.",
    color:
      "from-blue-500/20 to-cyan-500/20",
  },

  {
    title: "Momentum",
    description:
      "You are building consistency. Small actions today create huge future results.",
    color:
      "from-purple-500/20 to-pink-500/20",
  },

  {
    title: "Confidence",
    description:
      "Trust your instincts today. You are more capable than your doubts suggest.",
    color:
      "from-orange-500/20 to-red-500/20",
  },
];

export default function TodaysEnergy() {

  const energy =
    energies[
      new Date().getDate() %
      energies.length
    ];

  return (

    <section className="fade-section px-6 py-24">

      <div className={`mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-br ${energy.color} p-12 backdrop-blur-xl`}>

        <p className="text-lg text-gray-300">
          Today’s Energy
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          {energy.title}
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-200">
          {energy.description}
        </p>

      </div>

    </section>

  );
}