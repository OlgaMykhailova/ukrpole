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
      className="fixed bottom-6 right-6 z-30 tab:hidden flex items-center justify-center before:content-[''] before:absolute before:-z-10 
      before:size-[92px] before:rounded-full before:bg-greenKhaki before:opacity-20 active:scale-95
transition duration-300 ease-out"
    >
      <div className="flex items-center justify-center size-[72px] rounded-full bg-greenLight">
        <Image
          src="/images/icons/phone.svg"
          alt="phone icon"
          width={40}
          height={40}
        />
      </div>
    </button>
  );
}
