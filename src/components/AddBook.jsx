import { useState } from "react"
import { addBook } from "../Redux/features/booksSlice"
import { useDispatch } from "react-redux"

export default function AddBook() {
    const [bookValue, setBookValue] = useState({
        title: '',
        price: ''
    })
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setBookValue({
            ...bookValue,
            [e.target.name]: e.target.value,
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (!bookValue.price || bookValue.price <= 0) {
            return
        }
        dispatch(addBook(bookValue))
        setBookValue({ title: "", price: '' })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="">enter book name</label>
            <input type="text" name="title" onChange={handleInputChange} value={bookValue.title} />
            <label htmlFor="">enter book price</label>
            <input type="number" name="price" onChange={handleInputChange} value={bookValue.price} />
            <button onClick={() => console.log(bookValue)}>add book</button>
        </form>
    )
}
