"use client";

import { create, all } from "mathjs";
import { useState } from "react";

import { Input } from "@/components/ui/input";

export const InputCalc = () => {
  const [inputValue, setInputValue] = useState("");
  const [focusValue, setFocusValue] = useState("");
  const [blurValue, setBlurValue] = useState("");

  const math = create(all, {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setFocusValue(value);
    setInputValue(value);
  };

  const handleCalc = () => {
    let blurValue;
    try {
      blurValue = math.evaluate(focusValue).toString();
    } catch (error) {
      blurValue = focusValue;
    }
    setBlurValue(blurValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalc();
      e.currentTarget.blur();
    }
  };

  const handleFocus = () => {
    setInputValue(focusValue);
  };

  const handleBlur = () => {
    handleCalc();
    setInputValue(blurValue);
  };

  return (
    <Input
      value={inputValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyPress}
    />
  );
};
