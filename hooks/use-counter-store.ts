import { create, StateCreator } from "zustand";

interface Counter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCountStore = create<Counter>((set) => ({
  //initial state
  count: 0,

  //methods for manipulating state
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

/**

const createCounter: StateCreator<Counter> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
});

export const useCountStore = create<Counter>()((...a) => ({
  ...createCounter(...a),
}));

**/
