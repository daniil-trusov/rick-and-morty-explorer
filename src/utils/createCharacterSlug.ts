export function createCharacterSlug(
  id: string | null | undefined,
  name: string | null | undefined
): string {
  if (!id || !name) {
    return "404";
  }

  const nameFormatted = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");

  return `${id}-${nameFormatted}`;
}
