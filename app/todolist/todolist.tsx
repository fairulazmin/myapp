"use client";

import { CheckSquare, Trash, XSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTodosStore } from "./use-todos-store";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export const TodoList = () => {
  const { todos, descriptionAction, statusAction, deleteAction, addAction } =
    useTodosStore();

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo, id) => (
            <TableRow key={id}>
              <TableCell>{id + 1}</TableCell>
              <TableCell>
                <Input
                  onChange={(e) => descriptionAction(e.target.value, id)}
                  value={todo.description}
                  className="border-none"
                />
              </TableCell>
              <TableCell onClick={() => statusAction(id)}>
                {todo.status ? (
                  <CheckSquare className="hover:cursor-pointer" color="green" />
                ) : (
                  <XSquare className="hover:cursor-pointer" color="red" />
                )}
              </TableCell>
              <TableCell>
                <Trash
                  className="hover:cursor-pointer"
                  onClick={() => deleteAction(id)}
                  color="red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={addAction}>Add Todo</Button>
    </>
  );
};
