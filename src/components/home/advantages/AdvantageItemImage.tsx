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
  const { isVisible } = useOnScreen(sectionId, { threshold: 1 });

  return (
    <Image
      src="/images/icons/strokeCircle.svg"
      alt="round outline"
      width={344}
      height={343}
      className={`absolute top-0 left-[1.5px] w-[calc(100%-3px)] h-auto ${
        isVisible ? "animate-rotationOnce" : ""
      }`}
    />
  );
}
