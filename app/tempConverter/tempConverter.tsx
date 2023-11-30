"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTempStore } from "@/hooks/use-temperature-store";

export const TempConverter = () => {
  const { temp, onChange, onReset } = useTempStore();

  return (
    <div>
      <div className="text-center text-2xl font-semibold mb-6">
        Temperature Converter
      </div>
      <div className="flex max-w-md mx-auto items-center">
        <Input
          type="number"
          value={temp.degree}
          onChange={(e) => onChange(e, "degree")}
        />
        <span className="ml-1 mr-5">°C</span>
        <Input
          type="number"
          value={temp.kelvin}
          onChange={(e) => onChange(e, "kelvin")}
          className="mr-2"
        />{" "}
        K
        <Button className="ml-4" onClick={onReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};
