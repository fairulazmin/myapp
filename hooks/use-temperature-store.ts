import { create } from "zustand";

interface Temp {
  temp: { degree?: number | string; kelvin?: number | string };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "degree" | "kelvin",
  ) => void;
  onReset: () => void;
}

// Must reset to clear all values
const temp = { degree: "", kelvin: "" };

export const useTempStore = create<Temp>((set) => ({
  // initial state
  temp: {},

  // methods for manipulating state
  onChange: (e, type) => {
    let num: string | number = e.target.value;
    if (num === "") {
      return set({ temp });
    } else {
      num = Number(num);
      switch (type) {
        case "degree":
          set({ temp: { degree: num, kelvin: num + 273.15 } });
          break;
        case "kelvin":
          set({ temp: { degree: num - 273.15, kelvin: num } });
          break;
      }
    }
  },
  onReset: () => {
    set({ temp });
  },
}));
