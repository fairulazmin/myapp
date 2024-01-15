"use client";

import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const nameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    console.log("Name: ", name);
  };

  const ageHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAge(parseFloat(e.currentTarget.value));
    console.log("Age: ", age);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl mb-3">Input handler</div>
      <div className="w-56 space-y-5">
        <Input
          name="name"
          placeholder="Name"
          type="text"
          value={name ? name : ""}
          onChange={nameHandler}
        />
        <Input
          className="overflow-y-hidden"
          name="age"
          placeholder="Age"
          type="number"
          value={age ? age : ""}
          onChange={ageHandler}
        />
      </div>
    </div>
  );
};

export default App;
