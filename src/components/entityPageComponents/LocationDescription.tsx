import { CharacterFullInfoFragment } from "@/graphql/generated/graphql";

type Props = {
  location: NonNullable<CharacterFullInfoFragment["location"]>;
};

export function LocationDesciption({ location }: Props) {
  return (
    <>
      <p>
        <strong>Location:</strong> {location.name}
      </p>
      <p>
        <strong>Type:</strong> {location.type}
      </p>
      <p>
        <strong>Dimension:</strong> {location.dimension}
      </p>
    </>
  );
}
