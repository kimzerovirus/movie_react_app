import React from 'react'

function GridCards(props) {
    return (
        <li className="grid-card">
            <a href={`/movie/${props.movieId}`} >
                <img className="grid-img-size" src={props.image} alt={props.movieName} />
            </a>
        </li>
    )
}

export default GridCards
