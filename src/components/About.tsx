"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  HeartPulse,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: GraduationCap,
    title: "Formation professionnelle",
    description: "Développer des connaissances et des compétences utiles.",
  },
  {
    icon: HeartPulse,
    title: "Approche humaine",
    description: "Placer l'humain et l'accompagnement au cœur de la démarche.",
  },
  {
    icon: ShieldCheck,
    title: "Engagement qualité",
    description: "Encourager la rigueur et le sens des responsabilités.",
  },
];

export default function About() {
  return (
    <section
      id="institut"
      className="relative overflow-hidden bg-white py-8 md:py-10"
    >
      {/* Décoration d'arrière-plan */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#E31E24]/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gray-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* En-tête centré */}
        <ScrollReveal>
          <div className="mx-auto mb-1 md:mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E31E24]/15 bg-[#E31E24]/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E31E24]">
              <span className="h-2 w-2 rounded-full bg-[#E31E24]" />
              Découvrez notre institut
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#202124] sm:text-5xl lg:text-6xl">
              À propos <span className="text-[#E31E24]">de nous</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Contenu principal */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Zone des deux photos */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[570px]"
          >
            {/* Bloc des photos */}
            <div className="relative z-10 grid grid-cols-[1.08fr_0.82fr] items-start gap-3 sm:gap-5">
              {/* Photo principale */}
              <div className="relative mt-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-gray-100 shadow-2xl shadow-black/10">
                  <Image
                    src="/images/ifp-medhe/about.jpg"
                    alt="Présentation de Vision Pro"
                    fill
                    priority
                    sizes="(max-width: 768px) 55vw, 320px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                {/* Petit accent rouge */}
                <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-bl-2xl border-b-4 border-l-4 border-[#E31E24]" />
              </div>

              {/* Deuxième photo */}
              <div className="relative mt-20 sm:mt-28">
                <div className="relative aspect-[3/4] overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem] border-[5px] border-white bg-gray-100 shadow-2xl shadow-black/15">
                  <Image
                    src="/images/ifp-medhe/hero1.jpg"
                    alt="Activités et environnement de Vision Pro"
                    fill
                    sizes="(max-width: 768px) 40vw, 250px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/30 to-transparent" />
                </div>

                {/* Accent rouge */}
                <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-2xl border-r-4 border-t-4 border-[#E31E24]" />
              </div>
            </div>

            {/* Badge central superposé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-10 sm:px-6 sm:py-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E31E24] text-white">
                <HeartPulse size={23} />
              </div>

              <div>
                <p className="text-sm font-black tracking-wide text-[#202124]">
                  VISION PRO
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-gray-500 sm:text-xs">
                  Formation professionnelle & santé
                </p>
              </div>
            </motion.div>

            {/* Signature sous les images */}
            <div className="mt-12 flex items-center gap-3 pl-2">
              <span className="h-[2px] w-10 bg-[#E31E24]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
                VISION PRO
              </span>
            </div>
          </motion.div>

          {/* Présentation textuelle */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="-mt-10 md:mt-5 text-justify text-base leading-8 text-gray-600 [text-align-last:left]">
              VISION PRO s'inscrit dans une démarche de formation
              professionnelle et de développement des compétences. Notre
              approche met l'accent sur l'apprentissage, l'accompagnement et la
              préparation à la vie professionnelle.
            </p>

            <p className="mt-4 text-justify text-base leading-8 text-gray-600 [text-align-last:left]">
              À travers notre engagement, nous souhaitons contribuer à
              l'acquisition de connaissances solides et de compétences adaptées
              aux exigences du monde professionnel.
            </p>

            {/* Valeurs */}
            <div className="mt-9 space-y-5">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.5 }}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E31E24]/[0.08] text-[#E31E24] transition-all duration-300 group-hover:bg-[#E31E24] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div className="pt-0.5">
                      <h4 className="font-bold text-[#202124]">
                        {value.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bouton */}
            <div className="mt-10">
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#E31E24] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#E31E24]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#bd171c] hover:shadow-xl hover:shadow-[#E31E24]/25"
              >
                En savoir plus
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
