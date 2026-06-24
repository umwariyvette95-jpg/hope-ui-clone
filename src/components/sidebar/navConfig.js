import {
  HiOutlineViewGrid,
  HiOutlinePhotograph,
  HiOutlineFilm,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineTrash,
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";


export const navGroups = [
  {
    label: "File Manager",
    items: [{ label: "Dashboard", to: "/dashboard", icon: HiOutlineViewGrid }],
  },
  {
    label: "Pages",
    items: [
      { label: "Image", to: "/images", icon: HiOutlinePhotograph },
      { label: "Video", to: "/videos", icon: HiOutlineFilm },
      { label: "Document", to: "/documents", icon: HiOutlineDocumentText },
      { label: "All Files", to: "/all-files", icon: HiOutlineFolder, badge: 21 },
      { label: "Trash", to: "/trash", icon: HiOutlineTrash },
    ],
  },
  {
    label: "Other",
    items: [
      { label: "Sign Out", to: "/sign-out", icon: HiOutlineLogout },
      { label: "Help", to: "/help", icon: HiOutlineQuestionMarkCircle },
    ],
  },
];
