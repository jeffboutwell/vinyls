import type { DiscogsWantlistResponse } from "../../lib/types";

import { apiBaseUrl, accessToken, username } from "./discogs";

type WantlistResult = DiscogsWantlistResponse & {
  warning?: string;
};

export const getWantlist = async (): Promise<WantlistResult> => {
  if (!username) {
    throw new Error("Missing DISCOGS_USERNAME environment variable");
  }

  const url = new URL(
    `${apiBaseUrl}/users/${encodeURIComponent(username)}/wants`,
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
    if (res.status === 429) {
      const retryAfter = res.headers.get("retry-after");
      const retryHint = retryAfter
        ? ` Please retry in about ${retryAfter} second(s).`
        : " Please retry shortly.";

      return {
        pagination: {
          page: 1,
          pages: 1,
          per_page: 0,
          items: 0,
          urls: {},
        },
        wants: [],
        warning: `Discogs rate limit reached (429).${retryHint}`,
      };
    }

    throw new Error(
      `Failed to fetch wantlist: ${res.status} ${res.statusText}`,
    );
  }

  return (await res.json()) as DiscogsWantlistResponse;
};
