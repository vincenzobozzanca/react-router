import { Card } from "../components/Card";
import { useBooks } from "../hooks/useBooks";
import { Link } from "react-router-dom";
export function PostList() {
  const { books, deleteBook } = useBooks();
  return (
    <>
      <div className="card-container">
        {books?.map((book) => (
          <Link key={book.id} to={`/PostList/${book.id}`}>
            <Card
              key={book.id}
              {...book}
              callbackCestina={(e) => {
                e.preventDefault(); // Prevengo la navigazione quando si elimina
                deleteBook(book.id);
              }}
            />
          </Link>
        ))}
      </div>
    </>
  );
}