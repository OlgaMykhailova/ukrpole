import { PHONE_NUMBER } from "@/constants/constants";
import { phoneRegex } from "@/regex/phoneRegex";
import Button from "@/components/shared/buttons/Button";
import Image from "next/image";

interface PhoneLinkProps {
  className?: string;
}

export default function PhoneLink({ className = "" }: PhoneLinkProps) {
  return (
    <a
      href={`tel:+${PHONE_NUMBER.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`outline-none ${className}`}
    >
      <Button>
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
