import { HiOutlineX } from "react-icons/hi";
import { uploadingFiles } from "../../data/dashboardData";

export default function UploadingOnDriveCard() {
  return (
    <div className="bg-white rounded-card shadow-card border border-bordercolor p-5">
      <h2 className="text-section-title text-headingcolor mb-3">Uploading on Drive</h2>
      <div className="space-y-3 max-h-[280px] overflow-y-auto scrollbar-thin pr-1">
        {uploadingFiles.map((file) => (
          <div key={file.id} className="flex items-center gap-3">
            <span className="text-sm text-headingcolor w-28 truncate">{file.name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-bodybg overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${file.percent}%` }}
              />
            </div>
            <span className="text-meta text-bodycolor w-12 text-right shrink-0">{file.size}</span>
            <button
              type="button"
              aria-label={`Cancel upload of ${file.name}`}
              className="w-5 h-5 rounded bg-primary-50 text-primary flex items-center justify-center shrink-0"
            >
              <HiOutlineX size={11} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
