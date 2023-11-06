"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useMuStore } from "./use-mu-store";

export const MuTable = () => {
  const { sources, titleAction, distributionAction } = useMuStore();

  return (
    <Table>
      <TableCaption>
        Measurement Uncertainty of Vibration Controller
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Source of Uncertainty</TableHead>
          <TableHead>± Value</TableHead>
          <TableHead>Probability distribution</TableHead>
          <TableHead>Distribution type</TableHead>
          <TableHead>Divisor</TableHead>
          <TableHead>
            Standard Uncertainty, u<sub>i</sub>
          </TableHead>
          <TableHead>
            Sensitivity Coefficient, c<sub>i</sub>
          </TableHead>
          <TableHead>
            Degree of freedom, v<sub>i</sub>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sources.map((source, id) => (
          <TableRow key={id}>
            <TableCell>
              <Input
                onChange={(e) => titleAction(e, id)}
                className="border-none"
                value={source.title}
              />
            </TableCell>
            <TableCell>{source.value}</TableCell>
            <TableCell>
              <Select
                value={source.distribution}
                onValueChange={(e) => distributionAction(e, id)}
              >
                <SelectTrigger className="border-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="T-distribution">T-distribution</SelectItem>
                  <SelectItem value="Rectangular">Rectangular</SelectItem>
                  <SelectItem value="U-shaped">U-shaped</SelectItem>
                  <SelectItem value="Triangular">Triangular</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Select value={source.type}>
                <SelectTrigger className="border-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell className="flex relative">
              <Input className="border-none" />
              <Select value={source.divisor}>
                <SelectTrigger className="bg-opacity-100 border-none absolute right-4 w-10 focus:border-none"></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="√3">√3</SelectItem>
                    <SelectItem value="√2">√2</SelectItem>
                    <SelectItem value="√6">√6</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>{source.ui}</TableCell>
            <TableCell>{source.ci}</TableCell>
            <TableCell>{source.vi}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
