import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { imageMeta } from "../data/imageMeta";
import { fetchPicsumPhotos, picsumImageUrl } from "../services/picsumApi";


const ImagesContext = createContext(null);

const initialState = {
  images: [], 
  status: "idle",
  error: null,
  searchTerm: "",
  previewImageId: null, 
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


export function useImages() {
  const ctx = useContext(ImagesContext);
  if (!ctx) {
    throw new Error("useImages must be used within an ImagesProvider");
  }
  return ctx;
}
