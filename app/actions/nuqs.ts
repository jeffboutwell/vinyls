import {
  createLoader,
  parseAsInteger,
  parseAsStringLiteral,
  type inferParserType,
} from "nuqs/server";

export const Sort = [
  "label",
  "artist",
  "title",
  "catno",
  "format",
  "rating",
  "added",
  "year",
] as const;

export const SortOrder = ["asc", "desc"] as const;

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
