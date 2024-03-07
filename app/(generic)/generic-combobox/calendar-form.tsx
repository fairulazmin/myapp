import { UseFormReturn, Path } from "react-hook-form";
import { format } from "date-fns";
import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

export type FieldValues = Record<string, any>;

interface CalendarProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  alignLabel?: "top" | "left";
  disabled?: boolean;
}

export const CalendarForm = <TFieldValues extends FieldValues>({
  form,
  name,
  label = name,
  alignLabel = "top",
  disabled = false,
}: CalendarProps<TFieldValues>) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={cn(alignLabel === "left" && "grid grid-cols-2 items-center")}
      >
        <FormLabel>{label}</FormLabel>
        <div className="h-full">
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"ghost"}
                  className={cn(
                    "w-full pl-3 text-center font-normal",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value ? (
                    format(field.value, "d MMM yyyy")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value as Date}
                defaultMonth={field.value as Date}
                onSelect={(e) => field.onChange(e)}
                disabled={
                  disabled &&
                  ((date) => date > new Date() || date < new Date("1900-01-01"))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </FormItem>
    )}
  />
);
