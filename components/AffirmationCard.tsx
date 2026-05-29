"use client";

import { Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  text: string;
}

export default function AffirmationCard({ text }: Props) {

  const [liked, setLiked] = useState(false);

  useEffect(() => {

    const existing =
      JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

    if (existing.includes(text)) {
      setLiked(true);
    }

  }, [text]);

  function saveFavorite() {

    try {

      const existing =
        JSON.parse(
          localStorage.getItem("favorites") || "[]"
        );

      const alreadyExists =
        existing.includes(text);

      if (alreadyExists) {

        setLiked(true);
        return;

      }

      const updated = [
        ...existing,
        text,
      ];

      localStorage.setItem(
        "favorites",
        JSON.stringify(updated)
      );

      setLiked(true);

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto flex min-h-[500px] max-w-3xl flex-col justify-between overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl"
    >

      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Text */}
      <div className="relative z-10 flex flex-1 items-center">

        <p className="text-4xl font-bold leading-relaxed md:text-6xl">
          {text}
        </p>

      </div>

      {/* Buttons */}
      <div className="relative z-10 mt-10 flex gap-4">

        <button
          onClick={saveFavorite}
          className={`rounded-full p-4 transition ${
            liked
              ? "bg-pink-500 text-white"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >

          <Heart
            fill={liked ? "white" : "none"}
          />

        </button>

        <button
          className="rounded-full bg-white/10 p-4 transition hover:bg-white/20"
        >

          <Share2 />

        </button>

      </div>

    </motion.div>

  );
}