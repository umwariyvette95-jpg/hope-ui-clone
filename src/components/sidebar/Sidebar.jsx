import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineShieldCheck, HiOutlineBell } from "react-icons/hi";
import { navGroups } from "./navConfig";

/**
 * Left sidebar: user mini-profile (no logo - the logo lives in the navbar,
 * matching the reference), three small icon buttons, then grouped nav
 * sections. Active route gets the Primary color on text + icon, matching
 * the reference exactly (no left border, no background tint on this design -
 * those were from an earlier guess before I had the real screenshot).
 */
export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-[260px] shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-white border-r border-bordercolor">
      {/* Mini profile */}
      <div className="flex flex-col items-center text-center px-6 pt-6 pb-4">
        <img
          src="https://i.pravatar.cc/200?img=12"
          alt="User avatar"
          className="w-16 h-16 rounded-2xl object-cover mb-3"
        />
        <p className="font-semibold text-headingcolor text-sm">Elon musk</p>
        <p className="text-primary text-xs mt-0.5">@musk</p>

        <div className="flex items-center gap-2 mt-3">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            <HiOutlineShoppingBag size={14} />
          </span>
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            <HiOutlineShieldCheck size={14} />
          </span>
          <span className="relative w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            <HiOutlineBell size={14} />
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border border-white" />
          </span>
        </div>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto py-2 px-3">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-4">
            <p className="px-3 mb-1.5 text-[11px] font-semibold tracking-wider text-bodycolor/70 uppercase">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map(({ label, to, icon: Icon, badge }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-bodycolor hover:text-headingcolor",
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
