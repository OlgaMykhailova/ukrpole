import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  renderItems: (items: T[]) => JSX.Element;
  scrollTargetId: string;
}

export default function Pagination<T>({
  items,
  itemsPerPage,
  renderItems,
  scrollTargetId,
}: PaginationProps<T>) {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(page);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    if (scrollTargetId) {
      const targetElement = document.getElementById(scrollTargetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          block: "start",
        });
      }
    }

    const params = new URLSearchParams(window.location.search);
    params.set("page", pageNumber.toString());
    router.push(`?${params.toString()}`, { locale, scroll: false });
  };

  return (
    <>
      <div>{renderItems(currentItems)}</div>
      <div className="flex justify-center gap-x-4 mt-10 tab:mt-16 laptop:mt-[100px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`relative size-12 laptop:hover:text-black focus:text-black active:text-black transition duration-300 ease-out ${
              currentPage === index + 1
                ? "text-black text-18med"
                : "text-grey text-18reg"
            }`}
          >
            {index + 1}
            <Image
              src={`/images/icons/strokeEllipseSmall.svg`}
              alt="stroke"
              width={48}
              height={48}
              className={`absolute top-0 left-0 transition duration-300 ease-out ${
                currentPage === index + 1 ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
