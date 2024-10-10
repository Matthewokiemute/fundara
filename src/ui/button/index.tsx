import React from "react";
import { ButtonProps } from "./types";

export function Button({
  variant,
  children,
  onClick,
  type,
  className,
  disabled,
  isLoading,
}: ButtonProps) {
  // Variants
  const filledGreenVariant = `bg-primary text-white border-2 border-primary`;

  const outlinedWhiteVariant = `bg-transparent text-white border-2 border border-white`;

  const variants =
    variant === "filled-green"
      ? filledGreenVariant
      : variant === "outlined-white"
      ? outlinedWhiteVariant
      : "text-gray-800";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
      className={`px-5 py-2 rounded-full text-sm font-semibold grid grid-flow-col justify-center items-center gap-3 transition-all duration-300 hover:opacity-80 ${
        disabled ? "opacity-50" : ""
      } ${className} ${variants}`}
    >
      {isLoading ? (
        // Loader
        <span
          className={`block w-6 h-6 rounded-full border-2 border-b-transparent animate-spin ${
            variant === "filled-green" ? "border-white" : "border-primary"
          }`}
        ></span>
      ) : (
        children
      )}
    </button>
  );
}
