"use client";
import React, { useState } from "react";
import ContactsForm from "../shared/forms/ContactsForm";
import NotificationPopUp from "../shared/pop-ups/NotificationPopUp";

export default function ContactsApplication() {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <ContactsForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </>
  );
}
