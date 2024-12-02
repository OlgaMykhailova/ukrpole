import { PHONE_NUMBER } from "@/constants/constants";
import Image from "next/image";

export default function PhoneLink() {
  return (
    <a
      href={`tel:+38${PHONE_NUMBER.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex items-center gap-x-1 outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark
       transition duration-300 ease-out"
    >
      <Image
        src="/images/icons/phone.svg"
        alt="phone icon"
        width={40}
        height={40}
      />
      {PHONE_NUMBER}
    </a>
  );
}
