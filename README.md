# Hope UI Clone — File Manager / Image Folder

A pixel-fidelity clone of the [Hope UI Pro](https://templates.iqonic.design/hope-ui/pro/html/file-manager/image-folder.html)
admin dashboard's **File Manager → Image Folder** page, built as a 3-day
frontend assignment. This round is **read-only**: no Create/Update/Delete
logic, focused instead on UI fidelity and a clean, centralized state model.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| State management | React's built-in `useReducer` + Context API |
| Icons | react-icons |
| Data | Picsum Photos API (no key) for images, merged with local mock metadata (`src/data/imageMeta.js`) — no Create/Update/Delete logic |

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`). The app
redirects `/` to `/images`, the main page for this assignment.

To build a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    layout/AppLayout.jsx       # Sidebar + Navbar + <Outlet/> shell, on every route
    sidebar/                   # Sidebar.jsx + navConfig.js (single source of nav links)
    navbar/Navbar.jsx           # top bar: search, cart dropdown, profile dropdown
    common/Dropdown.jsx         # shared dropdown primitive (click-outside, Esc to close)
    images/
      ImageCard.jsx              # reusable card (thumbnail, date, name, "opened X ago")
      ImagePreviewModal.jsx      # read-only lightbox
      EmptyState.jsx              # "no images" / "no search matches" state
  context/
    ImagesContext.jsx           # the central store (see below)
  data/imageMeta.js             # local mock metadata (name, dates) — pairs with API photos
  services/picsumApi.js         # fetchPicsumPhotos() + picsumImageUrl() — talks to Picsum
  utils/formatTime.js           # timeAgo() / formatCreatedOn() — derive text from dates
  pages/
    DashboardPage.jsx           # Home/Dashboard - fully hardcoded, context-only per the brief
    ImageFolderPage.jsx         # the main page being cloned, state-driven
    PlaceholderPage.jsx         # stub for Video/Document/All Files/Trash
  App.jsx                       # route table
```

## Dashboard / Home page

The brief lists related pages as "context only" (same shell, not graded on
state management), so `DashboardPage.jsx` and everything under
`components/dashboard/` are intentionally **hardcoded** from
`data/dashboardData.js` - no Context, no `useReducer`. It still gets the
same fidelity treatment as the Image Folder page: folder grid, a half-donut
Storage Details gauge (Recharts `PieChart`), an Activity Chart (Recharts
`LineChart`), an Uploading-on-Drive panel, a Recently Added Files table,
Cloud Storage progress bars, and an upgrade promo card - matching the
reference's Home screen layout.

## State management: why built-in React was enough

**One sentence:** this app has a single, small slice of shared state (an
image list, a search term, and which image is open in a modal) read by a
handful of sibling components, and `useReducer` + Context model that
completely without needing the extra ceremony (actions/selectors/store
config, separate package, devtools setup) that Redux Toolkit or Zustand add
for cross-cutting, larger-scale state.

If I'd also wired Redux Toolkit or Zustand (optional per the brief), the
main thing it would add at this scale is **less boilerplate for multiple
unrelated state slices** — useful once you have several independent stores
(auth, theme, images, notifications) and want each to be its own
self-contained slice without manually combining reducers. For one cohesive
feature like this, it would be extra setup without a real benefit.

### How the store is structured

`ImagesContext.jsx` holds:
- `images` — the full list (merged from local metadata + the Picsum API)
- `status` / `error` — `"idle" | "loading" | "success" | "error"`, set by the fetch effect
- `searchTerm` — current filter text
- `previewImageId` — id of the image open in the modal, or `null`

Everything else is **derived**, not stored separately:
- `recentlyViewed` = `images` sorted by `lastOpenedAt`, sliced to 8
- `filteredImages` = `images` filtered by `searchTerm`
- `previewImage` = the single image object matching `previewImageId`

This means `ImageCard`, the grid, and the scroller never read from a second
hardcoded array — swapping `data/imageMeta.js`'s contents requires **zero
changes** to any component.

## Image data: Picsum Photos API

On mount, `ImagesProvider` calls `fetchPicsumPhotos()` once
(`src/services/picsumApi.js`), which hits `GET https://picsum.photos/v2/list`
(no API key required). Each returned photo's `id` is merged with one entry
from the local mock metadata (`src/data/imageMeta.js` — file name,
`createdAt`, `lastOpenedAt`) to build the final image objects the rest of the
app reads.

- While the fetch is in flight, the page shows skeleton cards
  (`ImageCardSkeleton.jsx`) instead of a blank screen.
- If the fetch fails (offline, API down), an error banner is shown instead
  of broken `<img>` tags.
- The photographer's name from Picsum's response is shown as a credit line
  in the preview modal.

This keeps the "local mock data drives the UI" architecture from the brief
intact — the API call happens in exactly one place, and every component
downstream still just reads `images` from context, with no idea whether the
photo URL came from a local file or a network call.

## Known limitations (intentionally out of scope this round)

- **Add Image** — button is present for visual fidelity but does not save
  anything to state.
- **Delete Image** — no delete control exists anywhere in the UI.
- **Edit / rename** — not implemented.
- **Trash + restore flow** — the Trash sidebar link is a placeholder page.
- **Video / Document / All Files / Dashboard** pages are placeholders that
  share the shell (sidebar + navbar) but have no real content yet — they
  exist so every sidebar link is a real, working route.

These all move to the **Bonus Challenges** if revisited later (theme
customizer, working Add Image with drag-and-drop, Trash/restore, dark mode).

## Responsiveness

The All Images grid is 4 columns on desktop, 2 on tablet, 1 on mobile
(`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). The sidebar collapses below
the `lg` breakpoint (intended to pair with a future mobile drawer — out of
scope for this round, since the brief only requires the layout to not
break, not a full off-canvas menu).

## Design tokens

Pulled directly from the reference page via DevTools and the assignment
brief (Section 4):

| Token | Value | Used for |
|---|---|---|
| `primary` | `#3A57E8` | active sidebar state, primary buttons, links |
| `info` | `#08B1BA` | accents/badges (reserved for future use) |
| `bodybg` | `#F5F6FA` | page background |
| `bordercolor` | `#E4E6EF` | card/sidebar hairlines |
| Card radius | `10px` | all cards |
