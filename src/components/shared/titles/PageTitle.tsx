import React from "react";
import Image from "next/image";

interface SectionTitleProps {
  children: string;
  className?: string;
}

export default function PageTitle({ children, className }: SectionTitleProps) {
  return (
    <h1
      className={`relative mb-8 tab:mb-14 laptop:mb-16 font-alegreya text-32med tab:text-40med uppercase ${className}`}
    >
      {children}
      <Image
        src="/images/backgrounds/sectionTitle/leaf.svg"
        alt="leaf icon"
        width={112}
        height={15}
        className={`absolute bottom-[-15px] left-0 `}
      />
    </h1>
  );
}
