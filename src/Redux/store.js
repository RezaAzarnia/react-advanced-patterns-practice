import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./features/booksSlice";
import userSlice from "./features/userSlice";
import currencySlice from "./features/curencySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["book", "user"],
};
const reducers = combineReducers({
  book: bookSlice,
  user: userSlice,
  currency: currencySlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //disable the check serilize values for redux-toolkit because toolkit check the serlize value and these functions are not serilize value
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ],
      },
    }),
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
