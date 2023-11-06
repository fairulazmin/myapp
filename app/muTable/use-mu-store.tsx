import { create } from "zustand";
import { Mu } from "./typedef";

interface Mus {
  // Initial state
  sources: Mu[];

  // Methods for manipulating state
  titleAction: (e: React.FormEvent<HTMLInputElement>, id: number) => void;
  valueAction: () => void;
  distributionAction: (e: string, id: number) => void;
  typeAction: () => void;
  divisorAction: () => void;
  ciAction: () => void;
}

const sources: Mu[] = [
  {
    title: "Calibration Cert of Multimeter",
    value: 0.01,
    distribution: "Normal",
    type: "B",
    divisor: 2,
    ui: 0.005,
    ci: 1,
    vi: "∞",
  },
  {
    title: "Accuracy of Multimeter",
    value: 0.011,
    distribution: "Rectangular",
    type: "B",
    divisor: "√3",
    ui: 0.006,
    ci: 1,
    vi: "∞",
  },
  {
    title: "Resolution of Multimeter",
    value: 0.0001,
    distribution: "Rectangular",
    type: "B",
    divisor: "√3",
    ui: 0.0,
    ci: 1,
    vi: "∞",
  },
];

export const useMuStore = create<Mus>((set) => ({
  sources,
  titleAction: (e, id) =>
    set((state) => {
      const sources = [...state.sources];
      sources[id] = { ...sources[id], title: e.currentTarget.value };
      return { sources };
    }),
  valueAction: () => {},
  distributionAction: (e, id) =>
    set((state) => {
      const sources = [...state.sources];
      sources[id].distribution = e;
      switch (e) {
        case "Rectangular":
          sources[id].divisor = "√3";
          break;
        case "U-shaped":
          sources[id].divisor = "√2";
          break;
        case "Triangular":
          sources[id].divisor = "√6";
          break;
      }
      return { sources };
    }),
  typeAction: () => {},
  divisorAction: () => {},
  ciAction: () => {},
}));
