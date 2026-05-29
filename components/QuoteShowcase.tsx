"use client";

import { TypeAnimation } from "react-type-animation";

export default function QuoteShowcase() {
  return (
    <section className="fade-section px-6 py-32 text-center">

      <h2 className="text-5xl font-bold leading-relaxed md:text-7xl">

        <TypeAnimation
          sequence={[
            "You are enough.",
            2000,
            "Your future is bright.",
            2000,
            "Growth takes time.",
            2000,
            "You can overcome this.",
            2000,
          ]}
          speed={40}
          repeat={Infinity}
        />

      </h2>

    </section>
  );
}