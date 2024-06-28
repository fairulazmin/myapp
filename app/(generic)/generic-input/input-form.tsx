import React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

// type InputFormRefProps<
//   HTMLInputElement,
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// > = {
//   control: Control<TFieldValues>;
//   name: TName;
//   label: string;
// } & React.InputHTMLAttributes<HTMLInputElement>;

// const InputFormRef = (
//   { control, name, label, ...props }: InputFormRefProps<HTMLInputElement>,
//   ref: React.ForwardedRef<HTMLInputElement>,
// ) => {
//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>{label}</FormLabel>
//           <FormControl>
//             <Input {...field} {...props} ref={ref} />
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// };

// export const InputFormWithRef = React.forwardRef(InputFormRef);

type InputFormRefProps = {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

const InputFormRef = (
  { control, name, label, ...props }: InputFormRefProps<TFieldValues, TName>,
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
            <Input {...field} {...props} ref={ref} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const InputFormWithRef = React.forwardRef(InputFormRef);
