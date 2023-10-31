"use client";

import { useReducer } from "react";
import { Button } from "@/components/ui/button";

type ReducerState = number;

type ReducerAction = "add" | "minus";

const Reducer = () => {
  const initialState = 0;

  const reducer = (state: ReducerState, action: ReducerAction) => {
    switch (action) {
      case "add":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="space-x-3">
      <Button onClick={() => dispatch("add")}>Add 1</Button>
      <Button onClick={() => dispatch("minus")}>Minus 1</Button>
      <div>{state}</div>
    </div>
  );
};

export default Reducer;
