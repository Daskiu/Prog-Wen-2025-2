import { useState, useEffect } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const datos = await fetch(
          "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10"
        ).then((res) => res.json());
        setBooks(datos.docs);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  return {books, error, loading}
};

export default useBooks