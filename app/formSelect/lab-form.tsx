"use client";

import { useForm } from "react-hook-form";

import { createLab } from "./lab-action";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormField, FormControl } from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";

export interface LabFormValues {
  lab: "ECC" | "EMC" | "MKO" | "MPMS" | "TVC" | "VTS";
}

export const FormSelect = () => {
  const form = useForm<LabFormValues>();

  const onSubmit = (data: LabFormValues) => {
    createLab(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center space-x-4">
            <FormField
              control={form.control}
              name="lab"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a lab" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ECC">ECC</SelectItem>
                      <SelectItem value="EMC">EMC</SelectItem>
                      <SelectItem value="MKO">MKO</SelectItem>
                      <SelectItem value="MPMS">MPMS</SelectItem>
                      <SelectItem value="TVC">TVC</SelectItem>
                      <SelectItem value="VTS">VTS</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
