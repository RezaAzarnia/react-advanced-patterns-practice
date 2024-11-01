import { Book } from "@/src/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  favoriteBooks: Book[];
} = {
  favoriteBooks: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.favoriteBooks.push(action.payload);
    },
    markAsRead(state, action: PayloadAction<number>) {
      state.favoriteBooks = state.favoriteBooks.map((book: Book) =>
        book.id === action.payload ? { ...book, isRead: !book.isRead } : book
      );
    },
    removeBook(state, action: PayloadAction<number>) {
      state.favoriteBooks = state.favoriteBooks.filter(
        (book: Book) => book.id !== action.payload
      );
    },
  },
});
export default bookSlice.reducer;
export const { addBook, markAsRead, removeBook } = bookSlice.actions;

// const initialState = {
//   favoriteBooks: [],

// };

// export default function bookReducer(state = initialState, action) {
//   switch (action.type) {
//     case "book/addBook":
//       return {
//         ...state,
//         favoriteBooks: [...state.favoriteBooks, action.payload],
//       };
//     case "book/markAsRead":
//       return {
//         ...state,
//         favoriteBooks: state.favoriteBooks.map((book) =>
//           book.id === action.payload ? { ...book, isRead: !book.isRead } : book
//         ),
//       };
//     case "book/removeBook":
//       return {
//         ...state,
//         favoriteBooks: state.favoriteBooks.filter(
//           (book) => book.id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// }

// export function addBook(book) {
//   return {
//     type: "book/addBook",
//     payload: {
//       ...book,
//       id: new Date().getTime(),
//       isRead: false,
//     },
//   };
// }

// export function markRead(bookId) {
//   return {
//     type: "book/markAsRead",
//     payload: bookId,
//   };
// }

// export function removeBook(bookId) {
//   return {
//     type: "book/removeBook",
//     payload: bookId,
//   };
// }
