// Local metadata for each image - everything EXCEPT the actual photo, which
// now comes from the Picsum Photos API (src/services/picsumApi.js) instead
// of a hardcoded URL. This still satisfies "model real data as state instead
// of hardcoding everything into JSX" (Section 2): file names and timestamps
// are local mock data, the photo itself is fetched once on app load and
// merged in by ImagesContext.
//
// Shape: { id, name, createdAt, lastOpenedAt }
// (url is added later, after the API call resolves)

const HOURS = 1000 * 60 * 60;
const DAYS = HOURS * 24;
const now = Date.now();

export const imageMeta = [
  { id: "img-1", name: "Gallery-1234725783.jpg", createdAt: "2020-12-13T10:00:00Z", lastOpenedAt: new Date(now - 2 * 60 * 1000).toISOString() },
  { id: "img-2", name: "Gallery-25783.jpg", createdAt: "2020-12-13T10:00:00Z", lastOpenedAt: new Date(now - 2 * DAYS).toISOString() },
  { id: "img-3", name: "Gallery-49895383.jpg", createdAt: "2020-12-13T10:00:00Z", lastOpenedAt: new Date(now - 30 * DAYS).toISOString() },
  { id: "img-4", name: "Gallery-4509853.jpg", createdAt: "2020-12-13T10:00:00Z", lastOpenedAt: new Date(now - 2 * DAYS).toISOString() },
  { id: "img-5", name: "Gallery-280397557.jpg", createdAt: "2020-12-13T10:00:00Z", lastOpenedAt: new Date(now - 5 * 60 * 1000).toISOString() },
  { id: "img-6", name: "Gallery-76935783.jpg", createdAt: "2020-12-13T10:00:00Z", lastOpenedAt: new Date(now - 2 * DAYS - 3 * HOURS).toISOString() },
  { id: "img-7", name: "Gallery-47725783.jpg", createdAt: "2020-12-13T10:00:00Z", lastOpenedAt: new Date(now - 35 * DAYS).toISOString() },
  { id: "img-8", name: "Gallery-47258342.jpg", createdAt: "2020-12-14T10:00:00Z", lastOpenedAt: new Date(now - 3 * DAYS).toISOString() },
  { id: "img-9", name: "Gallery-90218456.jpg", createdAt: "2020-12-15T10:00:00Z", lastOpenedAt: new Date(now - 6 * HOURS).toISOString() },
  { id: "img-10", name: "Gallery-11820934.jpg", createdAt: "2020-12-15T10:00:00Z", lastOpenedAt: new Date(now - 12 * HOURS).toISOString() },
  { id: "img-11", name: "Gallery-65029184.jpg", createdAt: "2020-12-16T10:00:00Z", lastOpenedAt: new Date(now - 4 * DAYS).toISOString() },
  { id: "img-12", name: "Gallery-33920184.jpg", createdAt: "2020-12-16T10:00:00Z", lastOpenedAt: new Date(now - 50 * DAYS).toISOString() },
  { id: "img-13", name: "Gallery-78213094.jpg", createdAt: "2020-12-17T10:00:00Z", lastOpenedAt: new Date(now - 9 * DAYS).toISOString() },
  { id: "img-14", name: "Gallery-10293841.jpg", createdAt: "2020-12-17T10:00:00Z", lastOpenedAt: new Date(now - 1 * DAYS).toISOString() },
  { id: "img-15", name: "Gallery-58102934.jpg", createdAt: "2020-12-18T10:00:00Z", lastOpenedAt: new Date(now - 20 * DAYS).toISOString() },
  { id: "img-16", name: "Gallery-91029384.jpg", createdAt: "2020-12-18T10:00:00Z", lastOpenedAt: new Date(now - 45 * 60 * 1000).toISOString() },
  { id: "img-17", name: "Gallery-29103847.jpg", createdAt: "2020-12-19T10:00:00Z", lastOpenedAt: new Date(now - 14 * DAYS).toISOString() },
  { id: "img-18", name: "Gallery-72910384.jpg", createdAt: "2020-12-19T10:00:00Z", lastOpenedAt: new Date(now - 7 * DAYS).toISOString() },
];
