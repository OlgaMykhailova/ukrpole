"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";
import MaskedInput from "react-text-mask";

import { phoneMask } from "@/regex/phoneRegex";
import { CallBackValidation } from "@/schemas/callBackFormValidation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

import CustomizedInput from "./formElements/CustomizedInput";
import SubmitButton from "./formElements/SubmitButton";
import FormDescription from "./formElements/FormDescription";

export interface ValuesCallBackFormType {
  phone: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
}: CallBackFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("");

  const initialValues = {
    phone: "",
  };

  const validationSchema = CallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const data =
      `<b>Передзвоніть мені</b>\n` +
      `Телефон: +380${values.phone.replace(/[^\d+]/g, "")}\n`;

    await handleSubmitForm<ValuesCallBackFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      data,
      setIsPopUpShown
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className="flex flex-col gap-y-4 w-full h-full rounded-[24px]">
          <CustomizedInput
            fieldName="phone"
            label={t("forms.phone")}
            required={true}
            placeholder={t("forms.phonePlaceholder")}
            errors={errors}
            touched={touched}
            as={MaskedInput}
            image="/images/icons/phonePrefix.svg"
            fieldClassName="pl-[80px]"
            mask={phoneMask}
          />
          <FormDescription />
          <SubmitButton dirty={dirty} isValid={isValid} isLoading={isLoading} />
        </Form>
      )}
    </Formik>
  );
}