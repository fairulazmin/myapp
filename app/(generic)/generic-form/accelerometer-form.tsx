"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputForm } from "./input-form";
import { SelectForm } from "./select-form";
import { CalendarForm } from "./calendar-form";
import { useEffect, useState } from "react";

const accelerometerSchema = z.object({
  id: z.number(),
  equipment: z.string().min(2),
  serial: z.string().min(2),
  temperature: z.number(),
  humidity: z.number(),
  manufacturer: z.string(),
  sensitivity: z.string(),
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

  const newEquipment = useWatch({
    name: "equipment",
    control: form.control,
  });

  useEffect(() => {
    form.setValue("serial", `${newEquipment}`);
  }, [newEquipment]);

  const newSerial = useWatch({
    name: "serial",
    control: form.control,
  });

  useEffect(() => {
    form.setValue("equipment", `${newSerial}`);
  }, [newSerial]);

  console.log("render");

  const onSubmit = (values: AccelerometerFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-x-6">
            <div>
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
              <InputForm
                name="temperature"
                placeholder="1234"
                form={form}
                alignLabel="left"
                type="number"
                unit=<span>°C</span>
              />
              <InputForm
                name="humidity"
                placeholder="60"
                form={form}
                alignLabel="left"
                type="number"
                unit="%RH"
              />
            </div>
            <div>
              <SelectForm
                name="manufacturer"
                form={form}
                alignLabel="left"
                options={[
                  { value: "B&K" },
                  { value: "Kistler" },
                  { value: "PCB" },
                ]}
              />
              <SelectForm
                name="sensitivity"
                form={form}
                alignLabel="left"
                options={[
                  { value: "B&K" },
                  { value: "Kistler" },
                  { value: "PCB" },
                ]}
                unit=<span>
                  mV/g<sup>-2</sup>
                </span>
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
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
