"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { User } from "./typedef";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "fullname",
    header: "Name",
  },
  {
    accessorKey: "sex",
    header: "Gender",
    cell: ({ row }) => (
      <span className="capitalize">{row.getValue("sex")}</span>
    ),
    filterFn: (row, id, value) => {
      console.log(row, id, value);
      return true;
    },
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ getValue }) => (getValue() as string).toUpperCase(),
  },
  {
    accessorKey: "dob",
    header: "Date of Birth",
    cell: ({ row }) => format(row.getValue("dob"), "dd MMM yyyy"),
  },
];
