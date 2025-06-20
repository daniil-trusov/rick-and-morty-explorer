import { graphQLClient } from "@/graphql/client";
import {
  CharacterCardInfoFragment,
  GetCharacterFullDocument,
  GetCharacterFullQuery,
  GetCharacterFullQueryVariables,
  GetCharactersCardDocument,
  GetCharactersCardQuery,
  GetCharactersCardQueryVariables,
} from "@/graphql/generated/graphql";

export async function fetchCharacterCards(
  params: GetCharactersCardQueryVariables
): Promise<{
  info: NonNullable<GetCharactersCardQuery["characters"]>["info"];
  results: CharacterCardInfoFragment[];
}> {
  const data = await graphQLClient.request<
    GetCharactersCardQuery,
    GetCharactersCardQueryVariables
  >(GetCharactersCardDocument, params);

  const characters = data.characters;

  return {
    info: characters?.info ?? {},
    results: (characters?.results ?? []).filter(
      (char): char is CharacterCardInfoFragment => char !== null
    ),
  };
}

export async function fetchCharacterInfo(
  id: string | number
): Promise<GetCharacterFullQuery["character"]> {
  const idStr = id.toString();
  const data = await graphQLClient.request<
    GetCharacterFullQuery,
    GetCharacterFullQueryVariables
  >(GetCharacterFullDocument, { id: idStr });

  return data.character ?? null;
}
