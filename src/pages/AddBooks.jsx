import { Form, useActionData } from "react-router-dom"
import { addBook } from "../Redux/features/booksSlice"
import store from "../Redux/store"
import { toast } from "react-toastify";
import Input from "../components/Input";
import { useCallback, useEffect, useState } from "react";

export async function addBookAction({ request }) {

    const formData = await request.formData()

    const id = Math.floor(Math.random() * 100000);

    let errors = {}
    
    const bookData = {
        price: formData.get("price"),
        title: formData.get("title"),
    }
    Array.from(Object.entries(bookData), (item) => {
        if (item[1].length <= 0) {
            errors = { ...errors, type: 'error', [item[0]]: `please fill the ${item[0]} value!!` }
        }
    })


    if (Object.keys(errors).length) {
        return errors
    } else {
        store.dispatch(addBook({ ...bookData, id }))
        toast.success(() => "your book added🙂", { theme: "colored" })
        return { success: true }
    }
}

export default function AddBooks() {
    const actionData = useActionData()

    const [bookValue, setBookValue] = useState({
        title: '',
        price: '',
    })

    useEffect(() => {
        if (actionData?.success) {
            setBookValue({ title: "", price: "" })
        }
    }, [actionData])

    const handleInputChange = useCallback((e) => {
        setBookValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }, [])



    return (
        <div className="w-1/3 h-full p-4 m-auto border border-purple-600 rounded-md ">
            <h1 className="my-4 text-2xl font-bold text-center capitalize">add book part</h1>
            <Form method="post" className="flex flex-col justify-between h-full space-y-4">
                <Input
                    label={"enter book name please!!"}
                    name={"title"}
                    errorData={actionData}
                    onChange={handleInputChange}
                    value={bookValue.title}
                />
                <Input
                    label={"enter book price please!!"}
                    name={"price"}
                    errorData={actionData}
                    onChange={handleInputChange}
                    value={bookValue.price}
                />
                <button
                    className='px-4 py-2 text-center text-white capitalize transition-colors rounded-md outline-none bg-emerald-700 hover:bg-emerald-800'
                >add book</button>
            </Form>
        </div>)
}

