import { create } from "zustand";

interface Temp {
  temp: { degree: number | string; kelvin: number | string };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "degree" | "kelvin",
  ) => void;
}

export const useTempStore = create<Temp>((set) => ({
  // initial state
  temp: { degree: "", kelvin: "" },

  // methods for manipulating state
  onChange: (e, type) => {
    console.log("e: ", e.target.value);
    const num = Number(e.target.value);
    switch (type) {
      case "degree":
        set({ temp: { degree: num, kelvin: num + 273.15 } });
        break;
      case "kelvin":
        set({ temp: { kelvin: num, degree: num - 273.15 } });
        break;
    }
  },
}));
