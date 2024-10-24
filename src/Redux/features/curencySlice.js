import handleErrors from "../../helper/file";

const initialState = {
  currency: 0,
  error: "",
  isLoading: false,
};
export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case "currency/deposit":
      return {
        ...state,
        currency: action.payload,
        isLoading: false,
        error: "",
      };
    case "currency/error":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "currency/converting":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "currency/clearError":
      return {
        ...state,
        error: "",
      };

    default:
      return state;
  }
}
export function clearError() {
  return { type: "currency/clearError" };
}

export function deposit(mode, amount) {
  if (mode === "USD") {
    return { type: "currency/deposit", payload: amount };
  }
  return async function (dispatch) {
    try {
      dispatch({ type: "currency/converting" });
      const res = await fetch(
        `https://api.frankfurter.app/latest?base=USD&symbols=${mode}`,
        {
          method: "GET",
          headers: { accept: "application/json" },
        }
      );
      if (!res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
      dispatch({
        type: "currency/deposit",
        payload: (amount * data.rates[mode]).toFixed(2),
      });
    } catch (error) {
      const errorsMessage = handleErrors(error);
      dispatch({
        type: "currency/error",
        payload: errorsMessage,
      });
    }
  };
}