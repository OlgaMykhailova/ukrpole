import React from "react";
import Section from "../shared/section/Section";
import Map from "./Map";
import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";
import PageTitle from "../shared/titles/PageTitle";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("contactsPage");

  return (
    <Section>
      <PageTitle>{t("title")}</PageTitle>
      <ContactsInfo />
      <ContactsForm />
      <ContactsList />
      <Map />
    </Section>
  );
}
