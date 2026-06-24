import { HiOutlinePhotograph } from "react-icons/hi";


export default function EmptyState({ isSearchResult = false }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white rounded-card border border-dashed border-bordercolor">
      <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-4">
        <HiOutlinePhotograph className="text-primary" size={28} />
      </div>
      <p className="font-semibold text-headingcolor mb-1">
        {isSearchResult ? "No images match your search" : "No images yet"}
      </p>
      <p className="text-meta text-bodycolor max-w-xs">
        {isSearchResult
          ? "Try a different file name or clear the search field."
          : "Images you add will show up here."}
      </p>
    </div>
  );
}
