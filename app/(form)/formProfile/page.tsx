"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MinusCircle } from "lucide-react";

const FormProfilePage = () => {
  const profileFormSchema = z.object({
    username: z.string().min(2, {
      message: "Min character is 2",
    }),
    email: z.string().email(),
    bio: z.string(),
    urls: z.array(
      z.object({
        value: z.string().url({ message: "Please enter valid url" }),
      }),
    ),
  });

  type ProfileFormValues = z.infer<typeof profileFormSchema>;

  const defaultValues: Partial<ProfileFormValues> = {
    username: "Fairul",
    urls: [{ value: "" }],
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-lg font-medium">Profile</h2>
      <p className="text-sm text-muted-foreground">
        This is how others will see you on the site.
      </p>
      <Separator className="my-6" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="y@example.com">y@example.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>
                  You can @mention other users and organizations to link to
                  them.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            {fields.map((field, idx) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`urls.${idx}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(idx !== 0 && "sr-only")}>
                      URLs
                    </FormLabel>
                    <FormDescription className={cn(idx !== 0 && "sr-only")}>
                      Add links to your website, blog, or social media profiles.
                    </FormDescription>
                    <FormControl>
                      <div className="flex items-center">
                        <Input {...field} />
                        <Button
                          size="icon"
                          variant="ghost"
                          className={cn(
                            "ml-2 w-4 h-4 text-muted-foreground",
                            idx === 0 && "sr-only",
                          )}
                          onClick={() => remove(idx)}
                        >
                          <MinusCircle />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ value: "http://" })}
            >
              Add URL
            </Button>
          </div>
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormProfilePage;
