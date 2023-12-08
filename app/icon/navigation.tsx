"use client";

import Link from "next/link";
import {
  Home,
  Mail,
  Settings,
  LucideIcon,
  SendHorizonal,
  MessageSquare,
} from "lucide-react";

interface ItemProps {
  title: string;
  path: string;
  icon: LucideIcon;
  children?: ItemProps[];
}

const items: ItemProps[] = [
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: Mail,
    children: [
      {
        title: "Send",
        path: "messages/send",
        icon: SendHorizonal,
      },
      {
        title: "Chat",
        path: "messages/chat",
        icon: MessageSquare,
      },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Menu = (items: ItemProps[]) => {
  {
    items.map(({ title, path, icon: Icon, children }) => {
      return (
        <Link
          href={path}
          className="flex items-center text-muted-foreground hover:text-indigo-600 cursor-pointer"
        >
          <Icon />
          <span className="ml-2">{title}</span>
        </Link>
      );
    });
  }
};

export const Navigation = () => {
  return (
    <div className="space-y-2">
      {items.map(({ title, path, icon: Icon, children }) => {
        if (children) {
          return (
            <Link
              href={path}
              className="flex items-center text-muted-foreground hover:text-indigo-600 cursor-pointer"
            >
              <Icon />
              <span className="ml-2">{title}</span>
            </Link>
          );
        } else {
          return (
            <Link
              href={path}
              className="flex items-center text-muted-foreground hover:text-indigo-600 cursor-pointer"
            >
              <Icon />
              <span className="ml-2">{title}</span>
            </Link>
          );
        }
      })}
    </div>
  );
};
