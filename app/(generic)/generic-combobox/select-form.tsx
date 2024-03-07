import { UseFormReturn, Path } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type FieldValues = Record<string, any>;

interface Option {
  value: string;
  label?: string;
}

interface SelectFormProps<T extends Option, TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  alignLabel?: "top" | "left";
  label?: string;
  placeholder?: string;
  options: T[];
}

export const SelectForm = <T extends Option, TFieldValues extends FieldValues>({
  form,
  name,
  label = name,
  alignLabel = "top",
  placeholder = "",
  options,
}: SelectFormProps<T, TFieldValues>) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={cn(alignLabel === "left" && "grid grid-cols-2 items-center")}
      >
        <FormLabel>
          <span className="capitalize">{label}</span>
        </FormLabel>
        <div className="h-full">
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, idx) => (
                <SelectItem key={idx} value={option.value}>
                  {option.label || option.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </FormItem>
    )}
  />
);
