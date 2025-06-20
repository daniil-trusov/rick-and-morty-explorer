import clsx from "clsx";

type Props = {
  option: string;
  isSelected: boolean;
  children: React.ReactNode;
  onToggle: () => void;
};

export default function FilterButton({
  option,
  isSelected,
  children,
  onToggle,
}: Props) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      aria-label={`Filter ${option} ${isSelected ? "is selected" : "is not selected"}`}
      onClick={onToggle}
      className={clsx(
        "rounded-full border px-3 py-1 text-sm transition-colors",
        isSelected
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-gray-300 bg-white text-gray-600 hover:bg-blue-100"
      )}
    >
      {children}
    </button>
  );
}
