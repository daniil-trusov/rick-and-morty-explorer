"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { FilterCategory, ActiveFilters } from "@/types";

import ActiveFiltersSummary from "./ActiveFiltersSummary";
import FilterSection from "./FilterSection";
import { parseSearchParams } from "@/utils";

type Props = {
  filters: FilterCategory[];
};

export default function FilterPanel({ filters }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeFilters: ActiveFilters = parseSearchParams(
    searchParams,
    filters
  ).filters;

  const toggleFilter = (categoryKey: string, filterKey: string) => {
    const params = new URLSearchParams(searchParams);

    if (activeFilters[categoryKey] === filterKey) {
      params.delete(categoryKey);
    } else {
      params.set(categoryKey, filterKey);
    }

    params.delete("page");
    router.replace(`?${params}`);
  };

  const clearAllFilters = () => {
    const search = searchParams.get("name") || "";
    const params = new URLSearchParams();

    if (search) {
      params.set("name", search);
      router.replace(`?${params}`);
    } else router.replace("/");
  };

  return (
    <section aria-label="Filters" role="region" className="mt-4">
      <ActiveFiltersSummary
        filters={filters}
        activeFilters={activeFilters}
        onClearAll={clearAllFilters}
        onToggleFilter={toggleFilter}
      />

      <div id="filterPanel">
        {filters.map((filterSection) => {
          const activeFilterKey = activeFilters[filterSection.key] || "";

          return (
            <FilterSection
              key={filterSection.key}
              filters={filterSection}
              activeFilterKey={activeFilterKey}
              onFilterToggle={(filterKey) =>
                toggleFilter(filterSection.key, filterKey)
              }
            />
          );
        })}
      </div>
    </section>
  );
}
