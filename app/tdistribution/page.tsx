"use client";

import jStat from "jstat";
import { create, all } from "mathjs";
import { toast } from "react-hot-toast";
import { useReadingModal } from "../hooks/use-reading-modal";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const App = () => {
  const [number, setNumber] = useState("");

  const math = create(all, {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.currentTarget.value);
  };

  const handleCalc = () => {
    try {
      setNumber(math.evaluate(number).toString());
    } catch (error) {
      toast.error("Formula is not valid");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalc();
      e.currentTarget.blur();
    }
  };

  const numbers = [0, 3, 1, 20, 9, 5, 10, 1, 10, 4, 14, 2, 4, 4, 5];
  const n = numbers.length;
  const dof = n - 1;
  const s = jStat.stdev(numbers);
  const mean = jStat.mean(numbers);
  const cl = 98;
  const alpha = (100 - cl) / 100;
  const t = jStat.studentt.inv(1 - alpha / 2, dof);

  return (
    <div>
      <div className="text-2xl font-bold text-center my-5">
        T-distribution calculator
      </div>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Sample size: {n}</p>
      <p>Degree of freedom: {dof}</p>
      <p>Mean: {mean}</p>
      <p>Standard deviation: {s}</p>
      <p>Confidence level: {cl}%</p>
      <p>Alpha: {alpha}</p>
      <p>T: {t}</p>

      <Input
        value={number}
        onChange={handleChange}
        onBlur={handleCalc}
        onKeyUp={handleKeyPress}
      />

      <Dialog>
        <DialogTrigger>
          <Button>Readings</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Readings</DialogTitle>
            <DialogDescription>
              Evaluation of uncertainty from series of observations
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
