"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const affirmations = [
  "I am stronger than my fears.",
  "I deserve peace and confidence.",
  "Every challenge helps me grow.",
  "I trust myself completely.",
  "My future is full of opportunities.",
];

export default function AffirmationCarousel() {

  return (

    <section className="cursor-grab px-6 py-20 active:cursor-grabbing">

      <h2 className="mb-12 text-center text-5xl font-bold">
        Swipe Your Affirmations
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
      >

        {affirmations.map((text, index) => (

          <SwiperSlide key={index}>

            <div className="mx-auto flex min-h-[500px] max-w-5xl items-center justify-center rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <p className="text-4xl font-bold leading-relaxed md:text-6xl">
                {text}
              </p>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );
}