import React from "react";
import PartnerItem from "./PartnerItem";

const partnersList = [
  "fora",
  "delvi",
  "varus",
  "kyshenya",
  "megamarket",
  "atb",
  "tavrija",
  "metro",
  "ultramarket",
  "novus",
  "fozzy",
  "delikat",
];

export default function PartnersList() {
  return (
    <ul className="flex flex-wrap justify-between gap-4 tab:gap-x-6 tab:gap-y-8 w-full">
      {partnersList.map((partner, idx) => (
        <PartnerItem key={idx} partner={partner} />
      ))}
    </ul>
  );
}
