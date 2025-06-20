"use client";

import { getPaginationPages } from "./paginationHelper";
import React from "react";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  totalPages: number;
};

export default function Pagination({ totalPages }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number.parseInt(searchParams.get("page") || "1");
  const pages = getPaginationPages(currentPage, totalPages, 1);

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);

    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", newPage.toString());
    }

    const queryString = params.toString();

    if (queryString) {
      router.replace(`?${queryString}`);
    } else {
      router.replace("/");
    }
  };

  return (
    <div className="flex gap-4 mt-6 justify-center">
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="p-2 text-gray-400">...</span>
          ) : (
            <button
              className={clsx(
                "px-4 py-2  rounded",
                page === currentPage
                  ? "bg-blue-500 text-gray-100 pointer-events-none"
                  : "bg-gray-200 hover:bg-gray-100"
              )}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
