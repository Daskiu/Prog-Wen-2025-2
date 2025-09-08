import "./BookItem.css"

function BookItem({ book, onAdd }) {
  return (
    <div className="book-item">
      <p>{book.title}</p>
      <p>{book.author_name}</p>
      <p>{book.first_publish_year}</p>
      <button onClick={() => onAdd(book)}>Agregar a lista de lectura</button>
    </div>
  );
}

export default BookItem;