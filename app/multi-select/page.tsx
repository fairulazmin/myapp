"use client";

import { MultiSelect } from "./multi-select";
import { Select } from "./select";
import {
  HelpCircle,
  Circle,
  Timer,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];

const MultiSelectPage = async () => {
  return (
    <div className="container space-y-6">
      <h2 className="text-2xl font-semibold text-center">Multi select</h2>
      <div className="p-6 rounded-lg bg-sky-100 shadow-md space-y-4">
        <MultiSelect title="Status" options={statuses} />
        <MultiSelect title="Priority" options={priorities} />
      </div>
      <Select title="Status" options={statuses} />
      <Select title="Priority" options={priorities} />
    </div>
  );
};

export default MultiSelectPage;
