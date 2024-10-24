import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearError, deposit } from '../Redux/features/curencySlice';

export default function CurrencyChange() {
    const [mode, setMode] = useState('USD')
    const [currency, setCurrency] = useState(0);
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.currency.isLoading)
    const error = useSelector(state => state.currency.error)
    useEffect(() => {
        if (error) {
            alert(error)
            dispatch(clearError());
        }
    }, [error])
    return (
        <div style={{ margin: "20px" }}>
            <h1>currency change</h1>
            <label htmlFor="please enter your value and mode"></label>
            <select onChange={(e) => setMode(e.target.value)}>
                <option>select</option>
                <option value={"USD"}>USD</option>
                <option value={"EUR"}>EUR</option>
                <option value={"eu"}>not know what is this</option>
            </select>
            <input type="text" value={currency} onChange={(e) => {
                setCurrency((e.target.value))
            }
            } />
            <button onClick={() => {
                if (isNaN(currency)) {
                    alert("ener number please")
                    return
                }
                dispatch(deposit(mode, currency))

            }}>
                {isLoading ? "loading" : "change currency"}
            </button>
        </div>
    )
}
