"use client";

import React, { useEffect, useRef } from "react";
import { UserInputForm } from "./user-input-form";
import { UserSelectForm } from "./user-select-form";

const GenericInputPage = () => {
  return (
    <div className="container space-y-3">
      <h1>Generic Page </h1>
      <UserSelectForm />
    </div>
  );
};

export default GenericInputPage;
