import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCountsStore } from "@/hooks/use-counters-store";
import { Trash2 } from "lucide-react";

interface CounterRowProps {
  id: number;
  count: number;
}

export const CounterRow = ({ id, count }: CounterRowProps) => {
  const { increment, decrement, remove } = useCountsStore();

  return (
    <div className="flex space-x-2 items-center">
      <div className="w-12 text-center">
        {count === 0 ? <Badge className="bg-yellow-500">Zero</Badge> : count}
      </div>
      <Button onClick={() => increment(id)}>+</Button>
      <Button disabled={count <= 0} onClick={() => decrement(id)}>
        -
      </Button>
      <Button variant="destructive" onClick={() => remove(id)}>
        <Trash2 />
      </Button>
    </div>
  );
};
