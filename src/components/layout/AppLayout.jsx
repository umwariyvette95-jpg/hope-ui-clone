import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

/**
 * Shared shell rendered on every route (Section 5.1: "present on every screen").
 * The reference screenshots show the top bar (logo, back arrow, Home/Pages/
 * Elements tabs, search, icons) spanning the FULL page width, with the
 * Sidebar starting below it - not side-by-side with a narrower navbar. So
 * Navbar is the outermost element here, and Sidebar + <Outlet/> sit in a row
 * underneath it.
 */
export default function AppLayout() {
  return (
    <div className="min-h-screen bg-bodybg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
