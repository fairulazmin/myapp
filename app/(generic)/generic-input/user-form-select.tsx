"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormSelect, FormSelectWithoutRef } from "./form-select";
import { FormSelect as FormSelect2 } from "./form-select2";

type Option = string[] | { label: string; value: string }[];
const option1: Option = ["malik", "Jack", "Nancy"];
const option2: Option = [
  { value: "mary", label: "Mary" },
  { value: "jane", label: "Jane" },
];

const userFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  spouse: z.string().min(2),
  maidenName: z.string().min(2),
  company: z.string().min(2),
  sex: z.string().min(2),
});

type UserFormValues = z.infer<typeof userFormSchema>;

export const UserForm = () => {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
  });
  const onSubmit = (data: UserFormValues) => console.log(data);

  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-3 max-w-md mx-auto">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {option2.map((option) => (
                        <SelectItem
                          key={option || option.value}
                          value={option || option.value}
                        >
                          {option || option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormSelect2
              control={form.control}
              name="lastName"
              option={["malik", "Jack", "Nancy"]}
            />
            <FormSelect2
              control={form.control}
              name="lastName"
              option={[
                { value: "Mary", label: "Mary" },
                { value: "Jane", age: 40 },
              ]}
            />
            <Button type="submit" className="w-full" variant="secondary">
              Submit
            </Button>
          </div>
        </form>
      </Form>
      <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
    </>
  );
};
