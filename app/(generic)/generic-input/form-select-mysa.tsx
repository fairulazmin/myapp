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
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label?: string | React.ReactNode;
}

type FormSelectProps<
  T extends Option,
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  alignLabel?: "top" | "left" | "none";
  label?: string;
  options: T[];
  unit?: string | React.ReactNode;
  disabled?: (string | number)[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect = <
  T extends Option,
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label = name,
  alignLabel = "top",
  options,
  unit,
  ...props
}: FormSelectProps<T, TFieldValues, TName>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={cn(alignLabel === "left" && "grid grid-cols-2 items-center")}
      >
        {alignLabel !== "none" && (
          <FormLabel>
            <span className="capitalize">{label}:</span>
          </FormLabel>
        )}
        <div className="h-full">
          <div className="flex items-center">
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option, idx) => (
                  <SelectItem
                    key={idx}
                    value={option.value}
                    disabled={
                      props.disabled &&
                      !props.disabled?.find(
                        (item) => item.toString() === option.value,
                      )
                    }
                  >
                    {option.label || option.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {unit && (
              <div className="text-sm ml-2 whitespace-nowrap">{unit}</div>
            )}
          </div>
        </div>
      </FormItem>
    )}
  />
);
