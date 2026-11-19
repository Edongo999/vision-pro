"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import { HeroSlide } from "./types";

type Props = {
  slides: HeroSlide[];
  activeIndex: number;
  swiperInstance: SwiperType | null;
};

export default function HeroNavigation({
  slides,
  activeIndex,
  swiperInstance,
}: Props) {
  return (
    <div className="absolute bottom-0 left-0 z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-5 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-8 lg:pb-10">
        {/* INDICATEURS */}
        <div className="flex items-center gap-2 sm:gap-3 md:-translate-y-8">
          {slides.map((slide, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={slide.id}
                onClick={() => swiperInstance?.slideToLoop(index)}
                aria-label={`Afficher la diapositive ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex flex-col items-start gap-2 sm:gap-3"
              >
                <span
                  className={`text-xs font-bold transition-colors sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-white/45 group-hover:text-white"
                  }`}
                >
                  0{index + 1}
                </span>

                <span
                  className={`relative h-[3px] overflow-hidden rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-12 bg-white/30 sm:w-16 md:w-20"
                      : "w-7 bg-white/25 sm:w-10 md:w-12"
                  }`}
                >
                  {isActive && (
                    <span
                      key={activeIndex}
                      className="absolute inset-0 origin-left animate-[heroProgress_6.5s_linear] bg-white"
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* FLÈCHES */}
        <div className="flex items-center gap-2 sm:gap-3 -translate-x-4 md:translate-x-0  -translate-y-8 md:-translate-y-8">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Diapositive précédente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#10243A] sm:h-12 sm:w-12 md:h-14 md:w-14"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Diapositive suivante"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#10243A] sm:h-12 sm:w-12 md:h-14 md:w-14"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
