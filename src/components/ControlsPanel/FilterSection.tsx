import { capitalize } from "lodash";
import FilterButton from "./FilterButton";
import { FilterCategory } from "@/types";

type Props = {
  filters: FilterCategory;
  activeFilterKey: string;
  onFilterToggle: (option: string) => void;
};

export default function FilterSection({
  filters,
  activeFilterKey,
  onFilterToggle,
}: Props) {
  const { label, key: name, options } = filters;
  return (
    <>
      <div className="p-1 font-bold">
        <h3 id={`filter-header-${name}`}>{label}</h3>
      </div>

      <div id={`filter-body-${name}`} aria-labelledby={`filter-header-${name}`}>
        <div className="flex flex-wrap gap-2 overflow-visible p-2">
          {options.map(({ key: key, label: label }) => {
            return (
              <FilterButton
                key={key}
                option={label}
                isSelected={activeFilterKey === key}
                onToggle={() => onFilterToggle(key)}
              >
                {capitalize(label)}
              </FilterButton>
            );
          })}
        </div>
      </div>
    </>
  );
}
