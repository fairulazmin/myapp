"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectValue,
  SelectItem,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const MuFormSchema = z.object({
  distribution: z.enum([
    "Normal",
    "T-distribution",
    "Rectangular",
    "U-shaped",
    "Triangular",
  ]),
  type: z.enum(["A", "B"]),
  divisor: z.union([
    z.number(),
    z.literal("√3"),
    z.literal("√2"),
    z.literal("√6"),
  ]),
});

type MuFormValues = z.infer<typeof MuFormSchema>;

const defaultValues: Partial<MuFormValues> = {
  distribution: "Normal",
};

export const MuForm = () => {
  const form = useForm<MuFormValues>({
    resolver: zodResolver(MuFormSchema),
    defaultValues,
  });

  const onSubmit = (data: MuFormValues) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="font-medium">MU Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="distribution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Probability Distribution</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={(e) => {
                      field.onChange(e);
                      switch (e) {
                        case "Normal":
                          form.setValue("type", "A");
                          return;
                        case "T-distribution":
                          form.setValue("type", "A");
                          return;
                        case "Rectangular":
                          form.setValue("type", "B");
                          form.setValue("divisor", "√3");
                          return;
                        case "U-shaped":
                          form.setValue("type", "B");
                          form.setValue("divisor", "√2");
                          return;
                        case "Triangular":
                          form.setValue("type", "B");
                          form.setValue("divisor", "√6");
                          return;
                      }
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select distribution" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Normal">Normal</SelectItem>
                      <SelectItem value="T-distribution">
                        T-distribution
                      </SelectItem>
                      <SelectItem value="Rectangular">Rectangular</SelectItem>
                      <SelectItem value="U-shaped">U-shaped</SelectItem>
                      <SelectItem value="Triangular">Triangular</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Distribution type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="divisor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Divisor</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={(e) => {
                      field.onChange(e);
                      switch (e) {
                        case "√3":
                          form.setValue("type", "B");
                          form.setValue("distribution", "Rectangular");
                          return;
                        case "√2":
                          form.setValue("type", "B");
                          form.setValue("distribution", "U-shaped");
                          return;
                        case "√6":
                          form.setValue("type", "B");
                          form.setValue("distribution", "Triangular");
                          return;
                      }
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select divisor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="√3">√3</SelectItem>
                      <SelectItem value="√2">√2</SelectItem>
                      <SelectItem value="√6">√6</SelectItem>
                    </SelectContent>
                  </Select>
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
