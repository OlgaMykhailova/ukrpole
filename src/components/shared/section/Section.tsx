import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`container max-w-[1920px] pb-20 tab:pb-[100px] scroll-mt-[92px] ${className}`}
    >
      {children}
    </section>
  );
}
