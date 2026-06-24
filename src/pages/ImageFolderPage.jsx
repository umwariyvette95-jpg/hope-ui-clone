import { HiOutlinePlus, HiOutlineSearch, HiChevronLeft, HiChevronRight, HiOutlineExclamationCircle } from "react-icons/hi";
import { useRef } from "react";
import { useImages } from "../context/ImagesContext";
import ImageCard from "../components/images/ImageCard";
import ImageCardSkeleton from "../components/images/ImageCardSkeleton";
import ImagePreviewModal from "../components/images/ImagePreviewModal";
import EmptyState from "../components/images/EmptyState";


export default function ImageFolderPage() {
  const {
    recentlyViewed,
    filteredImages,
    images,
    isLoading,
    isError,
    error,
    searchTerm,
    setSearchTerm,
    previewImage,
    openPreview,
    closePreview,
  } = useImages();

  const scrollerRef = useRef(null);

  function scrollByAmount(amount) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  const hasNoImagesAtAll = !isLoading && images.length === 0;
  const hasNoSearchMatches = !isLoading && !hasNoImagesAtAll && filteredImages.length === 0;
  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-page-title text-headingcolor">Images</h1>
        <button
          type="button"
          title="Add Image is visually present for fidelity, but is out of scope this round"
          className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-md hover:bg-primary-700 transition-colors"
        >
          <HiOutlinePlus size={16} />
          Add Image
        </button>
      </div>

      {/* Search / filter - optional per spec, included for fidelity & UX */}
      <div className="mb-6 max-w-sm">
        <div className="flex items-center gap-2 bg-white border border-bordercolor rounded-md px-3 py-2.5">
          <HiOutlineSearch className="text-bodycolor" size={16} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by file name..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-bodycolor/60"
          />
        </div>
      </div>

      {/* Error banner - shown if the Picsum fetch fails */}
      {isError && (
        <div className="mb-6 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
          <HiOutlineExclamationCircle size={18} className="shrink-0" />
          <span>Couldn't load images from Picsum ({error}). Check your connection and refresh.</span>
        </div>
      )}

      {/* Recently Viewed - derived from lastOpenedAt, not a hardcoded list */}
      {isLoading && (
        <section className="mb-8">
          <h2 className="text-section-title text-headingcolor mb-3">Recently viewed</h2>
          <div className="flex gap-4 overflow-x-hidden pb-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <ImageCardSkeleton key={i} className="min-w-[220px] max-w-[220px]" />
            ))}
          </div>
        </section>
      )}

      {!hasNoImagesAtAll && !isLoading && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-section-title text-headingcolor">Recently viewed</h2>
            <div className="hidden sm:flex gap-2">
              <button
                type="button"
                onClick={() => scrollByAmount(-300)}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-full border border-bordercolor flex items-center justify-center text-bodycolor hover:text-primary hover:border-primary"
              >
                <HiChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(300)}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-full border border-bordercolor flex items-center justify-center text-bodycolor hover:text-primary hover:border-primary"
              >
                <HiChevronRight size={16} />
              </button>
            </div>
          </div>
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scrollbar-thin pb-2 -mx-1 px-1"
          >
            {recentlyViewed.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                onClick={() => openPreview(image.id)}
                className="min-w-[220px] max-w-[220px]"
              />
            ))}
          </div>
        </section>
      )}

      {/* All Images grid */}
      <section>
        <h2 className="text-section-title text-headingcolor mb-3">All images</h2>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ImageCardSkeleton key={i} />
            ))}
          </div>
        )}

        {hasNoImagesAtAll && <EmptyState />}
        {hasNoSearchMatches && <EmptyState isSearchResult />}

        {!hasNoImagesAtAll && !hasNoSearchMatches && !isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                onClick={() => openPreview(image.id)}
              />
            ))}
          </div>
        )}
      </section>

      <ImagePreviewModal image={previewImage} onClose={closePreview} />
    </div>
  );
}
