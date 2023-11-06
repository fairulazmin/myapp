import { create } from "zustand";

interface Counters {
  counts: number[];
  increment: (id: number) => void;
  decrement: (id: number) => void;
  add: () => void;
  remove: (id: number) => void;
}

export const useCountsStore = create<Counters>((set) => ({
  // initial state
  counts: [0, 1, 2, 3, 4],

  // methods for manipulating state
  increment: (id) =>
    set((state) => {
      const nums = [...state.counts];
      nums[id]++;
      return { counts: nums };
    }),

  decrement: (id) =>
    set((state) => {
      const nums = [...state.counts];
      nums[id]--;
      return { counts: nums };
    }),

  add: () =>
    set((state) => {
      const nums = [...state.counts, 0];
      return { counts: nums };
    }),

  remove: (id) =>
    set((state) => {
      const nums = [...state.counts];
      nums.splice(id, 1);
      return { counts: nums };
    }),
}));
