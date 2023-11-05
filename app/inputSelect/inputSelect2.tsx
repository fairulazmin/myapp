"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

export const InputSelect2 = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log("[handleChange]");
    setValue(e.currentTarget.value);
  };

  return (
    <div className="relative w-full group">
      <Input value={value} onChange={handleChange} />
      <Select onValueChange={setValue}>
        <SelectTrigger className="opacity-0 group-hover:opacity-100 transition rounded-tl-none rounded-bl-none border-l-none  w-10 absolute right-0 top-0 ring-offset-0"></SelectTrigger>
        <SelectContent>
          <SelectItem value="√3">√3</SelectItem>
          <SelectItem value="√2">√2</SelectItem>
          <SelectItem value="√6">√6</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
