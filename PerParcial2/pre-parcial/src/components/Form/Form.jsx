import { useState, useEffect } from "react";

const Form = ({addTraining, editData}) => {
    const [exercise, setExercise] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [day, setDay] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if(editData) {
            setExercise(editData.exercise);
            setSets(editData.sets);
            setReps(editData.reps);
            setDay(editData.day);
        }
    },[editData])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!exercise || sets < 1 || reps < 1 || !day) {
            setError("Por favor rellene todos los campos");
            return;
        }

        addTraining({exercise, sets, reps, day});
        setExercise("");
        setReps("");
        setDay("");
        setError("");
    }

    const handleReset = () => {
        setExercise("");
        setSets("");
        setReps("");
        setDay("");
        setError("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {error && <p style={{color: "red"}}>{error}</p>}
                <input type="text"
                placeholder="Exercise"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                />

                <input type="number"
                placeholder="Series"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                />

                <input type="number"
                placeholder="Reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                />

                <input type="text"
                placeholder="Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />

                <button type="submit">{editData ? "Actualizar" : "Agregar"}</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </>
    )
}

export default Form