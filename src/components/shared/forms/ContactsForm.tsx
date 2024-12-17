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
}

export default function ContactsForm({
  setIsError,
  setIsNotificationShown,
}: ContactsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = ContactsValidation();

  const submitForm = async (
    values: ValuesContactsFormType,
    formikHelpers: FormikHelpers<ValuesContactsFormType>
  ) => {
    const data =
      `<b>Заявка "Контакти"</b>\n` +
      `Ім'я: ${values.name.trim()}\n` +
      `Телефон: +380${values.phone.replace(/[^\d+]/g, "")}\n` +
      `Email: ${values.email.toLowerCase().trim()}\n` +
      `Повідомлення: ${values.message.trim()}\n`;

    await handleSubmitForm<ValuesContactsFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      data
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className="flex flex-col lg:order-3 w-full lg:w-[50.5%] max-w-[525px] h-full p-4 tab:p-8 mx-auto lg:mx-0 rounded-[16px] bg-greenLight">
          <div className="flex flex-col gap-5">
            <CustomizedInput
              fieldName="name"
              label={t("forms.name")}
              required={true}
              placeholder={t("forms.namePlaceholder")}
              errors={errors}
              touched={touched}
            />
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
            <CustomizedInput
              fieldName="email"
              label={t("forms.email")}
              required={false}
              placeholder={t("forms.emailPlaceholder")}
              errors={errors}
              touched={touched}
            />
            <CustomizedInput
              fieldName="message"
              label={t("forms.comment")}
              required={false}
              placeholder={t("forms.commentPlaceholder")}
              errors={errors}
              touched={touched}
              as="textarea"
              wrapperClassName="h-[92px]"
              fieldClassName="min-h-[92px] resize-none"
            />
          </div>
          <FormDescription />
          <SubmitButton
            dirty={dirty}
            isValid={isValid}
            isLoading={isLoading}
            variant="secondary"
          />
        </Form>
      )}
    </Formik>
  );
}
