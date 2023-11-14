import { create } from "zustand";
import { Mu } from "./typedef";

interface Mus {
  // Initial state
  sources: Mu[];

  // Methods for manipulating state
  titleAction: (e: React.FormEvent<HTMLInputElement>, id: number) => void;
  valueAction: () => void;
  distributionAction: (e: string, id: number) => void;
  typeAction: (e: string, id: number) => void;
  divisorAction: (e: string, id: number) => void;
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
      switch (e) {
        case "Normal":
          sources[id].type = "A";
          break;
        case "T-distribution":
          sources[id].type = "A";
          break;
        case "Rectangular":
          sources[id].divisor = "√3";
          sources[id].type = "B";
          break;
        case "U-shaped":
          sources[id].divisor = "√2";
          sources[id].type = "B";
          break;
        case "Triangular":
          sources[id].divisor = "√6";
          sources[id].type = "B";
          break;
      }
      return { sources };
    }),
  typeAction: (e, id) => {
    set((state) => {
      const sources = [...state.sources];
      switch (e) {
        case "A":
          if (
            sources[id].distribution !== "Rectangular" ||
            "U-shaped" ||
            "Triangular"
          ) {
            sources[id].distribution = "Normal";
          }
          break;
        case "B":
          if (sources[id].distribution !== "Normal" || "T-distribution") {
            sources[id].distribution = "Rectangular";
          }
          break;
      }
      return { sources };
    });
  },
  divisorAction: (e, id) => {
    set((state) => {
      const sources = [...state.sources];
      switch (e) {
        case "√3":
          sources[id].distribution = "Rectangular";
          sources[id].type = "B";
          break;
        case "√2":
          sources[id].distribution = "U-shaped";
          sources[id].type = "B";
          break;
        case "√6":
          sources[id].distribution = "Triangular";
          sources[id].type = "B";
          break;
      }
      return { sources };
    });
  },
  ciAction: () => {},
}));
