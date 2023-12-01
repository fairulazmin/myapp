import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/db";
import { Todo } from "@prisma/client";
import { Trash2 } from "lucide-react";

export const TodolistDatabase = async () => {
  const todos: Todo[] = await prisma.todo.findMany();

  return (
    <>
      <div className="text-2xl font-semibold text-center">
        Todolist Database
      </div>
      <div className="flex space-x-2 mt-6">
        <Input /> <Button>Add</Button>
      </div>
      <div className="mt-4 space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex space-x-2">
            <Input value={todo.todo} />{" "}
            <Button variant="destructive">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};
