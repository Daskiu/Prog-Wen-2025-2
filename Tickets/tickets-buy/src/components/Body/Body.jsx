import React from "react";
import { useState } from "react";
import './Body.css'
import { Card } from "../Card/Card";
import { data } from "../../const/links";

export function Body() {

    const [concert, setConcert] = useState([])
    const handleAddConcert = (data) => {
        setConcert((prev) => [...prev, data]);
    };

    return (
        <div className="body-container">
            <div className="available-section">
            {
                data.map ((data) =>
                    <Card src={data.src} title={data.title} location={data.location} date={data.date} price={data.price} onAdd={() => handleAddConcert(data)}/>
            )
        }
            </div>

            <div className="cart-section">
                {
                    concert.map((concert) =>
                        <Card src={concert.src} title={concert.title} location={concert.location} date={concert.date} price={concert.price}/>
                    )
                } 
            </div>     
        </div>
    )
}