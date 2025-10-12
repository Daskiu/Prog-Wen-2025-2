import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { editBook } from "../../redux/slices/bookSlice";
import { useState } from "react";

export default function EditBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { books } = useSelector((state: RootState) => state.books);
  const bookToEdit = books.find((b) => b.id === id);

  const [book, setBook] = useState(bookToEdit);

  if (!book) return <p>Book not found</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editBook(book));
    navigate("/books");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>✏️ Edit Book</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <input
          type="text"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <input
          type="number"
          value={book.year}
          onChange={(e) => setBook({ ...book, year: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
