import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setBooks, deleteBook } from "../../redux/slices/bookSlice";
import { fetchBooksFromAPI } from "../../services/BookFetch";
import { Link } from "react-router";

export default function BookList() {
  const { books } = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();

  // Fetch sin thunk: carga directa desde el componente
  useEffect(() => {
    const getBooks = async () => {
      const apiBooks = await fetchBooksFromAPI();
      dispatch(setBooks(apiBooks));
    };
    getBooks();
  }, [dispatch]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📚 Book List</h1>
      <Link to="/add">
        <button>➕ Add Book</button>
      </Link>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((b) => (
          <li key={b.id} style={{ marginBottom: "1rem" }}>
            <strong>{b.title}</strong> — {b.author} ({b.year})
            <Link to={`/edit/${b.id}`}>
              <button style={{ marginLeft: "1rem" }}>✏️ Edit</button>
            </Link>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={() => dispatch(deleteBook(b.id))}
            >
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
