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
    <ul>
      {partnersList.map((partner, idx) => (
        <PartnerItem key={idx} partner={partner} />
      ))}
    </ul>
  );
}
