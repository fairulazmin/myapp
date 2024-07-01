import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  useForm,
  UseControllerProps,
  useController,
  useWatch,
  FieldPath,
  Controller,
  FieldPathValues,
} from "react-hook-form";
import { z } from "zod";

const userFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  spouse: z.string().min(2),
  noChildren: z.coerce.number(),
  company: z.string().min(2),
  sex: z.enum(["male", "female"]),
});

type UserFormValues = z.infer<typeof userFormSchema>;

const form = useForm<UserFormValues>({
  resolver: zodResolver(userFormSchema),
  defaultValues: {
    firstName: "Fairul",
  },
});

// type Control<TFieldValues extends FieldValues = FieldValues, TContext = any>
const control: Control<UserFormValues> = form.control;
const name: FieldPath<UserFormValues> = "firstName";

// useController<FieldValues, string>(props: UseControllerProps<FieldValues, string>): UseControllerReturn<FieldValues, string>
const controller = useController<UserFormValues>({
  name: "firstName",
  control: control,
});
