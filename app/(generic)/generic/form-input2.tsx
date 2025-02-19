import React from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

import { fixedForwardRef } from "@/lib/utils";
import { FormField, FormItem } from "@/components/ui/form";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props<T extends FieldValues> = UseControllerProps<T> &
  React.ComponentPropsWithoutRef<"input"> & {
    label: string;
  };

const FormInner = <T extends FieldValues>(
  { control, name, label, ...props }: Props<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} ref={ref} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const FormInput = fixedForwardRef(FormInner);
