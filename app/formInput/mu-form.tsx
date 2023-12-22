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
  distribution: z.union([
    z.literal("Normal"),
    z.literal("T-distribution"),
    z.literal("Rectangular"),
    z.literal("U-shaped"),
    z.literal("Triangular"),
  ]),
  type: z.union([z.literal("A"), z.literal("B")]),
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
                  <FormLabel>Distribution type</FormLabel>
                  <Select>
                    <SelectTrigger className="w-40">
                      <FormControl>
                        <SelectValue {...field} />
                      </FormControl>
                    </SelectTrigger>
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
          </div>
          <Button className="mt-4" type="submit">
            Save
          </Button>
        </form>
      </Form>
    </>
  );
};
