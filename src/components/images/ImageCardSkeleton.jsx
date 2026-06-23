/**
 * Skeleton version of ImageCard, shown while the Picsum fetch is in flight.
 * Matches ImageCard's exact dimensions/structure so the layout doesn't jump
 * once real data arrives.
 */
export default function ImageCardSkeleton({ className = "" }) {
  return (
    <div
      className={[
        "bg-white rounded-card shadow-card border border-bordercolor overflow-hidden animate-pulse",
        className,
      ].join(" ")}
    >
      <div className="aspect-[4/3] w-full bg-bodybg" />
      <div className="p-3 space-y-2">
        <div className="h-3 w-24 bg-bodybg rounded" />
        <div className="h-4 w-32 bg-bodybg rounded" />
        <div className="h-3 w-20 bg-bodybg rounded" />
      </div>
    </div>
  );
}
