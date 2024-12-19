import { useTranslations } from "next-intl";
import React from "react";

import Subtitle from "../shared/titles/Subtitle";

export default function Section4() {
  const t = useTranslations("policyPage.section4");

  return (
    <li className="flex flex-col gap-y-4 tab:gap-y-6 laptop:flex-row justify-between">
      <Subtitle className="laptop:w-[25.5%]">{t("title")}</Subtitle>
      <ul className="flex flex-col gap-y-4 tab:gap-y-6 laptop:w-[68.1%]">
        <li>{t("part1")}</li>
        <li>{t("part2")}</li>
        <li>{t("part3")}</li>
      </ul>
    </li>
  );
}
