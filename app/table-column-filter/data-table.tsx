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

  const selectedSexValues = new Set(table.getState().columnFilters

  const handleFilter = (gender: string) => {selectedSexValues.has(gender) ? selectedSexValues.delete(gender) : selectedSexValues.add(gender)
      table.getColumn("sex")?.setFilterValue(selectedSexValues as string[]) 
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="flex space-x-2 justify-start items-center">
        <Button
          variant="outline"
          onClick={() => console.log(table.getColumn("sex")?.getFilterValue())}
        >
          All
        </Button>
        <Button
          variant="outline"
          onClick={() => handleFilter("male")}
        >
          Male
        </Button>
        <Button
          variant="outline"
          onClick={() => handleFilter("female")
          }
        >
          Female
        </Button>
      </div>
      <div>
        {/* <pre> */}
        {/*   {JSON.stringify( */}
        {/*     table.getColumn("email")?.getFacetedUniqueValues(), */}
        {/*     null, */}
        {/*     2, */}
        {/*   )} */}
        {/* </pre> */}
        <pre>{JSON.stringify(table.getState().columnFilters, null, 2)}</pre>
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
