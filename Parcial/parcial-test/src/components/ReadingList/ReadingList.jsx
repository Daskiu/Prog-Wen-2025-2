import "./ReadingList.css"

import ReadingListItem from "../ReadingListItem/ReadingListItem";

function ReadingList({ readingList, onDelete, onChangeStatus, onChangeNotes }) {
  return (
    <div className="reading-list">
      <h1>Lista de lectura:</h1>
      {readingList.map((item) => (
        <ReadingListItem
          key={item.key}
          item={item}
          onDelete={onDelete}
          onChangeStatus={onChangeStatus}
          onChangeNotes={onChangeNotes}
        />
      ))}
    </div>
  );
}

export default ReadingList;