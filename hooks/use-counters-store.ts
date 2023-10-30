import { create } from "zustand";

interface Counters {
  count: number[];
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export const useCountsStore = create<Counters>((set) => ({
  // initial state
  count: [0, 1, 5, 10],

  // methods for manipulating state
  increment: (id: number) =>
    set((state) => {
      const num: number = state.count[id];
      state.count.splice(id, 1, num + 1);
      return { count: state.count };
    }),
  decrement: (id: number) =>
    set((state) => {
      const num: number = state.count[id];
      state.count.splice(id, 1, num - 1);
      return { count: state.count };
    }),
}));

/**


const createCounter: StateCreator<Counter> = (set) => ({
  count: [0, 1, 5, 10],
  increment: (id: number) =>
    set((state) => {
      const num: number = state.count[id];
      state.count.splice(id, 1, num + 1);
      return { count: state.count };
    }),
  decrement: (id: number) =>
    set((state) => {
      const num: number = state.count[id];
      state.count.splice(id, 1, num - 1);
      return { count: state.count };
    }),
});

export const useCountStore = create<Counter>()((...a) => ({
  ...createCounter(...a),
}));

**/
