import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

/**
 * Shared shell rendered on every route (Section 5.1: "present on every screen").
 * Sidebar + Navbar stay fixed; <Outlet /> swaps in the page content for
 * whichever route is active.
 */
export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-bodybg">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
