"use client";

import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });

  console.log(selectedValues);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="flex space-x-2 justify-start items-center">
        <Button>All</Button>
        <Button>Male</Button>
        <Button>Female</Button>
      </div>
      <div className="p-4 bg-indigo-100 rounded-xl">
        <pre>
          {`Table.getColumn("sex")?.getFilterValue() => `}
          {JSON.stringify(table.getColumn("sex")?.getFilterValue(), null, 2)}
        </pre>
        <pre>
          {`Table.getState().columnFilters => `}
          {JSON.stringify(table.getState().columnFilters, null, 2)}
        </pre>
        <pre>
          {`Table.getFilteredRowModel().rows.length => `}
          {table.getFilteredRowModel().rows.length} found
        </pre>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-secondary">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
