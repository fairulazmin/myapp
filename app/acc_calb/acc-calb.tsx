import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

export const AccCalb = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const datas = [
    { freq: 0.5, dev: 2.7, sensitivity: null, phase: 7.7, uncertainty: 1.8 },
    { freq: 1, dev: 2.5, sensitivity: null, phase: 3.4, uncertainty: 1.0 },
    { freq: 2, dev: 2.2, sensitivity: null, phase: 1.4, uncertainty: 1.0 },
    { freq: 5, dev: 1.7, sensitivity: null, phase: 0.2, uncertainty: 1.0 },
    { freq: 7, dev: 1.5, sensitivity: null, phase: 0.0, uncertainty: 1.0 },
    { freq: 10, dev: 1.2, sensitivity: null, phase: -0.2, uncertainty: 1.0 },
    { freq: 15, dev: 1.3, sensitivity: null, phase: null, uncertainty: 1.5 },
    { freq: 30, dev: 0.8, sensitivity: null, phase: null, uncertainty: 1.5 },
    { freq: 50, dev: 0.5, sensitivity: null, phase: null, uncertainty: 1.5 },
    { freq: 100, dev: 0.0, sensitivity: null, phase: null, uncertainty: 1.0 },
    { freq: 300, dev: -0.9, sensitivity: null, phase: null, uncertainty: 1.0 },
    { freq: 500, dev: -1.3, sensitivity: null, phase: null, uncertainty: 1.0 },
    { freq: 1000, dev: -1.8, sensitivity: null, phase: null, uncertainty: 1.0 },
    { freq: 3000, dev: -2.4, sensitivity: null, phase: null, uncertainty: 2.5 },
    { freq: 5000, dev: -2.2, sensitivity: null, phase: null, uncertainty: 2.5 },
    { freq: 7000, dev: -1.5, sensitivity: null, phase: null, uncertainty: 2.5 },
    { freq: 10000, dev: 0.1, sensitivity: null, phase: null, uncertainty: 2.5 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-700">
        Reference Accelerometer
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2  items-center">
        <div>
          <Label>Model Number</Label>
          <Input />
        </div>
        <div>
          <Label>Serial Number</Label>
          <Input />
        </div>
        <div>
          <Label>Manufacturer</Label>
          <Input placeholder="PCB, B&K, Kistler, Dytran" />
        </div>
        <div>
          <Label>Date of Calibration</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "pl-3 text-left font-normal w-full flex items-center",
                  !date && "text-muted-foreground",
                )}
              >
                {date ? (
                  date.toLocaleString("en-My", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label>Sensitivity</Label>
          <div className="flex items-center gap-2">
            <Input placeholder="100.2" />
            <Select>
              <SelectTrigger className="w-26">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mV/g">mV/g</SelectItem>
                <SelectItem value="mV/m/s">
                  mV/m/s<sup>2</sup>
                </SelectItem>
              </SelectContent>
            </Select>
            <span>@</span>
            <Select>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Freq" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="160">160</SelectItem>
              </SelectContent>
            </Select>
            <span>Hz</span>
          </div>
        </div>
      </div>
      <Separator className="my-6" />
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead>Frequency (Hz)</TableHead>
            <TableHead>Deviation (%)</TableHead>
            <TableHead>Sensitivity</TableHead>
            <TableHead>Phase (°)</TableHead>
            <TableHead>Uncertainty (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data) => (
            <TableRow key={data.freq}>
              <TableCell>{data.freq}</TableCell>
              <TableCell>{data.dev}</TableCell>
              <TableCell>{data.sensitivity}</TableCell>
              <TableCell>{data.phase}</TableCell>
              <TableCell>{data.uncertainty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
