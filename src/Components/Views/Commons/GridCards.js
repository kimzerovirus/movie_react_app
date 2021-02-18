import React from 'react'

function GridCards(props) {
    if (props.image !== null) {
        return (
            <li className="grid-card">
                <a href={`/movie/${props.movieId}`} >

                    <img className="grid-img-size" src={props.image} alt={props.movieName} />
                </a>
            </li>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default GridCards
