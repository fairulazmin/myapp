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
import { InputForm, InputForm2, InputForm3, InputForm4 } from "./input-form";
import { InputForm5 } from "./input-form5";
import { InputForm6 } from "./input-form6";

const userFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  spouse: z.string().min(2),
  noChildren: z.coerce.number(),
  company: z.string().min(2),
  sex: z.enum(["male", "female"]),
});

type UserFormValues = z.infer<typeof userFormSchema>;

export const UserForm = () => {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      firstName: "Fairul",
    },
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
            <InputForm
              control={form.control}
              name="firstName"
              label="First Name"
              className="bg-pink-100"
              type="number"
              onClick={() => console.log("Hello")}
            />
            <InputForm2
              control={form.control}
              name="lastName"
              label="Last Name"
              className="bg-indigo-100"
              type="number"
              onClick={() => console.log("Hello")}
            />
            <InputForm3
              control={form.control}
              name="spouse"
              className="bg-yellow-100"
              onClick={() => console.log("Bello")}
              type="number"
              label="Spouse"
              ref={ref}
            />
            <InputForm4
              control={form.control}
              name="noChildren"
              className="bg-gray-100"
              onClick={() => console.log("World")}
              type="number"
              label="No of Children"
              // ref={ref}
            />
            <InputForm5
              control={form.control}
              name="company"
              className="bg-gray-100"
              onClick={() => console.log("World")}
              type="number"
              label="Company"
              ref={ref}
            />
            <InputForm6
              control={form.control}
              name="sex"
              className="bg-gray-100"
              onClick={() => console.log("World")}
              type="number"
              label="Sex"
              // ref={ref}
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
