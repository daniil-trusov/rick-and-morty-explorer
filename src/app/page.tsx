import React from "react";

import { filters } from "@/config";
import { SearchParamsType } from "@/types";
import { CharacterCardInfoFragment } from "@/graphql/generated/graphql";
import { fetchCharacterCards } from "@/graphql/fetchers/getCharacters";
import { convertToURLSearchParams, getGraphQLVariables } from "@/utils";

import { ControlsPanel } from "@/components/ControlsPanel";
import { CardGrid } from "@/components/CardGrid";
import { Pagination } from "@/components/Pagination";

type Props = {
  searchParams: Promise<SearchParamsType>;
};

export default async function ResourcePage({ searchParams }: Props) {
  const searchParamsRaw = await searchParams;
  const searchParamsFormatted = convertToURLSearchParams(searchParamsRaw);
  const graphQLParams = getGraphQLVariables(searchParamsFormatted, filters);

  const { info, results } = await fetchCharacterCards(graphQLParams);
  const charactersData: CharacterCardInfoFragment[] = results || [];

  return (
    <>
      <h1 className="mb-6 text-center text-4xl font-bold">
        Find your favorite characters
      </h1>

      <div className="lg:flex-rowmx-auto mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row">
        <div className="h-full w-full lg:w-1/4">
          {<ControlsPanel filters={filters} />}
        </div>

        <div className="h-full w-full lg:w-3/4">
          {results.length === 0 ? (
            <p className="mt-2 text-gray-600 text-center">
              No characters found. Try something else!
            </p>
          ) : (
            <>
              <CardGrid items={charactersData} />

              {info?.pages && info?.pages > 1 && (
                <Pagination totalPages={info?.pages} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
