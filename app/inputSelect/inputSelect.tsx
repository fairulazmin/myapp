"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

export const InputSelect = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef<any>();

  useEffect(() => {
    let handler = (e: any) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [value]);

  const options = ["√3", "√2", "√6"];

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSelect = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full group">
      <Input value={value} onChange={handleChange} />
      <div
        onClick={() => setIsOpen(true)}
        className="opacity-0 group-hover:opacity-100 transition h-10 w-10 flex items-center justify-center absolute right-0 top-0 rounded-lg"
      >
        <ChevronDown className="w-4 h-4 opacity-50" />
      </div>
      {isOpen && (
        <div
          ref={optionsRef}
          className="absolute top-10 mt-1 p-1 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent focus:text-accent-foreground "
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
