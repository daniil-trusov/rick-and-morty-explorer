import { CharacterFullInfoFragment } from "@/graphql/generated/graphql";

type Props = {
  episode: NonNullable<CharacterFullInfoFragment["episode"][0]>;
};

export function EpisodeDesciption({ episode }: Props) {
  return (
    <>
      <p>
        <strong>Episode:</strong> {episode.name} ({episode.episode})
      </p>

      <p>
        <strong>Released:</strong> {episode.air_date}
      </p>
    </>
  );
}
