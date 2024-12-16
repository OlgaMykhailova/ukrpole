import React from "react";
import Address from "./Address";
import Email from "./Email";
import Phone from "./Phone";

export default function ContactsList() {
  return (
    <ul className="flex flex-col gap-y-6 mt-20 tab:mt-[100px] laptop:mt-0">
      <Phone />
      <Email />
      <Address />
    </ul>
  );
}
