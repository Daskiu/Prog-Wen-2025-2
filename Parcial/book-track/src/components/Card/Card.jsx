const Card = ({book, isFavorite}) => {

    return (
        <>
            <h2>{book.title}</h2>
            <p>{book.author_name}</p>
            <p>{book.first_publish_year}</p>
            {isFavorite ? (
                    <button onClick={() => onDelete(book.key)}>Delete</button>
                ) : (
                    <button onClick={() => onFavorite(book)}>Like</button>
                )}
        </>
    )
}

export default Card