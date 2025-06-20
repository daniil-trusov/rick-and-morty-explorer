import { GetCharactersCardQueryVariables } from "@/graphql/generated/graphql";
import {
  SearchParamsType,
  ParsedParams,
  FilterCategory,
  ActiveFilters,
} from "@/types";

export function convertToURLSearchParams(searchParams: SearchParamsType) {
  return new URLSearchParams(searchParams as Record<string, string>);
}

export function parseSearchParams(
  searchParams: URLSearchParams,
  filters: FilterCategory[]
): ParsedParams {
  const activeFilters: ActiveFilters = {};

  const validFilterKeys = new Set(
    filters.map((category) => category.key.toLowerCase())
  );

  let page = 1;
  let search = "";

  for (const [rawKey, rawValue] of searchParams.entries()) {
    const key = rawKey.toLowerCase();
    const value = rawValue.toLowerCase();

    if (key === "page") {
      const parsed = parseInt(value, 10);
      if (!isNaN(parsed) && parsed > 0) {
        page = parsed;
      }
    } else if (key === "name" || key === "search") {
      search = value;
    } else if (validFilterKeys.has(key)) {
      activeFilters[key] = value;
    }
  }

  return { page, search, filters: activeFilters };
}

export function getGraphQLVariables(
  searchParams: URLSearchParams,
  filters: FilterCategory[]
): GetCharactersCardQueryVariables {
  const parsed = parseSearchParams(searchParams, filters);

  return {
    page: parsed.page,
    filter: { name: parsed.search, ...parsed.filters },
  };
}
