import React from 'react'

function GridCards(props) {
    return (
        <li className="grid-card">
            <a href={`/movie/${props.movieId}`} >
                <img style={{ width: '100%', height: '60vh' }} src={props.image} alt={props.movieName} />
            </a>
        </li>
    )
}

export default GridCards
