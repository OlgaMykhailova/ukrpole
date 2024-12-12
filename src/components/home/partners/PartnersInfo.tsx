import React from "react";
import PartnersList from "./PartnersList";
import PartnersSlider from "./PartnersSlider";

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

export default function PartnersInfo() {
  return (
    <>
      <PartnersSlider partnersList={partnersList} />
      <PartnersList partnersList={partnersList} />
    </>
  );
}
