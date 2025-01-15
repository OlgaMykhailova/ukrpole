import { useTranslations } from "next-intl";
import React from "react";

import Section from "../shared/section/Section";
import PageTitle from "../shared/titles/PageTitle";
import ContactsApplication from "./ContactsApplication";
import ContactsInfo from "./ContactsInfo";
import ContactsList from "./contactsList/ContactsList";
import Map from "./Map";

export default function Contacts() {
  const t = useTranslations("contactsPage");

  return (
    <Section>
      <PageTitle>{t("title")}</PageTitle>
      <div className="lg:flex flex-col flex-wrap content-between gap-y-10 lg:h-[645px]">
        <ContactsInfo />
        <ContactsApplication />
        <ContactsList />
      </div>
      <Map />
    </Section>
  );
}
