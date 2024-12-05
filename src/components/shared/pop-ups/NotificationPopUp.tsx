import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

import Backdrop from "../backdrop/Backdrop";
import Modal from "../modal/Modal";
import PopUpTitle from "../titles/PopUpTitle";
import PhoneLink from "../phoneLink/PhoneLink";

interface NotificationPopUpProps {
  isNotificationShown: boolean;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  isNotificationShown,
  setIsNotificationShown,
  isError,
  setIsError,
}: NotificationPopUpProps) {
  const t = useTranslations("popUps.notifications");

  const closeNotification = () => {
    setIsNotificationShown(false);
    setIsError(false);
  };

  return (
    <>
      <Modal
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
        isError={isError}
      >
        <PopUpTitle isError={isError}>
          {t(`${isError ? "unsuccessful" : "successful"}.title`)}
        </PopUpTitle>
        <p className="text-xs tab:text-baseb">
          {t(`${isError ? "unsuccessful" : "successful"}.description`)}
        </p>
        {isError ? (
          <PhoneLink />
        ) : (
          <Image
            src={`/images/backgrounds/notifications/cannedVegetables.webp`}
            alt="canned vegetables"
            width={684}
            height={581}
            className="mx-auto w-[264px] tab:w-[328px] h-auto"
          />
        )}
      </Modal>
      <Backdrop isVisible={isNotificationShown} onClick={closeNotification} />
    </>
  );
}
