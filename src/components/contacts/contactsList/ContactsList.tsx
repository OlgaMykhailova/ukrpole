import React from "react";

import Address from "./Address";
import Email from "./Email";
import Phone from "./Phone";

export default function ContactsList() {
  return (
    <ul
      className="flex flex-col tab:flex-wrap tab:justify-between laptop:flex-nowrap gap-y-10 tab:gap-y-8 lg:order-2 lg:w-[45.9%] laptop:w-[48.9%] tab:h-[178px] lg:h-auto
     mt-20 tab:mt-[100px] lg:mt-0"
    >
      <Phone />
      <Email />
      <Address />
    </ul>
  );
}
