"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { User } from "./page";
import { format } from "date-fns";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "country",
    accessorFn: (row) => row.address.country,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
  },
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Birthday" />
    ),
    cell: (row) => format(row.getValue() as Date, "dd MMM yyyy"),
  },
  {
    accessorKey: "child",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Child" />
    ),
    accessorFn: (row) => row.children[0].name,
  },
];
