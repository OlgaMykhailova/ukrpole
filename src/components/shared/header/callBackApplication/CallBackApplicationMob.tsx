"use client";
import React, { useState } from "react";

import Backdrop from "../../backdrop/Backdrop";
import CallBackPopUp from "../../pop-ups/CallBackPopUp";
import CallBackButtonMob from "./callBackButton/CallBackButtonMob";

export default function CallBackApplicationMob() {
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  return (
    <>
      <CallBackButtonMob onClick={() => setIsPopUpShown(true)} />
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
