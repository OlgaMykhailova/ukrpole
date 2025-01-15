"use client";
import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

interface AdvantageItemImageProps {
  sectionId: string;
}

export default function AdvantageItemImage({
  sectionId,
}: AdvantageItemImageProps) {
  const { isVisible } = useOnScreen(sectionId, { threshold: 1 });

  return (
    <Image
      src="/images/icons/strokeCircle.svg"
      alt="round outline"
      width={344}
      height={343}
      className={`absolute top-0 left-[1.5px] w-[calc(100%-3px)] h-auto transition duration-1000 ease-out ${
        isVisible ? "animate-rotationOnce opacity-100" : "opacity-0"
      }`}
    />
  );
}
