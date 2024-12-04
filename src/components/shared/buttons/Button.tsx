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
      className={`flex items-center h-13 laptop:h-[55px] px-6 text-16med tab:text-18med 
        rounded-full transition duration-300 ease-out border-[2px] ${
          variant === "primary"
            ? "bg-green shadow-buttonGreen border-green laptop:enabled:hover:border-white enabled:focus-visible:border-white"
            : "bg-white shadow-buttonWhite border-white enabled:hover:shadow-buttonGreen enabled:focus-visible:shadow-buttonGreen"
        }  
        ${
          isLoading
            ? ""
            : "disabled:bg-grey disabled:border-grey disabled:shadow-buttonGrey"
        } 
        enabled:active:shadow-buttonGreenDark enabled:active:bg-greenDark enabled:active:border-white
         outline-none ${className}`}
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
