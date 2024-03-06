"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const accelerometerSchema = z.object({
  sensitivity: z.number().or(z.literal("")),
});

type AccelerometerValues = z.infer<typeof accelerometerSchema>;

const InputTypeNumberPage = () => {
  const form = useForm<AccelerometerValues>({
    resolver: zodResolver(accelerometerSchema),
    defaultValues: {
      sensitivity: "",
    },
  });

  const onSubmit = (values: AccelerometerValues) => {
    console.log(values);
  };

  return (
    <div className="container space-y-3">
      <h2 className="text-2xl font-semibold">Input Type Number</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="sensitivity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sensitivity</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    className="w-[500px]"
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-3">
            Submit
          </Button>
        </form>
      </Form>
      <input className="mt-6" onChange={(e) => e.target.valueAsNumber} />
      <input className="mt-6" onChange={(e) => e.target.valueAsDate} />
    </div>
  );
};

export default InputTypeNumberPage;
