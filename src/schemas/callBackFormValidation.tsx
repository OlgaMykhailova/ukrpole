import { useTranslations } from "next-intl";
import * as yup from "yup";

import { inputPhoneRegex } from "@/regex/regex";

export const CallBackValidation = () => {
  const t = useTranslations("forms.errors");

  const callBackFormValidationSchema = yup.object().shape({
    phone: yup
      .string()
      .test(
        "starts-with-zero",
        t("startsWithZero"),
        (value) => value?.startsWith("0") || false
      )
      .matches(inputPhoneRegex, t("wrongPhone"))
      .required(t("required")),
  });

  return callBackFormValidationSchema;
};
