import { MapPin, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden bg-[#E31E24] text-white md:block">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        {/* LOCALISATION */}
        <div className="flex items-center gap-2 text-xs">
          <MapPin size={15} className="shrink-0 text-white" />
          <span>En face Cefor Hotellerie logpom, Douala</span>
        </div>

        {/* COORDONNÉES ET RÉSEAUX SOCIAUX */}
        <div className="flex flex-wrap items-center gap-5 text-xs">
          <a
            href="tel:+237674502450"
            className="flex items-center gap-2 transition-colors hover:text-white/75"
          >
            <Phone size={14} className="text-white" />
            +237 687 884 178
          </a>

          <a
            href="tel:+237691095519"
            className="flex items-center gap-2 transition-colors hover:text-white/75"
          >
            <Phone size={14} className="text-white" />
            +237 659 322 137
          </a>

          <a
            href="https://www.facebook.com/61566458520229/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visiter la page Facebook de VISION PRO"
            className="flex items-center gap-2 transition-colors hover:text-white/75"
          >
            <FaFacebookF size={14} />
            Suivez-nous
          </a>
        </div>
      </div>
    </div>
  );
}
