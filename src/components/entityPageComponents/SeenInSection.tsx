import { CharacterFullInfoFragment } from "@/graphql/generated/graphql";
import { EpisodeDesciption } from "./EpisodeDescription";
import { LocationDesciption } from "./LocationDescription";

type Props = {
  title: string;
  marginBottom?: number;
  episode: CharacterFullInfoFragment["episode"][0];
  location: CharacterFullInfoFragment["location"];
};

export function SeenInSection({
  title,
  marginBottom = 0,
  episode,
  location,
}: Props) {
  return (
    <section className={`mb-${marginBottom}`}>
      <h2 className="text-2xl font-semibold mb-2">{title}:</h2>

      {episode && <EpisodeDesciption episode={episode} />}

      {location && <LocationDesciption location={location} />}
    </section>
  );
}
