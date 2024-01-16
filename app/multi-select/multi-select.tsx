"use client";

import { useState } from "react";
import { Square, CheckSquare, X, LucideIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type MultiSelectProps = {
  title: string;
  options: {
    value: string;
    label: string;
    icon: LucideIcon;
  }[];
};

export const MultiSelect = ({ title, options }: MultiSelectProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <div className="space-x-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="space-x-2">
            <span>{title}</span>
            {selectedValues.length > 0 && <Separator orientation="vertical" />}
            {selectedValues.length > 0 &&
              selectedValues.map((val) => (
                <Button
                  key={val}
                  variant="secondary"
                  size="sm"
                  className="rounded-lg h-7 capitalize"
                >
                  {val}
                </Button>
              ))}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-fit p-1">
          {options.map((option) => {
            const { icon: Icon, value, label } = option;
            return (
              <div className="flex items-center">
                <Button
                  key={value}
                  variant="ghost"
                  className="justify-start space-x-2 w-full"
                  onClick={() => {
                    selectedValues.includes(value)
                      ? setSelectedValues((prev) =>
                          prev.filter((val) => val !== value),
                        )
                      : setSelectedValues((prev) => [...prev, value]);
                  }}
                >
                  {selectedValues.includes(value) ? (
                    <CheckSquare className="w-4 h-4" />
                  ) : (
                    <Square className="w-4 h-4" />
                  )}
                  <Icon className="h-4 w-4" /> <span>{label}</span>
                </Button>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
      {selectedValues.length > 0 && (
        <Button variant="ghost" onClick={() => setSelectedValues([])}>
          Reset <X className="w-4 h-4 ml-1" />
        </Button>
      )}
    </div>
  );
};
