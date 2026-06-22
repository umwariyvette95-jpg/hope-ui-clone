/**
 * Converts an ISO timestamp into a relative "time ago" string, e.g. "2 days ago",
 * "a month ago", "just now". This is what lets ImageCard show "You opened {x} ago"
 * by deriving it from state (lastOpenedAt) rather than a second hardcoded string,
 * per the assignment's Phase 2 requirement.
 */
export function timeAgo(isoString) {
  const then = new Date(isoString).getTime();
  const now = Date.now();
  const seconds = Math.max(0, Math.floor((now - then) / 1000));

  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months === 1) return "a month ago";
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return years === 1 ? "a year ago" : `${years} years ago`;
}

/** Formats an ISO date as "Created on Dec 13, 2020" to match the reference design. */
export function formatCreatedOn(isoString) {
  const date = new Date(isoString);
  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return `Created on ${formatted}`;
}
