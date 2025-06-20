import { useMemo } from "react";

import { FilterCategory, ActiveFilters } from "@/types";
import { buildFilterLabelMaps } from "@/utils";

import FilterButton from "./FilterButton";

type Props = {
  filters: FilterCategory[];
  activeFilters: ActiveFilters;
  onClearAll: () => void;
  onToggleFilter: (categoryKey: string, valueKey: string) => void;
};

export default function ActiveFiltersSummary({
  filters,
  activeFilters,
  onClearAll,
  onToggleFilter,
}: Props) {
  const summaryText = Object.entries(activeFilters)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");

  const { optionLabelMap, categoryLabelMap } = useMemo(
    () => buildFilterLabelMaps(filters),
    [filters]
  );

  const activeLabels = Object.entries(activeFilters).reduce<
    Record<string, { categoryLabel: string; optionLabel: string }>
  >((res, [catKey, optKey]) => {
    res[catKey] = {
      categoryLabel: categoryLabelMap[catKey] ?? catKey,
      optionLabel: optionLabelMap[catKey]?.[optKey] ?? optKey,
    };
    return res;
  }, {});

  return (
    <>
      <div aria-live="polite" role="status" className="sr-only">
        Filters selected: {summaryText || "none"}
      </div>

      {Object.entries(activeFilters).length === 0 ? (
        <div>No filters selected.</div>
      ) : (
        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([categoryKey, filterKey]) => {
            const { categoryLabel, optionLabel } = activeLabels[categoryKey];
            return (
              <FilterButton
                key={categoryKey}
                option={optionLabel}
                isSelected={true}
                onToggle={() => onToggleFilter(categoryKey, filterKey)}
              >
                {categoryLabel}: {optionLabel}
              </FilterButton>
            );
          })}

          <button
            onClick={onClearAll}
            className="ml-2 text-sm text-red-500 hover:underline"
          >
            Clear all
          </button>
        </div>
      )}
    </>
  );
}
