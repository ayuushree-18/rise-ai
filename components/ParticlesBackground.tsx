"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#a855f7",
          },

          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 50,
          },

          opacity: {
            value: 0.2,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },
      }}
    />
  );
}