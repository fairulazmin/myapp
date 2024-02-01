"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UseStatePage = () => {
  const [count, setCount] = useState(0);
  const [toCtrl, setToCtrl] = useState<number[]>(Array(5).fill(0));

  return (
    <>
      <div>
        <h2>Try useState</h2>
        <div>Total count: {count}</div>
        <Button onClick={() => setCount((prev) => prev + 1)}>Add</Button>
      </div>
      <div className="mt-8">
        <h2>Try useState on array</h2>
        <div className="space-y-2">
          {toCtrl.map((arr, idx) => (
            <div className="flex items-center space-x-3">
              <h1>{idx}</h1>
              <Input
                value={arr}
                onChange={(e) =>
                  setToCtrl((prev) => {
                    const newArr = [...prev];
                    newArr[idx] = Number(e.target.value);
                    return newArr;
                  })
                }
                className="w-[300px]"
              />
              <h3>{toCtrl[idx] * 2}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default UseStatePage;
