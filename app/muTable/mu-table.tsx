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
import { SourceType } from "./typedef";

const muSources: SourceType[] = [
  {
    source: "Calibration Cert of Multimeter",
    value: 0.0026,
    distribution: "Normal",
    type: "B",
    divisor: 2,
    ui: 0.001,
    ci: 1,
    vi: "∞",
  },
  {
    source: "Accuracy of Multimeter",
    value: 0.011,
    distribution: "Rectangular",
    type: "B",
    divisor: "√3",
    ui: 0.001,
    ci: 1,
    vi: "∞",
  },
  {
    source: "Calibration Cert of Multimeter",
    value: 0.0001,
    distribution: "Rectangular",
    type: "B",
    divisor: "√3",
    ui: 0.0,
    ci: 1,
    vi: "∞",
  },
];

export const MuTable = () => {
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
        {muSources.map((muSource, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <Input className="border-none" value={muSource.source} />
            </TableCell>
            <TableCell>{muSource.value}</TableCell>
            <TableCell>
              <Select value={muSource.distribution}>
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
              <Select value={muSource.type}>
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
              <Select>
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
            <TableCell>{muSource.ui}</TableCell>
            <TableCell>{muSource.ci}</TableCell>
            <TableCell>{muSource.vi}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
