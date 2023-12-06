"use client";

import { ChangeEvent, useState } from "react";
import { useFormStatus } from "react-dom";
import { updateTodo } from "./action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteTodo } from "./action";
import { toast } from "react-hot-toast";

interface TodoProps {
  id: string;
  text: string;
}

export const Todo = ({ id, text }: TodoProps) => {
  const [newText, setNextText] = useState(text);
  const { pending } = useFormStatus();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNextText(e.currentTarget.value);
  };

  const handleBlur = async () => {
    const result = await updateTodo(id, newText);
    {
      result.success && toast.success(result.message);
    }
    {
      !result.success && toast.error(result.message);
    }
  };

  return (
    <>
      <form
        action={async () => {
          await deleteTodo(id);
        }}
        className="flex space-x-2"
      >
        <Input value={newText} onChange={handleChange} onBlur={handleBlur} />
        <Button type="submit" variant="destructive" disabled={pending}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </form>
    </>
  );
};
