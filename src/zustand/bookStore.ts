import { create } from "zustand";
import { Book } from "../types";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type BooksStore = {
  books: Book[];
  addBook: (title: string, price: number) => void;
  markAsread: (id: number) => void;
  removeBook: (id: number) => void;
};
export const useBookStore = create<BooksStore>()(
  devtools(
    persist(
      (set) => ({
        books: [],
        addBook: (title: string, price: number) => {
          set((state) => ({
            books: [
              ...state.books,
              {
                id: Math.floor(Number(new Date())),
                isRead: false,
                title,
                price,
              },
            ],
          }));
        },
        markAsread: (id: number) => {
          set((state) => ({
            books: state.books.map((book) => {
              return book.id == id ? { ...book, isRead: !book.isRead } : book;
            }),
          }));
        },
        removeBook(id: number) {
          set((state) => ({
            books: state.books.filter((book) => book.id !== id),
          }));
        },
      }),
      {
        name: "books",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
