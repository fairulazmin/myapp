"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export const Switch2 = () => {
  const [on, setOn] = useState(false);

  return (
    <div
      onClick={() => setOn(!on)}
      className={cn(
        "w-24 h-12 rounded-full hover:cursor-pointer bg-slate-200 relative",
        on && "bg-slate-900 ease-in-out transition duration-500",
      )}
    >
      <div
        className={cn(
          "h-10 w-10 rounded-full absolute top-[4px] left-[4px] bg-white shadow-md flex items-center justify-center rotate-180)",
          on && "rotate-0 translate-x-12 ease-in-out transition duration-500",
        )}
      >
        {on ? (
          <Moon color="#0f172a" size={30} />
        ) : (
          <Sun color="#cbd5e1" size={30} />
        )}
      </div>
    </div>
  );
};
