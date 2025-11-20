import { useState } from "react";

interface FormValues {
  name: string;
  status: string;
  species: string;
}

interface Props {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
  buttonText: string;
}

export default function CharacterForm({
  initialValues,
  onSubmit,
  buttonText,
}: Props) {
  const [formData, setFormData] = useState<FormValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "250px",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
      />

      <input
        type="text"
        name="species"
        placeholder="Species"
        value={formData.species}
        onChange={handleChange}
      />

      <button type="submit">{buttonText}</button>
    </form>
  );
}
