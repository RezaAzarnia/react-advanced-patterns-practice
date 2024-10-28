import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
  },
  reducers: {
    addUserName: {
      prepare(first, second) {
        return {
          payload: { first, second },
        };
      },
      reducer(state, action) {
        state.userName = action.payload.first + " " + action.payload.second;
      },
    },
    clearName(state) {
      state.userName = "";
    },
  },
});

export default userSlice.reducer;
export const { addUserName  , clearName} = userSlice.actions;

// const initialState = {
//   userName: "",
// };

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case "user/addUserName":
//       return { ...state, userName: action.payload };
//     default:
//       return state;
//   }
// }

// export function addUserName(userName) {
//   return { type: "user/addUserName", payload: userName };
// }
