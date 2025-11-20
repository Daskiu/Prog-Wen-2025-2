import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import CharacterForm from "../../components/CharacterForm/CharacterForm";
import { updateCharacter, setEditing } from "../../redux/slices/characterSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();

  // Personaje seleccionado previamente
  const character = useSelector((state: RootState) => state.characters.editing);

  // Si recargan la página y editing es null → redirigir
  useEffect(() => {
    if (!character) {
      navigate("/");
    }
  }, [character, navigate]);

  if (!character) return null; // Evita errores mientras redirige

  const initialValues = {
    name: character.name,
    status: character.status,
    species: character.species,
  };

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(
      updateCharacter({
        ...character,
        ...values, // reemplaza datos modificados
      })
    );

    dispatch(setEditing(null)); // limpiar estado
    navigate("/"); // volver al home
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Editando: {character.name}</h1>

      <CharacterForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonText="Guardar cambios"
      />
    </div>
  );
}
