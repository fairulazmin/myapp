import { Form, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";

export const AccCalb = () => {
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
          <Label>Sensitivity</Label>
          <div className="flex items-center gap-2">
            <Input placeholder="100.2" />
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
            <Select>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mV/g">mV/g</SelectItem>
                <SelectItem value="mV/m/s">
                  mV/m/s<sup>2</sup>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
