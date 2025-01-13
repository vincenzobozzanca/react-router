import { useParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import { useNavigate } from "react-router-dom";
export function PostDetail() {
  const { id } = useParams(); // Prendo id dall'url
  const { books, isLoading, isError } = useBooks(); // Prendo data da chiamata API
  const navigate = useNavigate(); // Per navigare tra le pagine
  // Gestione dello stato di caricamento
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // Gestione errori
  if (isError) {
    return <p>Error loading books. Please try again later.</p>;
  }
  // Trova il libro corrispondente all'ID
  const book = books.find((b) => b.id === parseInt(id, 10));
  // Gestione del caso in cui il libro non esista
  if (!book) {
    return <p>Book not found!</p>;
  }
  const currentIndex = books.findIndex((b) => b.id === book.id);
  const prevBook = books[currentIndex - 1];
  const nextBook = books[currentIndex + 1];
  // Mostra i dettagli del libro
  return (
    <div>
      <h1>{book.titolo}</h1>
      <p>{book.contenuto}</p>
      <img src={book.immagine} alt="" />
      <div>
        {prevBook && (
          <button onClick={() => navigate(`/PostList/${prevBook.id}`)}>
            Previous
          </button>
        )}
        {nextBook && (
          <button onClick={() => navigate(`/PostList/${nextBook.id}`)}>
            Next
          </button>
        )}
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}