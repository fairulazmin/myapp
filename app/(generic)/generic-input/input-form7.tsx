import React from "react";
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

import { FormField, FormItem } from "@/components/ui/form";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


export const InputForm6 = React.forwardRef(({control, name}, ref
  ) => {
    const  
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
