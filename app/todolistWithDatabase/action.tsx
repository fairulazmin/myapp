"use client";

import prisma from "@/prisma/db";
import z from "zod";
import { revalidatePath } from "next/cache";

export const createTodo = async (prevState: string, formData: FormData) => {
  const createTodoSchema = z.object({
    todo: z.string().min(2, {
      message: "Min 2 character",
    }),
  });

  const validation = createTodoSchema.safeParse({ todo: formData.get("todo") });

  if (!validation.success) {
    console.log(validation.error.flatten());
    return { message: "Something went wrong" };
  }

  const { todo } = validation.data;

  try {
    await prisma.todo.create({
      data: {
        todo,
      },
    });

    revalidatePath("/todolistWithDatabase");
    return { message: `Added todo ${todo}` };
  } catch (e) {
    console.log("ERROR: ", e);
    return { message: "Something went wrong" };
  }
};
