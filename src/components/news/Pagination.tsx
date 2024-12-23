import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className="pagination flex justify-center gap-x-4 mt-10 tab:mt-16 laptop:mt-[100px]">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`size-12 laptop:hover:text-black focus:text-black active:text-black transition duration-300 ease-out ${
            currentPage === index + 1
              ? "text-black text-18med"
              : "text-grey text-18reg"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}