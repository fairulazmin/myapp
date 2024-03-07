import { UseFormReturn, Path } from "react-hook-form";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type FieldValues = Record<string, any>;

interface InputFormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  alignLabel?: "top" | "left";
  type?: "number" | "text";
  placeholder?: string;
}

export const InputForm = <TFieldValues extends FieldValues>({
  form,
  name,
  label = name,
  alignLabel = "top",
  type = "text",
  placeholder = "",
}: InputFormProps<TFieldValues>) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={cn(alignLabel === "left" && "grid grid-cols-2 items-center")}
      >
        <FormLabel>
          <span className="capitalize">{label}</span>
        </FormLabel>
        <div className="h-full">
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type}
              onChange={(e) => {
                type === "text"
                  ? field.onChange(e)
                  : field.onChange(e.target.valueAsNumber);
              }}
            />
          </FormControl>
        </div>
      </FormItem>
    )}
  />
);
