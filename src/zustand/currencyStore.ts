import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { changeCurrency } from "../services/currency";

type InitialState = {
  currency: number;
  error: string | undefined;
  isLoading: boolean;
  changeCurrenci: (mode: string, amount: number) => void;
};
export const useCurrencyStore = create<InitialState>()(
  devtools((set) => ({
    currency: 0,
    error: "",
    isLoading: false,
    changeCurrenci: async (mode: string, amount: number) => {
      set({ isLoading: true });
      try {
        const data = await changeCurrency(mode);
        const curencyValue = Number(
          (amount * data.data[mode].value).toFixed(3)
        );
        set({ currency: curencyValue });
      } catch (error) {
        if (error instanceof Error) {
          set({ error: error?.message });
        }
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);
