import { SiDropbox, SiGoogledrive } from "react-icons/si";
import { HiOutlineCloud } from "react-icons/hi";
import { cloudStorage } from "../../data/dashboardData";

const serviceIcon = {
  "Drop Box": SiDropbox,
  "One Drive": HiOutlineCloud,
  "Google Drive": SiGoogledrive,
};

/** Cloud Storage card: three connected-service progress bars. */
export default function CloudStorageCard() {
  return (
    <div className="bg-white rounded-card shadow-card border border-bordercolor p-5">
      <h2 className="text-section-title text-headingcolor mb-4">Cloud Storage</h2>
      <div className="space-y-5">
        {cloudStorage.map((service) => {
          const Icon = serviceIcon[service.name] || HiOutlineCloud;
          return (
            <div key={service.id}>
              <p className="flex items-center gap-2 font-medium text-headingcolor text-sm mb-2">
                <Icon size={16} className="text-primary" />
                {service.name}
              </p>
              <div className="h-1.5 rounded-full bg-bodybg overflow-hidden mb-1.5">
                <div
                  className={`h-full rounded-full ${service.colorClass}`}
                  style={{ width: `${service.percent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-meta text-bodycolor">
                <span>{service.used}</span>
                <span>{service.total}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
