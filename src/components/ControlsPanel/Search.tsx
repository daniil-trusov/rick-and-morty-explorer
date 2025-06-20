"use client";

import { debounce } from "lodash";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState, useEffect, useCallback } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearch = searchParams.get("name") || "";
  const [input, setInput] = useState(initialSearch || "");

  const handleSearch = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      const formattedInput = value.trim();

      if (formattedInput) {
        params.set("name", formattedInput);
      } else params.delete("name");

      params.delete("page");

      router.replace(`?${params}`);
    },
    [router, searchParams]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        handleSearch(value);
      }, 300),
    [handleSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setInput("");
    debouncedSearch.cancel();
    handleSearch("");
  };

  useEffect(() => {
    setInput(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div>
      <label
        htmlFor="search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search by name
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="search"
          id="search"
          aria-label="Search by name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search by name"
          value={input}
          onChange={handleChange}
        />

        {input && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
