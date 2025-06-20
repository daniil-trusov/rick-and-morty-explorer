"use client";

import Link from "next/link";
import clsx from "clsx";

import { MAX_CONTENT_SIZE, MIN_CONTENT_SIZE } from "@/config/constants";

export default function Header() {
  return (
    <header className="mb-4 w-full bg-gray-100">
      <nav
        aria-label="Main navigation"
        className={clsx(
          "mx-auto flex max-w-[1200px] flex-wrap items-center justify-between px-4 py-3 lg:flex-nowrap",
          `min-w-[${MIN_CONTENT_SIZE}px]`,
          `max-w-[${MAX_CONTENT_SIZE}px]`
        )}
      >
        <Link className="font-sans text-2xl font-bold" href="/">
          <span className="text-blue-600">Rick & Morty</span> Explorer
        </Link>
      </nav>
    </header>
  );
}
