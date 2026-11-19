"use client";

import { useEffect, useState } from "react";

type Language = "fr" | "en";

interface LanguageSwitcherProps {
  compact?: boolean;
}

export default function LanguageSwitcher({
  compact = false,
}: LanguageSwitcherProps) {
  const [language, setLanguage] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "fr" || savedLanguage === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(savedLanguage);
    }

    setMounted(true);
  }, []);

  const selectLanguage = (code: Language) => {
    if (code === language) return;

    setLanguage(code);
    localStorage.setItem("language", code);

    window.dispatchEvent(new CustomEvent("languageChange", { detail: code }));
  };

  if (!mounted) {
    return (
      <div
        className={`rounded-full border border-[#D9D9D9] bg-white ${
          compact ? "h-9 w-[76px]" : "h-10 w-[92px]"
        }`}
      />
    );
  }

  return (
    <div
      role="group"
      aria-label="Sélection de la langue"
      className={`
        relative isolate inline-flex items-center
        overflow-hidden rounded-full
        border border-[#D9D9D9]
        bg-[#F3F3F3] p-1
        shadow-sm
        ${compact ? "h-9 w-[76px]" : "h-10 w-[92px]"}
      `}
    >
      {/* Indicateur animé */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute bottom-1 top-1
          left-1 z-0 w-[calc(50%-4px)]
          rounded-full bg-[#202124]
          shadow-[0_2px_6px_rgba(32,33,36,0.18)]
          transition-transform duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${language === "en" ? "translate-x-full" : "translate-x-0"}
        `}
      />

      {/* Français */}
      <button
        type="button"
        onClick={() => selectLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`
          relative z-10 flex h-full flex-1
          items-center justify-center rounded-full
          font-bold tracking-wide
          transition-colors duration-300
          ${compact ? "text-[10px]" : "text-xs"}
          ${language === "fr" ? "text-white" : "text-[#555555] hover:text-[#202124]"}
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-[#202124] focus-visible:ring-offset-2
        `}
      >
        FR
      </button>

      {/* English */}
      <button
        type="button"
        onClick={() => selectLanguage("en")}
        aria-pressed={language === "en"}
        className={`
          relative z-10 flex h-full flex-1
          items-center justify-center rounded-full
          font-bold tracking-wide
          transition-colors duration-300
          ${compact ? "text-[10px]" : "text-xs"}
          ${language === "en" ? "text-white" : "text-[#555555] hover:text-[#202124]"}
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-[#202124] focus-visible:ring-offset-2
        `}
      >
        EN
      </button>
    </div>
  );
}
