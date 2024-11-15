import { changeCurrency } from "../../services/currency";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  currency: number;
  error: string | undefined;
  isLoading: boolean;
};

const initialState: InitialState = {
  currency: 0,
  error: "",
  isLoading: false,
};

export const handleCurrencyChange = createAsyncThunk(
  "currency/changeCurrency",
  async ({ mode, amount }: { mode: string; amount: number }) => {
    const data = await changeCurrency(mode);

    return { data, amount, mode };
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleCurrencyChange.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      handleCurrencyChange.fulfilled,
      (
        state: InitialState,
        action: PayloadAction<{
          mode: string;
          amount: number;
          data: { rates: { [key: string]: number } };
        }>
      ) => {
        state.isLoading = false;
        //calculate the currency change value by add amout to rate with the mode of that
        state.currency = Number(
          (
            action.payload.amount *
            action.payload.data.rates[action.payload.mode]
          ).toFixed(2)
        );
      }
    );
    builder.addCase(handleCurrencyChange.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        action?.error?.message && action?.error?.message.includes("Failed to fetch")
          ? "network error"
          : action.error.message;
    });
  },
});

export default currencySlice.reducer;
export const { clearError } = currencySlice.actions;

// import handleErrors from "../../helper/file";

// const initialState = {
//   currency: 0,
//   error: "",
//   isLoading: false,
// };
// export default function currencyReducer(state = initialState, action) {
//   switch (action.type) {
//     case "currency/deposit":
//       return {
//         ...state,
//         currency: action.payload,
//         isLoading: false,
//         error: "",
//       };
//     case "currency/error":
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     case "currency/converting":
//       return {
//         ...state,
//         isLoading: !state.isLoading,
//       };
//     case "currency/clearError":
//       return {
//         ...state,
//         error: "",
//       };

//     default:
//       return state;
//   }
// }
// export function clearError() {
//   return { type: "currency/clearError" };
// }

// export function deposit(mode, amount) {
//   if (mode === "USD") {
//     return { type: "currency/deposit", payload: amount };
//   }
//   return async function (dispatch) {
//     try {
//       dispatch({ type: "currency/converting" });
//       const res = await fetch(
//         `https://api.frankfurter.app/latest?base=USD&symbols=${mode}`,
//         {
//           method: "GET",
//           headers: { accept: "application/json" },
//         }
//       );
//       if (!res.ok) {
//         throw new Error(res.status);
//       }
//       const data = await res.json();
//       dispatch({
//         type: "currency/deposit",
//         payload: (amount * data.rates[mode]).toFixed(2),
//       });
//     } catch (error) {
//       const errorsMessage = handleErrors(error);
//       dispatch({
//         type: "currency/error",
//         payload: errorsMessage,
//       });
//     }
//   };
// }
