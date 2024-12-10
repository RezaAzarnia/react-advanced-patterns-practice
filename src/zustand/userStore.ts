import { create } from "zustand";
import { persist } from "zustand/middleware";
type User = {
  userName: string;
  addUserName: (firstName: string, lastName: string) => void;
  clearName: () => void;
};
export const useUserStore = create<User>()(
  persist(
    (set) => ({
      userName: "",
      addUserName(firstName, lastName) {
        set({ userName: firstName + " " + lastName });
      },
      clearName() {
        set({ userName: "" });
      },
    }),
    { name: "user" }
  )
);
