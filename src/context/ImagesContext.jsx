import { createContext, useContext, useMemo, useReducer } from "react";
import { images as mockImages } from "../data/images";

/**
 * Central store for the Image Folder feature.
 *
 * Why Context + useReducer and not Redux/Zustand:
 * This app has one shared slice of state (the image list, the active search
 * term, and which image is open in the preview modal) that a handful of
 * sibling components need to read. useReducer keeps the update logic in one
 * place as named actions, and Context lets ImageCard, the grid, the scroller,
 * and the modal all read/write it without prop-drilling through AppLayout.
 * There's no cross-cutting middleware, caching, or async work that would
 * justify Redux Toolkit's extra ceremony at this scale.
 */

const ImagesContext = createContext(null);

const initialState = {
  images: mockImages, // swap this import for a different mock array - no other code needs to change
  searchTerm: "",
  previewImageId: null, // id of the image currently open in the read-only lightbox, or null
};

function imagesReducer(state, action) {
  switch (action.type) {
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
