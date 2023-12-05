"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface TodoProps {
  id: string;
  text: string;
}

export const Todo = ({ id, text }: TodoProps) => {
  return (
    <>
      <Input value={text} onChange={() => {}} />
      <Button variant="destructive">
        <Trash2 className="w-4 h-4" />
      </Button>
    </>
  );
};
