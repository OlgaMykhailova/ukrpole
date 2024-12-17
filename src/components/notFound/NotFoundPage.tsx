import React from "react";
import Section from "../shared/section/Section";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Button from "../shared/buttons/Button";
import Link from "next/link";

export default function NotFoundPage() {
  const t = useTranslations("");
  const locale = useLocale();

  return (
    <Section className="flex flex-col items-center mt-14 tab:mt-10 laptop:mt-2">
      <Image
        src="/images/contentImages/notFound/notFound.webp"
        alt="404 image"
        width={2272}
        height={958}
        className="w-full sm:w-[608px] lg:w-[960px] 2xl:w-[1180px] mb-4 tab:mb-0 laptop:mb-5"
      />
      <h1 className="w-[288px] tab:w-[604px] mb-6 tab:mb-8 font-alegreya text-24med tab:text-32med uppercase text-center">
        {t("notFoundPage.title")}
      </h1>
      <p className="w-[328px] tab:w-[604px] mb-4 tab:mb-6 text-center">
        {t("notFoundPage.description")}
      </p>

      <Link href="/" locale={locale} className="outline-none">
        <Button>{t("buttons.homePage")}</Button>
      </Link>
    </Section>
  );
}
