import Image from "next/image";
import Link from "next/link";

import InfoBlock from "./InfoBlock";
import { CharacterCardInfoFragment } from "@/graphql/generated/graphql";
import { createCharacterSlug } from "@/utils";

function getStatusColor(statusStr: string) {
  const status = statusStr.toLowerCase();
  switch (status) {
    case "alive":
      return "bg-green-500";
    case "dead":
      return "bg-red-500";
    case "unknown":
      return "bg-gray-400";
    default:
      return "bg-yellow-400";
  }
}

type Props = {
  info: CharacterCardInfoFragment;
};

export default function Card({ info }: Props) {
  const { id, name, image, status, species, location, episode } = info;

  const characterSlug = createCharacterSlug(id, name);
  const characterUrl = `/${characterSlug}`;

  return (
    <article
      className="flex h-auto w-[220px] flex-col overflow-hidden rounded-lg border-2 border-blue-700 bg-white shadow-md"
      aria-label={`Card for ${name}`}
    >
      <Link
        href={characterUrl}
        rel="noopener noreferrer"
        aria-label={`View details for ${name}`}
        className="relative h-[200px] w-full shrink-0"
      >
        <Image
          src={image || ""}
          alt={name || "image not found"}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 220px, 100vw"
        />
      </Link>

      <div className="flex w-full flex-col gap-4 p-4">
        <div className="space-y-2">
          <Link
            href={characterUrl}
            rel="noopener noreferrer"
            aria-label={`More about ${name}`}
          >
            <h2 className="text-xl font-bold">{name}</h2>
          </Link>

          <span className="flex items-center text-sm text-gray-700">
            <span
              className={`mr-2 inline-block h-3 w-3 rounded-full ${getStatusColor(
                status || ""
              )}`}
              aria-hidden="true"
            ></span>

            <span className="">
              {status} - {species}
            </span>
          </span>
        </div>

        <InfoBlock
          label="Last known location"
          body={location?.name || "Unknown"}
        />

        <InfoBlock
          label="Seen in"
          body={`${episode.length} episode${episode.length !== 1 ? "s" : ""}`}
        />
      </div>
    </article>
  );
}
