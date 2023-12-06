"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { createTodo } from "./action";
import { useRef } from "react";
import { toast } from "react-hot-toast";

export const AddTodo = () => {
  const ref = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          const result = await createTodo(formData);
          {
            result.success && toast.success(`Added todo ${result.message}`);
          }
          {
            !result.success && toast.error(result.message);
          }
        }}
      >
        <div className="flex space-x-2 mt-6">
          <Input name="todo" />
          <Button type="submit" disabled={pending}>
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
