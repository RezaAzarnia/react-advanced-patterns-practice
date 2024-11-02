import { useEffect, useState } from "react";
import ShowBooks from "../components/ShowBooks";
import { useSelect } from "../hooks/useRedux";
import { Book } from "../types";
import TabButton from "../components/TabButton";
import TabContent from "../components/TabContent";
export default function Books() {
  const books = useSelect((state) => state.book.favoriteBooks);
  const [active, setActive] = useState(0);
  const [activeBooks, setActiveBooks] = useState<Book[]>(books);
  useEffect(() => {
    if (active == 0) {
      setActiveBooks(books);
    } else if (active == 1) {
      setActiveBooks(() => books.filter((book) => book.isRead));
    } else if (active == 2) {
      setActiveBooks(() => books.filter((book) => !book.isRead));
    } else if (active == 3) {
      setActiveBooks([]);
    }
  }, [active, books]);
  return (
    <>
      <div className="flex items-center gap-0.5  max-w-4xl m-auto pl-0.5">
        <TabButton
          index={0}
          onClick={() => setActive(0)}
          activeTab={active}
          name="all"
        />
        <TabButton
          index={1}
          onClick={() => setActive(1)}
          activeTab={active}
          name="isRead"
        />
        <TabButton
          index={2}
          onClick={() => setActive(2)}
          activeTab={active}
          name="no read"
        />
        <TabButton
          index={3}
          onClick={() => setActive(3)}
          activeTab={active}
          name="different"
        />
      </div>
    
      {active <= 2 ? (
        <TabContent key={active}>
          <ShowBooks books={activeBooks} />
        </TabContent>
      ) : (
        <Different />
      )}
    </>
  );
}

function Different() {
  return <h1>Different class type</h1>;
}
