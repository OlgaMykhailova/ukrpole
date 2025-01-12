"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import TextButton from "../../shared/buttons/TextButton";
import CooperationItemImageMobTab from "./CooperationItemImageMobTab";

interface CooperationItemMobTabProps {
  cooperationItem: {
    id: string;
    title: string;
    descriptionPartOne: string;
    descriptionPartTwo: string;
  };
}

export default function CooperationItemMobTab({
  cooperationItem,
}: CooperationItemMobTabProps) {
  const t = useTranslations();
  const [isShownMore, setIsShownMore] = useState(false);

  const toggleShowMore = () => setIsShownMore(!isShownMore);

  const { id, title, descriptionPartOne, descriptionPartTwo } = cooperationItem;

  const sectionId = `cooperation-page-mob-${id}`;

  return (
    <li
      id={sectionId}
      className="laptop:hidden flex flex-col gap-y-4 w-full p-4 border-[2px] border-green"
    >
      <CooperationItemImageMobTab
        cooperationItem={cooperationItem}
        sectionId={sectionId}
      />
      <div onClick={toggleShowMore}>
        <h2 className="mb-4 font-alegreya text-32med uppercase">{title}</h2>
        <div>
          <TextButton>{t("buttons.learnMore")}</TextButton>
          <Image
            src="/images/icons/arrow.svg"
            alt="arrow"
            width="16"
            height="16"
            className={`inline-block ml-3 transition duration-700 ease-out ${
              isShownMore ? "rotate-180" : "rotate-0"
            }`}
          />
          <div
            className={`overflow-hidden transition-[max-height] duration-700 ease-in ${
              isShownMore ? "max-h-[600px]" : "max-h-0"
            }`}
          >
            <p className="mt-4 mb-2">{descriptionPartOne}</p>
            <p>{descriptionPartTwo}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
