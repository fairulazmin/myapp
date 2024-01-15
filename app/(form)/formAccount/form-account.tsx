"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const formAccountSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Min 2 characters" })
    .max(30, { message: "Max 30 characters" }),
  dob: z.date({ required_error: "Select date" }),
  language: z.string({ required_error: "Select language" }),
});

type FormAccountValues = z.infer<typeof formAccountSchema>;

const defaultValues: Partial<FormAccountValues> = {
  // name: "Fairul",
  // dob: new Date("2023-07-14"),
};

const languages = [
  { label: "Malaysia", value: "my" },
  { label: "Japanese", value: "jp" },
];

export const FormAccount = () => {
  const form = useForm<FormAccountValues>({
    resolver: zodResolver(formAccountSchema),
    defaultValues,
  });

  const onSubmit = (data: FormAccountValues) => {
    console.log(data);
  };

  const handleSelect = () => {
    console.log(form.formState);
    form.setValue("name", "Jackson");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block">Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" className="block w-[240px]">
                      <div className="text-muted-foreground flex items-center">
                        <p>
                          {field.value
                            ? format(field.value, "d MMM yyyy")
                            : "Pick a date"}
                        </p>
                        <CalendarIcon className="w-4 h-4 ml-auto" />
                      </div>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      role="combobox"
                      variant="outline"
                      className=" p-0 w-[240px]"
                    >
                      <p>
                        {field.value
                          ? languages.find(
                              (language) => language.value === field.value,
                            )?.label
                          : "Select language"}
                      </p>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.value}
                          key={language.value}
                          onSelect={handleSelect}
                        >
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit">Update account</Button>
      </form>
    </Form>
  );
};
