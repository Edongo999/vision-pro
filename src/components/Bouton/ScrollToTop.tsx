"use client";

import React, { useState } from "react";

export interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    onClick?.();

    window.setTimeout(() => {
      setIsActive(false);
    }, 450);
  };

  const variants = {
    primary: `
      bg-[#E31E24] text-white border border-[#E31E24]
      hover:bg-[#202124] hover:border-[#202124]
      hover:shadow-[0_0_22px_rgba(227,30,36,0.35)]
    `,
    secondary: `
      bg-transparent text-[#E31E24] border border-[#E31E24]
      hover:bg-[#E31E24] hover:text-white
      hover:shadow-[0_0_22px_rgba(227,30,36,0.3)]
    `,
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        group relative isolate overflow-hidden
        inline-flex items-center justify-center
        rounded-lg px-6 py-3 font-semibold tracking-wide
        transition-all duration-300 ease-out
        hover:-translate-y-1 active:scale-[0.97]
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#E31E24]
        ${variants[variant]}
        ${isActive ? "scale-[0.97] shadow-[0_0_28px_rgba(227,30,36,0.4)]" : ""}
        ${className}
      `}
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          -translate-x-[120%] skew-x-[-20deg]
          bg-gradient-to-r from-transparent via-white/50 to-transparent
          transition-transform duration-700
          group-hover:translate-x-[120%]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-0 left-1/2
          h-[2px] w-0 -translate-x-1/2 bg-white
          transition-all duration-300 group-hover:w-3/4
        "
      />

      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
