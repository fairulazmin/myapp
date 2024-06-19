"use client";

import { useEffect, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputForm } from "./input-form";
// import { InputForm as InputForm2 } from "./input-form2";
import { SelectForm } from "./select-form";
import { CalendarForm } from "./calendar-form";
import { Input } from "@/components/ui/input";
import { InputForm as InputForm3 } from "./input-form3";

const accelerometerSchema = z.object({
  id: z.string().min(2),
  equipment: z.string().min(2),
  // serial: z.string().min(2),
  // temperature: z.number(),
  // humidity: z.number(),
  // manufacturer: z.string(),
  // calb_date: z.date(),
  // calb_due: z.date(),
  // sensitivity: z.string(),
  // calibrations: z.array(
  //   z.object({
  //     sensitivity: z.number().or(z.literal("")),
  //     dB: z.number().or(z.literal("")),
  //     dev: z.number().or(z.literal("")),
  //   }),
  // ),
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
    defaultValues: {
      //   createdAt: "",
      //   updatedAt: "",
      // calibrations: [{ sensitivity: 100, dev: 0, dB: 0 }],
    },
  });

  const newEquipment = useWatch({
    name: "equipment",
    control: form.control,
  });

  // useEffect(() => {
  //   form.setValue("serial", `${newEquipment}`);
  // }, [newEquipment]);

  // const newSerial = useWatch({
  //   name: "serial",
  //   control: form.control,
  // });

  // useEffect(() => {
  //   form.setValue("equipment", `${newSerial}`);
  // }, [newSerial]);

  const onSubmit = (values: AccelerometerFormValues) => {
    console.log(values);
  };

  // const { fields, append } = useFieldArray({
  //   name: "calibrations",
  //   control: form.control,
  // });

  return (
    <div>
      <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-x-6">
            <div>
              {/* <InputForm2 name="id" placeholder="id" form={form} /> */}
              <InputForm3
                control={form.control}
                name="id"
                placeholder="Your name"
                alignLabel="left"
                className="bg-yellow-300"
                onClick={(e) => console.log(e.currentTarget.value)}
              />
              <FormField
                control={form.control}
                name="equipment"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-2 items-center">
                    <FormLabel>Equipment</FormLabel>
                    <FormControl>
                      <Input placeholder="equipment" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* <InputForm */}
              {/*   name="equipment" */}
              {/*   placeholder="equipment" */}
              {/*   form={form} */}
              {/*   alignLabel="left" */}
              {/* /> */}
              {/*     <InputForm */}
              {/*       name="serial" */}
              {/*       placeholder="1234" */}
              {/*       form={form} */}
              {/*       alignLabel="left" */}
              {/*     /> */}
              {/*     <InputForm */}
              {/*       name="temperature" */}
              {/*       placeholder="1234" */}
              {/*       form={form} */}
              {/*       alignLabel="left" */}
              {/*       type="number" */}
              {/*       unit=<span>°C</span> */}
              {/*     /> */}
              {/*     <InputForm */}
              {/*       name="humidity" */}
              {/*       placeholder="60" */}
              {/*       form={form} */}
              {/*       alignLabel="left" */}
              {/*       type="number" */}
              {/*       unit="%RH" */}
              {/*     /> */}
            </div>
            {/*   <div> */}
            {/*     <SelectForm */}
            {/*       name="manufacturer" */}
            {/*       form={form} */}
            {/*       alignLabel="left" */}
            {/*       options={[ */}
            {/*         { value: "B&K" }, */}
            {/*         { value: "Kistler" }, */}
            {/*         { value: "PCB" }, */}
            {/*       ]} */}
            {/*     /> */}
            {/*     <SelectForm */}
            {/*       name="sensitivity" */}
            {/*       form={form} */}
            {/*       alignLabel="left" */}
            {/*       options={[ */}
            {/*         { value: "B&K" }, */}
            {/*         { value: "Kistler" }, */}
            {/*         { value: "PCB" }, */}
            {/*       ]} */}
            {/*       unit=<span> */}
            {/*         mV/g<sup>-2</sup> */}
            {/*       </span> */}
            {/*     /> */}
            {/*     <CalendarForm */}
            {/*       form={form} */}
            {/*       name="calb_date" */}
            {/*       label="Calibration Date" */}
            {/*       alignLabel="left" */}
            {/*       disabled={true} */}
            {/*     /> */}
            {/*     <CalendarForm */}
            {/*       form={form} */}
            {/*       name="calb_due" */}
            {/*       label="Calibration Due" */}
            {/*       alignLabel="left" */}
            {/*     /> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div> */}
            {/*   {fields.map((field, index) => ( */}
            {/*     <div */}
            {/*       key={field.id} */}
            {/*       className="grid grid-cols-3 space-x-3 [&_*]:text-center" */}
            {/*     > */}
            {/*       <InputForm */}
            {/*         form={form} */}
            {/*         name={`calibrations.${index}.sensitivity`} */}
            {/*         label="Sensitivity" */}
            {/*         type="number" */}
            {/*       /> */}
            {/*       <InputForm */}
            {/*         form={form} */}
            {/*         name={`calibrations.${index}.dev`} */}
            {/*         label="Deviation" */}
            {/*         type="number" */}
            {/*       /> */}
            {/*       <InputForm */}
            {/*         form={form} */}
            {/*         name={`calibrations.${index}.dB`} */}
            {/*         label="Decibel" */}
            {/*         type="number" */}
            {/*       /> */}
            {/*     </div> */}
            {/*   ))} */}
            {/*   <Button */}
            {/*     type="button" */}
            {/*     onClick={() => append({ sensitivity: "", dev: "", dB: "" })} */}
            {/*     className="mt-2" */}
            {/*     variant="outline" */}
            {/*   > */}
            {/*     Add */}
            {/*   </Button> */}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
