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

interface InputNumberFormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  placeholder: string;
}

export const InputNumberForm = <TFieldValues extends FieldValues>({
  form,
  name,
  placeholder,
}: InputNumberFormProps<TFieldValues>) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>
          <span className="capitalize">{name}</span>
        </FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            type="number"
            onChange={(e) => {
              field.onChange(e.target.valueAsNumber);
            }}
          />
        </FormControl>
      </FormItem>
    )}
  />
);
