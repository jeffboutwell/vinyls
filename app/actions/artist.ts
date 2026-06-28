import type { DiscogsArtist } from "../../lib/types";

import { apiBaseUrl, accessToken } from "./discogs";

export const getArtist = async (artist_id: string): Promise<DiscogsArtist> => {
  const url = new URL(`${apiBaseUrl}/artists/${artist_id}`);

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
    throw new Error(`Failed to fetch artist: ${res.status} ${res.statusText}`);
  }

  const artistData = (await res.json()) as DiscogsArtist;

  return artistData;
};
