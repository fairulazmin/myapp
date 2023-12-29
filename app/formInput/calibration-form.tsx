"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format, add, differenceInDays } from "date-fns";

import { cn } from "@/lib/utils";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

const calibrationFormSchema = z.object({
  calb_date: z.date(),
  calb_interval: z.number(),
  calb_due: z.date(),
});

type CalibrationFormValues = z.infer<typeof calibrationFormSchema>;

export const CalibrationForm = () => {
  const form = useForm<CalibrationFormValues>({
    resolver: zodResolver(calibrationFormSchema),
  });

  const onSubmit = (data: CalibrationFormValues) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="font-medium">Calibration Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-3 gap-x-4">
            <FormField
              control={form.control}
              name="calb_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Calibration Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
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
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="calb_interval"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Calibration Interval</FormLabel>
                  <div className="flex items-center">
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="730"
                        {...field}
                        onChange={(e) => {
                          field.onChange(parseInt(e.target.value));
                          form.getValues("calb_date") &&
                            form.setValue(
                              "calb_due",
                              add(form.getValues("calb_date"), {
                                days: parseInt(e.target.value),
                              }),
                            );
                        }}
                        className="w-full"
                      />
                    </FormControl>
                    <FormLabel className="ml-2">days</FormLabel>
                    <div>
                      <FormMessage />
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="calb_due"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
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
                        selected={field.value}
                        onSelect={(e) => {
                          field.onChange(e);
                          e &&
                            form.setValue(
                              "calb_interval",
                              differenceInDays(e, form.getValues("calb_date")),
                            );
                        }}
                        defaultMonth={field.value}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="mt-4">
            Save
          </Button>
        </form>
      </Form>
    </>
  );
};
