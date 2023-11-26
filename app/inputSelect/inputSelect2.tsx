"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type ValueProps = number | "√3" | "√2" | "√6" | "";
export const InputSelect2 = () => {
  const [value, setValue] = useState<ValueProps>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.type;
    inputValue === "number" ||
      "√3" ||
      "√2" ||
      "√6" ||
      ("" && setValue(e.currentTarget.value));
  };

  return (
    <div className="relative w-full group">
      <Input value={value} onChange={handleChange} className="text-center" />
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="opacity-0 group-hover:opacity-100 transition absolute right-0 inset-y-0"
        >
          <Button size="icon" variant="ghost" className="hover:bg-transparent">
            <ChevronDown className="w-4 h-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setValue("√3")}>
            √3
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setValue("√2")}>
            √2
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setValue("√6")}>
            √6
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
