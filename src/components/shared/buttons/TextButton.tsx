import React from "react";

interface TextButtonProps {
  children: string;
  onClick?: () => void;
}

export default function TextButton({ children, onClick }: TextButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-16med tab:text-18med text-greenDark laptop:hover:text-greenKhaki focus-visible:text-greenKhaki active:text-greenKhaki transition 
    duration-500 ease-out"
    >
      {children}
    </button>
  );
}
