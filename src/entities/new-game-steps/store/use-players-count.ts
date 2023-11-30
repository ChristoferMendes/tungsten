import { create } from "zustand";


interface Store {
  count: number;
  setCount: (count: number) => void;
}

export const usePlayersCount = create<Store>(set => ({
  count: 0,
  setCount: (count: number) => set({ count }),
}))
