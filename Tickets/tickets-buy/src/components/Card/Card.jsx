import React from "react";
import './Card.css'



export function Card({title, location, src, date, price, onAdd}) {
    return (
            <div className="ticket-container">
                <img src={src} alt="stockImage" />
                <h1>{title}</h1>
                <h2>{location}</h2>
                <p>{date}</p>
                <p>{price}</p>
                <button onClick={onAdd}>Añadir al carrito</button>
            </div>
    )
}