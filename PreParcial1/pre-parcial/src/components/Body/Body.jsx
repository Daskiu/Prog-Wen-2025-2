import CardList from "../CardList/CardList"
import { useState, useEffect } from "react"

function Body() {

  const [search, setSearch] = useState('');
  const [song, setSong] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  console.log(song)

  const filteredSongs = song.filter((song) => song.collectionName.toLowerCase().includes(search.toLowerCase())); 
  console.log(song);

  const sendForm = (e) => {
    console.log([e.target[0].value]);
    e.preventDefault();
  }

  const handleLike = (song) => {
    if (!favorites.find(fav => fav.trackId === song.trackId)) {
      const songsAdded = [...favorites, song];
      setFavorites(songsAdded);
    }
  }

  const handleDelete = (id) => {
    const songsFiltered = favorites.filter(song => song.trackId !== id);
    setFavorites(songsFiltered);
  }

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${search}&entity=song&limit=12`)
    .then((res) => res.json())
    .then((datos) => setSong(datos.results))
    .catch((error) => setError(error))
    .finally(() => setLoading(false))
  },[search])

  if(error) return <p>Hay un error: {error}</p>
  if(loading) return <p>Cargando.....</p>

  return (
    <>
      <form onSubmit={(e) => sendForm(e)}>
        <input type="text"
        placeholder="Search song"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>

        <button type="submit">Search</button>
      </form>

      {!loading && !error && filteredSongs.length === 0 && <p>There is no results</p>}
      <CardList songs={filteredSongs}
      onLike={handleLike}
      onDelete={handleDelete}
      isFavorite={false}/>

      <h2>Favorite Songs</h2>

      {favorites.length === 0 ? ( <p>There is no favorite songs</p>) : (<CardList songs={favorites} onDelete={handleDelete} isFavorite={true} />)}
    </>
  )
}

export default Body