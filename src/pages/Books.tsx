import { useCallback, useState } from "react";
import ShowBooks from "../components/ShowBooks";
import { Book } from "../types";
import TabButton from "../components/TabButton";
import { useBookStore } from "../zustand/bookStore";
const tabs: string[] = ['all', 'isRead', 'noRead', 'different'];

export default function Books() {
  const books = useBookStore((state) => state.books);
  const [activeTab, setActiveTab] = useState(0);
  //call the books with IIFE
  const activeBooks = ((): Book[] => {
    if (activeTab == 0) return books;
    else if (activeTab == 1) return books.filter((book: Book) => book.isRead)
    else if (activeTab == 2) return books.filter((book: Book) => !book.isRead)
    return []
  })()

  return (
    <>
      <div className="flex items-center gap-0.5  max-w-4xl m-auto pl-0.5">
        {
          tabs.map((tab: string, index: number) => (
            <TabButton
              key={index + 1}
              tabName={tab}
              tabIndex={index}
              activeTabIndex={activeTab}
              //pass the onCLick with useCallback to prevent unnecceray render by change 
              onClick={useCallback(() => { setActiveTab(index) }, [])}
            />
          ))
        }
      </div>
      {activeTab <= 2 ? (
        <div className="w-full h-full max-w-4xl p-4 m-auto border border-black rounded-md min-h-64" >
          <ShowBooks books={activeBooks} key={activeTab} />
        </div>
      ) : (
        <Different />
      )}
    </>
  );
}

function Different() {
  return <h1>Different class type</h1>;
}
