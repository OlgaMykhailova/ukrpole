"use client";
import React from "react";
import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

interface AdvantageItemImageProps {
  sectionId: string;
  idx: number;
}

export default function AdvantageItemImage({
  sectionId,
  idx,
}: AdvantageItemImageProps) {
  const { isVisible } = useOnScreen(sectionId);

  return (
    <Image
      src="/images/icons/strokeCircle.svg"
      alt="round outline"
      width={344}
      height={343}
      className={`absolute top-0 left-0 w-full h-auto ${
        isVisible
          ? `animate-rotationOnce ${
              idx === 0
                ? ""
                : idx === 1
                ? "tab:animate-delay-[2100ms]"
                : "tab:animate-delay-[4200ms]"
            }`
          : ""
      }`}
    />
  );
}
