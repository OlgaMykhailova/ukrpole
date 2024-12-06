import { useTranslations } from "next-intl";
import * as yup from "yup";

import { inputPhoneRegex } from "@/regex/phoneRegex";

export const CallBackValidation = () => {
  const t = useTranslations("forms.errors");

  const callBackFormValidationSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(inputPhoneRegex, t("wrongPhone"))
      .required(t("required")),
  });

  return callBackFormValidationSchema;
};