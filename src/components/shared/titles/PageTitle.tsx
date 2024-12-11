import React from "react";
interface SectionTitleProps {
  children: string;
  className?: string;
}

export default function PageTitle({ children, className }: SectionTitleProps) {
  return (
    <h1
      className={`w-full mb-8 tab:mb-14 laptop:mb-16 font-alegreya text-32med tab:text-40med uppercase ${className}`}
    >
      {children}
    </h1>
  );
}
