import * as React from "react";
import { Control, UseFormReturn, Path, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface InputFormProps {
  name: string;
  label?: string;
  alignLabel?: "top" | "left";
  unit?: string | React.ReactNode;
}

export const InputForm = React.forwardRef<
  React.HTMLAttributes<HTMLInputElement>
>(
  (
    {
      // name,
      // label = name,
      // alignLabel = "top",
      // unit,
      className,
      ...props
    }: React.InputHTMLAttributes<HTMLInputElement>,
    ref,
  ) => {
    // export const InputForm = React.forwardRef(
    //   (
    //     {
    //       name,
    //       label = name,
    //       alignLabel = "top",
    //       unit,
    //       className,
    //       ...props
    //     }: InputFormProps & React.InputHTMLAttributes<HTMLInputElement>,
    //     ref,
    //   ) => {
    return (
      <FormField
        // control={control}
        name={name}
        render={({ field }) => (
          <FormItem
            className={cn(
              alignLabel === "left" && "grid grid-cols-2 items-center",
            )}
          >
            <FormLabel>
              <span className="capitalize">{label}</span>
            </FormLabel>
            <div className="h-full">
              <FormControl>
                <div className="flex items-center">
                  <Input
                    className={cn(
                      props.type === "number" &&
                        "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
                      className,
                    )}
                    {...props}
                    {...field}
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
  },
);
