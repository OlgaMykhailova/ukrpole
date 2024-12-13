import Subtitle from "@/components/shared/titles/Subtitle";
import React from "react";

interface ValueItemProps {
  value: {
    title: string;
    description: string;
  };
  className?: string;
}

export default function ValueItem({ value, className = "" }: ValueItemProps) {
  const { title, description } = value;

  return (
    <li
      className={`mx-auto mb-8 last:mb-0 sm:mb-0 sm:max-w-[302px] laptop:max-w-[252px] ${className}`}
    >
      <Subtitle className="text-center mb-2">{title}</Subtitle>
      <p className="text-center">{description}</p>
    </li>
  );
}
