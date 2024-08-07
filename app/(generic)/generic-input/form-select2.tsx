import { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { fixedForwardRef } from "@/lib/utils";

type Option = string & { label: string; value: string };

type FormSelectProps<T extends FieldValues, P extends FieldPath<T>> = {
  control: Control<T>;
  name: P;
  alignLabel?: "top" | "left" | "none";
  label?: string;
  options: Option[];
  unit?: string | React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect = fixedForwardRef(
  <T extends FieldValues, P extends FieldPath<T>>(
    {
      control,
      name,
      label = name,
      alignLabel = "top",
      options,
      unit,
      className,
      ...props
    }: FormSelectProps<T, P>,
    ref: React.ForwardedRef<HTMLSpanElement>,
  ) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue ref={ref} {...props} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem
                    key={option.value || option}
                    value={option.value || option}
                  >
                    {option.label || option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    );
  },
);
