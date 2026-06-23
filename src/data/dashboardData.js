import {
  HiOutlinePhotograph,
  HiOutlineFilm,
  HiOutlineDocumentText,
  HiOutlineVolumeUp,
  HiOutlinePlay,
  HiOutlinePencilAlt,
  HiOutlineFolder,
  HiOutlineStar,
} from "react-icons/hi";

// All Dashboard content is intentionally hardcoded per the assignment brief:
// "Related pages (context only) - same sidebar/navbar shell." Only the Image
// Folder page (Section 5.2) is required to be state-driven this round.

export const folders = [
  { id: "f1", name: "Image", count: 246, icon: HiOutlinePhotograph },
  { id: "f2", name: "Video", count: 246, icon: HiOutlineFilm },
  { id: "f3", name: "Documents", count: 246, icon: HiOutlineDocumentText },
  { id: "f4", name: "Audio", count: 246, icon: HiOutlineVolumeUp },
  { id: "f5", name: "Movies", count: 246, icon: HiOutlinePlay },
  { id: "f6", name: "Assignment", count: 246, icon: HiOutlinePencilAlt },
  { id: "f7", name: "Ui-Kit", count: 246, icon: HiOutlineFolder },
  { id: "f8", name: "Design", count: 246, icon: HiOutlineStar },
];

export const storageDetails = {
  usedGB: 75,
  totalGB: 100,
  breakdown: [
    { label: "Documents", value: "5,674s", barPercent: 70, colorClass: "bg-primary" },
    { label: "Videos", value: "1,624", barPercent: 55, colorClass: "bg-emerald-500" },
    { label: "Images", value: "5,515", barPercent: 80, colorClass: "bg-orange-500" },
  ],
};

// Smooth line, GB used per month - matches the reference's wave shape closely enough
// for a static "context only" page.
export const activityChartData = [
  { month: "Jan", gb: 70 },
  { month: "Feb", gb: 40 },
  { month: "Mar", gb: 90 },
  { month: "Apr", gb: 40 },
  { month: "May", gb: 70 },
  { month: "Jun", gb: 32 },
  { month: "July", gb: 80 },
];

export const uploadingFiles = [
  { id: "u1", name: "Onboarding.zip", size: "23 mb", percent: 30 },
  { id: "u2", name: "Web Design.zip", size: "45 mb", percent: 55 },
  { id: "u3", name: "Example.zar", size: "90 mb", percent: 65 },
  { id: "u4", name: "Web Design.zip", size: "45 mb", percent: 55 },
  { id: "u5", name: "Designing.pptx", size: "73 mb", percent: 75 },
  { id: "u6", name: "Web Design.zip", size: "45 mb", percent: 55 },
  { id: "u7", name: "Example.zar", size: "90 mb", percent: 65 },
  { id: "u8", name: "Designing.pptx", size: "73 mb", percent: 75 },
];

export const recentFiles = [
  { id: "r1", name: "Marcus Family.jpg", lastModified: "16 Oct, 11:23m", size: "12 MB", type: "image" },
  { id: "r2", name: "Work.Doc", lastModified: "20 Nov, 12:40pm", size: "4.3 MB", type: "doc" },
  { id: "r3", name: "Apha.mkv", lastModified: "08 Oct, 05:45pm", size: "10 MB", type: "video" },
  { id: "r4", name: "SVG Logo.png", lastModified: "04 Jul, 10:30pm", size: "9 MB", type: "image" },
];

export const cloudStorage = [
  { id: "c1", name: "Drop Box", used: "32gb", total: "48gb", percent: 67, colorClass: "bg-primary" },
  { id: "c2", name: "One Drive", used: "10gb", total: "48gb", percent: 21, colorClass: "bg-primary" },
  { id: "c3", name: "Google Drive", used: "15gb", total: "48gb", percent: 31, colorClass: "bg-primary" },
];
