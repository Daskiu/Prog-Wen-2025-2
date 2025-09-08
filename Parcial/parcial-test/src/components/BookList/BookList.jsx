import "./BookList.css"
import BookItem from "../BookItem/BookItem";

function BookList({ books, onAdd }) {
  if (books.length === 0) return null;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.key} book={book} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default BookList;