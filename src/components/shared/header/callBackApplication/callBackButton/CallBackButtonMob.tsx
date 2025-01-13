import React from "react";
import Image from "next/image";

interface CallBackButtonMobProps {
  onClick: () => void;
}

export default function CallBackButtonMob({ onClick }: CallBackButtonMobProps) {
  return (
    <button
      onClick={onClick}
      aria-label="callback button"
      className="fixed bottom-6 right-6 z-50 tab:hidden flex items-center justify-center size-[72px] rounded-full bg-greenLight
before:content-[''] before:absolute before:-z-10 before:size-[92px] before:rounded-full before:bg-beige before:opacity-50 active:scale-95
transition duration-300 ease-out"
    >
      <Image
        src="/images/icons/phone.svg"
        alt="phone icon"
        width={40}
        height={40}
      />
    </button>
  );
}
