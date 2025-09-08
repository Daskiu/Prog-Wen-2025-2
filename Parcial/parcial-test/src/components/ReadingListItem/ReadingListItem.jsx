import "./ReadingListItem.css"

function ReadingListItem({ item, onDelete, onChangeStatus, onChangeNotes }) {
  return (
    <div className="reading-list-item">
      <p>{item.title}</p>
      <p>{item.author_name}</p>
      <select
        value={item.status}
        onChange={(e) => onChangeStatus(item, e.target.value)}
      >
        <option value="Pendiente">Pendiente</option>
        <option value="Leyendo">Leyendo</option>
        <option value="Terminado">Terminado</option>
      </select>
      <div className="notes-section">
        <label>Notas:</label>
        <textarea
          value={item.notes}
          onChange={(e) => onChangeNotes(item, e.target.value)}
          placeholder="Escribe tus notas aquí..."
        />
      </div>
      <button onClick={() => onDelete(item)}>Eliminar</button>
    </div>
  );
}

export default ReadingListItem;