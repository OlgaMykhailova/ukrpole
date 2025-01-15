import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import { ADDRESS_LINK } from "@/constants/constants";

export default function Address() {
  const t = useTranslations("contactsPage");

  return (
    <li className="flex gap-x-4 items-start tab:grow laptop:grow-0 tab:w-[300px] laptop:w-auto">
      <Image
        src="/images/icons/mapPin.svg"
        alt="map pin icon"
        width="32"
        height="32"
      />
      <div className="flex flex-col gap-y-4">
        <h3 className="text-18med tab:text-24med">{t("address.title")}</h3>
        <a
          href={ADDRESS_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 ease-out"
        >
          {t("address.description")}
        </a>
        <a
          href={ADDRESS_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="self-start border-b-[1px] border-greenDark outline-none text-greenDark laptop:hover:border-b-greenKhaki 
          focus-visible:border-b-greenKhaki active:border-b-greenKhaki laptop:hover:text-greenKhaki focus-visible:text-greenKhaki 
          active:text-greenKhaki transition duration-300 ease-out"
        >
          {t("layRoute")}
        </a>
      </div>
    </li>
  );
}
