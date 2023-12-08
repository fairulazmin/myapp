"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  item: {
    name: string;
    path: string;
    children?: SidebarItemProps["item"][];
  };
  isLastChild?: boolean;
}

const SidebarItem = ({ item, isLastChild = false }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const isActive = pathname === item.path;

  return (
    <div className="relative">
      {/* <Link href={item.path}> */}
      <div
        onClick={handleClick}
        className={cn(
          "flex items-center cursor-pointer p-2 relative", // Added relative class
          isActive && "font-bold",
        )}
      >
        {!isLastChild && (
          <div
            className={
              cn()
              // "absolute top-0 left-0 bottom-0 border-l border-gray-500 ",
              // isOpen ? "h-full" : "h-6",
              // isOpen && "absolute inset-y-0 border-l border-gray-500",
            }
          />
        )}
        {item.name}
        {item.children && item.children.length > 0 && (
          // Only render chevron icons if there are children
          <>
            {isOpen ? (
              <ChevronDown className="ml-auto" />
            ) : (
              <ChevronRight className="ml-auto" />
            )}
          </>
        )}
      </div>
      {/* </Link> */}
      {isOpen && item.children?.length && (
        <div className="ml-[20px] border-l">
          {item.children.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
              isLastChild={index === (item.children || []).length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  data: SidebarItemProps["item"][];
}

const Sidebar = ({ data }: SidebarProps) => {
  return (
    <div>
      {data.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          isLastChild={index === data.length - 1}
        />
      ))}
    </div>
  );
};

// Example usage:
const sidebarData: SidebarProps["data"] = [
  {
    name: "Item 1",
    path: "/item1",
    children: [
      {
        name: "Subitem 1.1",
        path: "/item1/subitem1.1",
      },
      {
        name: "Subitem 1.2",
        path: "/item1/subitem1.2",
        children: [
          {
            name: "Sub-subitem 1.2.1",
            path: "/item1/subitem1.2/subsubitem1.2.1",
          },
        ],
      },
    ],
  },
  {
    name: "Item 2",
    path: "/item2",
  },
  {
    name: "Item 3",
    path: "/item3",
  },
];

export const RecursiveAccordion = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Recursive Accordion Sidebar Navigation
      </h1>
      <Sidebar data={sidebarData} />
    </div>
  );
};
