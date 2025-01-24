"use client";
import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

interface CooperationItemImageMobTabProps {
  cooperationItem: {
    id: string;
    title: string;
    descriptionPartOne: string;
    descriptionPartTwo: string;
  };
  sectionId: string;
}

export default function CooperationItemImageMobTab({
  cooperationItem,
  sectionId,
}: CooperationItemImageMobTabProps) {
  const { isVisible } = useOnScreen(sectionId);
  const { id } = cooperationItem;

  return (
    <div className="overflow-hidden">
      <Image
        src={`/images/contentImages/cooperation/${id}.webp`}
        alt={id}
        priority
        width={1024}
        height={1024}
        className={`w-full h-auto transition duration-[2000ms] ease-out ${
          isVisible ? "scale-100" : "scale-[115%]"
        }`}
      />
    </div>
  );
}
