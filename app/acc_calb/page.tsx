"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { SidebarNav } from "./sidebar-nav";
import { AccCalb } from "./acc-calb";

const sidebarNavItems = [
  {
    title: "Reference Accelerometer",
    href: "/examples/forms",
  },
  {
    title: "Accelerometer Under Test",
    href: "/examples/forms/account",
  },
];

export default function SettingsLayout() {
  return (
    <div className="container mx-auto">
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            Accelerometer Calibration
          </h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <AccCalb />
          </div>
        </div>
      </div>
    </div>
  );
}
