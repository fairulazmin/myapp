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
  return (
    <div className="space-x-2">
      <h3 className="text-xl">{title}</h3>
      {options.map((option) => {
        const { icon: Icon } = option;
        return (
          <Button className="text-sm font-normal" key={option.label}>
            <Icon className="w-4 h-4 mr-2" />
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};
