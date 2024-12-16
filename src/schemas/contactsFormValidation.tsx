import { useTranslations } from "next-intl";
import * as yup from "yup";

import { emailRegex, nameRegex, phoneRegex } from "@/regex/regex";

export const ContactsValidation = () => {
  const t = useTranslations("forms.errors");

  const contactsFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols"))
      .required(t("required")),
    email: yup.string().matches(emailRegex, t("wrongEmail")),
    phone: yup
      .string()
      .matches(phoneRegex, t("wrongPhone"))
      .required(t("required")),
    message: yup.string().max(200, t("messageMinMaxSymbols")),
  });

  return contactsFormValidationSchema;
};
