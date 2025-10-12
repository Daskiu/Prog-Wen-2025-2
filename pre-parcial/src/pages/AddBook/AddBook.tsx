import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addBook } from "../../redux/slices/bookSlice";
import { useState } from "react";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({ title: "", author: "", year: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = { ...book, id: Date.now().toString() };
    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>➕ Add Book</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={book.year}
          onChange={(e) => setBook({ ...book, year: e.target.value })}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
