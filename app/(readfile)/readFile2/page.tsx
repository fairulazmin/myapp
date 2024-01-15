"use client";

import { useState } from "react";
import { utils, read } from "xlsx";
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

interface President {
  name: string;
  index: number;
}

const ReadFile2Page = () => {
  const [pres, setPres] = useState<President[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (!e.target.files) return;
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: President[] = utils
        .sheet_to_json<President>(sheet, {
          header: ["name", "index"],
        })
        .slice(1);
      console.log("PARSEDDATA: ", parsedData);
      setPres(parsedData);
    };
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-medium">
        Read file (xlsx SheetJS - Exp: President)
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
      <div className="w-[500px] border my-6">
        <Table className="text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Index</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pres.map((p) => (
              <TableRow key={p.index}>
                <TableCell className="text-left">{p.name}</TableCell>
                <TableCell>{p.index}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <pre>{JSON.stringify(pres, null, 2)}</pre>
    </div>
  );
};

export default ReadFile2Page;
