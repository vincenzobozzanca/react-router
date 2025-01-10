import { Card } from "./Card";
import { useBooks } from "../hooks/useBooks";

export function PostList() {
  const { books, deleteBook } = useBooks();

  return (
    <>
      <div className="card-container">
        {books?.map((book) => (
          <Card
            key={book.id}
            {...book}
            callbackCestina={() => deleteBook(book.id)}
          />
        ))}
      </div>
    </>
  );
}