"use client";

import { useEffect, useState } from "react";
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
import { useAccCalbStore } from "./use-acc_calb-store";

export const AccCalb = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { datas, ref, onChangeDatas, add, remove, onChangeRef, recalculate } =
    useAccCalbStore();

  useEffect(() => {
    recalculate()
  }, [])

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
            <Input
              placeholder="100.2"
              defaultValue={ref.value}
              onChange={(e) => onChangeRef(Number(e.target.value), "value")}
            />
            <Select
              defaultValue={ref.unit}
              onValueChange={(value) => onChangeRef(Number(value), "unit")}
            >
              <SelectTrigger className="w-26">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mV/g">mV/g</SelectItem>
                <SelectItem value="mV/ms-2">
                  mV/ms<sup>-2</sup>
                </SelectItem>
              </SelectContent>
            </Select>
            <span>@</span>
            <Select
              defaultValue={ref.freq?.toString()}
              onValueChange={(value) => onChangeRef(Number(value), "freq")}
            >
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
      {/* <pre>{JSON.stringify(ref, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(datas, null, 2)}</pre> */}
      <Table className="text-center">
        <TableHeader>
          <TableRow className="[&>*]:text-center">
            <TableHead>Frequency (Hz)</TableHead>
            <TableHead>Sensitivity</TableHead>
            <TableHead>Deviation (%)</TableHead>
            <TableHead>dB</TableHead>
            <TableHead>Phase (°)</TableHead>
            <TableHead>Uncertainty (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data, idx) => (
            <TableRow key={idx} className="[&>*>*]:text-center">
              <TableCell>
                <Input
                  defaultValue={data.freq}
                  step="1"
                  type="number"
                  name="freq"
                  onChange={(e) => onChangeDatas(e, idx)}
                  className="input-type-number"
                />
              </TableCell>
              <TableCell>
                <Input
                  defaultValue={data.sensitivity?.toFixed(3)}
                  type="number"
                  name="sensitivity"
                  onChange={(e) => onChangeDatas(e, idx)}
                  className="input-type-number"
                />
              </TableCell>
              <TableCell>
                <Input
                  defaultValue={data.dev?.toFixed(2)}
                  type="number"
                  name="dev"
                  onChange={(e) => onChangeDatas(e, idx)}
                  className="input-type-number"
                />
              </TableCell>
              <TableCell>
                <Input
                  defaultValue={data.dB?.toFixed(3)}
                  type="number"
                  name="dB"
                  onChange={(e) => onChangeDatas(e, idx)}
                  className="input-type-number"
                />
              </TableCell>
              <TableCell>
                <Input
                  defaultValue={data.phase}
                  type="number"
                  name="phase"
                  onChange={(e) => onChangeDatas(e, idx)}
                  className="input-type-number"
                />
              </TableCell>
              <TableCell>
                <Input
                  defaultValue={data.uncertainty}
                  type="number"
                  name="uncertainty"
                  onChange={(e) => onChangeDatas(e, idx)}
                  className="input-type-number"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="outline" onClick={add}>
        Add
      </Button>
    </div>
  );
};
