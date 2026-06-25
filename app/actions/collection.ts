import type {
  DiscogsCollectionResponse,
  DiscogsFolderResponse,
} from "../../lib/types";

import type { SearchParams } from "nuqs/server";
import {
  CollectionFolderSearch,
  loadCollectionFolderSearchParams,
} from "./nuqs";

const username = process.env.DISCOGS_USERNAME?.trim();
const accessToken = process.env.DISCOGS_ACCESS_TOKEN?.trim();
const apiBaseUrl =
  process.env.DISCOGS_API_BASE_URL?.trim() || "https://api.discogs.com";

export const getFolders = async (): Promise<DiscogsFolderResponse> => {
  if (!username) {
    throw new Error("Missing DISCOGS_USERNAME environment variable");
  }

  const url = new URL(
    `${apiBaseUrl}/users/${encodeURIComponent(username)}/collection/folders`,
  );

  const headers: HeadersInit = {
    "User-Agent": process.env.DISCOGS_USER_AGENT || "VinylsApp/1.0",
  };

  if (accessToken) {
    headers.Authorization = `Discogs token=${accessToken}`;
  }

  let res: Response;
  try {
    res = await fetch(url, {
      headers,
      next: { revalidate: 3600 },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Discogs request failed before response: ${message}`);
  }

  if (!res.ok) {
    throw new Error(
      `Failed to fetch collection: ${res.status} ${res.statusText}`,
    );
  }

  const foldersData = (await res.json()) as DiscogsFolderResponse;

  return foldersData;
};

export const getCollection = async (
  collectionSearchParams: CollectionFolderSearch,
): Promise<DiscogsCollectionResponse> => {
  if (!username) {
    throw new Error("Missing DISCOGS_USERNAME environment variable");
  }

  const url = new URL(
    `${apiBaseUrl}/users/${encodeURIComponent(username)}/collection/folders/0/releases`,
  );
  url.searchParams.set("sort", collectionSearchParams.sort);
  url.searchParams.set("sort_order", collectionSearchParams.sort_order);

  const headers: HeadersInit = {
    "User-Agent": process.env.DISCOGS_USER_AGENT || "VinylsApp/1.0",
  };

  if (accessToken) {
    headers.Authorization = `Discogs token=${accessToken}`;
  }

  let res: Response;
  try {
    res = await fetch(url, {
      headers,
      next: { revalidate: 3600 },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Discogs request failed before response: ${message}`);
  }

  if (!res.ok) {
    throw new Error(
      `Failed to fetch collection: ${res.status} ${res.statusText}`,
    );
  }

  return (await res.json()) as DiscogsCollectionResponse;
};
