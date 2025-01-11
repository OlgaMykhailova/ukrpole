"use client";
import React from "react";
import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

interface NewsItemImageProps {
  id: string;
  sectionId: string;
}

export default function NewsItemImage({ id, sectionId }: NewsItemImageProps) {
  const { isVisible } = useOnScreen(sectionId);

  return (
    <div className="relative flex flex-col justify-end w-full aspect-[1056/700] mb-6 overflow-hidden">
      <Image
        src={`/images/contentImages/homeNews/${id}.webp`}
        alt={id}
        width={1056}
        height={700}
        className={`absolute top-0 left-0 -z-10 ${
          isVisible ? "scale-100" : "scale-105"
        } transition duration-1000 ease-out`}
      />
      <Image
        src={`/images/backgrounds/homeNews/curveFigure.svg`}
        alt={id}
        width={290}
        height={83}
        className={`w-full mt-auto`}
      />
    </div>
  );
}
