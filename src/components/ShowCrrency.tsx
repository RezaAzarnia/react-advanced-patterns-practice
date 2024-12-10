import { useCurrencyStore } from "../zustand/currencyStore"

export default function ShowCrrency() {
    const currency = useCurrencyStore(state=>state.currency)
    return (
    <div>ShowCrrency : {currency}</div>
  )
}
