"use client";

import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

export const Toast = () => {
  const handleToast = () => toast.success("Berjaya");

  return <Button onClick={handleToast}>Make a Toast</Button>;
};
