"use client";

import { CounterRow } from "./counter-row";
import { Button } from "@/components/ui/button";
import { useCountsStore } from "@/hooks/use-counters-store";

export const Counter = () => {
  const { counts, add } = useCountsStore();

  const getCount = () => {
    const total = counts.reduce((x, y) => x + y);
    return total > 1 ? `Total count = ${total}` : `Total counts = ${total}`;
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-center text-xl">{getCount()}</div>
      {counts.map((count: number, id: number) => (
        <CounterRow key={id} id={id} count={count} />
      ))}
      <Button variant="outline" onClick={() => add()}>
        Add counter
      </Button>
    </div>
  );
};
