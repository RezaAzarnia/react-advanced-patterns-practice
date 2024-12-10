import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "./Input";
import { useCurrencyStore } from "../zustand/currencyStore";

export default function CurrencyChange() {

  const isLoading = useCurrencyStore(state => state.isLoading);
  const error = useCurrencyStore(state => state.error);
  const changeCurrenci = useCurrencyStore(state => state.changeCurrenci);

  const [mode, setMode] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  useEffect(() => {
    if (error) {
      toast.error(error);
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
          // console.log(!!mode);
          if (!mode) {
            toast.error("please choose your mode!!");
            return;
          }
          if (isNaN(amount) || amount <= 0) {
            toast.error("please enter a valid amount!!");
            return;
          }
          changeCurrenci(mode, amount)
        }}
      >
        {isLoading ? "loading" : "change currency"}
      </button>
    </div>
  );
}
