"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export const Switch = () => {
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
          "h-10 w-10 rounded-full absolute top-[4px] left-[4px] bg-white shadow-md",
          on && "translate-x-12 ease-in-out transition duration-500",
        )}
      ></div>
    </div>
  );
};
