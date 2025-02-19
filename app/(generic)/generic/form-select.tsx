import { Control, FieldPath, FieldValues } from "react-hook-form";

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
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

type StrOption = string;

type ObjOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

type Options = StrOption[] | ObjOption[];

type FormSelectProps<
  T extends Options,
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  label: React.ReactNode;
  options: T;
};

export const FormSelect = <
  T extends Options,
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label = name,
  options,
}: FormSelectProps<T, TFieldValues, TName>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option) => {
              if (typeof option === "string") {
                return (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                );
              } else {
                return (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                );
              }
            })}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);
