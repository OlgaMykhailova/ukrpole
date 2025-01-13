"use client";
import React, { useState } from "react";
import CallBackPopUp from "../../pop-ups/CallBackPopUp";
import Backdrop from "../../backdrop/Backdrop";
import CallBackButtonTabDesk from "./callBackButton/CallBackButtonTabDesk";

export default function CallBackApplicationTabDesk() {
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  return (
    <>
      <CallBackButtonTabDesk onClick={() => setIsPopUpShown(true)} />
      <CallBackPopUp
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
      />
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
