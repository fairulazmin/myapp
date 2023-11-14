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
  const {
    sources,
    titleAction,
    distributionAction,
    typeAction,
    divisorAction,
  } = useMuStore();

  return (
    <Table>
      <TableCaption>
        Measurement Uncertainty of Vibration Controller
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-4/12">Source of Uncertainty</TableHead>
          <TableHead className="w-1/12">± Value</TableHead>
          <TableHead className="w-2/12">Probability distribution</TableHead>
          <TableHead className="w-1/12">Distribution type</TableHead>
          <TableHead className="w-1/12">Divisor</TableHead>
          <TableHead className="w-1/12">
            Standard Uncertainty, u<sub>i</sub>
          </TableHead>
          <TableHead className="w-1/12">
            Sensitivity Coefficient, c<sub>i</sub>
          </TableHead>
          <TableHead className="w-1/12">
            Degree of freedom, v<sub>i</sub>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sources.map((source, id) => (
          <TableRow key={id} className="text-center">
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
              <Select
                value={source.type}
                onValueChange={(e) => typeAction(e, id)}
              >
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
              <Select
                value={source.divisor}
                onValueChange={(e) => divisorAction(e, id)}
              >
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
