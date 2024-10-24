import { useSelector } from "react-redux"

export default function ShowCrrency() {
    const currency = useSelector(state=>state.currency.currency)
    return (
    <div>ShowCrrency : {currency}</div>
  )
}
