import { create } from "zustand";

interface useReadingModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useReadingModal = create<useReadingModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
