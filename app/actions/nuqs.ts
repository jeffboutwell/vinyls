import {
  createLoader,
  parseAsInteger,
  parseAsStringLiteral,
  type inferParserType,
} from "nuqs/server";

export const Sort = [
  "artist",
  "label",
  "title",
  "catno",
  "format",
  "rating",
  "added",
  "year",
] as const;

export type SortValue = (typeof Sort)[number];

export const SortLabels: Record<SortValue, string> = {
  artist: "Artist",
  label: "Label",
  title: "Title",
  catno: "Cat No.",
  format: "Format",
  rating: "Rating",
  added: "Date Added",
  year: "Year",
};

export const SortOrder = ["asc", "desc"] as const;

export type SortOrderValue = (typeof SortOrder)[number];

export const SortOrderLabels: Record<SortOrderValue, string> = {
  asc: "Ascending",
  desc: "Descending",
};

export const collectionFolderSearchParams = {
  folder_id: parseAsInteger.withDefault(0),
  sort: parseAsStringLiteral(Sort).withDefault("artist"),
  sort_order: parseAsStringLiteral(SortOrder).withDefault("asc"),
};

export type CollectionFolderSearch = inferParserType<
  typeof collectionFolderSearchParams
>;
export const loadCollectionFolderSearchParams = createLoader(
  collectionFolderSearchParams,
);
