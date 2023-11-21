import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useDictionaryStore = create<BearState>()((set) => ({
  bears: 1,
  theme: {
    active: "light",
    light: {
      primary: "#757575",
      secondary: "#2d2d2d",
      accent: "#a445ed",
      background: "#ffffff",
      background_alt: "#f4f4f4",
    },
    dark: {
      primary: "#757575",
      secondary: "#ffffff",
      accent: "#a445ed",
      background: "#050505",
      background_alt: "#1f1f1f ",
    },
  },
  setTheme: () =>
    set((state) => ({
      theme: {
        ...state.theme,
        active: state.theme.active === "light" ? "dark" : "light",
      },
    })),
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
