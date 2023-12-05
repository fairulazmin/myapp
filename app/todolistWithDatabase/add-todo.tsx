"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "./action";

const initialState = { message: null };

export const AddTodo = () => {
  const [state, formAction] = useFormState(createTodo, initialState);
  const { pending } = useFormStatus();

  return (
    <>
      <form action={formAction}>
        <div className="flex space-x-2">
          <Input name="todo" />
          <Button type="submit" disabled={pending}>
            Add
          </Button>
        </div>
        <p>{state?.message}</p>
      </form>
    </>
  );
};
