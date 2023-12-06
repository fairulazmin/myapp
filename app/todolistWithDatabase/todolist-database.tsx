import prisma from "@/prisma/db";
import { AddTodo } from "./add-todo";
import { Todo } from "./todo";

export const TodolistDatabase = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <div className="text-2xl font-semibold text-center">
        Todolist Database
      </div>
      <AddTodo />
      <div className="mt-4 space-y-2">
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todo id={todo.id} text={todo.todo} />
          </div>
        ))}
      </div>
    </>
  );
};
