import { useCallback, useEffect, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { addBook } from "../Redux/features/booksSlice";
import { toast } from "react-toastify";
import store from "../Redux/store";
import Input from "../components/Input";
type ActionResult = { success: boolean; [key: string]: string | boolean };

type BookInfo = {
  title: string;
  price: number;
};

export default function AddBooks() {
  const navigation = useNavigation();
  const actionData = useActionData() as ActionResult;
  const [bookValue, setBookValue] = useState<BookInfo>({
    title: "",
    price: 0,
  });

  useEffect(() => {
    if (actionData?.success) {
      setBookValue({ title: "", price: 0 });
    }
  }, [actionData]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBookValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  return (
    <div className="w-1/3 h-full p-4 m-auto border border-purple-600 rounded-md ">
      <h1 className="my-4 text-2xl font-bold text-center capitalize">
        add book part
      </h1>
      <Form
        method="post"
        className="flex flex-col justify-between h-full space-y-4"
      >
        <Input
          label={"enter book name please!!"}
          name={"title"}
          onChange={handleInputChange}
          value={bookValue.title}
          errorData={actionData}
        />
        <Input
          label={"enter book price please!!"}
          name={"price"}
          type={"number"}
          onChange={handleInputChange}
          value={bookValue.price}
          errorData={actionData}
        />
        <button
          className="px-4 py-2 text-center text-white capitalize transition-colors rounded-md outline-none bg-emerald-700 hover:bg-emerald-800"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "loading..." : "add book"}
        </button>
      </Form>
    </div>
  );
}
export async function addBookAction({
  request,
}: {
  request: Request;
}): Promise<ActionResult> {
  const formData = await request.formData();
  const id = Math.floor(Math.random() * 100000);

  let reseult: ActionResult = { success: true };

  const bookData: BookInfo = {
    title: formData.get("title") as string,
    price: Number(formData.get("price")) as number,
  };

  Array.from(Object.entries(bookData), (item) => {
    if (
      (typeof item[1] == "string" && item[1].length <= 0) ||
      (typeof item[1] == "number" && item[1] <= 0)
    ) {
      reseult.success = false;
      reseult[item[0]] = `please fill the ${item[0]} value!!`;
    }
  });

  if (!reseult.success) {
    return reseult;
  } else {
    store.dispatch(addBook({ ...bookData, id, isRead: false }));
    toast.success(() => "your book added🙂", { theme: "colored" });
    return reseult;
  }
}
