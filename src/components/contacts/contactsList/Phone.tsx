import React from "react";
import { PHONE_NUMBER } from "@/constants/constants";
import Image from "next/image";
import Subtitle from "@/components/shared/titles/Subtitle";
import { useTranslations } from "next-intl";
import { phoneRegex } from "@/regex/regex";

export default function Phone() {
  const t = useTranslations("contactsPage");

  return (
    <li className="flex items-start gap-x-4">
      <Image
        src="/images/icons/phone.svg"
        alt="phone icon"
        width="48"
        height="48"
      />
      <div className="flex flex-col gap-4">
        <Subtitle>{t("phone.title")}</Subtitle>
        <a
          href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 ease-out"
        >
          {PHONE_NUMBER.replace(phoneRegex, "$1($2) $3 $4 $5")}
        </a>
      </div>
    </li>
  );
}
