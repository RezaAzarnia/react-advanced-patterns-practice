import { useSelect } from "../hooks/useRedux"

export default function ShowCrrency() {
    const currency = useSelect(state=>state.currency.currency)
    return (
    <div>ShowCrrency : {currency}</div>
  )
}
