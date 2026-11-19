"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const statistics = [
  {
    value: 50,
    suffix: "+",
    label: "Ans d'expérience",
  },
  {
    value: 1800,
    suffix: "+",
    label: "Apprenants formés",
  },
  {
    value: 100,
    suffix: "%",
    label: "Engagement qualité",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Animation progressive avec ralentissement à la fin
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easeOut * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export default function InfoBanner() {
  return (
    <section className="relative z-20 w-full bg-[#E31E24]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 divide-x divide-white/30 px-2 py-3 sm:px-8 sm:py-5 lg:px-12">
        {statistics.map((item, index) => (
          <ScrollReveal
            key={item.label}
            delay={index * 0.15}
            duration={0.9}
            distance={10}
          >
            <div className="flex flex-col items-center justify-center px-1 text-center sm:px-2">
              <span className="text-lg font-extrabold leading-none tracking-tight text-white sm:text-3xl md:text-4xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </span>

              <span className="mt-1.5 text-[8px] font-semibold uppercase leading-tight tracking-wide text-white/90 sm:mt-2 sm:text-xs md:text-sm">
                {item.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
