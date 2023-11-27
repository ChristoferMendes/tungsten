import { create } from "zustand";

interface Store {
  life: number;
  setLife: (life: number) => void;
}

export const useLife = create<Store>((set) => ({
  life: 40,
  setLife: (life) => set({ life }),
}));
