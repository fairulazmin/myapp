"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  no: number;
  jumlah: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  age: number;
  address: string;
  employer: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "no",
    header: "No.",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "jumlah",
    header: "Amount",
  },
];
