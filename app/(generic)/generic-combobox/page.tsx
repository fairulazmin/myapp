import z from "zod";
import { Combobox } from "./combobox";
import { AccelerometerForm } from "./accelerometer-form";

const accelerometers: AccelerometerFormValues[] = [
  {
    id: 12,
    equipment: "Reference Accelerometer",
    serial: "3318",
    manufacturer: "PCB",
    model: "301A11",
    accuracy: "±2%",
    range: "N/A",
    lab: "VTS",
    location: "VTS Control Room",
    limitation: "N/A",
    status: "Calibration on Request",
    createdAt: new Date("2024-01-22T01:49:10.057Z"),
    updatedAt: new Date("2024-01-22T01:49:10.057Z"),
    accelerometerCalibrationId: null,
  },
  {
    id: 25,
    equipment: "Accelerometer (Single Axis)",
    serial: "65185",
    manufacturer: "Brüel & Kjær",
    model: "4513-001",
    accuracy: "±10%",
    range: "N/A",
    lab: "VTS",
    location: "VTS Control Room",
    limitation: "N/A",
    status: "Calibration on Request",
    createdAt: new Date("2024-01-22T01:49:10.098Z"),
    updatedAt: new Date("2024-01-22T01:49:10.098Z"),
    accelerometerCalibrationId: null,
  },
  {
    id: 127,
    equipment: "Accelerometer (Single Axis)",
    serial: "2130550",
    manufacturer: "KISTLER",
    model: "8702B",
    accuracy: "±5%",
    range: "N/A",
    lab: "VTS",
    location: "VTS Control Room",
    limitation: "N/A",
    status: "Calibration on Request",
    createdAt: new Date("2024-01-22T01:49:10.382Z"),
    updatedAt: new Date("2024-01-22T01:49:10.568Z"),
    accelerometerCalibrationId: null,
  },
];

const GenericComboboxPage = () => {
  return (
    <div className="container space-y-6">
      <h2 className="text-2xl">Generic Combobox</h2>
      <Combobox items={accelerometers} name="accelerometer" />
      <AccelerometerForm />
    </div>
  );
};

export default GenericComboboxPage;
