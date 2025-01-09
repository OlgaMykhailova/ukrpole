import React from "react";
import Section from "../shared/section/Section";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Button from "../shared/buttons/Button";
import { Link } from "@/i18n/routing";
import NotFoundTitle from "./NotFoundTitle";
import NotFoundInfo from "./NotFoundInfo";

export default function NotFoundPage() {
  const t = useTranslations("buttons");
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
      <NotFoundTitle />
      <NotFoundInfo />
      <Link href="/" locale={locale} className="outline-none">
        <Button>{t("homePage")}</Button>
      </Link>
    </Section>
  );
}
