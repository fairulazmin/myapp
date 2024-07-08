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
import { FormInput } from "./form-input";
import { FormInput as FormInput2 } from "./form-input2";
import { FormInput as FormInput3 } from "./form-input-mysa";

const userFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  spouse: z.string().min(2),
  maidenName: z.string().min(2),
  company: z.string().min(2),
  sex: z.string().min(2),
});

type UserFormValues = z.infer<typeof userFormSchema>;

export const UserInputForm = () => {
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
            <FormInput
              control={form.control}
              name="firstName"
              label="First Name"
            />
            <FormInput2
              control={form.control}
              name="lastName"
              label="Last Name"
            />
            <FormInput3 control={form.control} name="spouse" label="spouse" />
            <FormInput
              control={form.control}
              name="maidenName"
              label="Maiden Name"
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sex</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
