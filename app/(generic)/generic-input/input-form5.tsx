import React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { FormField, FormItem } from "@/components/ui/form";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
) => (props: P & React.RefAttributes<T>) => React.ReactElement | null;

const fixedForwardRef = React.forwardRef as FixedForwardRef;

type InnerProps<T extends FieldValues, P extends FieldPath<T>> = {
  control: Control<T>;
  name: P;
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

const InnerForm = <T extends FieldValues, P extends FieldPath<T>>(
  { control, name, label, ...props }: InnerProps<T, P>,
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

export const InputForm5 = fixedForwardRef(InnerForm);
