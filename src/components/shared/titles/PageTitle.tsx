import Image from "next/image";
import React from "react";

interface SectionTitleProps {
  children: string;
  className?: string;
  variant?: "left" | "center";
}

export default function PageTitle({
  children,
  className,
  variant = "left",
}: SectionTitleProps) {
  return (
    <h1
      className={`relative mb-[47px] tab:mb-[71px] laptop:mb-[79px] font-alegreya text-32med tab:text-40med uppercase ${
        variant === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {children}
      <Image
        src="/images/backgrounds/sectionTitle/leaf.svg"
        alt="leaf icon"
        width={112}
        height={15}
        className={`absolute bottom-[-15px]  ${
          variant === "center" ? "left-[calc(50%-56px)]" : "left-0"
        }`}
      />
    </h1>
  );
}
