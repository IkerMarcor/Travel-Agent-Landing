export const generateSlug = (title: string): string => {
  const maxLength = 60; // Maximum length for the slug
  const stopWordsSet = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "is",
    "are",
    "was",
    "were",
  ]);

  let slug = title
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const words = slug.split("-").filter((word) => !stopWordsSet.has(word));

  if (!slug) slug = "untitled"; // Fallback if the title is empty

  slug = words.join("-");
  slug = slug.slice(0, maxLength);

  return slug;
};
