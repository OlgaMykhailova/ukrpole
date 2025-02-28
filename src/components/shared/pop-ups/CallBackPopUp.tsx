"use client";

import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useState } from "react";

import CallBackForm from "../forms/CallBackForm";
import Modal from "../modal/Modal";
import PopUpTitle from "../titles/PopUpTitle";
import NotificationPopUp from "./NotificationPopUp";

interface OrderPopUpProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallBackPopUp({
  isPopUpShown,
  setIsPopUpShown,
}: OrderPopUpProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const t = useTranslations("popUps.callBack");

  return (
    <>
      <Modal isPopUpShown={isPopUpShown} setIsPopUpShown={setIsPopUpShown}>
        <div className="flex flex-col gap-6">
          <PopUpTitle>{t("title")}</PopUpTitle>
          <p className="text-center">{t("description")}</p>
          <CallBackForm
            setIsError={setIsError}
            setIsNotificationShown={setIsNotificationShown}
            setIsPopUpShown={setIsPopUpShown}
          />
        </div>
      </Modal>
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </>
  );
}
