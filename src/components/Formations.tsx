"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  HeartPulse,
  Pill,
  Sparkles,
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";

const formations = [
  {
    id: 1,
    category: "Promotion de la santé",
    title: "Délégué médical",
    description:
      "Développez les compétences nécessaires pour représenter et promouvoir les produits de santé auprès des professionnels du secteur médical.",
    image: "/images/ifp-medhe/delegue-medical.jpg",
    icon: GraduationCap,
  },
  {
    id: 2,
    category: "Secteur pharmaceutique",
    title: "Auxiliaire de pharmacie",
    description:
      "Apprenez à assister les professionnels de pharmacie dans leurs activités quotidiennes et développez des compétences adaptées à cet environnement.",
    image: "/images/ifp-medhe/auxiliaire-pharmacie.jpg",
    icon: Pill,
  },
  {
    id: 3,
    category: "Accompagnement humain",
    title: "Auxiliaire de vie",
    description:
      "Préparez-vous à accompagner les personnes dans leur quotidien, à contribuer à leur bien-être et à répondre à leurs besoins avec attention.",
    image: "/images/ifp-medhe/auxilliare.jpg",
    icon: HeartPulse,
  },
];

export default function Formations() {
  return (
    <section
      id="formations"
      className="relative isolate overflow-hidden bg-[#F7F5F5] py-7 md:py-5"
    >
      {/* Décoration d'arrière-plan */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-red-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-white/80 blur-[100px]" />

      {/* Contenu principal */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <ScrollReveal>
          <div className="mb-16 w-full">
            {/* Badge centré */}
            <div className="mb-5 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-gray-200/70">
                <span className="h-2 w-2 rounded-full bg-[#E31E24]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E31E24]">
                  Apprendre & évoluer
                </span>
              </div>
            </div>

            {/* Titre centré */}
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#202124] sm:text-4xl md:text-5xl">
              Nos <span className="text-[#E31E24]">formations</span>
            </h2>

            {/* Description */}
            <p className="mt-6 w-full text-left text-justify text-[14px] leading-7 text-slate-600 sm:text-[15px] md:text-base md:leading-[1.9] lg:text-[17px] lg:leading-[2]">
              Découvrez les formations professionnelles proposées par VISION PRO
              dans les métiers de la santé. À travers des programmes axés sur
              l'apprentissage et le développement des compétences, nous vous
              accompagnons dans l'acquisition de connaissances pratiques et
              théoriques pour mieux vous préparer aux exigences du monde
              professionnel et construire votre avenir.
            </p>
          </div>
        </ScrollReveal>

        {/* Cartes de formation */}
        <div className="-mt-8 grid gap-8 md:mt-0 md:grid-cols-2 lg:grid-cols-3">
          {formations.map((formation, index) => {
            const Icon = formation.icon;

            return (
              <motion.article
                key={formation.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-[24px] bg-white shadow-[0_12px_35px_rgba(32,33,36,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(227,30,36,0.13)]"
              >
                {/* Accent rouge supérieur */}
                <div className="absolute left-0 top-0 z-10 h-1 w-0 bg-[#E31E24] transition-all duration-500 group-hover:w-full" />

                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={formation.image}
                    alt={formation.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#E31E24] shadow-[0_5px_20px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={23} />
                  </div>

                  <span className="absolute bottom-5 left-5 rounded-full bg-[#E31E24] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    {formation.category}
                  </span>
                </div>

                {/* Contenu */}
                <div className="p-7">
                  <h3 className="text-xl font-bold leading-snug text-[#202124] transition-colors duration-300 group-hover:text-[#E31E24]">
                    {formation.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {formation.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#E31E24] transition-all duration-300 hover:gap-4"
                    >
                      Découvrir la formation
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Appel à l'action : pleine largeur de l'écran */}
      <ScrollReveal>
        <div className="relative mt-10 w-full overflow-hidden bg-[#202124] px-5 py-7 sm:px-10 md:py-8">
          {/* Décorations */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full border-[30px] border-white/[0.04]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full border-[30px] border-white/[0.04]" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-5 md:flex-row md:justify-between">
            {/* Texte centré */}
            <div className="w-full flex-1 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E31E24] text-white shadow-lg shadow-red-900/30">
                <Sparkles size={22} />
              </div>

              <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                Vous souhaitez en savoir plus ?
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-300 sm:text-base">
                Notre équipe reste disponible pour vous renseigner sur les
                possibilités de formation et vous accompagner dans votre
                démarche.
              </p>
            </div>

            {/* Bouton à droite */}
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#E31E24] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#E31E24]"
            >
              Contactez-nous
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
