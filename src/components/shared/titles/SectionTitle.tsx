import React from "react";
interface SectionTitleProps {
  children: string;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={`mb-8 tab:mb-14 laptop:mb-16 font-alegreya text-32med tab:text-40med uppercase text-center ${className}`}
    >
      {children}
    </h2>
  );
}
