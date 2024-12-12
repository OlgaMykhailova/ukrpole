import React from "react";
import Image from "next/image";

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

  return (
    <li
      className={`relative group cursor-pointer overflow-hidden hidden laptop:flex flex-col w-[528px] aspect-[1/1] p-10 ${
        position === "top" ? "justify-start" : "justify-end"
      }`}
    >
      <Image
        src={`/images/contentImages/cooperation/${id}.webp`}
        alt={id}
        width={1024}
        height={1024}
        className="absolute -z-10 top-0 left-0 w-full h-auto"
      />
      <h2 className="font-alegreya text-32med text-white text-center uppercase">
        {title}
      </h2>
      <div
        className={`absolute top-0 left-0 flex gap-10 w-full h-full px-4 py-10 translate-y-full
            bg-greenLight laptop:group-hover:translate-y-0 transition duration-700 ease-in ${
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
    </li>
  );
}
