import { UseFormReturn, Path } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export type FieldValues = Record<string, any>;

interface Option {
  value: string;
}

interface SelectFormProps<T extends Option, TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  placeholder: string;
  options: T[];
}

export const SelectForm = <T extends Option, TFieldValues extends FieldValues>({
  form,
  name,
  placeholder,
  options,
}: SelectFormProps<T, TFieldValues>) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>
          <span className="capitalize">{name}</span>
        </FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option, idx) => (
              <SelectItem key={idx} value={option.value}>
                {option.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormItem>
    )}
  />
);
