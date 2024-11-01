import { useDispatchAction, useSelect } from "../hooks/useRedux";
import { markAsRead, removeBook } from "../Redux/features/booksSlice";
import { toast } from "react-toastify";
import { Book } from "../types";

export default function ShowBooks() {
  const books = useSelect((state) => state.book.favoriteBooks);
  const dispatch = useDispatchAction();
  return (
    <>
      {books.length > 0 ? (
        <table className="w-4/5 m-auto table-fixed ">
          <thead>
            <tr className="[&>th]:text-start [&>th]:p-4 border-b border-1 border-purple-500">
              <th>Book Name</th>
              <th>Book price</th>
              <th>status</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => {
              return (
                <tr
                  key={book.id}
                  className="text-start [&>td]:p-4  border-b border-1 border-purple-300 bg-purple-200"
                >
                  <td>{book.title}</td>
                  <td>${book.price}</td>
                  <td>
                    <button
                      className="px-4 py-2 text-center text-white capitalize transition-colors rounded-md outline-none bg-emerald-700 hover:bg-emerald-800"
                      onClick={() => dispatch(markAsRead(book.id))}
                    >
                      {book.isRead ? "readed😀" : "not read😭"}
                    </button>
                  </td>
                  <td>
                    <button
                      className="px-4 py-2 text-center text-white capitalize transition-colors bg-red-600 rounded-md outline-none hover:bg-red-700"
                      onClick={() => {
                        dispatch(removeBook(book.id));
                        toast.success(() => "book deleted successfully🙂", {
                          theme: "colored",
                        });
                      }}
                    >
                      🍔delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="p-4 bg-red-600 rounded-md">
          <h1 className="text-xl text-center text-white capitalize">
            you don&apos;t have any books yet!!
          </h1>
        </div>
      )}
    </>
  );
}
