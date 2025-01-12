import { create } from "zustand";

interface State {
  isSidemenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
  isSidemenuOpen: false,

  openSideMenu: () => set({ isSidemenuOpen: true }),
  closeSideMenu: () => set({ isSidemenuOpen: false }),
}));
