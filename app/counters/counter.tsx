"use client";

import { useState } from "react";
import { CounterRow } from "./counter-row";

export const Counter = () => {
  const [counters, setCounters] = useState([1, 2, 3, 4]);

  return (
    <div className="flex space-x-3 items-center ml-5">
      {counters.map((counter, id) => (
        <CounterRow key={id} id={id} counter={counter} />
      ))}
    </div>
  );
};
