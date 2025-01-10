import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import React from "react";
import MaskedInput from "react-text-mask";

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  label: string;
  required: boolean;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  as?: string | typeof MaskedInput;
  wrapperClassName?: string;
  fieldClassName?: string;
  image?: string;
  mask?: string | RegExp | (string | RegExp)[];
  autocomplete?: string;
}

const labelStyles = "relative flex flex-col gap-y-1 w-full text-14reg";
const fieldStyles =
  "relative w-full h-full px-3 py-[14px] placeholder-darkGrey border rounded-[8px] outline-none text-16reg transition duration-300 ease-out";
const fieldWrapperStyles =
  "relative before:content-[''] before:absolute before:top-[-2.5px] before:left-[-2px] before:rounded-[8px] before:w-[calc(100%+5px)] before:h-[calc(100%+5px)] before:blur-[2px] before:transition before:duration-300 before:ease-out before:will-change-transform";
const errorStyles = "absolute bottom-[-22px] right-0 text-12reg text-darkRed";

export default function CustomizedInput({
  errors,
  touched,
  fieldName,
  label = "",
  required = false,
  placeholder = "",
  as,
  wrapperClassName = "",
  fieldClassName = "",
  image,
  mask = "",
  autocomplete = "on",
}: CustomizedInputProps) {
  return (
    <label className={labelStyles}>
      <p>
        {label}
        {required && <span className="text-darkRed"> *</span>}
      </p>
      <div
        className={`${fieldWrapperStyles} ${wrapperClassName} ${
          errors[fieldName] && touched[fieldName]
            ? "before:bg-red"
            : "before:bg-transparent focus-within:before:bg-greenKhaki"
        }`}
      >
        {image && (
          <Image
            src={image}
            alt="phone prefix"
            width={57}
            height={23}
            className="absolute bottom-1/2 left-[10px] z-[5] transform translate-y-1/2"
          />
        )}
        <Field
          as={as}
          mask={mask}
          name={fieldName}
          type="text"
          autoComplete={autocomplete}
          placeholder={placeholder}
          className={`${fieldStyles} ${fieldClassName} ${
            errors[fieldName] && touched[fieldName]
              ? "border-red"
              : "border-grey focus-within:border-green"
          }`}
        ></Field>
      </div>
      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
