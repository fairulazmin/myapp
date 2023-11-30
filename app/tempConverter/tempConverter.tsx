"use client";

import { Input } from "@/components/ui/input";
import { useTempStore } from "@/hooks/use-temperature-store";

export const TempConverter = () => {
  const { temp, onChange } = useTempStore();

  return (
    <div>
      <div className="text-center text-2xl font-semibold mb-6">
        Temperature Converter
      </div>
      <div className="flex max-w-md mx-auto items-center">
        <Input value={temp.degree} onChange={(e) => onChange(e, "degree")} />
        <span className="ml-1 mr-4">°C</span>
        <Input
          value={temp.kelvin}
          onChange={(e) => onChange(e, "kelvin")}
          className="mr-1"
        />{" "}
        K
      </div>
    </div>
  );
};
