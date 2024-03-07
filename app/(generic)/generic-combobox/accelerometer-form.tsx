"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputForm } from "./input-form";
import { SelectForm } from "./select-form";
import { CalendarForm } from "./calendar-form";

const accelerometerSchema = z.object({
  id: z.number(),
  equipment: z.string().min(2),
  serial: z.string().min(2),
  manufacturer: z.string(),
  calb_date: z.date(),
  calb_due: z.date(),
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

export type AccelerometerFormValues = z.infer<typeof accelerometerSchema>;

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
          <InputForm
            form={form}
            name="id"
            placeholder="id"
            type="number"
            alignLabel="left"
          />
          <InputForm
            name="equipment"
            placeholder="equipment"
            form={form}
            alignLabel="left"
          />
          <InputForm
            name="serial"
            placeholder="1234"
            form={form}
            alignLabel="left"
          />
          <SelectForm
            name="manufacturer"
            form={form}
            alignLabel="left"
            options={[{ value: "B&K" }, { value: "Kistler" }, { value: "PCB" }]}
          />
          <CalendarForm
            form={form}
            name="calb_date"
            label="Calibration Date"
            alignLabel="left"
            disabled={true}
          />
          <CalendarForm
            form={form}
            name="calb_due"
            label="Calibration Due"
            alignLabel="left"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
