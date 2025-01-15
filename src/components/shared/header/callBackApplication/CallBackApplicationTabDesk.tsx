"use client";
import React, { useState } from "react";

import Backdrop from "../../backdrop/Backdrop";
import CallBackPopUp from "../../pop-ups/CallBackPopUp";
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
