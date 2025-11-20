import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";

import {
  setCharacters,
  deleteCharacter,
  setEditing,
} from "../../redux/slices/characterSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const characters = useSelector((state: RootState) => state.characters.list);
  const userType = useSelector((state: RootState) => state.auth.userType);

  const [search, setSearch] = useState("");

  // FETCH inicial SOLO UNA VEZ
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCharacters(data.results));
      });
  }, [dispatch]);

  // Filtrar por nombre
  const filtered = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (char: any) => {
    dispatch(setEditing(char));
    navigate(`/edit/${char.id}`);
  };

  const handleDelete = (id: number | string) => {
    dispatch(deleteCharacter(id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Personajes</h1>

      {/* --- SEARCH BAR --- */}
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "20px",
        }}
      />

      <br />

      {/* --- BOTÓN CREAR SOLO PARA ADMIN --- */}
      {userType === "admin" && (
        <Link to="/create">
          <button style={{ marginBottom: "20px" }}>Crear personaje</button>
        </Link>
      )}

      {/* --- LISTA DE PERSONAJES --- */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filtered.map((char) => (
          <div
            key={char.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />

            <h3>{char.name}</h3>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>

            {/* Botones solo si es admin */}
            {userType === "admin" && (
              <>
                <button
                  onClick={() => handleEdit(char)}
                  style={{ marginRight: "10px" }}
                >
                  Editar
                </button>

                <button onClick={() => handleDelete(char.id)}>Eliminar</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
