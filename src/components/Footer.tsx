import Link from "next/link";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Présentation", href: "#about" },
  { label: "Formations", href: "#formations" },
  { label: "Contact", href: "#contact" },
];

const formations = [
  "Délégué médical",
  "Auxiliaire de pharmacie",
  "Auxiliaire de vie",
  "Assistant(e) de cabinet médical",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#202124] text-white">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-9 lg:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_1.5fr] sm:gap-8 lg:grid-cols-[1.1fr_1.8fr_1fr]">
          {/* IDENTITÉ */}
          <ScrollReveal distance={12}>
            <div className="flex items-center gap-3 sm:block">
              <Link
                href="#accueil"
                className="flex shrink-0 items-center gap-2"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E31E24]">
                  <GraduationCap size={20} />
                </span>

                <span className="text-lg font-extrabold tracking-wide">
                  VISION <span className="text-[#E31E24]">PRO</span>
                </span>
              </Link>

              <p className="max-w-xs text-[11px] leading-5 text-white/55 sm:mt-3 sm:text-sm">
                La formation professionnelle au service de votre avenir.
              </p>
            </div>
          </ScrollReveal>

          {/* NAVIGATION ET FORMATIONS */}
          <ScrollReveal delay={0.1} distance={12}>
            <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-4 sm:border-y-0 sm:border-l sm:py-0 sm:pl-6 lg:border-r lg:px-8">
              <div>
                <h3 className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-[#E31E24] sm:text-xs">
                  Navigation
                </h3>

                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[11px] text-white/65 transition-colors hover:text-white sm:text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-[#E31E24] sm:text-xs">
                  Nos formations
                </h3>

                <ul className="space-y-2">
                  {formations.map((formation) => (
                    <li key={formation}>
                      <Link
                        href="#formations"
                        className="text-[11px] leading-5 text-white/65 transition-colors hover:text-white sm:text-sm"
                      >
                        {formation}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* CONTACT */}
          <ScrollReveal delay={0.2} distance={12}>
            <div className="flex items-center justify-between gap-3 sm:block sm:pl-5 lg:pl-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#E31E24] sm:text-xs">
                  Une question ?
                </h3>

                <p className="mt-1 text-[11px] text-white/55 sm:mt-2 sm:text-sm">
                  Notre équipe est à votre écoute.
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#E31E24] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#C71920] sm:mt-4 sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Nous contacter
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-5 border-t border-white/10 pt-3">
          <div className="flex flex-col items-center justify-between gap-1.5 text-center sm:flex-row sm:text-left">
            <p className="text-[10px] text-white/40 sm:text-xs">
              © {new Date().getFullYear()} VISION PRO. Tous droits réservés.
            </p>

            <p className="text-[10px] text-white/40 sm:text-xs">
              Conçu & développé par{" "}
              <span className="font-semibold text-white/75">Frank Landry</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
