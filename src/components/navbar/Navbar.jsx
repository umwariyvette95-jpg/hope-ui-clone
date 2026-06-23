import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineArrowLeft,
  HiOutlineHome,
  HiOutlineDocumentDuplicate,
  HiOutlineChatAlt2,
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Dropdown from "../common/Dropdown";

// Top pill-tab nav (Home / Pages / Elements), matching the reference's
// secondary nav row. "Home" routes to the Dashboard; Pages/Elements aren't
// part of this round's scope, so they're inert visual elements only.
const topTabs = [
  { label: "Home", to: "/dashboard", icon: HiOutlineHome },
  { label: "Pages", icon: HiOutlineDocumentDuplicate },
  { label: "Elements", icon: HiOutlineChatAlt2 },
];

/**
 * Top navbar - matches the reference exactly: logo + back-arrow + breadcrumb
 * on the left, a pill-tab row (Home/Pages/Elements) in the center, then
 * font-size A/A/A controls, search, cart (with unread dot), profile, and an
 * expand icon on the right. This single bar replaces the logo block that
 * used to live in the sidebar - the reference puts the logo in the navbar,
 * not the sidebar.
 */
export default function Navbar() {
  const location = useLocation();
  // crude breadcrumb label: "/images" -> "Image", "/dashboard" -> "Dashboard", etc.
  const breadcrumb =
    {
      "/images": "Image",
      "/videos": "Video",
      "/documents": "Document",
      "/all-files": "All Files",
      "/trash": "Trash",
      "/dashboard": "Dashboard",
    }[location.pathname] || "Image";

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-bordercolor">
      <div className="h-16 flex items-center gap-4 px-4 lg:px-6">
        {/* Logo */}
        <Link to="/images" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-white font-bold text-sm">
            H
          </div>
          <span className="font-bold text-lg text-headingcolor hidden sm:inline">Hope UI</span>
        </Link>

        {/* Back arrow + breadcrumb */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => window.history.back()}
            aria-label="Go back"
            className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"
          >
            <HiOutlineArrowLeft size={15} />
          </button>
          <span className="text-sm text-bodycolor hidden md:inline">{breadcrumb}</span>
        </div>

        {/* Pill tabs */}
        <nav className="hidden lg:flex items-center gap-6 ml-2">
          {topTabs.map(({ label, to, icon: Icon }) => {
            const content = (
              <span className="flex items-center gap-1.5 text-sm font-medium text-bodycolor hover:text-primary pb-1">
                <Icon size={16} />
                {label}
              </span>
            );
            return to ? (
              <Link key={label} to={to} className="border-b-2 border-transparent hover:border-primary">
                {content}
              </Link>
            ) : (
              <span key={label} className="cursor-default">
                {content}
              </span>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* Font-size A/A/A controls - visual only, matches reference */}
        <div className="hidden xl:flex items-center gap-1 mr-2">
          <button className="text-xs text-bodycolor px-1.5" aria-label="Decrease font size">A</button>
          <button className="w-7 h-7 rounded-md bg-primary text-white text-sm font-semibold" aria-label="Default font size">A</button>
          <button className="text-base text-bodycolor px-1.5" aria-label="Increase font size">A</button>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-bodybg rounded-md px-3 py-2 w-48 lg:w-56">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-bodycolor/60"
          />
          <HiOutlineSearch className="text-bodycolor shrink-0" size={16} />
        </div>

        <div className="flex items-center gap-2 ml-2">
          <Dropdown
            trigger={
              <span className="relative w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
                <HiOutlineShoppingBag size={16} />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border border-white" />
              </span>
            }
          >
            <p className="px-4 py-2 text-sm font-semibold text-headingcolor">Notifications</p>
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

          <button
            type="button"
            aria-label="Toggle fullscreen"
            className="hidden sm:flex w-9 h-9 rounded-full bg-primary text-white items-center justify-center"
          >
            <HiOutlineViewGrid size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
