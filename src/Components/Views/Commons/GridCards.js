import React from 'react'
import { Link } from 'react-router-dom'

function GridCards(props) {
    if (props.image !== null) {
        return (
            <li className="grid-card">
                {/* <a href={`${process.env.PUBLIC_URL}/movie/${props.movieId}`} > */}
                <Link to={`/movie/${props.movieId}`}>
                    <img className="grid-img-size" src={props.image} alt={props.movieName} />
                </Link>
                {/* </a> */}
            </li>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default GridCards
