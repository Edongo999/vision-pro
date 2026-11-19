"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { HeroSlide } from "./types";
import RegistrationModal from "@/components/RegistrationModal";

type Props = {
  activeSlide: HeroSlide;
};

// SÉQUENCE GLOBALE
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.2,
    },
  },
};

// ANIMATION DES ÉLÉMENTS
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// SORTIE DU CONTENU
const exitVariants = {
  opacity: 0,
  y: -8,
  filter: "blur(3px)",
  transition: {
    duration: 0.3,
    ease: "easeOut" as const,
  },
};

export default function HeroContent({ activeSlide }: Props) {
  const [registrationOpen, setRegistrationOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={exitVariants}
          className="w-full max-w-full md:max-w-3xl"
        >
          {/* SURTITRE */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -18,
                filter: "blur(4px)",
              },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              },
            }}
            className="mb-3 flex items-center gap-3 sm:mb-4"
          >
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "left" }}
              className="h-[2px] w-8 shrink-0 bg-[#E31E24] sm:w-10"
            />

            <span className="text-[11px] font-bold tracking-[0.14em] text-[#FF777B] sm:text-xs sm:tracking-[0.18em] md:text-sm">
              {activeSlide.eyebrow}
            </span>
          </motion.div>

          {/* TITRE */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 max-w-[340px] text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:max-w-2xl sm:text-4xl md:mb-4 md:text-5xl lg:text-6xl"
          >
            {activeSlide.title}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="mb-6 max-w-[340px] text-pretty text-sm leading-7 text-white/90 sm:max-w-xl sm:text-base sm:leading-8 md:mb-6 md:text-base md:leading-7"
          >
            {activeSlide.description}
          </motion.p>

          {/* BOUTONS */}
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {/* PREMIER BOUTON */}
            <motion.div variants={itemVariants}>
              <Link
                href={activeSlide.link}
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#E31E24] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C7191F] hover:shadow-lg hover:shadow-[#E31E24]/25 sm:w-auto"
              >
                {activeSlide.button}
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* DEUXIÈME BOUTON */}
            <motion.div variants={itemVariants}>
              <button
                type="button"
                onClick={() => setRegistrationOpen(true)}
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24] hover:bg-[#E31E24]/15 sm:w-auto"
              >
                S'inscrire
                <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* FENÊTRE D'INSCRIPTION */}
      <RegistrationModal
        isOpen={registrationOpen}
        onClose={() => setRegistrationOpen(false)}
      />
    </>
  );
}
