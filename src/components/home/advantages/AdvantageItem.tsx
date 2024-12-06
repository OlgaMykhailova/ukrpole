import Subtitle from "@/components/shared/titles/Subtitle";
import React from "react";

interface AdvantageItemProps {
  advantage: {
    title: string;
    description: string;
  };
}

export default function AdvantageItem({ advantage }: AdvantageItemProps) {
  const { title, description } = advantage;

  return (
    <li>
      <Subtitle>{title}</Subtitle>
      <p>{description}</p>
    </li>
  );
}
