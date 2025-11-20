import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { addCharacter } from "../../redux/slices/characterSlice";
import CharacterForm from "../../components/CharacterForm/CharacterForm";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    status: "",
    species: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(addCharacter(values));
    navigate("/"); // volver a Home
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Crear personaje</h1>

      <CharacterForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonText="Crear"
      />
    </div>
  );
}
