import './Body.css'
import { useState } from 'react'
import SearchBar from "../SearchBar/SearchBar"
import BookList from "../BookList/BookList"
import ReadingList from "../ReadingList/ReadingList"

function Body() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10`
      );
      const data = await res.json();
      setBooks(data.docs);
    } catch (err) {
      setError(`Error al buscar libros: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = (book) => {
    setReadingList([...readingList, { ...book, status: "Pendiente", notes: "" }]);
  };

  const handleDelete = (item) => {
    setReadingList(readingList.filter((book) => book.key !== item.key));
  };

  const handleChangeStatus = (item, status) => {
    setReadingList(
      readingList.map((book) =>
        book.key === item.key ? { ...item, status } : book
      )
    );
  };

  const handleChangeNotes = (item, notes) => {
    setReadingList(
      readingList.map((book) =>
      book.key === item.key ? { ...book, notes } : book)
    );
  };

  if (loading) return <p>Está cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='body'>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} onAdd={handleAddBook} />
      <ReadingList
        readingList={readingList}
        onDelete={handleDelete}
        onChangeStatus={handleChangeStatus}
        onChangeNotes={handleChangeNotes}
      />
    </div>
  )
}

export default Body