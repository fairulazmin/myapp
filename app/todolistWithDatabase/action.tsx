import prisma from "@/prisma/db";
import z from "zod";
import { revalidatePath } from "next/cache";

export const createTodo = async (prevState: string, formData: FormData) => {
  console.log("PREVSTATE: ", prevState);

  const createTodoSchema = z.object({
    text: z.string().min(2, {
      message: "Min 2 character",
    }),
  });

  const validation = createTodoSchema.safeParse(formData);

  if (!validation.success) return { message: "Failed to add todo" };

  try {
    await prisma.todo.create({
      data: {
        todo: validation.data.text,
      },
    });

    revalidatePath("/todolistWithDatabase");
  } catch (e) {
    return { message: "Something went wrong" };
  }
};
