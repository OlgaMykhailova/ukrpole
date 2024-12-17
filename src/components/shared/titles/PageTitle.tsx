import React from "react";
import Image from "next/image";

interface SectionTitleProps {
  children: string;
  className?: string;
  variant?: "decorBegin" | "decorEnd" | "noDecor";
}

export default function PageTitle({
  children,
  className,
  variant = "decorEnd",
}: SectionTitleProps) {
  const words = children.split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <h1
      className={`mb-8 tab:mb-14 laptop:mb-16 font-alegreya text-32med tab:text-40med uppercase ${className}`}
    >
      {" "}
      <Image
        src="/images/backgrounds/sectionTitle/leaf.webp"
        alt="leaf icon"
        width={215}
        height={210}
        className={`w-[59px] tab:w-[107px] h-auto ml-2 transform scale-x-[-1] ${
          variant === "decorBegin" ? "inline-block" : "hidden"
        }`}
      />
      {restOfTitle}{" "}
      <span className="inline-flex items-center whitespace-nowrap">
        {lastWord}
        <Image
          src="/images/backgrounds/sectionTitle/leaf.webp"
          alt="leaf icon"
          width={215}
          height={210}
          className={`w-[59px] tab:w-[107px] h-auto ml-2 ${
            variant === "decorEnd" ? "inline-block" : "hidden"
          }`}
        />
      </span>
    </h1>
  );
}
