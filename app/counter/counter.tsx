"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCountStore } from "@/hooks/use-counter-store";

export const Counter = () => {
  const { count, increment, decrement } = useCountStore();

  return (
    <div className="flex space-x-3 items-center ml-5">
      <div className="w-12 text-center">
        {count === 0 ? <Badge className="bg-yellow-500">Zero</Badge> : count}
      </div>
      <Button onClick={increment}>+</Button>
      <Button disabled={count <= 0} onClick={decrement}>
        -
      </Button>
    </div>
  );
};
