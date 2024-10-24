const initialState = {
  userName: "",
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/addUserName":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

export function addUserName(userName) {
  return { type: "user/addUserName", payload: userName };
}

