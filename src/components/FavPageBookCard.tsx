import { Link } from "react-router-dom";
import { NotRead, Read } from "./ReadToggle";
import { favPageProp } from "./FavPageFilterToggle";
import { useContext, useRef } from "react";
import { BookContext } from "@/context/BookContext";

const FavPageBookCard: React.FC<favPageProp> = ({ i, book, toggleReadStatus }) => {
  const pageRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(BookContext);

  const addPages = () => {
    if (pageRef.current) {
      dispatch({ type: "addPages", payload: { pages: pageRef.current.value, key: book.key } });
    }
  };
  console.log(book);

  return (
    <div key={i} id="book-container" className="w-[48%] h-auto border-2 border-black m-2 flex justify-between">
      <div className="flex">
        <img src={`https://covers.openlibrary.org/b/id/${book.cover}.jpg`} alt="cover image" className="w-10" />
        <div id="book-title-&-author" className="font-bold text-2xl ml-2">
          <Link to={`${book.key}`}>
            <h1>{book.title}</h1>
          </Link>
          <Link to={`${book.authorKey}`}>
            <h2 className="text-sm font-normal">
              Written by: <span className="underline">{book.author}</span>
            </h2>
          </Link>
        </div>
      </div>

      <div id="action-buttons" className="h-auto m-2 flex justify-between items-center gap-6">
        {book.read && (
          <>
            <input
              type="number"
              name="pages-input"
              id="pages-input"
              className="border-2 border-black w-16 bg-black bg-opacity-5"
              placeholder={`${book.pages || "pages"}`}
              min={0}
              ref={pageRef}
              onChange={addPages}
            />
            <Link
              to={`${book.key}`}
              className="mr-2 w-auto p-1 h-10 rounded-sm border-2 border-black text-black hover:bg-black hover:bg-opacity-25 duration-75"
            >
              Review
            </Link>
          </>
        )}
        <div onClick={() => toggleReadStatus(book)}>{book.read ? <Read /> : <NotRead />}</div>
      </div>
    </div>
  );
};

export default FavPageBookCard;
