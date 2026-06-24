import { HiOutlinePhotograph } from "react-icons/hi";
import { formatCreatedOn, timeAgo } from "../../utils/formatTime";


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
