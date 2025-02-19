import { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn, fixedForwardRef } from "@/lib/utils";

type FormInputProps<TFieldValues extends FieldValues, TName> = {
  control: Control<TFieldValues>;
  name: TName;
  label?: React.ReactNode;
  alignLabel?: "top" | "left" | "none";
  variant?: "outline" | "ghost";
  unit?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"input">;

export const FormInput = fixedForwardRef(
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
    {
      control,
      name,
      label = name,
      alignLabel = "top",
      variant = "outline",
      type,
      unit,
    }: FormInputProps<TFieldValues, TName>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            alignLabel === "left" && "grid grid-cols-2 items-center",
          )}
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
                  ref={ref}
                  className={cn(
                    type === "number" &&
                      "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
                    variant === "ghost" && "border-none",
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
  ),
);
