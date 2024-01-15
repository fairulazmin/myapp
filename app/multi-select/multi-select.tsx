"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type MultiSelectProps = {
  title: string;
  options: {
    value: string;
    label: string;
    icon: LucideIcon;
  }[];
};

interface SelectProps {
  title: string;
  options: {
    label: string;
    value: string;
    icon: LucideIcon;
  }[];
}

export const MultiSelect = ({ title, options }: SelectProps) => {
  // const [selectedValues, setSelectedValues] = useState([]);
  console.log(title);

  return (
    <>
      <Button>{title}</Button>
      <div>
        {/* <Popover> */}
        {/*   <PopoverTrigger asChild> */}
        {/*     <Button variant="outline">{title}</Button> */}
        {/*   </PopoverTrigger> */}
        {/*   <PopoverContent> */}
        {/*     {options.map((option) => ( */}
        {/*       <div> */}
        {/*         <Checkbox key={option.value} id={option.value} /> */}
        {/*         <label htmlFor={option.value}>{option.label}</label> */}
        {/*       </div> */}
        {/*     ))} */}
        {/*   </PopoverContent> */}
        {/* </Popover> */}
      </div>
    </>
  );
};
