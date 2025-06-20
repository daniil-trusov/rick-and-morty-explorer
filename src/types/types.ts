export type SearchParamsType = { [key: string]: string | undefined };

export type ParsedParams = {
  page: number;
  search: string;
  filters: ActiveFilters;
};

export type FilterOption = {
  key: string;
  label: string;
};

export type FilterCategory = {
  key: string;
  label: string;
  options: FilterOption[];
};

export type ActiveFilters = {
  [filterKey: string]: string;
};
