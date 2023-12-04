"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import { createTodo } from "./action";

const initialState = { message: null };

export const AddTodo = () => {
  const [state, formAction] = useFormState(createTodo, initialState);
  const { pending } = useFormStatus();

  return (
    <>
      <form action={formAction}>
        <Input />
        <Button type="submit" disabled={pending}>
          Add
        </Button>
        <p>{state?.message}</p>
      </form>
    </>
  );
};
