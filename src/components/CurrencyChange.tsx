import { useEffect, useState } from "react";
import {
  clearError,
  handleCurrencyChange,
} from "../Redux/features/curencySlice";
import { toast } from "react-toastify";
import { useDispatchAction, useSelect } from "../hooks/useRedux";
import Input from "./Input";

export default function CurrencyChange() {
  const dispatch = useDispatchAction();
  const isLoading = useSelect((state) => state.currency.isLoading);
  const error = useSelect((state) => state.currency.error);
  const [mode, setMode] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error]);
  return (
    <div className="mt-5">
      <h1>currency change</h1>
      <label htmlFor="please enter your value and mode"></label>
      <select onChange={(e) => setMode(() => e.target.value)}>
        <option>select</option>
        <option value={"EUR"}>EUR</option>
        <option value={"JPY"}>JPY</option>
        <option value={"error"}>error</option>
      </select>
      <Input
        name="currency"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAmount(Number(e.target.value));
        }}
        label={"please provide the amount"}
        type="number"
      />
      <button
        onClick={() => {
          console.log(!!mode);
          if (!mode) {
            toast.error("please choose your mode!!");
            return;
          }
          if (isNaN(amount) || amount <= 0) {
            toast.error("please enter a valid amount!!");
            return;
          }
          dispatch(handleCurrencyChange({ mode, amount }));
        }}
      >
        {isLoading ? "loading" : "change currency"}
      </button>
    </div>
  );
}
