"use client";

import { Flame } from "lucide-react";
import { useEffect, useState } from "react";

export default function StreakCard() {

  const [streak, setStreak] = useState(1);

  useEffect(() => {

    const lastVisit =
      localStorage.getItem("lastVisit");

    const savedStreak =
      localStorage.getItem("streak");

    const today =
      new Date().toDateString();

    if (!lastVisit) {

      localStorage.setItem(
        "lastVisit",
        today
      );

      localStorage.setItem(
        "streak",
        "1"
      );

      setStreak(1);

      return;
    }

    const lastDate =
      new Date(lastVisit);

    const currentDate =
      new Date(today);

    const difference =
      currentDate.getTime() -
      lastDate.getTime();

    const days =
      difference / (1000 * 60 * 60 * 24);

    let currentStreak =
      savedStreak
        ? parseInt(savedStreak)
        : 1;

    if (days >= 1 && days < 2) {

      currentStreak += 1;

      localStorage.setItem(
        "streak",
        currentStreak.toString()
      );

      localStorage.setItem(
        "lastVisit",
        today
      );

    }

    setStreak(currentStreak);

  }, []);

  return (
    <section className="fade-section px-6 py-20">

      <div className="mx-auto flex max-w-2xl items-center justify-between rounded-[40px] border border-orange-500/20 bg-orange-500/10 p-8 backdrop-blur-xl">

        <div>

          <p className="text-lg text-orange-200">
            Current Streak
          </p>

          <h2 className="mt-2 text-5xl font-bold">
            {streak} Days
          </h2>

        </div>

        <div className="rounded-full bg-orange-500/20 p-6">
          <Flame
            size={50}
            className="text-orange-400"
          />
        </div>

      </div>

    </section>
  );
}