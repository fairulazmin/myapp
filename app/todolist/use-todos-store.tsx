import { create } from "zustand";

interface Todo {
  description: string;
  status: boolean;
}

interface TodoStore {
  todos: Todo[];
  descriptionAction: (value: string, id: number) => void;
  statusAction: (id: number) => void;
  deleteAction: (id: number) => void;
  addAction: () => void;
}

const todos: Todo[] = [
  {
    description: "Buang sampah",
    status: true,
  },
  {
    description: "Belajar",
    status: false,
  },
  {
    description: "Coding",
    status: true,
  },
];

export const useTodosStore = create<TodoStore>((set) => ({
  todos,
  descriptionAction: (value, id) =>
    set((state) => {
      const todos = [...state.todos];
      todos[id] = { ...todos[id], description: value };
      return { todos };
    }),
  statusAction: (id) =>
    set((state) => {
      const todos = [...state.todos];
      todos[id] = { ...todos[id], status: !todos[id].status };
      return { todos };
    }),
  deleteAction: (id) =>
    set((state) => {
      const todos = [...state.todos];
      todos.splice(id, 1);
      return { todos };
    }),
  addAction: () =>
    set((state) => ({
      todos: [...state.todos, { description: "", status: false }],
    })),
}));
