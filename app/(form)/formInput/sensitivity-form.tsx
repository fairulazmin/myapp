"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const sensitivityFormSchema = z.object({
  refSensitivity: z.number(),
  refUnit: z.string(),
  refFrequency: z.number(),
  frequency: z.number(),
  deviation: z.number(),
  sensitivity: z.number(),
  decibel: z.number(),
});

type sensitivityFormValues = z.infer<typeof sensitivityFormSchema>;

const defaultValues: Partial<sensitivityFormValues> = {
  refFrequency: 100,
  refUnit: "mV/g",
};

export const SensitivityForm = () => {
  const form = useForm<sensitivityFormValues>({
    resolver: zodResolver(sensitivityFormSchema),
    defaultValues,
  });

  const onSubmit = (data: sensitivityFormValues) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="font-medium">Sensitivity Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-4 flex items-center space-x-2">
            <FormField
              control={form.control}
              name="refSensitivity"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="refUnit"
              render={({ field }) => (
                <FormItem>
                  <Select>
                    <SelectTrigger>
                      <FormControl>
                        <SelectValue placeholder="Unit" {...field} />
                      </FormControl>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mV/g">mV/g</SelectItem>
                      <SelectItem value="mV/m/s">
                        mV/m/s<sup>2</sup>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span>@</span>
            <FormField
              control={form.control}
              name="refFrequency"
              render={({ field }) => (
                <FormItem>
                  <Select>
                    <SelectTrigger>
                      <FormControl>
                        <SelectValue placeholder="Freq" {...field} />
                      </FormControl>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">100</SelectItem>
                      <SelectItem value="160">160</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span>Hz</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <FormField
              control={form.control}
              name="sensitivity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>mVg</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deviation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deviation</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="decibel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Decibel</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-4" type="submit">
            Save
          </Button>
        </form>
      </Form>
    </>
  );
};
