import { HiOutlineFolder } from "react-icons/hi";

/** "Upgrade to Special Offer" promo card - visual only, button does nothing this round. */
export default function UpgradeStorageCard() {
  return (
    <div className="bg-white rounded-card shadow-card border border-bordercolor p-6 flex flex-col items-center text-center justify-center h-full">
      <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
        <HiOutlineFolder className="text-primary" size={36} />
      </div>
      <p className="font-semibold text-headingcolor mb-4">
        Upgrade to Special Offer For Unlimited Storage
      </p>
      <button
        type="button"
        className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-primary-700 transition-colors"
      >
        Buy storage
      </button>
    </div>
  );
}
