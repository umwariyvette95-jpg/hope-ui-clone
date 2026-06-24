const PICSUM_LIST_URL = "https://picsum.photos/v2/list";

export async function fetchPicsumPhotos({ page = 1, limit = 18 } = {}) {
  const res = await fetch(`${PICSUM_LIST_URL}?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error(`Picsum API request failed with status ${res.status}`);
  }
  return res.json(); 
}


export function picsumImageUrl(id, width = 600, height = 450) {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}
