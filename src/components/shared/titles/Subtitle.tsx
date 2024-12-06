import React from "react";

interface SubtitleProps {
  children: string;
  className?: string;
}

export default function Subtitle({ children, className = "" }: SubtitleProps) {
  return <h3 className={`text-24med ${className}`}>{children}</h3>;
}
