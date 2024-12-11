import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const locale = useLocale();

  return (
    <nav
      aria-label="breadcrumbs"
      className="container flex items-center max-w-[1720px] pt-2 tab:pt-4 laptop:pt-6 pb-10 laptop:pb-16 text-18reg"
    >
      <ul className="flex items-center">
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && <span className="inline-block mx-2 tab:mx-3">/</span>}
            {index === crumbs.length - 1 ? (
              <span className="text-18med text-greenDark">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                locale={locale}
                className="laptop:hover:text-greenDark focus:text-greenDark active:text-greenDark transition duration-300 ease-out outline-none"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
