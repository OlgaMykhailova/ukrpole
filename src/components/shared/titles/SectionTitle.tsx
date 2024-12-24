import Image from "next/image";
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
      className={`relative mb-[47px] tab:mb-[71px] laptop:mb-[79px] font-alegreya text-32med tab:text-40med uppercase text-center ${className}`}
    >
      {children}
      <Image
        src="/images/backgrounds/sectionTitle/leaf.svg"
        alt="leaf icon"
        width={112}
        height={15}
        className={`absolute bottom-[-15px] left-[calc(50%-56px)] `}
      />
    </h2>
  );
}
