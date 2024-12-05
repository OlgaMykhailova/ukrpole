import { PHONE_NUMBER } from "@/constants/constants";
import { phoneRegex } from "@/regex/phoneRegex";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CallBackButton() {
  const t = useTranslations("buttons");
  return (
    <button
      className="group flex items-center gap-x-1 outline-none text-18med laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark
       transition duration-300 ease-out"
    >
      <Image
        src="/images/icons/phone.svg"
        alt="phone icon"
        width={40}
        height={40}
      />
      <div>
        {PHONE_NUMBER.replace(phoneRegex, "$1($2) $3 $4 $5")}
        <p className="text-12reg">{t("callBack").toLowerCase()}</p>
      </div>
    </button>
  );
}
