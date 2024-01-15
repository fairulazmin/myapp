"use client";

import { Input as InputShadcn } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";

const distributionSchema = z.number({
  invalid_type_error: "Input must be a number",
});

export const Input = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validation = distributionSchema.safeParse(Number(newValue));

    if (newValue === "√3" || "√2" || "√6") {
      return setValue(newValue);
    } else if (!validation.success) {
      return setError("Input must be number or √3 √2 √6");
    }
    console.log(validation);
    setValue(e.target.value);
  };

  return (
    <div>
      <InputShadcn value={value} onChange={handleChange} type="number" />
      {error && <p>{error}</p>}
    </div>
  );
};
