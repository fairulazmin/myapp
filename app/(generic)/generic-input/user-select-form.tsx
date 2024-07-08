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
import { FormSelect } from "./form-select";
import { FormSelect as FormSelectMysa } from "./form-select-mysa";
import { FormSelect as FormSelect2 } from "./form-select2";
import { FormInputSearch } from "./form-input-search";
import lists from "@/lib/cities-list";

const option1 = ["Malik", "Jack", "Nancy"];
const option2 = [
  { value: "mary", label: "Mary" },
  { value: "jane", label: "Jane" },
  { value: "nancy", label: "Nancy" },
];
const option3 = [{ value: "jane", label: "Jane" }, "Razak"];

const userFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  spouse: z.string().min(2),
  maidenName: z.string().min(2),
  company: z.string().min(2),
  sex: z.string().min(2),
  location: z.string().min(2),
});

type UserFormValues = z.infer<typeof userFormSchema>;

export const UserSelectForm = () => {
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
                  <FormLabel>First Name</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your first name" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fairul">Fairul</SelectItem>
                      <SelectItem value="jack">Jack</SelectItem>
                      <SelectItem value="marry">Marry</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormSelectMysa
              control={form.control}
              name="lastName"
              label="Last Name"
              options={option2}
            />
            <FormSelect
              control={form.control}
              name="spouse"
              label="Spouse"
              options={option1}
            />
            <FormInputSearch
              control={form.control}
              name="location"
              label="Location"
              lists={lists}
              order={["name", "subcountry", "country"]}
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
