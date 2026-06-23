import { useEffect } from "react";
import { HiOutlineX, HiOutlinePhotograph } from "react-icons/hi";
import { formatCreatedOn, timeAgo } from "../../utils/formatTime";

/**
 * Read-only full preview. Section 5.2: "Each image card opens a read-only
 * full preview (lightbox or modal) when clicked - viewing only, no edit or
 * delete controls inside it." Closes on Escape, backdrop click, or the X.
 */
export default function ImagePreviewModal({ image, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview of ${image.name}`}
    >
      <div
        className="bg-white rounded-card shadow-card max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-bordercolor">
          <p className="flex items-center gap-2 font-semibold text-headingcolor text-sm">
            <HiOutlinePhotograph className="text-primary" size={18} />
            {image.name}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="text-bodycolor hover:text-headingcolor"
          >
            <HiOutlineX size={20} />
          </button>
        </div>

        <div className="bg-bodybg max-h-[60vh] flex items-center justify-center">
          <img
            src={image.url}
            alt={image.name}
            className="max-h-[60vh] w-full object-contain"
          />
        </div>

        <div className="px-4 py-3 flex flex-wrap gap-x-6 gap-y-1 text-meta text-bodycolor">
          <span>{formatCreatedOn(image.createdAt)}</span>
          <span>
            You opened <span className="text-primary font-medium">{timeAgo(image.lastOpenedAt)}</span>
          </span>
          {image.author && <span>Photo by {image.author} (via Picsum)</span>}
        </div>
      </div>
    </div>
  );
}
