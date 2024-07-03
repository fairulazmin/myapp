"use client";

import React, { useEffect, useRef } from "react";
import { UserForm } from "./user-form";
import { Input, Input2, InputThree, Input3, Input4 } from "./input";
import { Button } from "@/components/ui/button";

const GenericInputPage = () => {
  return (
    <div className="container space-y-3">
      <h1>Generic Input Page </h1>
      <UserForm />
    </div>
  );
};

export default GenericInputPage;
