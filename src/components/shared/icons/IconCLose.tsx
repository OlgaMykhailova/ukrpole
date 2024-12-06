import { IconProps } from "@/types/iconProps";

export default function IconClose({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon close"
      className={className}
    >
      <rect
        x="11.4771"
        y="10.3079"
        width="25.7143"
        height="1.42857"
        rx="0.714286"
        transform="rotate(45 11.4771 10.3079)"
        fill="#7D7D7D"
      />
      <rect
        x="10.7144"
        y="28.897"
        width="25.7143"
        height="1.42857"
        rx="0.714286"
        transform="rotate(-45 10.7144 28.897)"
        fill="#7D7D7D"
      />
    </svg>
  );
}
