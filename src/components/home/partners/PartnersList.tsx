import React from "react";
import PartnerItem from "./PartnerItem";

interface PartnersListProps {
  partnersList: string[];
}

export default function PartnersList({ partnersList }: PartnersListProps) {
  return (
    <ul className="hidden sm:flex flex-wrap justify-between sm:gap-4 tab:gap-x-6 tab:gap-y-8 w-full">
      {partnersList.map((partner, idx) => (
        <PartnerItem key={idx} partner={partner} />
      ))}
    </ul>
  );
}
