import { useDispatch, useSelector } from 'react-redux'
import { markRead, removeBook } from '../Redux/features/booksSlice'

export default function ShowBooks() {
    const books = useSelector(state => state.book.favoriteBooks)
    const dispatch = useDispatch()
    return (
        <div style={{ margin: "20px" }}>
            {books.length > 0 ?
                books.map(book => {
                    return (
                        <div style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }} key={book.id}>
                            <h1>book name is &nbsp;
                                <span style={{ color: "purple" }}>
                                    {book.title}
                                </span>

                                &nbsp;and the price is &nbsp;
                                <span style={{ color: "purple" }}>
                                    ${book.price}
                                </span>
                            </h1>
                            <button onClick={() => dispatch(markRead(book.id))}>{book.isRead ? "readed😀" : "not read😭"}</button>
                            <button onClick={() => dispatch(removeBook(book.id))}>delete</button>
                        </div>
                    )
                })
                :
                <span>
                    you don&apos;t have any books yet
                </span>}
        </div>
    )
}
