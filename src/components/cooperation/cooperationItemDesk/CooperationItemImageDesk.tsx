"use client";
import React from "react";
import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

interface CooperationItemImageDeskProps {
  cooperationItem: {
    id: string;
    title: string;
    descriptionPartOne: string;
    descriptionPartTwo: string;
  };
  sectionId: string;
  position: "top" | "bottom";
}

export default function CooperationItemImageDesk({
  cooperationItem,
  sectionId,
  position,
}: CooperationItemImageDeskProps) {
  const { id, title } = cooperationItem;
  const { isVisible } = useOnScreen(sectionId);

  return (
    <div>
      <Image
        src={`/images/contentImages/cooperation/${id}.webp`}
        alt={id}
        width={1024}
        height={1024}
        priority
        className={`absolute -z-10 top-0 left-0 w-full h-auto transition duration-[2000ms] ease-out ${
          isVisible ? "scale-100" : "scale-[115%]"
        }`}
      />
      <h2
        className={`font-alegreya text-32med text-white text-center uppercase transition duration-[2000ms] ease-out ${
          isVisible
            ? `translate-y-0 opacity-100`
            : ` ${
                position === "top" ? "-translate-y-full" : "translate-y-full "
              } opacity-0`
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
