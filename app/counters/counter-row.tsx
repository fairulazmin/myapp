import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCountsStore } from "@/hooks/use-counters-store";

export const CounterRow = () => {
  const { increment, decrement } = useCountsStore();

  return (
    <>
      <div className="w-12 text-center">
        {count === 0 ? <Badge className="bg-yellow-500">Zero</Badge> : count}
      </div>
      <Button onClick={increment}>+</Button>
      <Button disabled={count <= 0} onClick={decrement}>
        -
      </Button>
    </>
  );
};
