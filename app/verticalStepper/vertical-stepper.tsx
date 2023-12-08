"use client";

import { useState } from "react";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="max-w-md">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.label} className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <p>{step.label}</p>
            </div>
            <p>{step.description}</p>
            <div className="space-x-2">
              <button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                {index === steps.length - 1 ? "Finish" : "Continue"}
              </button>
              <button
                onClick={handleBack}
                disabled={index === 0}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Back
              </button>
            </div>
          </div>
        ))}
      </div>
      {activeStep === steps.length && (
        <div className="bg-gray-100 p-4 mt-4 rounded">
          <p className="font-bold text-lg">
            All steps completed - you're finished
          </p>
          <button
            onClick={handleReset}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default VerticalStepper;
