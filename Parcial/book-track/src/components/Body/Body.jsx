import './Body.css'
import CardList from "../CardList/CardList"
import { useState } from 'react'
import useBooks from "../../hooks/useBooks"

function Body() {

  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([])
  const {books, error, loading} = useBooks()

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLocaleLowerCase()));

  const sendForm = (e) => {
    e.preventDefault();
  }

  const handleFavorites = (books) => {
    if (!favorites.find(fav => fav.key === books.key)) {
      const booksAdded = [...favorites, books];
      setFavorites(booksAdded);
    }
  }

  const handleDelete = (id) => {
    const booksFiltered = favorites.filter(books => books.key !== id);
    setFavorites(booksFiltered);
  }

  if(error) return <p>Hay un error: {error}</p>
  if(loading) return <p>Cargando....</p>

  return (
    <>
      <form onSubmit={(e) => sendForm}>
        <input type="text"
      placeholder='Search Book Title'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </form>
      
      {!loading && !error && filteredBooks.length === 0 && <p>There is no results</p>}

      <CardList books={filteredBooks}
      onFavorite={handleFavorites}
      onDelete={handleDelete}
      isFavorite={false}
      />

      <h2>Favorite Books</h2>
      
      {favorites.length === 0 ? ( <p>There is no favorite books</p>) : (<CardList books={favorites} onDelete={handleDelete} isFavorite={true}/>)}
    </>
  )
}

export default Body