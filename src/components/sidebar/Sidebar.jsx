import { NavLink } from "react-router-dom";
import { navGroups } from "./navConfig";

/**
 * Left sidebar: logo, user mini-profile, then three grouped nav sections.
 * Active route gets a left-bordered Primary highlight, matching Section 4's
 * spec ("active menu item gets a left-bordered highlight in Primary").
 * NavLink's isActive state drives the highlight - no manual route comparison.
 */
export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-[260px] shrink-0 h-screen sticky top-0 bg-white border-r border-bordercolor">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 h-16 border-b border-bordercolor">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-white font-bold text-sm">
          H
        </div>
        <span className="font-bold text-lg text-headingcolor">Hope UI</span>
      </div>

      {/* Mini profile */}
      <div className="flex flex-col items-center text-center px-6 py-6 border-b border-bordercolor">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80"
          alt="User avatar"
          className="w-16 h-16 rounded-2xl object-cover mb-3"
        />
        <p className="font-semibold text-headingcolor text-sm">Elon Musk</p>
        <p className="text-primary text-xs mt-0.5">@musk</p>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="px-3 mb-2 text-[11px] font-semibold tracking-wider text-bodycolor/70 uppercase">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map(({ label, to, icon: Icon, badge }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium border-l-[3px] transition-colors",
                        isActive
                          ? "border-primary text-primary bg-primary-50"
                          : "border-transparent text-bodycolor hover:bg-bodybg hover:text-headingcolor",
                      ].join(" ")
                    }
                  >
                    <Icon size={18} />
                    <span className="flex-1">{label}</span>
                    {badge && (
                      <span className="text-[11px] font-semibold bg-orange-500 text-white rounded-full px-1.5 py-0.5 leading-none">
                        {badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
