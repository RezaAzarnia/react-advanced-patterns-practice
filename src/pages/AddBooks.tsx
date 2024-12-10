import { useCallback, useState } from "react";
import { useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../components/Input";
import { useBookStore } from "../zustand/bookStore";
type BookInfo = {
  title: string;
  price: number;
};

export default function AddBooks() {
  const navigation = useNavigation();
  const addBook = useBookStore(state => state.addBook);
  const [bookValue, setBookValue] = useState<BookInfo>({
    title: "",
    price: 0,
  });


  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBookValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookValue.title.trim().length <= 0 || bookValue.price <= 0)
      return
    addBook(bookValue.title, bookValue.price);
    toast.success("book added");
    setBookValue({ title: '', price: 0 })
  }

  return (
    <div className="w-1/3 h-full p-4 m-auto border border-purple-600 rounded-md ">
      <h1 className="my-4 text-2xl font-bold text-center capitalize">
        add book part
      </h1>
      <form
        className="flex flex-col justify-between h-full space-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          label={"enter book name please!!"}
          name={"title"}
          onChange={handleInputChange}
          value={bookValue.title}
        />
        <Input
          label={"enter book price please!!"}
          name={"price"}
          type={"number"}
          onChange={handleInputChange}
          value={bookValue.price}
        />
        <button
          className="px-4 py-2 text-center text-white capitalize transition-colors rounded-md outline-none bg-emerald-700 hover:bg-emerald-800"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "loading..." : "add book"}
        </button>
      </form>
    </div>
  );
}
