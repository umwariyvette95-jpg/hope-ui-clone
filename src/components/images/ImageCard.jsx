import { HiOutlinePhotograph } from "react-icons/hi";
import { formatCreatedOn, timeAgo } from "../../utils/formatTime";

/**
 * Reusable card used by both the "Recently Viewed" scroller and the
 * "All Images" grid (Section 5.1: "each showing a thumbnail, the creation
 * date, the file name, and a relative 'opened X ago' timestamp derived
 * from state, not a separate hardcoded list").
 *
 * This component only reads from props - it has no knowledge of where the
 * image list comes from, so swapping the mock dataset never requires a
 * change here (Phase 2 Definition of Done).
 */
export default function ImageCard({ image, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "text-left bg-white rounded-card shadow-card border border-bordercolor overflow-hidden",
        "hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      ].join(" ")}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-bodybg">
        <img
          src={image.url}
          alt={image.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <p className="text-meta text-bodycolor">{formatCreatedOn(image.createdAt)}</p>
        <p className="flex items-center gap-1.5 mt-1 text-sm font-medium text-headingcolor truncate">
          <HiOutlinePhotograph className="text-primary shrink-0" size={15} />
          <span className="truncate">{image.name}</span>
        </p>
        <p className="text-meta text-bodycolor mt-1">
          You opened <span className="text-primary font-medium">{timeAgo(image.lastOpenedAt)}</span>
        </p>
      </div>
    </button>
  );
}
