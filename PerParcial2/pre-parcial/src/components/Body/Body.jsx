import Form from "../Form/Form"
import FormList from "../FormList/FormList"
import { useState } from "react"

function Body() {

  const [trainings, setTrainings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  console.log(trainings);

  const addTraining = (training) => {
    if (editIndex !== null) {
      // Editando un entrenamiento existente
      const updated = [...trainings];
      updated[editIndex] = training;
      setTrainings(updated);
      setEditIndex(null);
    } else {
    
      setTrainings([...trainings, training]);
    }
  };

  const deleteTraining = (index) => {
    setTrainings(trainings.filter((_, i) => i !== index));
    if (editIndex === index) setEditIndex(null);
  };

  const editTraining = (index) => {
    setEditIndex(index);
  };

  return (
    <>
      <div className="App">
        <h1>Mini Planificador de Entrenamientos</h1>
        <Form 
        addTraining={addTraining} 
        editData={editIndex !== null ? trainings[editIndex] : null}
        />
        <FormList 
        trainings={trainings} 
        deleteTraining={deleteTraining} 
        editTraining={editTraining} 
        />
        <p>Total de entrenamientos: {trainings.length}</p>
    </div>
    </>
  )
}

export default Body