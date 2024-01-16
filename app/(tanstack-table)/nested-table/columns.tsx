"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "./page";
import { format } from "date-fns";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    // accessorKey: "country",
    accessorFn: (row) => row.address.country,
    header: "Country",
  },
  {
    accessorKey: "dob",
    header: "Birthday",
    cell: (row) => format(row.getValue() as Date, "dd MMM yyyy"),
  },
  {
    // accessorKey: "name",
    accessorFn: (row) => row.children,
    header: "Children",
    cell: (row) =>
      row
        .getValue()
        .map((child, idx: number) => <div>{`${++idx}) ${child.name}`}</div>),
  },
];
