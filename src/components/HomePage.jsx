import { BookForm } from "../components/BookForm";
import { useBooks } from "../hooks/useBooks";

export function HomePage() {
  const { createBook } = useBooks();

  return (
    <>
      <h1>Inserisci libro</h1>
      <BookForm onSubmit={createBook} />
      <hr />
    </>
  );
}