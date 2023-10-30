"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const nameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
    console.log("Name: ", name);
  };

  const ageHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAge(parseFloat(e.currentTarget.value));
    console.log("Age: ", age);
  };

  return (
    <div>
      <div>Handler training</div>
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
