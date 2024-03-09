import { UseFormReturn, Path } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type FieldValues = Record<string, any>;

interface InputFormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  alignLabel?: "top" | "left";
  type?: "number" | "text";
  placeholder?: string;
  unit?: string | React.ReactNode;
}

export const InputForm = <TFieldValues extends FieldValues>({
  form,
  name,
  label = name,
  alignLabel = "top",
  type = "text",
  placeholder = "",
  unit,
}: InputFormProps<TFieldValues>) => (
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
          <FormControl>
            <div className="flex items-center">
              <Input
                {...field}
                placeholder={placeholder}
                type={type}
                onChange={(e) => {
                  type === "text"
                    ? field.onChange(e)
                    : field.onChange(e.target.valueAsNumber);
                }}
                className={cn(
                  type === "number" &&
                    "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
                )}
              />
              {unit && (
                <div className="text-sm ml-2 whitespace-nowrap">{unit}</div>
              )}
            </div>
          </FormControl>
        </div>
      </FormItem>
    )}
  />
);
