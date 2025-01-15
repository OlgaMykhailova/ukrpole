import React from "react";

import CooperationItemImageDesk from "./CooperationItemImageDesk";

interface CooperationItemDeskProps {
  cooperationItem: {
    id: string;
    title: string;
    descriptionPartOne: string;
    descriptionPartTwo: string;
  };
  position: "top" | "bottom";
}

export default function CooperationItemDesk({
  cooperationItem,
  position,
}: CooperationItemDeskProps) {
  const { id, title, descriptionPartOne, descriptionPartTwo } = cooperationItem;

  const sectionId = `cooperation-page-desk-${id}`;

  return (
    <div
      id={sectionId}
      className={`relative group overflow-hidden hidden laptop:flex flex-col w-[528px] aspect-[1/1] px-6 py-10 ${
        position === "top" ? "justify-start" : "justify-end"
      }`}
    >
      <CooperationItemImageDesk
        cooperationItem={cooperationItem}
        sectionId={sectionId}
        position={position}
      />
      <div
        className={`absolute top-0 left-0 flex gap-10 w-full h-full px-4 py-10 translate-y-full text-center bg-opacity-85 bg-greenLight 
            laptop:group-hover:translate-y-0 laptop:group-focus-visible:translate-y-0
            transition duration-700 ease-in ${
              position === "top" ? "flex-col" : "flex-col-reverse"
            }`}
      >
        <h2 className="font-alegreya text-32med text-center uppercase">
          {title}
        </h2>
        <div>
          <p className="mb-2">{descriptionPartOne}</p>
          <p>{descriptionPartTwo}</p>
        </div>
      </div>
    </div>
  );
}
