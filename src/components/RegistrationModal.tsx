"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { FormEvent } from "react";

import {
  X,
  GraduationCap,
  ArrowRight,
  User,
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formations = [
  "Délégué médical",
  "Auxiliaire de pharmacie",
  "Auxiliaire de vie",
  "Assistant(e) de cabinet médical",
];

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, mounted]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const formation = formData.get("formation") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `
Bonjour VISION PRO,

Je souhaite obtenir des informations concernant une formation.

*Informations personnelles*
Nom et prénom : ${fullName}
Téléphone : ${phone}
E-mail : ${email}

*Formation souhaitée*
${formation}

*Message complémentaire*
${message || "Aucun message supplémentaire."}

Merci de me communiquer les informations nécessaires concernant cette formation.
    `.trim();

    const whatsappUrl = `https://wa.me/237659322137?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#202124]/80 p-2 backdrop-blur-sm sm:p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[calc(100dvh-16px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
      >
        {/* EN-TÊTE */}
        <div className="relative shrink-0 overflow-hidden bg-[#202124] px-5 py-6 text-white sm:px-9 sm:py-8">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#E31E24]/20 blur-3xl" />
          <div className="absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le formulaire"
            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-5 sm:top-5 sm:h-10 sm:w-10"
          >
            <X size={19} />
          </button>

          <div className="relative z-10">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E31E24] shadow-lg shadow-red-900/20 sm:mb-5 sm:h-12 sm:w-12">
              <GraduationCap size={24} />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E31E24]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                VISION PRO · Formation professionnelle
              </p>
            </div>

            <h2
              id="registration-title"
              className="mt-3 max-w-md pr-5 text-2xl font-extrabold leading-tight sm:text-3xl"
            >
              Donnez une nouvelle direction à votre avenir.
            </h2>

            <p className="mt-3 max-w-lg text-xs leading-6 text-white/65 sm:text-sm">
              Vous souhaitez rejoindre VISION PRO ? Renseignez vos informations
              pour échanger avec notre équipe sur votre projet de formation.
            </p>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:px-9 sm:py-8">
            {/* INTRODUCTION */}
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-100 bg-[#FFF7F7] p-3.5 sm:p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#E31E24] shadow-sm">
                <ShieldCheck size={19} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#202124]">
                  Votre projet de formation commence ici.
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Transmettez-nous vos coordonnées et la formation qui vous
                  intéresse. Notre équipe pourra vous renseigner sur les
                  prochaines étapes.
                </p>
              </div>
            </div>

            {/* INFORMATIONS PERSONNELLES */}
            <div className="mb-5">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#202124] sm:text-sm">
                Vos informations personnelles
              </h3>
              <div className="mt-2 h-1 w-10 rounded-full bg-[#E31E24]" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {/* NOM */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-xs font-semibold text-[#202124] sm:text-sm"
                >
                  Nom et prénom <span className="text-[#E31E24]">*</span>
                </label>

                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Votre nom complet"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-3 text-sm text-[#202124] outline-none transition placeholder:text-gray-400 focus:border-[#E31E24] focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* TÉLÉPHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold text-[#202124] sm:text-sm"
                >
                  Numéro de téléphone <span className="text-[#E31E24]">*</span>
                </label>

                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+237 6XX XXX XXX"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-3 text-sm text-[#202124] outline-none transition placeholder:text-gray-400 focus:border-[#E31E24] focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold text-[#202124] sm:text-sm"
                >
                  Adresse e-mail <span className="text-[#E31E24]">*</span>
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="exemple@email.com"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-3 text-sm text-[#202124] outline-none transition placeholder:text-gray-400 focus:border-[#E31E24] focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* FORMATION */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="formation"
                  className="mb-2 block text-xs font-semibold text-[#202124] sm:text-sm"
                >
                  Formation qui vous intéresse{" "}
                  <span className="text-[#E31E24]">*</span>
                </label>

                <div className="relative">
                  <BookOpen
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <select
                    id="formation"
                    name="formation"
                    required
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-[#202124] outline-none transition focus:border-[#E31E24] focus:bg-white focus:ring-4 focus:ring-red-100"
                  >
                    <option value="" disabled>
                      Sélectionnez une formation
                    </option>

                    {formations.map((formation) => (
                      <option key={formation} value={formation}>
                        {formation}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-[#202124] sm:text-sm"
                >
                  Votre message{" "}
                  <span className="font-normal text-gray-400">
                    (facultatif)
                  </span>
                </label>

                <div className="relative">
                  <MessageSquare
                    size={17}
                    className="absolute left-3.5 top-3.5 text-gray-400"
                  />

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Une question sur une formation ? Précisez votre besoin..."
                    className="min-h-[100px] w-full resize-y rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-3 text-sm text-[#202124] outline-none transition placeholder:text-gray-400 focus:border-[#E31E24] focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end sm:pt-6">
              <button
                type="button"
                onClick={onClose}
                className="min-h-12 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Annuler
              </button>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E31E24] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-[#C71920] hover:shadow-red-600/30"
              >
                Continuer sur WhatsApp
                <ArrowRight size={17} />
              </button>
            </div>

            {/* NOTE */}
            <div className="mt-5 flex items-center justify-center gap-2 text-center">
              <HeartPulse size={14} className="shrink-0 text-[#E31E24]" />
              <p className="text-[10px] leading-5 text-gray-400 sm:text-xs">
                VISION PRO vous accompagne dans votre projet de formation
                professionnelle.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
