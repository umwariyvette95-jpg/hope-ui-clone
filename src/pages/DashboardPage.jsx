import { folders } from "../data/dashboardData";
import FolderCard from "../components/dashboard/FolderCard";
import StorageDetailsCard from "../components/dashboard/StorageDetailsCard";
import ActivityChartCard from "../components/dashboard/ActivityChartCard";
import UploadingOnDriveCard from "../components/dashboard/UploadingOnDriveCard";
import RecentFilesCard from "../components/dashboard/RecentFilesCard";
import CloudStorageCard from "../components/dashboard/CloudStorageCard";
import UpgradeStorageCard from "../components/dashboard/UpgradeStorageCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-page-title text-headingcolor">Your Folders</h1>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <FolderCard key={folder.id} name={folder.name} count={folder.count} icon={folder.icon} />
          ))}
        </div>
        <StorageDetailsCard />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 items-start">
        <ActivityChartCard />
        <UploadingOnDriveCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px_280px] gap-6 items-start">
        <RecentFilesCard />
        <CloudStorageCard />
        <UpgradeStorageCard />
      </div>
    </div>
  );
}
