import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectProps {
  title: string;
  options: {
    label: string;
    value: string;
    icon: LucideIcon;
  }[];
}
export const Select = ({ title, options }: SelectProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <div className="space-x-2">
      <h3 className="text-xl">{title}</h3>
      <Button
        variant={selectedValues.length === 0 ? "default" : "outline"}
        onClick={() => setSelectedValues([])}
      >
        All
      </Button>
      {options.map((option) => {
        const { icon: Icon, label, value } = option;
        return (
          <Button
            className="text-sm font-normal"
            key={label}
            variant={selectedValues.includes(value) ? "default" : "outline"}
            onClick={() => {
              selectedValues.includes(value)
                ? setSelectedValues(
                    selectedValues.filter((val) => val !== value),
                  )
                : setSelectedValues([...selectedValues, value]);
            }}
          >
            <Icon className="w-4 h-4 mr-2" />
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};
