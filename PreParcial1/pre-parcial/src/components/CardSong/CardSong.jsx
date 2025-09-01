const CardSong = ({song, onLike, onDelete, isFavorite}) => {
    return (
        <>
            <div className="songCard">
                <img src={song.artworkUrl100} alt={song.collectionName} />
                <p>{song.collectionName}</p>
                <p>{song.artistName}</p>
                {isFavorite ? (
                    <button onClick={() => onDelete(song.trackId)}>Delete</button>
                ) : (
                    <button onClick={() => onLike(song)}>Like</button>
                )}
            </div>
        </>
    )
}

export default CardSong