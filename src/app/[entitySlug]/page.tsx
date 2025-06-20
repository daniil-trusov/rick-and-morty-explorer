import React from "react";
import Image from "next/image";

import {
  CharacterCardInfoFragment,
  CharacterFullInfoFragment,
} from "@/graphql/generated/graphql";
import { fetchCharacterInfo } from "@/graphql/fetchers/getCharacters";

import NotFound from "./notFound";
import { BackButton } from "@/components/shared";
import { SeenInSection } from "@/components/entityPageComponents";
import { OtherEpisodesSection } from "@/components/entityPageComponents/OtherEpisodesSection";

type CharacterFragmentCombined = CharacterFullInfoFragment &
  CharacterCardInfoFragment;

type Props = {
  params: Promise<{ entitySlug: string }>;
};

export default async function ResourcePage({ params }: Props) {
  const paramsData = await params;
  const rawId = paramsData.entitySlug.split("-")[0];
  const entityId = Number(rawId);

  if (!entityId) {
    return <NotFound />;
  }

  const character = (await fetchCharacterInfo(
    entityId
  )) as CharacterFragmentCombined | null;

  if (!character) {
    return <NotFound />;
  }

  const { name, image, status, gender, species, location, origin, episode } =
    character;

  const [firstEpisode, ...rest] = episode;
  const lastEpisode = rest.at(-1) ?? firstEpisode;
  const otherEpisodes = rest.slice(0, -1);

  const seenInSingleEpisode: boolean = episode.length === 1;

  return (
    <div className="max-w-7xl mx-auto pt-4 px-4">
      <div className="mb-6 flex flex-col items-start gap-2">
        <BackButton />

        <h1 className="text-4xl font-bold break-words whitespace-normal">
          {name}
        </h1>
      </div>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1 flex flex-col gap-4 items-start">
          <Image
            src={
              image ??
              "https://placehold.co/200/lightgray/red?text=Can%27t+load+image"
            }
            alt={`${name} picture` || "Can`t load picture"}
            width={200}
            height={200}
            className="w-48 h-48 object-cover rounded"
          />

          <div className="text-left break-words whitespace-normal">
            <p>
              <strong>Status:</strong> {status}
            </p>
            <p>
              <strong>Species:</strong> {species}
            </p>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <SeenInSection
            title={seenInSingleEpisode ? "Seen in" : "Origin"}
            marginBottom={8}
            episode={firstEpisode}
            location={origin}
          />

          {!seenInSingleEpisode && (
            <SeenInSection
              title={"Last seen"}
              marginBottom={otherEpisodes.length > 0 ? 8 : 0}
              episode={lastEpisode}
              location={location}
            />
          )}
        </div>

        <div className="md:col-span-1">
          {otherEpisodes.length > 0 && (
            <OtherEpisodesSection episodes={otherEpisodes} />
          )}
        </div>
      </div>
    </div>
  );
}
