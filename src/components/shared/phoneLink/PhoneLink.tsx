import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import Button from "@/components/shared/buttons/Button";
import { PHONE_NUMBER } from "@/constants/constants";
import { phoneRegex } from "@/regex/regex";

interface PhoneLinkProps {
  className?: string;
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>> | undefined;
}

export default function PhoneLink({
  className = "",
  setIsHeaderMenuOpened,
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:+${PHONE_NUMBER.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`outline-none ${className}`}
    >
      <Button
        onClick={
          setIsHeaderMenuOpened ? () => setIsHeaderMenuOpened(false) : undefined
        }
      >
        <>
          <Image
            src="/images/icons/phone.svg"
            alt="phone icon"
            width={40}
            height={40}
          />
          {PHONE_NUMBER.replace(phoneRegex, "$1($2) $3 $4 $5")}
        </>
      </Button>
    </a>
  );
}
