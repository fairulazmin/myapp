"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "./constants";
import { SideNavItem } from "./types";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SideNav = () => {
  return (
    <div className="flex flex-col space-y-2  md:px-6 ">
      {SIDENAV_ITEMS.map((item, idx) => {
        return <MenuItem key={idx} item={item} />;
      })}
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={cn(
              "flex flex-row items-center p-2 rounded-lg w-full justify-between hover:bg-foreground/10",
              pathname.includes(item.path) && "bg-zinc-100",
            )}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-medium text-lg flex text-foreground/60 hover:text-foreground/80">
                {item.title}
              </span>
            </div>

            <div className={cn(subMenuOpen && "rotate-90", "flex")}>
              <ChevronRight
                width="24"
                height="24"
                className="text-foreground/60"
              />
            </div>
          </button>

          {subMenuOpen && (
            <div className="border-l my-2 ml-12 pl-4 flex flex-col space-y-4 text-lg font-medium text-foreground/60">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={cn(subItem.path === pathname && "font-bold")}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={cn(
            "flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-foreground/10",
            item.path === pathname && "bg-zinc-100",
          )}
        >
          {item.icon}
          <span className="font-medium text-lg flex text-foreground/60 hover:text-foreground/80">
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};
