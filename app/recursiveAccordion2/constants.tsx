import {
  Mail,
  FolderRoot,
  Home,
  Settings,
  HelpCircle,
  Settings2,
} from "lucide-react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FolderRoot,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/projects" },
      { title: "Web Design", path: "/projects/web-design" },
      { title: "Graphic Design", path: "/projects/graphic-design" },
    ],
  },
  {
    title: "Messages",
    path: "/messages",
    icon: Mail,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
      {
        title: "Preferences",
        path: "/preferences",
        icon: Settings2,
        submenu: true,
        subMenuItems: [
          { title: "Background", path: "/preferences/background" },
          { title: "Text", path: "/preferences/text" },
        ],
      },
    ],
  },
  {
    title: "Help",
    path: "/help",
    icon: HelpCircle,
  },
];
