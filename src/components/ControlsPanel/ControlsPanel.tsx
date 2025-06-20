"use client";

import { FilterCategory } from "@/types";

import FilterPanel from "./FilterPanel";
import Search from "./Search";

type Props = {
  filters: FilterCategory[];
};

export default function ControlsPanel({ filters }: Props) {
  return (
    <div className="space-y-6">
      <div role="search" className="mb-4 border-b border-gray-200 pb-4">
        <Search />
      </div>

      <FilterPanel filters={filters} />
    </div>
  );
}
