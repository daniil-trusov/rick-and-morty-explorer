import React from "react";
import { CharacterCardInfoFragment } from "@/graphql/generated/graphql";
import Card from "./Card";

type Props = {
  items: CharacterCardInfoFragment[];
};

export default function CardGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <Card key={item.id} info={item} />
      ))}
    </div>
  );
}
