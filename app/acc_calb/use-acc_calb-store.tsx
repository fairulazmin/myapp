import { create } from "zustand";

interface Data {
  freq: number;
  dev: number;
  sensitivity?: number;
  phase?: number;
  uncertainty: number;
}

interface CalibrationCerts {
  datas: Data[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
    freq: number,
  ) => void;
  add: () => void;
  remove: (freq: number) => void;
}

export const useCountsStore = create<CalibrationCerts>((set) => ({
  // initial state
  datas: [
    { freq: 0.5, dev: 2.7, phase: 7.7, uncertainty: 1.8 },
    { freq: 1, dev: 2.5, phase: 3.4, uncertainty: 1.0 },
    { freq: 2, dev: 2.2, phase: 1.4, uncertainty: 1.0 },
    { freq: 5, dev: 1.7, phase: 0.2, uncertainty: 1.0 },
    { freq: 7, dev: 1.5, phase: 0.0, uncertainty: 1.0 },
    { freq: 10, dev: 1.2, phase: -0.2, uncertainty: 1.0 },
    { freq: 15, dev: 1.3, uncertainty: 1.5 },
    { freq: 30, dev: 0.8, uncertainty: 1.5 },
    { freq: 50, dev: 0.5, uncertainty: 1.5 },
    { freq: 100, dev: 0.0, uncertainty: 1.0 },
    { freq: 300, dev: -0.9, uncertainty: 1.0 },
    { freq: 500, dev: -1.3, uncertainty: 1.0 },
    { freq: 1000, dev: -1.8, uncertainty: 1.0 },
    { freq: 3000, dev: -2.4, uncertainty: 2.5 },
    { freq: 5000, dev: -2.2, uncertainty: 2.5 },
    { freq: 7000, dev: -1.5, uncertainty: 2.5 },
    { freq: 10000, dev: 0.1, uncertainty: 2.5 },
  ],

  // methods for manipulating state
  onChange: (e, type, freq) => {},
  add: () => {},
  remove: (freq) => {},
}));

// increment: (id) =>
//   set((state) => {
//     const nums = [...state.counts];
//     nums[id]++;
//     return { counts: nums };
//   }),

// decrement: (id) =>
//   set((state) => {
//     const nums = [...state.counts];
//     nums[id]--;
//     return { counts: nums };
//   }),

// add: () =>
//   set((state) => {
//     const nums = [...state.counts, 0];
//     return { counts: nums };
//   }),

// remove: (id) =>
//   set((state) => {
//     const nums = [...state.counts];
//     nums.splice(id, 1);
//     return { counts: nums };
//   }),
