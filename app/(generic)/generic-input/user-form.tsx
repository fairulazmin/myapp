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
import { InputForm } from "./input-field";
import { InputForm as InputForm2 } from "./input-field2";
import { InputForm as InputForm3 } from "./input-field3";

const userFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  spouse: z.string().min(2),
  noChildren: z.coerce.number(),
  company: z.string().min(2),
  // sex: z.enum(["male", "female"]),
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

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-3 max-w-md mx-auto">
            {/*Use React-hook-form Controller component*/}
            <Controller
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <>
                  <Input placeholder="First Name" {...field} />
                </>
              )}
            />
            <FormMessage>
              {form.formState.errors.firstName?.message}
            </FormMessage>

            {/*Isolate FormField without extends HTML Input Element*/}
            <InputForm2 name="lastName" control={form.control} />

            <InputForm3
              name="company"
              control={form.control}
              className="bg-red-200"
              placeholder="Your company"
              onChange={() => console.log("hello world")}
            />

            {/*Shadcn FormField Element*/}
            <FormField
              control={form.control}
              name="spouse"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Spouse" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*Isolate FormField & extends HTML Input Element*/}
            <InputForm3
              control={form.control}
              name="noChildren"
              label="No of Children"
              type="number"
              onChange={() => form.setValue("firstName", "My first name")}
            />
            {/* <Select> */}
            {/*   <SelectTrigger> */}
            {/*     <SelectValue placeholder="Select sex" /> */}
            {/*   </SelectTrigger> */}
            {/*   <SelectContent> */}
            {/*     <SelectItem value="female">Female</SelectItem> */}
            {/*     <SelectItem value="male">Male</SelectItem> */}
            {/*   </SelectContent> */}
            {/* </Select> */}
            {/* <FormMessage /> */}
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
