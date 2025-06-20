export function getPaginationPages(
  currentPage: number,
  totalPages: number,
  siblingsCount = 1
): (number | "...")[] {
  const pages: (number | "...")[] = [];

  const startPage = Math.max(currentPage - siblingsCount, 2);
  const endPage = Math.min(currentPage + siblingsCount, totalPages - 1);

  pages.push(1);

  if (startPage > 2) {
    pages.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}
