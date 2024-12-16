import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Subtitle from "@/components/shared/titles/Subtitle";
import { EMAIL } from "@/constants/constants";

export default function Email() {
  const t = useTranslations("contactsPage");

  return (
    <li className="flex items-start gap-x-4">
      <Image
        src="/images/icons/envelope.svg"
        alt="envelope icon"
        width="48"
        height="48"
      />
      <div className="flex flex-col gap-4">
        <Subtitle>{t("email.title")}</Subtitle>
        <a
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 ease-out"
        >
          {EMAIL}
        </a>
      </div>
    </li>
  );
}
