"use client";
import React, { useState } from "react";
import CallBackButton from "./CallBackButton";
import CallBackPopUp from "../../pop-ups/CallBackPopUp";
import Backdrop from "../../backdrop/Backdrop";

export default function CallBackApplication() {
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  return (
    <>
      <CallBackButton onClick={() => setIsPopUpShown(true)} />
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
