import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ImageFolderPage from "./pages/ImageFolderPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import { ImagesProvider } from "./context/ImagesContext";


export default function App() {
  return (
    <ImagesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
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
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ImagesProvider>
  );
}
