import React from 'react';
import './Tile.css';

const Tile = ({ title, date, location, description, img}) => {

    return(
        <div className="Meow">
            <div className= "event-container">
                <div className='event-info'>
                    <h1>{title}</h1>
                    <h2>Date: {date}</h2>
                    <h3>Location: {location}</h3>
                    <p>{description}</p>
                </div>

                <div className="event-image">
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default Tile;