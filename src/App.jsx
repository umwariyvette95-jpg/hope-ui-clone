import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ImageFolderPage from "./pages/ImageFolderPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import { ImagesProvider } from "./context/ImagesContext";

/**
 * Route table. Every sidebar link in navConfig.js points to a real route
 * here (Required Tech Stack: "sidebar links must be real routes"). The
 * Image Folder page is the only one with real content this round; the
 * rest render PlaceholderPage so navigating to them doesn't 404.
 */
export default function App() {
  return (
    <ImagesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/images" replace />} />
            <Route
              path="/dashboard"
              element={<PlaceholderPage title="Dashboard" />}
            />
            <Route path="/images" element={<ImageFolderPage />} />
            <Route path="/videos" element={<PlaceholderPage title="Video Folder" />} />
            <Route
              path="/documents"
              element={<PlaceholderPage title="Document Folder" />}
            />
            <Route path="/all-files" element={<PlaceholderPage title="All Files" />} />
            <Route path="/trash" element={<PlaceholderPage title="Trash" />} />
            <Route path="/sign-out" element={<PlaceholderPage title="Sign Out" />} />
            <Route path="/help" element={<PlaceholderPage title="Help" />} />
            <Route path="*" element={<Navigate to="/images" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ImagesProvider>
  );
}
