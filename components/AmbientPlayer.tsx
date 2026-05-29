"use client";

import { useRef } from "react";

export default function AmbientPlayer() {

  const audioRef =
    useRef<HTMLAudioElement>(null);

  function playAudio() {

    audioRef.current?.play();

  }

  return (

    <section className="px-6 py-20 text-center">

      <button
        onClick={playAudio}
        className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:scale-105 hover:bg-white/10"
      >

        🎵 Play Calm Ambience

      </button>

      <audio
        ref={audioRef}
        src="/calm.mp3"
      />

    </section>

  );
}