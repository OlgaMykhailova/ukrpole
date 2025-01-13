"use client";
import React from "react";
import PartnerItem from "./PartnerItem";
import { useOnScreen } from "@/hooks/useOnScreen";

interface PartnersListProps {
  partnersList: string[];
}

const SECTION_ID = "partners-section";

export default function PartnersList({ partnersList }: PartnersListProps) {
  const { isVisible } = useOnScreen(SECTION_ID, { threshold: 0.8 });

  return (
    <ul
      id={SECTION_ID}
      className="hidden sm:flex flex-wrap justify-between sm:gap-4 lg:gap-x-6 lg:gap-y-8 w-full"
    >
      {partnersList.map((partner, idx) => (
        <PartnerItem
          key={idx}
          partner={partner}
          className={`${
            isVisible
              ? "translate-x-0 opacity-100"
              : `${
                  idx === 0 || idx === 1
                    ? "sm:-translate-x-[53.2%] lg:-translate-x-[39.7%] opacity-20"
                    : idx === 2 || idx === 3
                    ? "sm:translate-x-[53.2%] lg:translate-x-[39.7%] opacity-20"
                    : idx === 4 || idx === 5
                    ? "sm:-translate-x-[138.4%] lg:-translate-x-[103%] opacity-5"
                    : idx === 6 || idx === 7
                    ? "sm:translate-x-[138.4%] lg:translate-x-[103%] opacity-5"
                    : idx === 8 || idx === 9
                    ? "sm:-translate-x-[170.33%] lg:-translate-x-[127%] opacity-0"
                    : idx === 10 || idx === 11
                    ? "sm:translate-x-[170.33%] lg:translate-x-[127%] opacity-0"
                    : ""
                }`
          }`}
        />
      ))}
    </ul>
  );
}
