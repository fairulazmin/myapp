"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const ShadcnSelect = () => {
  const [val, setVal] = useState("");

  return (
    <Select>
      <SelectTrigger>
        <SelectValue value={val} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem onClick={() => setVal("√3")} value="√3">
          √3
        </SelectItem>
        <SelectItem onClick={() => setVal("√2")} value="√2">
          √2
        </SelectItem>
        <SelectItem onClick={() => setVal("√6")} value="√6">
          √6
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
