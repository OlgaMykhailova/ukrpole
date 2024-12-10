import React from "react";
import PartnerItem from "./PartnerItem";

interface PartnersListProps {
  partnersList: string[];
}

export default function PartnersList({ partnersList }: PartnersListProps) {
  return (
    <ul className="hidden sm:flex flex-wrap justify-between tab:gap-x-6 tab:gap-y-8 w-full">
      {partnersList.map((partner, idx) => (
        <PartnerItem key={idx} partner={partner} />
      ))}
    </ul>
  );
}
