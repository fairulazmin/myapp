import React from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

import { FormField, FormItem } from "@/components/ui/form";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type Props6<T extends FieldValues> = UseControllerProps<T> &
  React.ComponentPropsWithoutRef<"input"> & {
    label: string;
  };

export const InputForm6 = React.forwardRef(
  <T extends FieldValues>(
    { control, name, label, ...props }: Props6<T>,
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
  },
);
