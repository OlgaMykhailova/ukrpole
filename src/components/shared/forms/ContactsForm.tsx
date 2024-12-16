"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";
import MaskedInput from "react-text-mask";

import { phoneMask } from "@/regex/regex";
import { ContactsValidation } from "@/schemas/contactsFormValidation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

import CustomizedInput from "./formElements/CustomizedInput";
import SubmitButton from "./formElements/SubmitButton";
import FormDescription from "./formElements/FormDescription";

export interface ValuesContactsFormType {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ContactsFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function ContactsForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
}: ContactsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("");

  const initialValues = {
    phone: "",
  };

  const validationSchema = ContactsValidation();

  const submitForm = async (
    values: ValuesContactsFormType,
    formikHelpers: FormikHelpers<ValuesContactsFormType>
  ) => {
    const data =
      `<b>Передзвоніть мені</b>\n` +
      `Телефон: +380${values.phone.replace(/[^\d+]/g, "")}\n`;

    await handleSubmitForm<ValuesContactsFormType>(
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
        <Form className="flex flex-col w-full h-full rounded-[24px]">
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
