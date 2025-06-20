export * as "constants" from "./constants";
import { FilterCategory } from "@/types";
import filtersJson from "./filters.json" assert { type: "json" };

export const filters: FilterCategory[] = filtersJson;
