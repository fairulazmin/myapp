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

  const selectedSexValues = new Set(
    table.getColumn("sex")?.getFilterValue() as string[],
  );

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selected = e.currentTarget.value;
    switch (selected) {
      case "male":
      case "female":
        selectedSexValues.has(selected)
          ? selectedSexValues.delete(selected)
          : selectedSexValues.add(selected);

        selectedSexValues.size
          ? table.getColumn("sex")?.setFilterValue([...selectedSexValues])
          : table.getColumn("sex")?.setFilterValue(undefined);
        break;
      case "all":
        selectedSexValues.size > 0 || selectedSexValues.size < 2
          ? table.getColumn("sex")?.setFilterValue(["male", "female"])
          : table.getColumn("sex")?.setFilterValue(undefined);
        break;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="flex space-x-2 justify-start items-center">
        <Button
          variant={
            selectedSexValues.size === 2 || selectedSexValues.size === 0
              ? "default"
              : "outline"
          }
          value="all"
          onClick={handleFilter}
        >
          All
        </Button>
        <Button
          variant={selectedSexValues.has("male") ? "default" : "outline"}
          value="male"
          onClick={handleFilter}
        >
          Male
        </Button>
        <Button
          variant={selectedSexValues.has("female") ? "default" : "outline"}
          value="female"
          onClick={handleFilter}
        >
          Female
        </Button>
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
