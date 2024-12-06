import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`container max-w-[1720px] pb-20 tab:pb-[100px] scroll-mt-[72px] laptop:scroll-mt-[160px] ${className}`}
    >
      {children}
    </section>
  );
}
