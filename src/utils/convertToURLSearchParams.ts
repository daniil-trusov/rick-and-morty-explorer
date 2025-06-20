import { SearchParamsType } from "@/types";

export function convertToURLSearchParams(
  params: SearchParamsType
): URLSearchParams {
  const searchParams = new URLSearchParams();

  if (!params) {
    return searchParams;
  }

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === "string") {
      searchParams.append(key, value);
    }
  });

  return searchParams;
}
