"use client";

import React, { useEffect, useRef } from "react";
import { UserForm } from "./user-form";
import { Input, Input2, InputThree, Input3, Input4 } from "./input";
import { Button } from "@/components/ui/button";

const GenericInputPage = () => {
  return (
    <div className="container space-y-3">
      <h1>Generic Input Page </h1>
      <Input placeholder="First name" className="bg-blue-100" />
      <Input2 placeholder="Last name" className="bg-red-100" />

      {/* Will caused an error */}
      {/* <InputThree /> */}

      <Input3 placeholder="Company" className="bg-sky-100" />
      <Input4 placeholder="Address" className="bg-gray-100" />
      <UserForm />
    </div>
  );
};

export default GenericInputPage;
