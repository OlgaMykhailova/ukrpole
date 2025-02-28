import { useLocale } from "next-intl";

import { Link } from "@/i18n/routing";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
  variant?: "bright" | "light";
  className?: string;
}

export default function Breadcrumbs({
  crumbs,
  variant = "bright",
  className = "",
}: BreadcrumbsProps) {
  const locale = useLocale();

  return (
    <div className={className}>
      <nav
        aria-label="breadcrumbs"
        className={`container flex items-center max-w-[1920px] pt-2 tab:pt-4 laptop:pt-6 pb-10 laptop:pb-16`}
      >
        <ul className="flex items-center">
          {crumbs.map((crumb, index) => (
            <li
              key={crumb.href}
              className={`flex items-center text-18reg ${
                variant === "bright"
                  ? "text-darkGrey laptop:hover:text-greenDark focus-visible::text-greenDark active:text-greenDark"
                  : "text-white laptop:hover:text-greenLight focus-visible::text-greenLight active:text-greenLight"
              } transition duration-300 ease-out`}
            >
              {index > 0 && (
                <span className="inline-block mx-2 tab:mx-3">/</span>
              )}
              {index === crumbs.length - 1 ? (
                <span
                  className={`text-18med line-clamp-1 ${
                    variant === "bright" ? "text-greenDark" : "text-greenLight"
                  }`}
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  locale={locale}
                  className="outline-none"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
