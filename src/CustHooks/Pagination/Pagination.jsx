import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Pagination({ currentPage, totalNoOfPages, setCurrentPage }) {
  // console.log(currentPage, totalNoOfPages, setCurrentPage);
  const maxvisiblePageNumbers = 3;
  let startpage = Math.max(
    currentPage - Math.floor(maxvisiblePageNumbers / 2),
    1
  );
  let endpage = startpage + maxvisiblePageNumbers - 1;
  if (endpage > totalNoOfPages) {
    endpage = totalNoOfPages;
    startpage = Math.max(endpage - maxvisiblePageNumbers + 1, 1);
  }
  const pageNumbers = () => {
    const pages = [];
    for (let i = startpage; i <= endpage; i++) {
      pages.push(i);
    }
    return pages;

    function handlePage(page) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="flex items-center justify-center gap-2 p-4">
      {currentPage > 2 && (
        <div
          onClick={() => {
            currentPage >= 1 && setCurrentPage(currentPage - 1);
          }}
        >
          <IoIosArrowDown className="rotate-90 cursor-pointer" />
        </div>
      )}
      <div className="pageNumbers flex justify-center gap-3 ">
        {pageNumbers()?.map((page) => {
          return (
            <div
              className={`size-4.5 sm:size-5 md:size-6 lg:size-7  text-center rounded-full flex justify-center items-center cursor-pointer text-[8px] md:text-xs ${
                currentPage === page
                  ? "bg-black text-white"
                  : "  bg-[#F0F0F0]  text-black"
              }`}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </div>
          );
        })}
      </div>
      {currentPage < totalNoOfPages - 1 && (
        <div
          onClick={() => {
            currentPage <= totalNoOfPages && setCurrentPage(currentPage + 1);
          }}
        >
          <IoIosArrowDown className="-rotate-90 cursor-pointer" />
        </div>
      )}
    </div>
  );
}

export default Pagination;
