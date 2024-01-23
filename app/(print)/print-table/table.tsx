"use client";

import { format } from "date-fns";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

// interface DataTableProps<TData> {
//   data: TData[];
// }

interface Masterlist {
  id: number;
  equipment: string;
  identification: string;
  manufacturer: string;
  model: string;
  accuracy: number;
  range: number;
  location: string;
  calb_date: Date;
  calb_interval: number;
  calb_due: Date;
  limitation: string;
  status: string;
}

const headers = [
  "No.",
  "Equipment Name",
  "Identification (Serial No.)",
  "Manufacturer",
  "Model",
  "Accuracy",
  "Measurement Range",
  "Location",
  "Calibration Date",
  "Calibration Interval",
  "Due Date",
  "Limitation of Use (Categorization of equipment)",
  "Equipment Status",
];

// export const DataTable = <TData,>({ data }: DataTableProps<TData>) => {
export const DataTable = ({ data }: { data: Masterlist[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((masterlist, i) => (
          <TableRow key={i}>
            {Object.values(masterlist).map((value, j) => {
              if (value instanceof Date) {
                value = format(value, "dd MMM yyyy");
              }
              return <TableCell key={j}>{value}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
