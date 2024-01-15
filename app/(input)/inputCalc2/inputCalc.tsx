"use client";

import { create, all } from "mathjs";
import { useState } from "react";

import { Input } from "@/components/ui/input";

interface ValProps {
  inputValue: string;
  focusValue: string;
  blurValue: string;
}

export const InputCalc = () => {
  const [val, setVal] = useState<ValProps>({
    inputValue: "",
    focusValue: "",
    blurValue: "",
  });

  const math = create(all, {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setVal((state) => ({
      ...state,
      focusValue: value,
      inputValue: value,
    }));
  };

  const handleCalc = () => {
    let blurValue: string;
    try {
      blurValue = math.evaluate(val.focusValue).toString();
    } catch (error) {
      blurValue = val.focusValue;
    }
    setVal((state) => ({ ...state, blurValue }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalc();
      e.currentTarget.blur();
    }
  };

  const handleFocus = () => {
    setVal((state) => ({ ...state, inputValue: state.focusValue }));
  };

  const handleBlur = () => {
    handleCalc();
    setVal((state: ValProps) => ({ ...state, inputValue: state.blurValue }));
  };

  return (
    <Input
      value={val.inputValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyPress}
    />
  );
};
