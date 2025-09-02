import Card from "../Card/Card"

const CardList = ({books}) => {

    return (
        <>
            {books.map((book) =>
            <Card book={book} key={crypto.randomUUID()}/>)}
        </>
    )
}

export default CardList