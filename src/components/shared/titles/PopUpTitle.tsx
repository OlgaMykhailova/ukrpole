import React from "react";

interface PopUpTitleProps {
  children: string;
  isError?: boolean;
  className?: string;
}

export default function PopUpTitle({
  children,
  isError = false,
  className = "",
}: PopUpTitleProps) {
  return (
    <h2
      data-label={children}
      className={`relative font-alegreya text-center text-24med tab:text-32med tab:uppercase ${
        isError ? "text-darkRed" : "text-greenDark"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
