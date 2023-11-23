"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InputButton = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState("Untitled");
  const [isEditing, setIsEditing] = useState(false);

  const enableInput = () => {
    setIsEditing(true);
    // setTimeout enable input to focus
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const disableInput = () => {
    setIsEditing(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      disableInput();
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-36 mx-auto">
      {isEditing ? (
        <Input
          ref={inputRef}
          onClick={enableInput}
          onBlur={disableInput}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={text}
          className="text-center focus-visible:ring-transparent text-2xl font-normal h-auto px-2 py-1"
        />
      ) : (
        <Button
          onClick={enableInput}
          variant="ghost"
          size="lg"
          className="text-2xl font-normal h-auto px-2 py-1 w-full"
        >
          <span className="truncate">{text}</span>
        </Button>
      )}
    </div>
  );
};

export default InputButton;
