const PICSUM_LIST_URL = "https://picsum.photos/v2/list";

/**
 * Fetches a page of photo metadata from Picsum Photos (https://picsum.photos).
 * No API key required. Picsum returns { id, author, width, height, url, download_url }
 * per photo - we only need `id` here, since we build our own sized display URL
 * from it (https://picsum.photos/id/{id}/{width}/{height}), which lets every
 * card request the exact dimensions it needs instead of a fixed-size original.
 *
 * Throws on network failure or non-2xx response so the caller can show an
 * error / fallback state instead of silently rendering broken <img> tags.
 */
export async function fetchPicsumPhotos({ page = 1, limit = 18 } = {}) {
  const res = await fetch(`${PICSUM_LIST_URL}?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error(`Picsum API request failed with status ${res.status}`);
  }
  return res.json(); // array of { id, author, width, height, url, download_url }
}

/** Builds a display URL for a given Picsum photo id at the requested size. */
export function picsumImageUrl(id, width = 600, height = 450) {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}
