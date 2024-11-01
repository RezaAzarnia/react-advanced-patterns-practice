import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { userName: string } = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserName: {
      prepare(firstName: string, lastName: string) {
        return {
          payload: { firstName, lastName },
        };
      },
      reducer(state, action: PayloadAction<{ firstName: string; lastName: string }>) {
        state.userName = action.payload.firstName + " " + action.payload.lastName;
      },
    },
    clearName(state) {
      state.userName = "";
    },
  },
});

export default userSlice.reducer;
export const { addUserName, clearName } = userSlice.actions;

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
