"use server";

import prisma from "@/prisma/db";
import z from "zod";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const createTodoSchema = z.object({
    todo: z.string().min(2, {
      message: "Min 2 character",
    }),
  });

  const validation = createTodoSchema.safeParse({ todo: formData.get("todo") });

  if (!validation.success) {
    console.log(validation.error.flatten());
    return { success: false, message: "Something went wrong" };
  }

  const { todo } = validation.data;

  try {
    await prisma.todo.create({
      data: {
        todo,
      },
    });

    revalidatePath("/todolistWithDatabase");
    return { success: true, message: `Added todo ${todo}` };
  } catch (e) {
    console.log("ERROR: ", e);
    return { success: false, message: "Something went wrong" };
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });

    revalidatePath("/todolistWithDatabase");
    return {
      success: true,
      message: `Deleted todo`,
    };
  } catch (e) {
    return { success: false, message: "Something went wrong" };
  }
};

export const updateTodo = async (id: string, todo: string) => {
  try {
    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        todo,
      },
    });

    revalidatePath("/todolistWithDatabase");
    return {
      success: true,
      message: `Updated todo`,
    };
  } catch (e) {
    return { success: false, message: "Something went wrong" };
  }
};
