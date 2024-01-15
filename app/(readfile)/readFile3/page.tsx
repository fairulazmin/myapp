"use client";

import { useState } from "react";
import { utils, read } from "xlsx";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

export interface Masterlist {
  equipment: string;
  identification: string;
  manufacturer: string;
  model: string;
  accuracy: string;
  range: string;
  location: string;
  limitation: string;
  status: string;
}

interface RawMasterlist extends Masterlist {
  no: string;
  calb_date: string;
  calb_interval: string;
  calb_due: string;
}

interface FormattedMasterlist extends Masterlist {
  no: number;
  calb_date: Date;
  calb_interval: number;
  calb_due: Date;
}

const ReadFile3Page = () => {
  const [data, setData] = useState<FormattedMasterlist[]>([]);

  const formatData = (parsedData: RawMasterlist[]): FormattedMasterlist[] => {
    const formattedData = parsedData.map((d: RawMasterlist) => {
      const [num, period] = d.calb_interval.split(" ");
      let calb_interval;

      switch (period) {
        case period.match(/years?/i)?.input:
          calb_interval = Number(num) * 365;
          break;
        case period.match(/months?/i)?.input:
          calb_interval = Number(num) * 30;
          break;
        case period.match(/days?/i)?.input:
          calb_interval = Number(num);
          break;
        default:
          calb_interval = Number(num) * 365;
      }
      return {
        ...d,
        no: Number(d.no),
        calb_date: new Date(
          d.calb_date
            .split(/[-/. ]/)
            .reverse()
            .toString(),
        ),
        calb_due: new Date(
          d.calb_due
            .split(/[-/. ]/)
            .reverse()
            .toString(),
        ),
        calb_interval,
      };
    });

    return formattedData;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (!e.target.files) return;
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: RawMasterlist[] = utils
        .sheet_to_json<RawMasterlist>(sheet, {
          header: [
            "no",
            "equipment",
            "identification",
            "manufacturer",
            "model",
            "accuracy",
            "range",
            "location",
            "calb_date",
            "calb_interval",
            "calb_due",
            "limitation",
            "status",
          ],
        })
        .slice(1);
      const formattedData = formatData(parsedData);
      console.log("FORMATTED DATA: ", formattedData);
      setData(formattedData);
    };
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-medium">
        Read file (xlsx SheetJS - Exp: Masterlist)
      </h2>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="file">Import excel file</Label>
        <Input
          id="file"
          type="file"
          accept=".xlsx, .xls"
          onChange={handleChange}
        />
      </div>
      <div className="max-w-4xl border my-6">
        <Table className="text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">No.</TableHead>
              <TableHead className="text-center">Equipment Name</TableHead>
              <TableHead className="text-center">
                Identification (Serial No.)
              </TableHead>
              <TableHead className="text-center">Manufacturer</TableHead>
              <TableHead className="text-center">Model</TableHead>
              <TableHead className="text-center">Accuracy</TableHead>
              <TableHead className="text-center">Measurement Range</TableHead>
              <TableHead className="text-center">Location</TableHead>
              <TableHead className="text-center">Calibration Date</TableHead>
              <TableHead className="text-center">
                Calibration Interval
              </TableHead>
              <TableHead className="text-center">Due Date</TableHead>
              <TableHead className="text-center">Limitation of Use</TableHead>
              <TableHead className="text-center">Equipment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.no}>
                <TableCell>{d.no}</TableCell>
                <TableCell>{d.equipment}</TableCell>
                <TableCell>{d.identification}</TableCell>
                <TableCell>{d.manufacturer}</TableCell>
                <TableCell>{d.model}</TableCell>
                <TableCell>{d.accuracy}</TableCell>
                <TableCell>{d.range}</TableCell>
                <TableCell>{d.location}</TableCell>
                <TableCell>{format(d.calb_date, "dd MMM yyyy")}</TableCell>
                <TableCell>{d.calb_interval}</TableCell>
                <TableCell>{format(d.calb_due, "dd MMM yyyy")}</TableCell>
                <TableCell>{d.limitation}</TableCell>
                <TableCell>{d.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ReadFile3Page;
