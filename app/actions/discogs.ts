export const username = process.env.DISCOGS_USERNAME?.trim();
export const accessToken = process.env.DISCOGS_ACCESS_TOKEN?.trim();
export const apiBaseUrl =
  process.env.DISCOGS_API_BASE_URL?.trim() || "https://api.discogs.com";
