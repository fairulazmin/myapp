"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const FileUpload = () => {
  const [data, setData] = useState<any[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file.type === "application/vnd.ms-excel" || file.type === "text/csv") {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const workbook = XLSX.read(e.target?.result as string, {
            type: "binary",
          });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          setData(XLSX.utils.sheet_to_json(sheet, { header: 1 }));

          console.log(data);
        } catch (error) {
          console.error("Error reading file:", error.message);
        }
      };

      reader.readAsBinaryString(file);
    } else {
      console.error(
        "Invalid file type. Please upload a valid Excel or CSV file.",
      );
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { files: [".xls", ".xlsx", ".csv"] },
  });

  return (
    <div className="container mx-auto">
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop a file here, or click to select a file</p>
        )}
      </div>
      <h1>{data[0]}</h1>
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            {data[1]?.map((value: string, idx: number) => (
              <TableHead key={idx}>{value}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(2).map((row: string[], idx: number) => (
            <TableRow key={idx}>
              {row.map((value: string, idx: number) => (
                <TableCell key={idx}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const dropzoneStyle: React.CSSProperties = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default FileUpload;
