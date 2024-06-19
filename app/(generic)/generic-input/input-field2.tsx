import { FieldPath, FieldValues, Control } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputFormProps<TFieldValues extends FieldValues, TName> {
  control: Control<TFieldValues>;
  name: TName;
}

export const InputForm = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
}: InputFormProps<TFieldValues, TName>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        {/* <FormLabel>{name}</FormLabel> */}
        <FormControl>
          <Input placeholder={name} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
