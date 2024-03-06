"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputTextForm } from "./input-text-form";
import { InputNumberForm } from "./input-number-form";
import { SelectForm } from "./select-form";

const accelerometerSchema = z.object({
  id: z.number(),
  equipment: z.string().min(2),
  serial: z.string().min(2),
  manufacturer: z.string(),
  // model: z.string(),
  // accuracy: z.string(),
  // range: z.string(),
  // lab: z.string(),
  // location: z.string(),
  // limitation: z.string(),
  // status: z.string(),
  // createdAt: z.date().or(z.literal("")), // Date | ""
  // updatedAt: z.union([z.date(), z.literal("")]), // Date | ""
  // accelerometerCalibrationId: z.number().nullish(), //number | null | undefined
});

type AccelerometerFormValues = z.infer<typeof accelerometerSchema>;

export const AccelerometerForm = () => {
  const form = useForm<AccelerometerFormValues>({
    resolver: zodResolver(accelerometerSchema),
    // defaultValues: {
    //   createdAt: "",
    //   updatedAt: "",
    // },
  });

  const onSubmit = (values: AccelerometerFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InputNumberForm form={form} name="id" placeholder="id" />
          <InputTextForm name="equipment" placeholder="equipment" form={form} />
          <InputTextForm name="serial" placeholder="1234" form={form} />
          <SelectForm
            name="manufacturer"
            placeholder="Manufacturer"
            form={form}
            options={[{ value: "B&K" }, { value: "Kistler" }, { value: "PCB" }]}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
