import { UseFormReturn, Path } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export type FieldValues = Record<string, any>;

interface InputTextFormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  placeholder: string;
}

export const InputTextForm = <TFieldValues extends FieldValues>({
  form,
  name,
  placeholder,
}: InputTextFormProps<TFieldValues>) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>
          <span className="capitalize">{name}</span>
        </FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
      </FormItem>
    )}
  />
);
