import { HiOutlinePhotograph, HiOutlineDocumentText, HiOutlineFilm, HiOutlineTrash } from "react-icons/hi";
import { recentFiles } from "../../data/dashboardData";

const typeIcon = {
  image: HiOutlinePhotograph,
  doc: HiOutlineDocumentText,
  video: HiOutlineFilm,
};


export default function RecentFilesCard() {
  return (
    <div className="bg-white rounded-card shadow-card border border-bordercolor p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-section-title text-headingcolor">Recently added files</h2>
        <button type="button" className="text-primary text-sm font-medium">
          View all
        </button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-bodycolor border-b border-bordercolor">
            <th className="py-2 font-normal">Files</th>
            <th className="py-2 font-normal">Last Modified</th>
            <th className="py-2 font-normal">Size</th>
            <th className="py-2 font-normal w-8" />
          </tr>
        </thead>
        <tbody>
          {recentFiles.map((file) => {
            const Icon = typeIcon[file.type] || HiOutlineDocumentText;
            return (
              <tr key={file.id} className="border-b border-bordercolor last:border-0">
                <td className="py-3">
                  <span className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-md bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <Icon size={15} />
                    </span>
                    <span className="text-headingcolor font-medium truncate">{file.name}</span>
                  </span>
                </td>
                <td className="py-3 text-bodycolor whitespace-nowrap">{file.lastModified}</td>
                <td className="py-3 text-primary font-medium whitespace-nowrap">{file.size}</td>
                <td className="py-3">
                  <button
                    type="button"
                    aria-label={`Delete ${file.name}`}
                    className="w-7 h-7 rounded-md bg-red-50 text-red-500 flex items-center justify-center"
                  >
                    <HiOutlineTrash size={14} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
