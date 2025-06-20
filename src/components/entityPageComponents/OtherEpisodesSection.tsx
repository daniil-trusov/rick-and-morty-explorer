import { Episode } from "@/graphql/generated/graphql";

type Props = {
  episodes: (Omit<Episode, "characters"> | null)[];
};

export function OtherEpisodesSection({ episodes }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Other Episodes:</h2>

      <ul className="list-disc list-inside">
        {episodes.map((ep) =>
          ep ? (
            <li key={ep.id}>
              <strong>{ep.name}</strong> ({ep.episode}) - <em>{ep.air_date}</em>
            </li>
          ) : null
        )}
      </ul>
    </section>
  );
}
