import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    favoriteBooks: [],
  },
  reducers: {
    addBook(state, action) {
      state.favoriteBooks.push(action.payload);
    },
    markAsRead(state, action) {
      state.favoriteBooks = state.favoriteBooks.map((book) =>
        book.id === action.payload ? { ...book, isRead: !book.isRead } : book
      );
    },
    removeBook(state, action) {
      state.favoriteBooks = state.favoriteBooks.filter(
        (book) => book.id !== action.payload
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
