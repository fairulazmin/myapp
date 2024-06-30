import React from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Works but cannot pass ref, control:TFieldValues, name: TName
type InputFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

export const InputForm = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  ...props
}: InputFormProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// Option 2: https://stackoverflow.com/questions/66215601/react-hook-forms-how-to-pass-the-errors-as-a-props-using-typescript
// Works but cannot pass ref, control:Control<T>, name:Path<T>
type Props2<T extends FieldValues> = UseControllerProps<T> &
  React.ComponentPropsWithoutRef<"input"> & {
    label: string;
  };

export const InputForm2 = <T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: Props2<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

type Props3<T extends FieldValues> = UseControllerProps<T> &
  React.ComponentPropsWithoutRef<"input"> & {
    label: string;
    ref: React.Ref<HTMLInputElement>;
  };

export const InputForm3Ref = <T extends FieldValues>({
  control,
  name,
  label,
  ref,
  ...props
}: Props3<T>) => {
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
export const InputForm3 = React.forwardRef<HTMLInputElement, Props3>(
  InputForm3Ref,
);

// Works but control, name, label become any
type Props4<T extends FieldValues, P extends FieldPath<T>> = UseControllerProps<
  T,
  P
> &
  React.ComponentPropsWithoutRef<"input"> & {
    label: string;
    ref: React.Ref<HTMLInputElement>;
  };

export const InputForm4 = React.forwardRef<
  HTMLInputElement,
  Props4<FieldValues, FieldPath<FieldValues>>
>(({ control, name, label, ...props }, ref) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...props} ref={ref} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
});
