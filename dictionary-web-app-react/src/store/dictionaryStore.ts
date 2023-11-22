// @ts-nocheck
import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useDictionaryStore = create<BearState>()((set, get) => ({
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
  response: {
    loading: false,
    error: false,
    jsonData: {},
  },
  setTheme: () =>
    set((state) => ({
      theme: {
        ...state.theme,
        active: state.theme.active === "light" ? "dark" : "light",
      },
    })),
  setLoading: (loading) =>
    set((state) => ({
      response: {
        ...state.response,
        loading,
      },
    })),
  setError: (error) =>
    set((state) => ({
      response: {
        ...state.response,
        error,
      },
    })),
  setJsonData: (jsonData) =>
    set((state) => ({
      response: {
        ...state.response,
        jsonData,
      },
    })),
  getWord: async (word) => {
    //...
    const setJsonData = get().setJsonData;
    const setError = get().setError;
    const setLoading = get().setLoading;
    setJsonData({});
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!res.ok) {
        throw new Error(`${res.status}`);
      } else {
        const jsonData = await res.json();
        setTimeout(() => {
          setJsonData(jsonData);
          setLoading(false);
        }, 500);
      }
    } catch (err) {
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 500);
    }
  },
}));
