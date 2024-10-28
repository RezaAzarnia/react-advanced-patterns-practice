import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/booksSlice";
import userSlice from "./features/userSlice";
import currencySlice from "./features/curencySlice";
const store = configureStore({
  reducer: {
    book: bookSlice,
    user: userSlice,
    currency : currencySlice
  },
});
export default store;

// import { applyMiddleware, combineReducers, createStore } from "redux";

// import bookReducer from "./features/booksSlice";
// import userReducer from "./features/userSlice";
// import { thunk } from "redux-thunk";
// import currencyReducer from "./features/curencySlice";
// const rootReducer = combineReducers({
//   book: bookReducer,
//   user: userReducer,
//   currency: currencyReducer,
// });
// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;
