import { HiOutlinePlus, HiOutlineSearch, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useRef } from "react";
import { useImages } from "../context/ImagesContext";
import ImageCard from "../components/images/ImageCard";
import ImagePreviewModal from "../components/images/ImagePreviewModal";
import EmptyState from "../components/images/EmptyState";

/**
 * Image Folder page (Section 5.2). Everything here reads from useImages() -
 * there is no hardcoded array left in this component. Recently Viewed and
 * the All Images grid are two different *views* over the same source of
 * truth, not two separate datasets.
 */
export default function ImageFolderPage() {
  const {
    recentlyViewed,
    filteredImages,
    images,
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

  const hasNoImagesAtAll = images.length === 0;
  const hasNoSearchMatches = !hasNoImagesAtAll && filteredImages.length === 0;

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

      {/* Recently Viewed - derived from lastOpenedAt, not a hardcoded list */}
      {!hasNoImagesAtAll && (
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

        {hasNoImagesAtAll && <EmptyState />}
        {hasNoSearchMatches && <EmptyState isSearchResult />}

        {!hasNoImagesAtAll && !hasNoSearchMatches && (
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
