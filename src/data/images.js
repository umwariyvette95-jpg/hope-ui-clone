// Mock dataset standing in for a backend. Section 5 of the assignment is explicit
// that this round is read-only: no API, no Create/Update/Delete, just a local
// array of objects that the rest of the app treats as the single source of truth.
//
// Shape: { id, name, url, createdAt, lastOpenedAt }
// - createdAt and lastOpenedAt are real Date/ISO values (not pre-formatted strings)
//   so the UI can derive "Created on ..." and "opened ... ago" instead of
//   hardcoding that text anywhere.

const HOURS = 1000 * 60 * 60;
const DAYS = HOURS * 24;
const now = Date.now();

export const images = [
  {
    id: "img-1",
    name: "Gallery-1234725783.jpg",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    createdAt: "2020-12-13T10:00:00Z",
    lastOpenedAt: new Date(now - 2 * 60 * 1000).toISOString(), // just now
  },
  {
    id: "img-2",
    name: "Gallery-25783.jpg",
    url: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?w=600&q=80",
    createdAt: "2020-12-13T10:00:00Z",
    lastOpenedAt: new Date(now - 2 * DAYS).toISOString(), // 2 days ago
  },
  {
    id: "img-3",
    name: "Gallery-49895383.jpg",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&sat=-50",
    createdAt: "2020-12-13T10:00:00Z",
    lastOpenedAt: new Date(now - 30 * DAYS).toISOString(), // a month ago
  },
  {
    id: "img-4",
    name: "Gallery-4509853.jpg",
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    createdAt: "2020-12-13T10:00:00Z",
    lastOpenedAt: new Date(now - 2 * DAYS).toISOString(),
  },
  {
    id: "img-5",
    name: "Gallery-280397557.jpg",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
    createdAt: "2020-12-13T10:00:00Z",
    lastOpenedAt: new Date(now - 5 * 60 * 1000).toISOString(), // just now
  },
  {
    id: "img-6",
    name: "Gallery-76935783.jpg",
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80",
    createdAt: "2020-12-13T10:00:00Z",
    lastOpenedAt: new Date(now - 2 * DAYS - 3 * HOURS).toISOString(),
  },
  {
    id: "img-7",
    name: "Gallery-47725783.jpg",
    url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80",
    createdAt: "2020-12-13T10:00:00Z",
    lastOpenedAt: new Date(now - 35 * DAYS).toISOString(),
  },
  {
    id: "img-8",
    name: "Gallery-47258342.jpg",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&blend=000000",
    createdAt: "2020-12-14T10:00:00Z",
    lastOpenedAt: new Date(now - 3 * DAYS).toISOString(),
  },
  {
    id: "img-9",
    name: "Gallery-90218456.jpg",
    url: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&q=80",
    createdAt: "2020-12-15T10:00:00Z",
    lastOpenedAt: new Date(now - 6 * HOURS).toISOString(),
  },
  {
    id: "img-10",
    name: "Gallery-11820934.jpg",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&q=80",
    createdAt: "2020-12-15T10:00:00Z",
    lastOpenedAt: new Date(now - 12 * HOURS).toISOString(),
  },
  {
    id: "img-11",
    name: "Gallery-65029184.jpg",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    createdAt: "2020-12-16T10:00:00Z",
    lastOpenedAt: new Date(now - 4 * DAYS).toISOString(),
  },
  {
    id: "img-12",
    name: "Gallery-33920184.jpg",
    url: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&q=80",
    createdAt: "2020-12-16T10:00:00Z",
    lastOpenedAt: new Date(now - 50 * DAYS).toISOString(),
  },
  {
    id: "img-13",
    name: "Gallery-78213094.jpg",
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    createdAt: "2020-12-17T10:00:00Z",
    lastOpenedAt: new Date(now - 9 * DAYS).toISOString(),
  },
  {
    id: "img-14",
    name: "Gallery-10293841.jpg",
    url: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&q=80",
    createdAt: "2020-12-17T10:00:00Z",
    lastOpenedAt: new Date(now - 1 * DAYS).toISOString(),
  },
  {
    id: "img-15",
    name: "Gallery-58102934.jpg",
    url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80",
    createdAt: "2020-12-18T10:00:00Z",
    lastOpenedAt: new Date(now - 20 * DAYS).toISOString(),
  },
  {
    id: "img-16",
    name: "Gallery-91029384.jpg",
    url: "https://images.unsplash.com/photo-1465156799763-2c087c19bccd?w=600&q=80",
    createdAt: "2020-12-18T10:00:00Z",
    lastOpenedAt: new Date(now - 45 * 60 * 1000).toISOString(),
  },
  {
    id: "img-17",
    name: "Gallery-29103847.jpg",
    url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80",
    createdAt: "2020-12-19T10:00:00Z",
    lastOpenedAt: new Date(now - 14 * DAYS).toISOString(),
  },
  {
    id: "img-18",
    name: "Gallery-72910384.jpg",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80",
    createdAt: "2020-12-19T10:00:00Z",
    lastOpenedAt: new Date(now - 7 * DAYS).toISOString(),
  },
];
