import { HiOutlineDotsVertical } from "react-icons/hi";

/** One folder tile in the Dashboard's "Your Folders" grid. Visual only - no click behavior, matches the context-only scope of this page. */
export default function FolderCard({ name, count, icon: Icon }) {
  return (
    <div className="bg-white rounded-card shadow-card border border-bordercolor p-4">
      <div className="flex items-start justify-between mb-3">
        <span className="w-11 h-11 rounded-full bg-primary-50 text-primary flex items-center justify-center">
          <Icon size={20} />
        </span>
        <button
          type="button"
          aria-label={`${name} folder options`}
          className="text-bodycolor hover:text-headingcolor"
        >
          <HiOutlineDotsVertical size={16} />
        </button>
      </div>
      <p className="font-semibold text-headingcolor text-base">{name}</p>
      <p className="text-meta text-bodycolor mt-0.5">{count} Items</p>
    </div>
  );
}
