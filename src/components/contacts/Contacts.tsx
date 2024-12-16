import React from "react";
import Section from "../shared/section/Section";
import Map from "./Map";
import ContactsList from "./ContactsList";
import ContactsInfo from "./ContactsInfo";
import PageTitle from "../shared/titles/PageTitle";
import { useTranslations } from "next-intl";
import ContactsApplication from "./ContactsApplication";

export default function Contacts() {
  const t = useTranslations("contactsPage");

  return (
    <Section>
      <PageTitle>{t("title")}</PageTitle>
      <ContactsInfo />
      <ContactsApplication />
      <ContactsList />
      <Map />
    </Section>
  );
}
