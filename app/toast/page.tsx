"use client";

import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

const ToastPage = () => {
  const handleToast = () => toast.success("Berjaya");

  return (
    <div className="flex items-center justify-center h-full">
      <Button onClick={handleToast}>Make a Toast</Button>
    </div>
  );
};

export default ToastPage;
