import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearError, handleCurrencyChange } from '../Redux/features/curencySlice';
import { toast } from 'react-toastify';

export default function CurrencyChange() {
    const [mode, setMode] = useState('USD')
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.currency.isLoading)
    const error = useSelector(state => state.currency.error)
    useEffect(() => {
        if (error) {
            toast.error(error )
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
                <option value={"JPY"}>JPY</option>
                <option value={"error"}>error</option>

            </select>
            <input type="text" value={amount} onChange={(e) => {
                setAmount((e.target.value))
            }
            } />
            <button onClick={() => {
                if (isNaN(amount) || amount <= 0) {
                    toast.error("please enter a valid amount!!")
                    return
                }
                dispatch(handleCurrencyChange({ mode, amount }))

            }}>
                {isLoading ? "loading" : "change currency"}
            </button>
        </div>
    )
}
