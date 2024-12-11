import { IconProps } from "@/types/iconProps";

export default function IconHome({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon home"
      className={className}
    >
      <path
        d="M11.1 4.175C11.6333 3.775 12.3667 3.775 12.9 4.175L19.4 9.05C19.7777 9.33328 20 9.77786 20 10.25V20C20 20.8284 19.3284 21.5 18.5 21.5H16.5C15.6716 21.5 15 20.8284 15 20V16C15 15.1716 14.3284 14.5 13.5 14.5H10.5C9.67157 14.5 9 15.1716 9 16V20C9 20.8284 8.32843 21.5 7.5 21.5H5.5C4.67157 21.5 4 20.8284 4 20V10.25C4 9.77786 4.22229 9.33328 4.6 9.05L11.1 4.175Z"
        fill="currentColor"
      />
    </svg>
  );
}
