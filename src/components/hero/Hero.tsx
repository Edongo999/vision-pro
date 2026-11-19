"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroNavigation from "./HeroNavigation";
import { slides } from "./hero-data";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const activeSlide = slides[activeIndex] ?? slides[0];

  return (
    <section
      className="
        relative isolate
        h-auto min-h-[620px]
        w-full overflow-hidden
        bg-[#202124]
        md:h-[540px] md:min-h-[540px] md:max-h-[540px]
        xl:h-[580px] xl:min-h-[580px] xl:max-h-[580px]
      "
    >
      {/* BACKGROUND SLIDER */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroBackground
          slides={slides}
          setSwiperInstance={setSwiperInstance}
          setActiveIndex={setActiveIndex}
        />
      </div>

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#202124]/85 via-[#202124]/60 to-[#202124]/30" />

      {/* RED ACCENT */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-transparent to-[#E31E24]/10" />

      {/* CONTENT */}
      <div
        className="
          relative z-20 mx-auto flex
          min-h-[620px] w-full max-w-7xl
          items-center
          px-6 pb-36 pt-12
          sm:px-8 sm:pt-24
          md:h-full md:min-h-0
          md:px-12 md:pb-20 md:pt-4
        "
      >
        <HeroContent activeSlide={activeSlide} />
      </div>

      {/* NAVIGATION */}
      <HeroNavigation
        slides={slides}
        activeIndex={activeIndex}
        swiperInstance={swiperInstance}
      />
    </section>
  );
}
