import { FilterCategory } from "@/types";

export function buildFilterLabelMaps(filters: FilterCategory[]) {
  const optionLabelMap: Record<string, Record<string, string>> = {};
  const categoryLabelMap: Record<string, string> = {};

  filters.forEach((category) => {
    categoryLabelMap[category.key] = category.label;

    optionLabelMap[category.key] = category.options.reduce<
      Record<string, string>
    >((optMap, opt) => {
      optMap[opt.key] = opt.label;
      return optMap;
    }, {});
  });
  return { optionLabelMap, categoryLabelMap };
}
