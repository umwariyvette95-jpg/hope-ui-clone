import { HiOutlineShoppingBag, HiOutlineUser, HiOutlineSearch } from "react-icons/hi";
import Dropdown from "../common/Dropdown";

/**
 * Top navbar: sticky, white background. Section 5.1 calls for a cart/notifications
 * dropdown and a profile dropdown (Profile, Privacy Settings, Logout). Both are
 * built with the shared Dropdown primitive so the open/close behavior lives in
 * one place.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 h-16 bg-white border-b border-bordercolor flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-2 text-sm text-bodycolor">
        <span className="hidden sm:inline">File Manager</span>
        <span className="hidden sm:inline">/</span>
        <span className="font-medium text-headingcolor">Image</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Search - optional per spec, included for fidelity */}
        <div className="hidden md:flex items-center gap-2 bg-bodybg rounded-md px-3 py-2 w-56">
          <HiOutlineSearch className="text-bodycolor" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-bodycolor/60"
          />
        </div>

        <Dropdown
          trigger={
            <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
              <HiOutlineShoppingBag size={16} />
            </span>
          }
        >
          <p className="px-4 py-2 text-sm font-semibold text-headingcolor">
            Notifications
          </p>
          <p className="px-4 py-3 text-sm text-bodycolor">No new notifications</p>
        </Dropdown>

        <Dropdown
          trigger={
            <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
              <HiOutlineUser size={16} />
            </span>
          }
        >
          <button className="w-full text-left px-4 py-2 text-sm text-bodycolor hover:bg-bodybg">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-bodycolor hover:bg-bodybg">
            Privacy Settings
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-bodycolor hover:bg-bodybg">
            Logout
          </button>
        </Dropdown>
      </div>
    </header>
  );
}
