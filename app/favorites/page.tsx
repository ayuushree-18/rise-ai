"use client";

import { useEffect, useState } from "react";

export default function FavoritesPage() {

  const [favorites, setFavorites] =
    useState<string[]>([]);

  useEffect(() => {
    
    
    const saved =
      JSON.parse(
        localStorage.getItem(
          "favorites"
        ) || "[]"
      );

    setFavorites(saved);

  }, []);

  return (

    <main className="min-h-screen bg-black px-6 py-20 text-white">

      <h1 className="mb-12 text-center text-6xl font-bold">
        Your Favorites
      </h1>

      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        {favorites.length === 0 && (

          <p className="text-center text-xl text-gray-400">
            No favorites yet.
          </p>

        )}

        {favorites.map((item, index) => (

          <div
            key={index}
            className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <p className="text-3xl font-semibold leading-relaxed">
              {item}
            </p>

          </div>

        ))}

      </div>

    </main>

  );
}