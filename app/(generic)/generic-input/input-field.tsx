import { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputFormProps<TFieldValues extends FieldValues, TName> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string | React.ReactNode;
  alignLabel?: "top" | "left" | "none";
  variant?: "outline" | "ghost";
  type?: "number" | "text";
  placeholder?: string;
  unit?: string | React.ReactNode;
  disabled?: boolean;
}

export const InputForm = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label = name,
  alignLabel = "top",
  variant = "outline",
  type = "text",
  placeholder = "",
  unit,
  disabled = false,
}: InputFormProps<TFieldValues, TName>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={cn(alignLabel === "left" && "grid grid-cols-2 items-center")}
      >
        {alignLabel !== "none" && (
          <FormLabel>
            <span className="capitalize">{label}:</span>
          </FormLabel>
        )}
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
                  variant === "ghost" && "border-none",
                )}
                disabled={disabled}
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
