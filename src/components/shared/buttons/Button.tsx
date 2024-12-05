import React from "react";

import { ButtonProps } from "@/types/buttonProps";
import Image from "next/image";

export default function Button({
  children,
  ariaLabel = "",
  className = "",
  type = "button",
  variant = "primary",
  disabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center h-[51px] px-6 text-18med rounded-full transition duration-300 ease-out border-[2px] enabled:active:shadow-buttonGreenDark 
        enabled:active:bg-greenDark enabled:active:border-white outline-none ${
          variant === "primary"
            ? "bg-green shadow-buttonGreen border-green laptop:enabled:hover:border-white laptop:enabled:focus-visible:border-white"
            : "bg-white shadow-buttonWhite border-green laptop:enabled:hover:border-greenDark laptop:enabled:focus-visible:border-greenDark"
        }  
          enabled:group-active:bg-greenDark enabled:group-active:border-white
        ${
          isLoading
            ? ""
            : "disabled:bg-grey disabled:border-grey disabled:shadow-buttonGrey"
        } 
        ${className}`}
    >
      {children}
      {isLoading ? (
        <Image
          src="/images/icons/loader.svg"
          alt="loader"
          width={24}
          height={24}
          className="ml-3 animate-rotation"
        />
      ) : (
        ""
      )}
    </button>
  );
}
