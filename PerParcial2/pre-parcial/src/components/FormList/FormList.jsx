const TrainingList = ({ trainings, deleteTraining, editTraining }) => {
  if (trainings.length === 0) return <p>No hay entrenamientos aún.</p>;

  return (
    <ul>
      {trainings.map((t, i) => (
        <li key={i}>
          <strong>{t.exercise}</strong> - {t.sets} series x {t.reps} reps - {t.day}
          <button onClick={() => editTraining(i)}>Editar</button>
          <button onClick={() => deleteTraining(i)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TrainingList;