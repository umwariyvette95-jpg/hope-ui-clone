import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { imageMeta } from "../data/imageMeta";
import { fetchPicsumPhotos, picsumImageUrl } from "../services/picsumApi";

/**
 * Central store for the Image Folder feature.
 *
 * Why Context + useReducer and not Redux/Zustand:
 * This app has one shared slice of state (the image list, loading/error
 * status, the active search term, and which image is open in the preview
 * modal) that a handful of sibling components need to read. useReducer keeps
 * the update logic in one place as named actions, and Context lets
 * ImageCard, the grid, the scroller, and the modal all read/write it without
 * prop-drilling through AppLayout. There's no cross-cutting middleware or
 * caching layer that would justify Redux Toolkit's extra ceremony here -
 * even now that data comes from a real API call, it's a single fetch-once
 * effect, not a pattern that needs query caching/invalidation machinery.
 *
 * Images now come from the Picsum Photos API (no key required) instead of
 * hardcoded URLs. Local mock metadata (file name, createdAt, lastOpenedAt)
 * lives in data/imageMeta.js and gets merged with each fetched photo's id
 * once, on mount - components downstream never know or care that the photo
 * itself came from a network call instead of a local file.
 */

const ImagesContext = createContext(null);

const initialState = {
  images: [], // populated once the Picsum fetch resolves
  status: "idle", // "idle" | "loading" | "success" | "error"
  error: null,
  searchTerm: "",
  previewImageId: null, // id of the image currently open in the read-only lightbox, or null
};

function imagesReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, status: "loading", error: null };
    case "FETCH_SUCCESS":
      return { ...state, status: "success", images: action.payload };
    case "FETCH_ERROR":
      return { ...state, status: "error", error: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "OPEN_PREVIEW":
      return { ...state, previewImageId: action.payload };
    case "CLOSE_PREVIEW":
      return { ...state, previewImageId: null };
    case "MARK_OPENED": {
      // Touches lastOpenedAt so "Recently Viewed" reorders live as you click cards.
      // This is the only "mutation" in the app, and it's purely a read-tracking
      // timestamp - it does not add, remove, or edit any image data.
      return {
        ...state,
        images: state.images.map((img) =>
          img.id === action.payload
            ? { ...img, lastOpenedAt: new Date().toISOString() }
            : img
        ),
      };
    }
    default:
      return state;
  }
}

export function ImagesProvider({ children }) {
  const [state, dispatch] = useReducer(imagesReducer, initialState);

  // Fetch once on mount, merge with local metadata, store the result.
  // This is the one and only place in the app that talks to the network -
  // everything else reads from state.images.
  useEffect(() => {
    let cancelled = false;

    async function loadImages() {
      dispatch({ type: "FETCH_START" });
      try {
        const photos = await fetchPicsumPhotos({ page: 1, limit: imageMeta.length });
        const merged = imageMeta.map((meta, index) => {
          const photo = photos[index % photos.length];
          return {
            ...meta,
            url: picsumImageUrl(photo.id, 600, 450),
            author: photo.author, // Picsum requires/encourages attributing the photographer
          };
        });
        if (!cancelled) dispatch({ type: "FETCH_SUCCESS", payload: merged });
      } catch (err) {
        if (!cancelled) dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    }

    loadImages();
    return () => {
      cancelled = true;
    };
  }, []);

  // Derived views - computed from the single source of truth, never duplicated arrays.
  const recentlyViewed = useMemo(() => {
    return [...state.images]
      .sort((a, b) => new Date(b.lastOpenedAt) - new Date(a.lastOpenedAt))
      .slice(0, 8);
  }, [state.images]);

  const filteredImages = useMemo(() => {
    const term = state.searchTerm.trim().toLowerCase();
    if (!term) return state.images;
    return state.images.filter((img) =>
      img.name.toLowerCase().includes(term)
    );
  }, [state.images, state.searchTerm]);

  const previewImage = useMemo(() => {
    return state.images.find((img) => img.id === state.previewImageId) || null;
  }, [state.images, state.previewImageId]);

  const value = {
    images: state.images,
    status: state.status,
    isLoading: state.status === "loading",
    isError: state.status === "error",
    error: state.error,
    searchTerm: state.searchTerm,
    recentlyViewed,
    filteredImages,
    previewImage,
    setSearchTerm: (term) => dispatch({ type: "SET_SEARCH_TERM", payload: term }),
    openPreview: (id) => {
      dispatch({ type: "OPEN_PREVIEW", payload: id });
      dispatch({ type: "MARK_OPENED", payload: id });
    },
    closePreview: () => dispatch({ type: "CLOSE_PREVIEW" }),
  };

  return <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>;
}

/** Hook for consuming the images store. Keeps components from importing useContext + ImagesContext directly. */
export function useImages() {
  const ctx = useContext(ImagesContext);
  if (!ctx) {
    throw new Error("useImages must be used within an ImagesProvider");
  }
  return ctx;
}
